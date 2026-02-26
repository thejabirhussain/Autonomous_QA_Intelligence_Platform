import { useEffect, useState } from "react";
import CytoscapeComponent from 'react-cytoscapejs';
import cytoscape from 'cytoscape';
import fcose from 'cytoscape-fcose';

cytoscape.use(fcose);

const CYTO_STYLESHET = [
    {
        selector: 'node[type="page"]',
        style: {
            'background-color': '#3b82f6', // blue-500
            'label': 'data(label)',
            'color': '#fff',
            'text-outline-color': '#000',
            'text-outline-width': 2,
            'font-size': '12px',
            'width': 40,
            'height': 40
        }
    },
    {
        selector: 'node[type="issue"]',
        style: {
            'shape': 'triangle',
            'label': 'data(label)',
            'color': '#fff',
            'text-outline-color': '#000',
            'text-outline-width': 2,
            'font-size': '10px',
            'background-color': '#ef4444', // red-500 default
            'width': 30,
            'height': 30
        }
    },
    {
        selector: 'node[severity="critical"]',
        style: { 'background-color': '#991b1b', 'width': 40, 'height': 40 } // red-800
    },
    {
        selector: 'node[severity="high"]',
        style: { 'background-color': '#ef4444' } // red-500
    },
    {
        selector: 'node[severity="medium"]',
        style: { 'background-color': '#f59e0b' } // amber-500
    },
    {
        selector: 'edge',
        style: {
            'width': 2,
            'line-color': '#475569', // slate-600
            'target-arrow-color': '#475569',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'label': 'data(type)',
            'font-size': '8px',
            'color': '#94a3b8', // slate-400
            'text-rotation': 'autorotate' as any
        }
    },
    {
        selector: 'edge[type="HAS_ISSUE"]',
        style: {
            'line-color': '#ef4444',
            'target-arrow-color': '#ef4444',
            'line-style': 'dashed' as any
        }
    }
];

export default function KnowledgeGraphPage() {
    const [elements, setElements] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedNode, setSelectedNode] = useState<any>(null);

    useEffect(() => {
        const loadGraph = async () => {
            try {
                // Get latest job
                const token = localStorage.getItem("token");
                const scansRes = await fetch("http://localhost:8000/api/v1/scans", {
                    headers: { "Authorization": `Bearer ${token}` }
                });
                const scansData = await scansRes.json();

                if (scansData.jobs && scansData.jobs.length > 0) {
                    const latestJobId = scansData.jobs[0].id;
                    const graphRes = await fetch(`http://localhost:8000/api/v1/scans/${latestJobId}/graph`, {
                        headers: { "Authorization": `Bearer ${token}` }
                    });
                    const graphData = await graphRes.json();

                    if (graphData.nodes && graphData.edges) {
                        setElements([...graphData.nodes, ...graphData.edges]);
                    }
                }
            } catch (err) {
                console.error("Failed to load graph", err);
            } finally {
                setLoading(false);
            }
        };

        loadGraph();
    }, []);

    return (
        <div className="p-8 h-screen flex flex-col">
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight">Application Knowledge Graph</h1>
                <p className="text-muted-foreground mt-1">Interactive Neo4j graph visualization of pages, routes, and associated defects.</p>
            </div>

            <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden relative shadow-xl shadow-black/20">
                {loading && <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10"><div className="animate-spin h-8 w-8 rounded-full border-t-2 border-b-2 border-primary"></div></div>}

                {elements.length > 0 && !loading && (
                    <CytoscapeComponent
                        elements={elements}
                        stylesheet={CYTO_STYLESHET}
                        layout={{ name: 'fcose', nodeRepulsion: 4500, idealEdgeLength: 50, padding: 50, randomize: true, animate: false } as any}
                        userPanningEnabled={true}
                        userZoomingEnabled={true}
                        cy={(cy) => {
                            cy.on('tap', 'node', (evt) => {
                                const node = evt.target;
                                setSelectedNode(node.data());
                            });
                            cy.on('tap', (evt) => {
                                if (evt.target === cy) {
                                    setSelectedNode(null);
                                }
                            });
                        }}
                    />
                )}
                {elements.length === 0 && !loading && (
                    <div className="flex items-center justify-center h-full text-muted-foreground">No graph data available. Run a scan first.</div>
                )}

                {selectedNode && (
                    <div className="absolute top-0 left-0 h-full w-96 bg-background/95 backdrop-blur-md border-r border-border p-6 shadow-2xl z-30 overflow-y-auto transform transition-transform">
                        <div className="flex justify-between items-start mb-6 gap-4">
                            <h2 className="text-xl font-bold break-words flex-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
                                {selectedNode.label || 'Node Details'}
                            </h2>
                            <button onClick={() => setSelectedNode(null)} className="text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary rounded-full p-2 mt-1">
                                ✕
                            </button>
                        </div>

                        <div className="space-y-5">
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Type</p>
                                <div className="font-medium capitalize text-foreground">{selectedNode.type || 'Unknown'}</div>
                            </div>

                            {selectedNode.type === 'issue' && selectedNode.severity && (
                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Severity</p>
                                    <span className={`inline-block px-3 py-1 rounded text-xs font-bold border ${selectedNode.severity === 'critical' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                        selectedNode.severity === 'high' ? 'bg-red-400/10 text-red-400 border-red-400/20' :
                                            selectedNode.severity === 'medium' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                                'bg-blue-500/10 text-blue-500 border-blue-500/20'
                                        }`}>
                                        {selectedNode.severity.toUpperCase()}
                                    </span>
                                </div>
                            )}

                            {selectedNode.description && (
                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Description</p>
                                    <p className="text-sm bg-muted/40 p-4 rounded-lg border border-border text-foreground/90 leading-relaxed shadow-inner">
                                        {selectedNode.description}
                                    </p>
                                </div>
                            )}

                            {selectedNode.category && (
                                <div className="space-y-1">
                                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Category</p>
                                    <div className="font-medium text-foreground">{selectedNode.category}</div>
                                </div>
                            )}

                            <div className="space-y-2 mt-8">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold border-b border-border pb-2">Technical Properties</p>
                                <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
                                    {Object.entries(selectedNode).map(([key, value]) => {
                                        if (['id', 'label', 'type', 'severity', 'description', 'category'].includes(key)) return null;
                                        if (value === null || value === undefined || value === '') return null;
                                        return (
                                            <div key={key} className="flex flex-col border-b border-border/50 p-3 auto-rows-max last:border-0 hover:bg-secondary/20 transition-colors">
                                                <span className="text-[10px] sm:text-xs text-muted-foreground mb-1 block capitalize font-medium">{key.replace(/_/g, ' ')}</span>
                                                <span className="text-sm font-mono break-words whitespace-pre-wrap flex-1 text-foreground/80">
                                                    {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-border p-4 rounded-lg shadow-lg z-20">
                    <h3 className="font-bold mb-2 text-sm">Legend</h3>
                    <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div> Page / Route</div>
                        <div className="flex items-center gap-2">
                            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-red-800 drop-shadow-[0_0_6px_rgba(153,27,27,0.5)]"></div> Critical Defect
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]"></div> High Defect
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-amber-500 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]"></div> Medium Defect
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
