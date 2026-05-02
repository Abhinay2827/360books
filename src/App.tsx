import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Receipt, 
  Calculator, 
  Wallet, 
  Users, 
  TrendingUp,
  Settings,
  Bell,
  Menu,
  X,
  Plus,
  Search,
  ChevronRight,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Module } from './types.ts';
import { auth, db } from './firebase.ts';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

import SmartInvoice from './components/SmartInvoice.tsx';
import InvestorHub from './components/InvestorHub.tsx';
import CashBridge from './components/CashBridge.tsx';
import TaxMitra from './components/TaxMitra.tsx';
import GSTSaathi from './components/GSTSaathi.tsx';
import GrowthDesk from './components/GrowthDesk.tsx';
import CRM from './components/CRM.tsx';

// Modules (we'll implement components for these)
const Dashboard = () => (
  <div className="grid grid-cols-12 grid-rows-6 gap-6 h-auto">
    {/* Revenue Large Bento */}
    <div className="col-span-12 lg:col-span-8 row-span-2 card-brutal p-8 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Net Revenue (Q3 FY26)</p>
          <h2 className="text-5xl font-black text-slate-900 tracking-tighter">₹12,45,600</h2>
        </div>
        <div className="bento-badge bg-emerald-100 text-emerald-700">+18.4% Growth</div>
      </div>
      <div className="flex flex-wrap gap-12 mt-4">
        <div className="space-y-1">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Pending GST Credit</p>
          <p className="text-xl font-black">₹84,200</p>
        </div>
        <div className="space-y-1">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Total Expenses</p>
          <p className="text-xl font-black">₹4,12,000</p>
        </div>
        <div className="space-y-1">
          <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Tax Savings</p>
          <p className="text-xl font-black text-emerald-600">₹1,02,450</p>
        </div>
      </div>
    </div>

    {/* GST Highlight Bento */}
    <div className="col-span-12 lg:col-span-4 row-span-2 bg-indigo-600 rounded-[32px] p-8 text-white flex flex-col justify-between overflow-hidden relative shadow-xl shadow-indigo-200">
      <div className="z-10">
        <div className="flex items-center gap-2 mb-1">
          <Receipt size={18} />
          <h3 className="text-lg font-black uppercase tracking-tight">GSTSaathi</h3>
        </div>
        <p className="text-indigo-100 text-sm font-medium">Auto-reconciliation complete.</p>
      </div>
      <div className="z-10 py-4">
        <p className="text-3xl font-black mb-1 leading-none">GSTR-1 Ready</p>
        <p className="text-xs text-indigo-200 font-bold">Filing deadline: May 11, 2026</p>
      </div>
      <button className="z-10 w-full py-3 bg-white text-indigo-600 rounded-2xl font-black text-sm shadow-xl hover:scale-[1.02] transition-transform">File Now</button>
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-400 rounded-full blur-3xl opacity-40"></div>
    </div>

    {/* Invoices Bento */}
    <div className="col-span-12 lg:col-span-4 row-span-2 card-brutal p-6 flex flex-col space-y-4">
      <div className="flex items-center justify-between mb-4">
        <span className="font-black text-xs uppercase tracking-widest text-slate-400">SmartInvoices</span>
        <button className="text-[10px] text-indigo-600 font-black uppercase tracking-tight">View All</button>
      </div>
      <div className="space-y-3">
        {[
          { client: 'Nexa Corp', amount: '₹45,000', status: 'Sent', color: 'emerald' },
          { client: 'Studio Blue', amount: '₹1,20,000', status: 'Overdue', color: 'amber' }
        ].map((inv, i) => (
          <div key={i} className="p-4 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100 transition-all hover:bg-white hover:border-indigo-100 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-${inv.color}-100 text-${inv.color}-600 rounded-full flex items-center justify-center font-black text-xs`}>
                {inv.client[0]}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">{inv.client}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{inv.amount} • WhatsApp {inv.status}</p>
              </div>
            </div>
            <div className={`h-2.5 w-2.5 bg-${inv.color}-500 rounded-full ring-4 ring-${inv.color}-50`} />
          </div>
        ))}
      </div>
    </div>

    {/* CashBridge Bento */}
    <div className="col-span-12 lg:col-span-4 row-span-2 bg-slate-900 rounded-[32px] p-6 text-white flex flex-col justify-between shadow-lg shadow-slate-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">CashBridge</span>
        <div className="w-10 h-6 bg-slate-800 rounded-full flex items-center px-1">
          <div className="w-4 h-4 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"></div>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-slate-400 mb-1">Credit Eligibility</p>
        <h4 className="text-4xl font-black tracking-tight italic">₹15,00,000</h4>
        <div className="flex items-center gap-1.5 mt-2">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
          <p className="text-[10px] text-emerald-400 uppercase font-black tracking-widest">Pre-Approved</p>
        </div>
      </div>
      <div className="pt-4 border-t border-slate-800">
        <div className="flex justify-between text-xs mb-2">
          <span className="text-slate-500 font-bold uppercase tracking-tight">Interest Rate</span>
          <span className="font-black text-indigo-400">9.5% p.a.</span>
        </div>
        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-indigo-500"></div>
        </div>
      </div>
    </div>

    {/* GrowthDesk Bento */}
    <div className="col-span-12 lg:col-span-4 row-span-4 card-brutal p-8 flex flex-col space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl font-black text-slate-800 tracking-tight">GrowthDesk</h3>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Mentors & Accelerators</p>
      </div>
      <div className="p-5 bg-indigo-50 border border-indigo-100 rounded-2xl group cursor-pointer hover:bg-white transition-all">
        <p className="text-[10px] uppercase font-black text-indigo-500 mb-2">Upcoming Session</p>
        <p className="text-sm font-black text-slate-800 leading-tight">Scale Operations in Tier-2 India</p>
        <p className="text-xs text-slate-500 mt-2 font-medium italic">with Rajeev Sethi (ex-Zomato)</p>
      </div>
      <div className="space-y-5">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Top Investor Matches</p>
        {[
          { name: 'Acorn Ventures', focus: 'Fintech Focus • Fit 98%', letter: 'A' },
          { name: 'PeakCapital', focus: 'SaaS Growth • Fit 92%', letter: 'P' }
        ].map((inv, i) => (
          <div key={i} className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-400 shadow-sm border border-slate-200">{inv.letter}</div>
            <div>
              <p className="text-xs font-black text-slate-800">{inv.name}</p>
              <p className="text-[10px] text-indigo-600 font-bold">{inv.focus}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4 mt-auto">
        <button className="w-full py-4 bg-slate-50 text-slate-700 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-sm">Pitch Now</button>
      </div>
    </div>

    {/* Compliance Bento (Wide) */}
    <div className="col-span-12 lg:col-span-8 row-span-2 bg-emerald-50 rounded-[32px] border border-emerald-100 p-8 flex flex-col lg:flex-row items-center justify-between shadow-sm">
      <div className="flex-1 flex gap-6 items-center border-b lg:border-b-0 lg:border-r border-emerald-200 pb-6 lg:pb-0 lg:mr-8 mb-6 lg:mb-0">
        <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-200/50">
          <CheckCircle2 size={28} />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-black text-emerald-900 uppercase tracking-tight">TaxMitra Score</h4>
          <p className="text-xs text-emerald-700 font-medium leading-relaxed">Your business is 100% compliant. No penalties or notices pending.</p>
        </div>
      </div>
      <div className="flex items-center gap-12 px-4 shrink-0">
        <div className="text-center">
          <p className="text-[10px] uppercase font-black text-emerald-600 tracking-widest mb-1 opacity-60">Audit Risk</p>
          <p className="text-2xl font-black text-emerald-900 tracking-tighter italic">LOW</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] uppercase font-black text-emerald-600 tracking-widest mb-1 opacity-60">Deductions</p>
          <p className="text-2xl font-black text-emerald-900 tracking-tighter italic">₹14.2K</p>
        </div>
      </div>
    </div>
  </div>
);

const ModulePlaceholder = ({ name }: { name: string }) => (
  <div className="card-brutal p-12 flex flex-col items-center justify-center text-center space-y-4">
    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
      <LayoutDashboard size={32} />
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{name} Module</h3>
      <p className="text-gray-500 max-w-md">Our AI is preparing this environment for your business data. Full functionality coming in the next update.</p>
    </div>
    <button className="btn-primary">View Documentation</button>
  </div>
);

export default function App() {
  const [activeModule, setActiveModule] = useState<Module>(Module.DASHBOARD);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error.code !== 'auth/popup-closed-by-user') {
        console.error("Authentication error:", error);
      }
    }
  };

  const menuItems = [
    { id: Module.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: Module.INVOICES, label: 'SmartInvoice', icon: FileText },
    { id: Module.GST, label: 'GSTSaathi', icon: Receipt },
    { id: Module.TAX, label: 'TaxMitra', icon: Calculator },
    { id: Module.LOANS, label: 'CashBridge', icon: Wallet },
    { id: Module.INVESTORS, label: 'InvestorHub', icon: Users },
    { id: Module.GROWTH, label: 'GrowthDesk', icon: TrendingUp },
    { id: Module.CRM, label: 'CRM', icon: Users },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-white border-r border-[var(--line)] flex flex-col z-50 sticky top-0 h-screen"
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-[var(--accent)] rounded-lg flex items-center justify-center text-white font-bold shrink-0">360</div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight overflow-hidden whitespace-nowrap">360Books</span>}
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-4 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`sidebar-item w-full ${activeModule === item.id ? 'active' : ''} ${!isSidebarOpen ? 'justify-center px-0' : ''}`}
            >
              <item.icon size={20} className="shrink-0" />
              {isSidebarOpen && <span className="font-medium overflow-hidden whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[var(--line)] space-y-1">
          <button className={`sidebar-item w-full ${!isSidebarOpen ? 'justify-center px-0' : ''}`}>
            <Settings size={20} className="shrink-0" />
            {isSidebarOpen && <span className="font-medium">Settings</span>}
          </button>
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className={`sidebar-item w-full ${!isSidebarOpen ? 'justify-center px-0' : ''}`}
          >
            {isSidebarOpen ? <X size={20} className="shrink-0" /> : <Menu size={20} className="shrink-0" />}
            {isSidebarOpen && <span className="font-medium">Collapse</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-[var(--bg)]">
        {/* Header */}
        <header className="h-16 bg-white border-b border-[var(--line)] flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search tools, invoices, or help..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              {user ? (
                <>
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold leading-none">{user.displayName || 'PixelIQ Company'}</p>
                    <p 
                      onClick={() => signOut(auth)}
                      className="text-[10px] text-red-500 mt-1 uppercase tracking-wider font-bold cursor-pointer hover:underline"
                    >
                      Sign Out
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs uppercase overflow-hidden">
                    {user.photoURL ? <img src={user.photoURL} alt="" referrerPolicy="no-referrer" /> : user.email?.substring(0, 2).toUpperCase()}
                  </div>
                </>
              ) : (
                <button 
                  onClick={handleSignIn}
                  className="btn-primary py-2 px-4 whitespace-nowrap"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 max-w-7xl w-full mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-sm font-medium text-[var(--accent)] mb-1 uppercase tracking-widest">{activeModule}</p>
              <h2 className="text-3xl font-bold tracking-tight">
                {activeModule === Module.DASHBOARD ? "Welcome back, Founder" : menuItems.find(m => m.id === activeModule)?.label}
              </h2>
            </div>
            {activeModule === Module.INVOICES && (
              <button className="btn-primary flex items-center gap-2">
                <Plus size={18} />
                New Invoice
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {activeModule === Module.DASHBOARD && <Dashboard />}
              {activeModule === Module.INVOICES && <SmartInvoice />}
              {activeModule === Module.INVESTORS && <InvestorHub />}
              {activeModule === Module.LOANS && <CashBridge />}
              {activeModule === Module.TAX && <TaxMitra />}
              {activeModule === Module.GST && <GSTSaathi />}
              {activeModule === Module.GROWTH && <GrowthDesk />}
              {activeModule === Module.CRM && <CRM />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
