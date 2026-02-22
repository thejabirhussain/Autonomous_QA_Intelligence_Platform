import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Zap, Network, AlertOctagon, Settings, ShieldAlert, LogOut } from 'lucide-react';

import Home from './pages/Home';
import LiveScan from './pages/LiveScan';
import KnowledgeGraph from './pages/KnowledgeGraph';
import IssuesAnalytics from './pages/IssuesAnalytics';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col pt-6 z-10 relative">
      <div className="px-6 mb-8 flex items-center gap-2">
        <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-foreground">ReQon</h2>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <Link to="/" className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${location.pathname === '/' ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}>
          <LayoutDashboard className="w-4 h-4" /> Dashboard
        </Link>
        <Link to="/scans/live" className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${location.pathname === '/scans/live' ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}>
          <Zap className="w-4 h-4" /> Live Scans
        </Link>
        <Link to="/issues" className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${location.pathname === '/issues' ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}>
          <AlertOctagon className="w-4 h-4" /> Issues & Reports
        </Link>
        <Link to="/graph" className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${location.pathname === '/graph' ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}>
          <Network className="w-4 h-4" /> Architecture Graph
        </Link>
      </nav>

      <div className="p-4 border-t border-border space-y-2">
        <button className="flex w-full items-center gap-3 px-3 py-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-secondary transition-colors text-sm">
          <Settings className="w-4 h-4" /> Settings
        </button>
        <button
          onClick={() => { localStorage.removeItem("token"); window.location.href = '/'; }}
          className="flex w-full items-center gap-3 px-3 py-2 text-muted-foreground hover:text-red-400 rounded-md hover:bg-secondary transition-colors text-sm">
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>

    </div>
  );
};

function App() {
  const token = localStorage.getItem("token");

  if (!token) {
    // Basic mock login
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <div className="bg-card w-full max-w-md p-8 rounded-xl border border-border">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-primary" /> ReQon Login
          </h2>
          <form onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = (form.elements[0] as HTMLInputElement).value;
            const password = (form.elements[1] as HTMLInputElement).value;

            try {
              const res = await fetch("http://localhost:8000/api/v1/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({ username: email, password: password })
              });
              const data = await res.json();
              if (data.access_token) {
                localStorage.setItem("token", data.access_token);
                window.location.reload();
              } else {
                alert("Login failed: " + (data.detail || "Unknown error"));
              }
            } catch (err) {
              alert("Error connecting to backend");
            }
          }} className="space-y-4">
            <input type="email" placeholder="Email" className="w-full bg-background border border-border p-3 rounded text-foreground outline-none focus:border-primary" required defaultValue="admin@reqon.ai" />
            <input type="password" placeholder="Password" className="w-full bg-background border border-border p-3 rounded text-foreground outline-none focus:border-primary" required defaultValue="admin123" />
            <button type="submit" className="w-full bg-primary text-primary-foreground p-3 rounded font-bold hover:opacity-90">Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex bg-background text-foreground h-screen w-full overflow-hidden font-sans">
        <Sidebar />
        <main className="flex-1 overflow-y-auto relative bg-[#0a0f1c]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
          <div className="relative z-10 min-h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scans/live" element={<LiveScan />} />
              <Route path="/graph" element={<KnowledgeGraph />} />
              <Route path="/issues" element={<IssuesAnalytics />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
