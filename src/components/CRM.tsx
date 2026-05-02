import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  MessageSquare, 
  BarChart3, 
  Search, 
  Filter, 
  Send, 
  MoreVertical, 
  Mail, 
  Phone,
  ArrowRight,
  TrendingUp,
  Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CRM() {
  const [activeTab, setActiveTab] = useState<'contacts' | 'pipeline' | 'outreach'>('contacts');

  const customers = [
    { id: '1', name: 'Arjun Mehta', company: 'Mehta Textiles', email: 'arjun@mehta.in', phone: '+91 98765 43210', segment: 'vip', value: '₹12,40,000', lastContact: '2 hrs ago' },
    { id: '2', name: 'Priya Sharma', company: 'Creative Solutions', email: 'priya@creatives.com', phone: '+91 87654 32109', segment: 'customer', value: '₹4,50,000', lastContact: '1 day ago' },
    { id: '3', name: 'Kabir Das', company: 'Das Logistics', email: 'kabir@daslogistics.in', phone: '+91 76543 21098', segment: 'lead', value: '₹0', lastContact: '3 days ago' },
  ];

  const deals = [
    { title: 'Discovery', count: 8, value: '₹4.2L', items: ['Global Tech (₹1.2L)', 'AgroFresh (₹80k)'] },
    { title: 'Proposal', count: 4, value: '₹12.5L', items: ['Solar Systems (₹8.5L)', 'EcoPrint (₹4L)'] },
    { title: 'Negotiation', count: 2, value: '₹5.0L', items: ['FastLogistics (₹5L)'] },
    { title: 'Closed', count: 12, value: '₹45.8L', items: ['Vertex Solutions (₹12L)'] },
  ];

  return (
    <div className="space-y-6">
      {/* CRM Tabs */}
      <div className="flex gap-4 border-b border-slate-200 pb-px">
        {[
          { id: 'contacts', label: 'Contacts', icon: Users },
          { id: 'pipeline', label: 'Sales Pipeline', icon: BarChart3 },
          { id: 'outreach', label: 'Outreach', icon: MessageSquare },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-black uppercase tracking-widest transition-all relative ${
              activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTab" 
                className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-t-full" 
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'contacts' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: 'Total Contacts', value: '1,248', color: 'text-slate-900' },
                  { label: 'Leads', value: '840', color: 'text-indigo-600' },
                  { label: 'VIP Customers', value: '124', color: 'text-emerald-600' },
                  { label: 'Conversion Rate', value: '14.2%', color: 'text-blue-600' },
                ].map((stat, i) => (
                  <div key={i} className="card-brutal p-6">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    <p className={`text-2xl font-black mt-1 ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="card-brutal p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="relative max-w-sm w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search customers..." 
                      className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm"
                    />
                  </div>
                  <button className="btn-primary flex items-center gap-2">
                    <UserPlus size={16} /> Add Contact
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Segment</th>
                        <th>Contact</th>
                        <th>Total Value</th>
                        <th>Last Activity</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((c) => (
                        <tr key={c.id}>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 text-xs uppercase">
                                {c.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <p className="font-bold text-sm">{c.name}</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{c.company}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className={`bento-badge ${
                              c.segment === 'vip' ? 'bg-indigo-100 text-indigo-700' :
                              c.segment === 'customer' ? 'bg-emerald-100 text-emerald-700' :
                              'bg-slate-100 text-slate-600'
                            }`}>
                              {c.segment}
                            </span>
                          </td>
                          <td>
                            <div className="flex gap-2">
                              <Mail size={14} className="text-slate-400 cursor-pointer hover:text-indigo-600" />
                              <Phone size={14} className="text-slate-400 cursor-pointer hover:text-emerald-600" />
                            </div>
                          </td>
                          <td className="font-mono font-bold text-slate-900">{c.value}</td>
                          <td className="text-[10px] text-slate-400 font-bold uppercase">{c.lastContact}</td>
                          <td>
                            <button className="p-1 hover:bg-slate-100 rounded-lg text-slate-400">
                              <MoreVertical size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pipeline' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[500px]">
              {deals.map((lane, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="flex justify-between items-center px-4">
                    <h4 className="font-black text-xs uppercase tracking-widest text-slate-500">{lane.title}</h4>
                    <span className="bento-badge bg-slate-200 text-slate-700">{lane.count}</span>
                  </div>
                  <div className="card-brutal p-4 bg-slate-50 border-none space-y-3 flex-1">
                    <p className="text-[10px] font-black italic text-indigo-600 mb-2">{lane.value} Potential</p>
                    {lane.items.map((item, j) => (
                      <div key={j} className="card-brutal p-4 border border-slate-100 hover:border-indigo-200 cursor-grab active:cursor-grabbing transition-all hover:scale-[1.02] bg-white">
                        <p className="text-xs font-bold text-slate-800">{item.split(' (')[0]}</p>
                        <p className="text-[10px] font-black text-emerald-600 mt-1 italic">{item.split(' (')[1].replace(')', '')}</p>
                      </div>
                    ))}
                    <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-2xl text-[10px] font-black uppercase text-slate-400 hover:border-indigo-200 hover:text-indigo-600 transition-all">
                      + Add Deal
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'outreach' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 card-brutal p-8 bg-indigo-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full" />
                <div className="relative z-10">
                  <span className="bento-badge bg-white/20 text-white mb-4 block w-fit">New Feature</span>
                  <h3 className="text-3xl font-black tracking-tighter italic mb-4">Smart WhatsApp Outreach</h3>
                  <p className="text-indigo-100 font-medium max-w-md">Segment your customers and send personalized WhatsApp messages at scale. No manual typing required.</p>
                  <button className="mt-8 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                    Launch Campaign
                  </button>
                </div>
              </div>

              <div className="card-brutal p-6 flex flex-col space-y-6 underline-none">
                <h4 className="font-black text-xs uppercase tracking-widest text-slate-400">Targeting Segments</h4>
                <div className="space-y-4 flex-1">
                  {[
                    { label: 'Unpaid > 30 Days', count: 14, color: 'red' },
                    { label: 'Dormant VIPs', count: 8, color: 'amber' },
                    { label: 'New Leads', count: 156, color: 'blue' },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <Tag size={16} className={`text-${s.color}-500`} />
                        <span className="text-xs font-bold text-slate-800">{s.label}</span>
                      </div>
                      <span className="font-black text-xs text-slate-400">{s.count}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[10px] text-slate-400 font-bold text-center leading-relaxed italic">
                    "AI suggests contacting 'Dormant VIPs' today - 82% likely to convert if sent a personalized discount."
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
