import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Building, Wallet, FileText, CheckCircle2, Plus } from 'lucide-react';

export default function CashBridge() {
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-brutal p-8 bg-indigo-600 text-white col-span-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full" />
          <h3 className="text-3xl font-black mb-2 tracking-tighter italic z-10 relative">Check Your Loan Eligibility</h3>
          <p className="text-indigo-100 mb-8 font-medium z-10 relative">Access unsecured business loans up to ₹50 Lakhs from India's top 50+ NBFCs.</p>
          <div className="flex items-center gap-6 z-10 relative">
            <button 
              onClick={() => setStep(2)}
              className="bg-white text-indigo-600 px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-xl"
            >
              Start Application <ArrowRight size={18} />
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-indigo-600 bg-slate-200" />
                ))}
                <div className="w-10 h-10 rounded-full border-4 border-indigo-600 bg-indigo-800 flex items-center justify-center text-[10px] font-black tracking-tighter shadow-lg">+50</div>
              </div>
              <span className="text-[10px] text-indigo-200 font-black uppercase tracking-widest">Lenders Active</span>
            </div>
          </div>
        </div>
        <div className="card-brutal p-6 flex flex-col justify-center items-center text-center space-y-2">
          <ShieldCheck size={32} className="text-green-500" />
          <h4 className="font-bold">Safe & Secure</h4>
          <p className="text-xs text-gray-500">Your data is shared via the RBI-regulated Account Aggregator framework.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-brutal p-6">
          <h3 className="font-bold text-lg mb-6">Recent Offers</h3>
          <div className="space-y-4">
            {[
              { lender: 'Lendingkart', amount: '₹15,00,000', rate: '14.5% p.a', type: 'Working Capital', logo: 'LK' },
              { lender: 'Indifi', amount: '₹8,00,000', rate: '16% p.a', type: 'Term Loan', logo: 'ID' },
              { lender: 'NeoGrowth', amount: '₹12,50,000', rate: '15.2% p.a', type: 'Invoice Financing', logo: 'NG' }
            ].map((offer, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-indigo-200 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center font-bold text-gray-400">{offer.logo}</div>
                  <div>
                    <p className="font-bold">{offer.lender}</p>
                    <p className="text-xs text-gray-500">{offer.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-lg">{offer.amount}</p>
                  <p className="text-xs text-green-600 font-bold">{offer.rate}</p>
                </div>
                <button className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors">Apply</button>
              </div>
            ))}
          </div>
        </div>

        <div className="card-brutal p-6">
          <h3 className="font-bold text-lg mb-6">Application Tracker</h3>
          <div className="space-y-6 relative">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100" />
            {[
              { step: 'Account Aggregator Consent', status: 'completed', date: 'Oct 24' },
              { step: 'Document Verification', status: 'completed', date: 'Oct 25' },
              { step: 'Lender Review', status: 'current', date: 'Processing' },
              { step: 'Disbursement', status: 'pending', date: '-' }
            ].map((s, i) => (
              <div key={i} className="relative flex items-center gap-4 pl-10">
                <div className={`absolute left-2.5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white z-10 ${
                  s.status === 'completed' ? 'bg-green-500' : 
                  s.status === 'current' ? 'bg-indigo-600 animate-pulse' : 'bg-gray-200'
                }`} />
                <div className="flex-1">
                  <p className={`text-sm font-bold ${s.status === 'pending' ? 'text-gray-400' : 'text-gray-800'}`}>{s.step}</p>
                  <p className="text-[10px] text-gray-400 font-medium">{s.date}</p>
                </div>
                {s.status === 'completed' && <CheckCircle2 size={14} className="text-green-500" />}
              </div>
            ))}
          </div>
          <button className="btn-primary w-full mt-8 opacity-50 cursor-not-allowed">Upload Additional Documents</button>
        </div>
      </div>
    </div>
  );
}
