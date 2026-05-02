import React from 'react';
import { ShieldCheck, ArrowDownToLine, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function GSTSaathi() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card-brutal p-8 bg-emerald-600 text-white">
          <p className="text-[10px] opacity-80 uppercase tracking-widest font-black">GST Liability (Oct)</p>
          <p className="text-4xl font-black mt-2 tracking-tighter italic">₹18,240</p>
          <p className="text-[10px] mt-6 flex items-center gap-1 font-black uppercase bg-white/20 w-fit px-3 py-1 rounded-full tracking-tight">
            <CheckCircle2 size={12} /> Ready to file
          </p>
        </div>
        <div className="card-brutal p-8 border-l-8 border-l-indigo-500">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Input Tax Credit (ITC)</p>
          <p className="text-4xl font-black mt-2 tracking-tighter italic">₹24,500</p>
          <p className="text-[10px] text-indigo-600 mt-4 font-black uppercase tracking-widest flex items-center gap-1">
            <RefreshCw size={12} className="animate-spin" /> Synced from GSTR-2B
          </p>
        </div>
        <div className="card-brutal p-8 border-l-8 border-l-orange-500">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Reconciliation Status</p>
          <p className="text-4xl font-black mt-2 tracking-tighter italic">94%</p>
          <p className="text-[10px] text-orange-600 mt-4 font-black uppercase tracking-widest flex items-center gap-1">
            <AlertCircle size={12} /> 4 mismatches found
          </p>
        </div>
      </div>

      <div className="card-brutal p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg">GSTR-2A vs Books Reconciliation</h3>
          <button className="btn-primary py-2 px-4 flex items-center gap-2 text-sm">
            <ArrowDownToLine size={16} /> Download Report
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Vendor Name</th>
                <th>Invoice Date</th>
                <th>GST in Portal</th>
                <th>GST in Books</th>
                <th>Difference</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { vendor: 'Amazon Web Services', date: 'Oct 12', portal: '₹4,500', books: '₹4,500', diff: '₹0', status: 'match' },
                { vendor: 'Uber Business', date: 'Oct 15', portal: '₹840', books: '₹840', diff: '₹0', status: 'match' },
                { vendor: 'Local Stationery', date: 'Oct-20', portal: '₹0', books: '₹450', diff: '₹450', status: 'missing_in_portal' },
                { vendor: 'Google Cloud', date: 'Oct 18', portal: '₹2,100', books: '₹2,120', diff: '₹20', status: 'mismatch' }
              ].map((row, i) => (
                <tr key={i}>
                  <td className="font-medium">{row.vendor}</td>
                  <td className="text-gray-500">{row.date}</td>
                  <td className="font-mono">{row.portal}</td>
                  <td className="font-mono">{row.books}</td>
                  <td className={`font-mono font-bold ${row.diff === '₹0' ? 'text-gray-400' : 'text-red-600'}`}>{row.diff}</td>
                  <td>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      row.status === 'match' ? 'bg-green-100 text-green-700' :
                      row.status === 'mismatch' ? 'bg-red-100 text-red-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {row.status.replace(/_/g, ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
