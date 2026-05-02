import React from 'react';
import { Award, Users, Rocket, ExternalLink, Calendar } from 'lucide-react';

export default function GrowthDesk() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card-brutal p-6">
            <h3 className="font-bold text-xl mb-4">Recommended Mentors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Anjali Sharma', role: 'Ex-Zomato Product', domain: 'Growth/Product', fee: '₹2,500/hr' },
                { name: 'Rahul Verma', role: 'SaaS Founder', domain: 'GTM Strategy', fee: '₹4,000/hr' },
                { name: 'Sanya Gupta', role: 'Growth Lead @ Fintech', domain: 'Performance Marketing', fee: '₹3,000/hr' },
                { name: 'Vikram Singh', role: 'Serial Entrepreneur', domain: 'Fundraising', fee: '₹5,000/hr' }
              ].map((m, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-100 hover:border-blue-200 transaction-colors flex gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0 uppercase font-bold text-gray-400">
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{m.name}</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{m.role}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      <span className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">{m.domain}</span>
                    </div>
                    <p className="mt-3 text-xs font-bold text-gray-900">{m.fee}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 text-sm font-bold hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600 transition-all">
              View All Mentors
            </button>
          </div>

          <div className="card-brutal p-6">
            <h3 className="font-bold text-xl mb-4">Active Accelerators</h3>
            <div className="space-y-4">
              {[
                { name: 'T-Hub Hyderabad', deadline: 'Nov 30', type: 'Incubation', location: 'Hyderabad' },
                { name: 'NASSCOM 10K Startups', deadline: 'Dec 15', type: 'Virtual', location: 'All India' },
                { name: 'Sequoia Surge', deadline: 'Closed', type: 'Equity-based', location: 'Global' }
              ].map((acc, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Rocket size={18} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{acc.name}</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{acc.type} • {acc.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-medium">Deadline</p>
                    <p className={`text-sm font-bold ${acc.deadline === 'Closed' ? 'text-red-500' : 'text-gray-800'}`}>{acc.deadline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-brutal p-6 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
            <h4 className="font-black italic text-xl mb-2 tracking-tighter">Growth Metrics</h4>
            <div className="space-y-4 mt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Avg. MRR Growth</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold tracking-tight">22.4%</span>
                  <TrendingUp size={16} className="mb-1 text-green-400" />
                </div>
              </div>
              <div className="h-1 bg-white/10 rounded-full">
                <div className="h-full bg-green-400 w-3/4 rounded-full" />
              </div>
            </div>
            <p className="mt-6 text-xs opacity-70 leading-relaxed font-medium">
              You're growing faster than 82% of startups in your stage. Investors value this trajectory.
            </p>
          </div>

          <div className="card-brutal p-6">
            <h4 className="font-bold text-sm mb-4 flex items-center gap-2">
              <Calendar size={16} className="text-blue-500" />
              Upcoming Events
            </h4>
            <div className="space-y-4">
              {[
                { title: 'SaaS Pricing Masterclass', date: 'Oct 28' },
                { title: 'Hyderabad Founders Meetup', date: 'Nov 02' },
              ].map((event, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center font-bold text-blue-600 text-xs shrink-0">
                    {event.date.split(' ')[1]}
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">{event.title}</p>
                    <p className="text-[10px] text-gray-400 font-medium mt-0.5">3:00 PM onwards</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-xs font-bold text-blue-600 flex items-center justify-center gap-1">
              View Growth Calendar <ExternalLink size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
