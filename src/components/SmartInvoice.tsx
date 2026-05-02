import React, { useState } from 'react';
import { Plus, Search, MoreVertical, FileText, Send, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function SmartInvoice() {
  const [invoices] = useState([
    { id: '1', number: 'INV-2023-001', client: 'Acme Corp', amount: 45000, status: 'paid', date: '2023-10-24' },
    { id: '2', number: 'INV-2023-002', client: 'Global Tech', amount: 120000, status: 'pending', date: '2023-10-22' },
    { id: '3', number: 'INV-2023-003', client: 'Startup Inc', amount: 12400, status: 'overdue', date: '2023-10-20' },
  ]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-brutal p-8 bg-indigo-600 text-white">
          <p className="text-[10px] opacity-80 uppercase tracking-widest font-black">Total Receivables</p>
          <p className="text-4xl font-black mt-2 tracking-tighter italic">₹1,77,400</p>
          <div className="mt-6 flex gap-2">
            <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full font-black uppercase tracking-tight">12 Unpaid Invoices</span>
          </div>
        </div>
        <div className="card-brutal p-8 border-l-8 border-l-red-500">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Overdue</p>
          <p className="text-4xl font-black mt-2 tracking-tighter italic">₹12,400</p>
          <p className="text-[10px] text-red-500 mt-4 font-black uppercase tracking-widest flex items-center gap-1">
            <AlertCircle size={14} /> Requires immediate follow-up
          </p>
        </div>
        <div className="card-brutal p-8 flex flex-col justify-center items-center text-center">
          <p className="text-sm text-slate-500 font-bold max-w-[120px]">Ready to get paid fast?</p>
          <button className="btn-primary mt-6 w-full py-4 uppercase tracking-widest text-[10px]">Enable WhatsApp Reminders</button>
        </div>
      </div>

      <div className="card-brutal p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Filter by client or invoice number..." 
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Filter</button>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Export</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Client</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                  <td className="font-mono font-bold text-gray-800">{inv.number}</td>
                  <td className="font-medium">{inv.client}</td>
                  <td className="font-mono font-semibold text-gray-900">₹{inv.amount.toLocaleString()}</td>
                  <td className="text-gray-500">{inv.date}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      {inv.status === 'paid' ? <CheckCircle2 size={14} className="text-green-500" /> : 
                       inv.status === 'pending' ? <Clock size={14} className="text-orange-500" /> : 
                       <AlertCircle size={14} className="text-red-500" />}
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        inv.status === 'paid' ? 'bg-green-100 text-green-700' :
                        inv.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {inv.status}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-blue-600 transition-colors" title="Send via WhatsApp">
                        <Send size={16} />
                      </button>
                      <button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
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
