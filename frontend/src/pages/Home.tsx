import { useState } from "react";
import { Activity, ShieldCheck, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [url, setUrl] = useState("");
    const [isStarting, setIsStarting] = useState(false);
    const navigate = useNavigate();

    const startScan = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url || isStarting) return;
        setIsStarting(true);
        try {
            const token = localStorage.getItem("token");
            const res = await fetch("http://localhost:8000/api/v1/scans", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify({ target_url: url, max_pages: 50, concurrent_pages: 5 })
            });
            const data = await res.json();
            if (data.job_id) {
                navigate(`/scans/live?job_id=${data.job_id}&url=${encodeURIComponent(url)}`);
            } else {
                alert("Failed to start scan: " + JSON.stringify(data));
            }
        } catch (err) {
            console.error(err);
            alert("Error connecting to ReQon engine.");
        } finally {
            setIsStarting(false);
        }
    };

    return (
        <div className="flex-1 p-8 w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-6xl font-extrabold tracking-tight lg:text-7xl">
                    <span className="text-primary">ReQon</span> Intelligence
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Autonomous discovery, defect mapping, and hygiene scoring for modern web applications.
                </p>
            </div>

            <div className="w-full max-w-xl p-1 bg-gradient-to-r from-primary/50 to-primary rounded-2xl shadow-2xl mb-16 shadow-primary/20">
                <form onSubmit={startScan} className="flex gap-2 p-2 bg-card rounded-xl">
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://example.com"
                        className="flex-1 bg-transparent border-none px-4 py-3 text-lg focus:outline-none focus:ring-0 text-foreground"
                        required
                    />
                    <button
                        type="submit"
                        disabled={isStarting}
                        className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        {isStarting ? "Starting Engine..." : "Launch Scan"}
                    </button>
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div className="p-6 bg-card border border-border rounded-xl space-y-4">
                    <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Zap className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Autonomous Crawler</h3>
                    <p className="text-muted-foreground">Self-driving discovery engine navigating auth, complex states, and dynamic DOMs.</p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl space-y-4">
                    <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <ShieldCheck className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">20+ Defect Detectors</h3>
                    <p className="text-muted-foreground">Comprehensive checks across UI, Performance, Security, SEO, and Accessibility.</p>
                </div>

                <div className="p-6 bg-card border border-border rounded-xl space-y-4">
                    <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Activity className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Knowledge Graph</h3>
                    <p className="text-muted-foreground">Neo4j-powered relational mapping of your application architecture and defects.</p>
                </div>
            </div>
        </div>
    );
}
