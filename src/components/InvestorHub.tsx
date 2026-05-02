import React, { useState } from 'react';
import { Target, Lightbulb, TrendingUp, Presentation, Send, ChevronRight, Wand2, Sparkles } from 'lucide-react';
import { generatePitchDeckOutline } from '../services/geminiService.ts';

export default function InvestorHub() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [outline, setOutline] = useState<any>(null);

  const handleGenerateOutline = async () => {
    setIsGenerating(true);
    try {
      const data = await generatePitchDeckOutline({
        name: 'PixelIQ',
        description: 'AI-driven design automation for startups',
        industry: 'SaaS / Design'
      });
      setOutline(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card-brutal p-8 bg-[#0F172A] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Investor Readiness Score</h3>
            <div className="flex items-end gap-2">
              <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tighter italic">74</span>
              <span className="text-gray-400 mb-2 font-bold uppercase tracking-widest text-xs">/ 100</span>
            </div>
            <p className="mt-6 text-gray-400 text-sm max-w-sm">
              Your profile is stronger than 65% of startups in your sector. Connect your GST data to unlock higher scores.
            </p>
            <div className="mt-8 flex gap-3">
              <button className="bg-white text-black px-6 py-2.5 rounded-xl font-bold hover:bg-gray-100 transition-colors">Find Angels</button>
              <button className="bg-white/10 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">Edit Data Room</button>
            </div>
          </div>
        </div>

        <div className="card-brutal p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 mb-2 font-bold uppercase tracking-widest text-xs">
              <Sparkles size={14} />
              AI Pitch Assistant
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Need a Pitch Deck?</h3>
            <p className="mt-2 text-gray-500">Our AI uses your 360Books business data to generate a data-backed pitch outline in seconds.</p>
          </div>
          
          <div className="mt-8">
            <button 
              onClick={handleGenerateOutline}
              disabled={isGenerating}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4"
            >
              {isGenerating ? 'Analyzing data...' : (
                <>
                  <Wand2 size={20} />
                  Generate AI Outline
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {outline && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-brutal p-8"
        >
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
            <h4 className="text-xl font-bold">Suggested Pitch Structure</h4>
            <button className="text-blue-600 font-bold text-sm flex items-center gap-1">
              Download Template <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outline.slides?.map((slide: any, i: number) => (
              <div key={i} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-3">
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Slide {i + 1}</span>
                <h5 className="font-bold text-gray-800">{slide.title}</h5>
                <ul className="space-y-2">
                  {slide.points?.map((point: string, j: number) => (
                    <li key={j} className="text-xs text-gray-500 flex gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1 shrink-0 px-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Investor Matching', desc: 'Matched with 12 Angel Investors based on your Revenue trajectory.', icon: Target },
          { title: 'Peer Networking', desc: 'Join the next Cohort of 50 SaaS founders in Hyderabad.', icon: Users },
          { title: 'Venture Metrics', desc: 'Track your LTV, CAC, and Churn automatically from invoices.', icon: TrendingUp },
        ].map((item, i) => (
          <div key={i} className="card-brutal p-6 hover:border-blue-200 transition-colors group cursor-pointer">
            <div className="p-3 bg-gray-50 rounded-xl w-fit group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              <item.icon size={24} />
            </div>
            <h4 className="font-bold mt-4">{item.title}</h4>
            <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
