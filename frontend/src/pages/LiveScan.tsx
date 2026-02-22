import { useEffect, useState } from "react";
import { Play, CheckCircle2, AlertTriangle, Bug, Globe, Activity, Loader2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function LiveScanPage() {
    const [searchParams] = useSearchParams();
    const jobId = searchParams.get('job_id') || "None specified";
    const targetUrl = searchParams.get('url') || "None specified";

    const [status, setStatus] = useState("Initializing Engine...");
    const [logs, setLogs] = useState<any[]>([]);

    // Metrics
    const [pagesCrawled, setPagesCrawled] = useState(0);
    const [issuesFound, setIssuesFound] = useState(0);
    const [activeWorkers, setActiveWorkers] = useState(1);

    useEffect(() => {
        if (!jobId || jobId === "None specified" || jobId === "00000000-0000-0000-0000-000000000000") {
            setStatus("Ready to start scan");
            return;
        }

        const wsUrl = `ws://localhost:8000/api/v1/ws/scans/${jobId}`;
        console.log("Connecting to WebSocket:", wsUrl);
        const ws = new WebSocket(wsUrl);

        ws.onopen = () => setStatus("Connected to execution engine...");

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);

                setLogs(prev => [data, ...prev].slice(0, 100)); // keep last 100 logs

                // Update metrics based on message content
                if (data.msg.includes("Discovered and inspected")) {
                    setPagesCrawled(prev => prev + 1);
                } else if (data.msg.includes("Defect detected")) {
                    setIssuesFound(prev => prev + 1);
                } else if (data.msg.includes("Scan Complete")) {
                    setStatus("Scan Complete. Generating Knowledge Graph...");
                    ws.close();
                } else if (data.msg === "Scan started") {
                    setStatus("Crawling and Inspecting...");
                }
            } catch (cerr) {
                console.error("Failed to parse websocket message", cerr);
            }
        };

        ws.onclose = () => {
            setStatus(prev => prev.includes("Complete") ? prev : "Connection Closed");
        };

        return () => ws.close();
    }, [jobId]);

    return (
        <div className="p-8 h-full flex flex-col max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Live Execution: <span className="text-primary font-mono text-xl">{targetUrl}</span></h1>
                    <p className="text-muted-foreground mt-1 flex items-center gap-2">
                        Job ID: <span className="font-mono text-xs">{jobId}</span>
                    </p>
                </div>

                <div className="flex items-center gap-3 bg-secondary px-4 py-2 rounded-lg border border-border">
                    <span className="relative flex h-3 w-3">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.includes("Complete") || status.includes("Ready") || status.includes("Closed") ? 'bg-green-400' : 'bg-primary'}`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${status.includes("Complete") || status.includes("Ready") || status.includes("Closed") ? 'bg-green-500' : 'bg-primary'}`}></span>
                    </span>
                    <span className="font-medium text-sm">{status}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card border border-border p-6 rounded-xl flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg text-primary"><Globe className="w-8 h-8" /></div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Pages Inspected</p>
                        <h3 className="text-3xl font-bold">{pagesCrawled}</h3>
                    </div>
                </div>
                <div className="bg-card border border-border p-6 rounded-xl flex items-center gap-4">
                    <div className="bg-red-500/20 p-3 rounded-lg text-red-500"><Bug className="w-8 h-8" /></div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Defects Found</p>
                        <h3 className="text-3xl font-bold text-red-500">{issuesFound}</h3>
                    </div>
                </div>
                <div className="bg-card border border-border p-6 rounded-xl flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-lg text-blue-500"><Activity className="w-8 h-8" /></div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Active Workers</p>
                        <h3 className="text-3xl font-bold">{status.includes("Complete") ? 0 : activeWorkers}</h3>
                    </div>
                </div>
            </div>

            <div className="flex-1 bg-black/40 border border-border rounded-xl overflow-hidden flex flex-col">
                <div className="bg-secondary/50 border-b border-border px-4 py-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
                    <Loader2 className={`w-4 h-4 ${!status.includes('Complete') && !status.includes('Ready') && !status.includes('Closed') ? 'animate-spin' : ''}`} /> Engine Event Stream
                </div>
                <div className="p-4 flex-1 overflow-y-auto space-y-2 font-mono text-xs">
                    {logs.map((log, i) => (
                        <div key={i} className="flex gap-4 p-2 rounded hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-primary">
                            <span className="text-muted-foreground shrink-0 w-24">[{new Date(log.timestamp * 1000).toLocaleTimeString()}]</span>
                            <span className={`shrink-0 w-20 font-bold ${log.level === 'INFO' ? 'text-blue-400' : log.level === 'WARNING' ? 'text-yellow-400' : 'text-red-400'}`}>[{log.level}]</span>
                            <span className="text-foreground">{log.msg}</span>
                            {log.event_type && <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] ml-auto">{log.event_type}</span>}
                        </div>
                    ))}
                    {logs.length === 0 && <div className="text-muted-foreground p-4 italic">Waiting for events...</div>}
                </div>
            </div>
        </div>
    );
}
