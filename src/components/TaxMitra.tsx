import React, { useState, useEffect } from 'react';
import { Calculator, Sparkles, TrendingUp, AlertTriangle, ShieldCheck, RefreshCw } from 'lucide-react';
import { getTaxAdvice } from '../services/geminiService.ts';

export default function TaxMitra() {
  const [advice, setAdvice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = async () => {
    setIsLoading(true);
    try {
      const res = await getTaxAdvice('Monthly Revenue: ₹4.5L, Expenses: ₹2.1L, GST Paid: ₹18.2k, Sector: Tech Services');
      setAdvice(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card-brutal p-8 bg-gradient-to-br from-indigo-50 to-white border-indigo-100 shadow-indigo-100/50">
            <div className="flex items-center gap-2 text-indigo-600 mb-4 font-black uppercase tracking-widest text-[10px]">
              <Sparkles size={14} />
              AI Tax Strategy
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Personalized Tax Advice</h3>
            {isLoading ? (
              <div className="space-y-3 animate-pulse">
                <div className="h-4 bg-slate-200 rounded-full w-full" />
                <div className="h-4 bg-slate-200 rounded-full w-5/6" />
                <div className="h-4 bg-slate-200 rounded-full w-4/6" />
              </div>
            ) : (
              <div className="text-slate-700 leading-relaxed whitespace-pre-line text-sm font-medium">
                {advice}
              </div>
            )}
            <button 
              onClick={fetchAdvice}
              className="mt-8 text-xs font-black text-indigo-600 hover:text-indigo-700 flex items-center gap-2 uppercase tracking-widest"
            >
              Refresh Recommendations <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-brutal p-6 border-l-4 border-l-blue-500">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <Calculator size={18} className="text-blue-500" />
                Income Tax Liability (Estimated)
              </h4>
              <p className="text-2xl font-mono font-bold mt-4">₹85,400</p>
              <p className="text-xs text-gray-500 mt-2">Next Advance Tax payment due: Dec 15</p>
            </div>
            <div className="card-brutal p-6 border-l-4 border-l-purple-500">
              <h4 className="font-bold text-gray-800 flex items-center gap-2">
                <ShieldCheck size={18} className="text-purple-500" />
                TDS Deducted (26AS)
              </h4>
              <p className="text-2xl font-mono font-bold mt-4">₹12,450</p>
              <p className="text-xs text-green-600 mt-2 font-bold">Matched with your books</p>
            </div>
          </div>
        </div>

        <div className="card-brutal p-6 bg-red-50/50 border-red-100 h-fit">
          <div className="flex items-center gap-2 text-red-600 font-bold mb-4">
            <AlertTriangle size={20} />
            <h3 className="font-bold uppercase tracking-tight">Deadline Alerts</h3>
          </div>
          <div className="space-y-4">
            {[
              { name: 'GSTR-1 filing', date: 'Nov 11', type: 'GST' },
              { name: 'TDS Payment', date: 'Nov 07', type: 'TDS' },
              { name: 'Advance Tax Q3', date: 'Dec 15', type: 'Income Tax' },
            ].map((d, i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-white rounded-lg border border-red-100 shadow-sm">
                <div>
                  <p className="text-sm font-bold text-gray-800">{d.name}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">{d.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-red-600">{d.date}</p>
                  <p className="text-[10px] text-gray-400 font-medium">In 9 days</p>
                </div>
              </div>
            ))}
          </div>
          <button className="btn-primary w-full mt-6 bg-red-600 hover:bg-red-700">Sync with Google Calendar</button>
        </div>
      </div>
    </div>
  );
}
