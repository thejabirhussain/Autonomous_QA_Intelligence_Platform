import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Download, Filter } from "lucide-react";

export default function IssuesAnalyticsPage() {
    const [activeTab, setActiveTab] = useState<'analytics' | 'list'>('analytics');
    const [issues, setIssues] = useState<any[]>([]);
    const [analytics, setAnalytics] = useState<{ by_severity: any[], by_category: any[] }>({ by_severity: [], by_category: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                // Get latest job
                const token = localStorage.getItem("token");
                const scansRes = await fetch("http://localhost:8000/api/v1/scans", {
                    headers: { "Authorization": `Bearer ${token}` }
                });
                const scansData = await scansRes.json();

                if (scansData.jobs && scansData.jobs.length > 0) {
                    const latestJobId = scansData.jobs[0].id;

                    const [issuesRes, analyticsRes] = await Promise.all([
                        fetch(`http://localhost:8000/api/v1/scans/${latestJobId}/issues`, { headers: { "Authorization": `Bearer ${token}` } }),
                        fetch(`http://localhost:8000/api/v1/scans/${latestJobId}/issues/analytics`, { headers: { "Authorization": `Bearer ${token}` } })
                    ]);

                    const issuesData = await issuesRes.json();
                    const analyticsData = await analyticsRes.json();

                    if (issuesData.issues) setIssues(issuesData.issues);
                    if (analyticsData.by_severity) setAnalytics(analyticsData);
                }
            } catch (err) {
                console.error("Failed to load issues", err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return (
        <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Issues & Analytics</h1>
                    <p className="text-muted-foreground mt-1">Aggregated defect analytics and detailed resolution tracking.</p>
                </div>

                <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                        <Download className="w-4 h-4" />
                        Export PDF Report
                    </button>
                    <button className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                </div>
            </div>

            <div className="flex border-b border-border mb-6">
                <button
                    className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === 'analytics' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                    onClick={() => setActiveTab('analytics')}
                >
                    Analytics Dashboard
                </button>
                <button
                    className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === 'list' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                    onClick={() => setActiveTab('list')}
                >
                    Issue List View
                </button>
            </div>

            {loading ? (
                <div className="flex items-center justify-center p-12"><div className="animate-spin h-8 w-8 rounded-full border-t-2 border-b-2 border-primary"></div></div>
            ) : activeTab === 'analytics' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card border border-border p-6 rounded-xl">
                        <h3 className="font-bold mb-6 text-lg">Defects by Severity</h3>
                        <div className="h-[300px]">
                            {analytics.by_severity.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={analytics.by_severity}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={70}
                                            outerRadius={100}
                                            paddingAngle={2}
                                            dataKey="value"
                                            label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                                        >
                                            {analytics.by_severity.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip
                                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                                            itemStyle={{ color: '#f8fafc' }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            ) : (<div className="flex items-center justify-center h-full text-muted-foreground">No data</div>)}
                        </div>
                    </div>

                    <div className="bg-card border border-border p-6 rounded-xl">
                        <h3 className="font-bold mb-6 text-lg">Defects by Category</h3>
                        <div className="h-[300px]">
                            {analytics.by_category.length > 0 ? (
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={analytics.by_category}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                                        <RechartsTooltip
                                            cursor={{ fill: '#1e293b' }}
                                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                                        />
                                        <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            ) : (<div className="flex items-center justify-center h-full text-muted-foreground">No data</div>)}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-border bg-muted/30 flex justify-between items-center">
                        <div className="relative w-72">
                            <input
                                type="text"
                                placeholder="Search issues..."
                                className="w-full bg-background border border-border rounded-lg pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <Filter className="w-4 h-4" /> Filter
                        </button>
                    </div>

                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-muted-foreground uppercase bg-secondary/30 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 font-semibold">ID</th>
                                <th className="px-6 py-4 font-semibold">Severity</th>
                                <th className="px-6 py-4 font-semibold">Title</th>
                                <th className="px-6 py-4 font-semibold">Category</th>
                                <th className="px-6 py-4 font-semibold text-right">Target Page</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {issues.length > 0 ? issues.map((issue) => (
                                <tr key={issue.id} className="hover:bg-secondary/20 transition-colors">
                                    <td className="px-6 py-4 font-mono text-xs">{issue.id}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${issue.severity === 'critical' ? 'bg-red-500/20 text-red-500' :
                                            issue.severity === 'high' ? 'bg-red-400/20 text-red-400' :
                                                issue.severity === 'medium' ? 'bg-amber-500/20 text-amber-500' :
                                                    'bg-blue-500/20 text-blue-500'
                                            }`}>
                                            {(issue.severity || '').toString().toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-foreground">{issue.title}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{issue.category}</td>
                                    <td className="px-6 py-4 text-right text-muted-foreground font-mono text-xs truncate max-w-[200px]" title={issue.page}>{issue.page}</td>
                                </tr>
                            )) : (
                                <tr><td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">No issues found for this scan.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
