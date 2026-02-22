import { useEffect, useState } from "react";
import CytoscapeComponent from 'react-cytoscapejs';

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
                        style={{ width: '100%', height: '100%', backgroundColor: '#0f172a' }} // slate-900 
                        layout={{ name: 'cose', padding: 50 }}
                        userPanningEnabled={true}
                        userZoomingEnabled={true}
                    />
                )}
                {elements.length === 0 && !loading && (
                    <div className="flex items-center justify-center h-full text-muted-foreground">No graph data available. Run a scan first.</div>
                )}

                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-border p-4 rounded-lg shadow-lg z-20">
                    <h3 className="font-bold mb-2 text-sm">Legend</h3>
                    <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-blue-500"></div> Page / Route</div>
                        <div className="flex items-center gap-2">
                            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-red-800"></div> Critical Defect
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-red-500"></div> High Defect
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-amber-500"></div> Medium Defect
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
