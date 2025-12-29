import React from 'react';
import { PURCHASING_CYCLE } from '../constants';
import { Card } from './ui/UIComponents';
import { CheckCircle2 } from 'lucide-react';

export const Procedures = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">3.3 Purchasing Procedures</h2>
        <p className="text-slate-500 mt-2">The standard cycle of procurement.</p>
      </div>

      <Card className="p-8 bg-slate-50">
        <div className="relative border-l-2 border-blue-200 ml-4 space-y-8">
          {PURCHASING_CYCLE.map((step, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Dot */}
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white border-2 border-blue-400 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors"></div>
              
              {/* Content */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:border-blue-300 transition-all cursor-default">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-800">
                    <span className="text-blue-500 mr-2">Step {index + 1}:</span>
                    {step}
                  </h4>
                  {index === 2 && (
                     <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">Critical Decision</span>
                  )}
                  {index === 6 && (
                     <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">Binding Contract</span>
                  )}
                </div>
                <p className="text-sm text-slate-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity h-0 group-hover:h-auto overflow-hidden">
                   {getStepDescription(index)}
                </p>
              </div>
            </div>
          ))}
          <div className="pl-8 pt-4">
             <div className="flex items-center text-slate-400">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Cycle Complete
             </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

function getStepDescription(index: number): string {
  const descs = [
    "Identify that a product or service is needed.",
    "Define exactly what is needed via specs.",
    "Decide whether to manufacture internaly or buy externally.",
    "Find potential suppliers and ask for prices (RFQ).",
    "Compare bids based on price, quality, and delivery.",
    "Negotiate and finalize the cost.",
    "Send the official legal contract to the supplier.",
    "Track the order to ensure on-time delivery.",
    "Check goods for defects and quantity upon arrival.",
    "Verify the invoice matches the PO and Receipt (3-way match).",
    "Archive documents for audit and future reference."
  ];
  return descs[index] || "";
}