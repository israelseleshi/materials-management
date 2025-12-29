import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Input } from './ui/UIComponents';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, Legend } from 'recharts';

export const MakeOrBuy = () => {
  // State
  const [fixedCost, setFixedCost] = useState(50000);
  const [variableCost, setVariableCost] = useState(10); // Cost to Make per unit
  const [purchasePrice, setPurchasePrice] = useState(25); // Cost to Buy per unit

  // Calculation: Break Even Quantity (Q)
  // Cost(Make) = FC + (VC * Q)
  // Cost(Buy) = P * Q
  // FC + VC*Q = P*Q  => FC = Q(P - VC) => Q = FC / (P - VC)
  
  const breakEvenQ = useMemo(() => {
    if (purchasePrice <= variableCost) return 0; // Infinite/Impossible if Buy Price is lower than Variable Make Cost
    return Math.round(fixedCost / (purchasePrice - variableCost));
  }, [fixedCost, variableCost, purchasePrice]);

  // Generate Chart Data
  const chartData = useMemo(() => {
    const data = [];
    const maxQ = breakEvenQ === 0 ? 1000 : breakEvenQ * 2;
    const step = maxQ / 10;
    
    for (let q = 0; q <= maxQ; q += step) {
      const vol = Math.round(q);
      data.push({
        volume: vol,
        costMake: fixedCost + (variableCost * vol),
        costBuy: purchasePrice * vol
      });
    }
    return data;
  }, [breakEvenQ, fixedCost, variableCost, purchasePrice]);

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">3.5 Make or Buy Decisions</h2>
        <p className="text-slate-500 mt-2">Strategic Analysis & Break-even calculation.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-slate-50">
          <CardHeader>
            <CardTitle>Strategic Considerations</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
             <p><strong>Strategic:</strong> Is this our core competency? (e.g., Toyota makes engines). Consider Vertical Integration.</p>
             <p><strong>Tactical:</strong> Do we have spare capacity? Is demand fluctuating?</p>
             <p className="text-slate-500 italic mt-2">Rule: Compare Relevant (Incremental) costs only. Ignore sunk costs.</p>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-50 border-blue-200">
           <CardHeader>
            <CardTitle className="text-blue-900">The Formula</CardTitle>
          </CardHeader>
           <CardContent className="font-mono text-sm text-blue-800">
              <p>Break-even Quantity (Q) =</p>
              <p className="text-xl my-2 text-center border-b border-blue-300 pb-2">Fixed Cost</p>
              <p className="text-center">(Purchase Price - Variable Cost)</p>
           </CardContent>
        </Card>
      </div>

      <Card className="shadow-lg">
         <CardHeader>
            <CardTitle>Break-Even Simulator</CardTitle>
         </CardHeader>
         <CardContent>
            <div className="grid lg:grid-cols-3 gap-8">
               <div className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-sm font-medium">Fixed Cost ($)</label>
                     <Input type="number" value={fixedCost} onChange={(e) => setFixedCost(Number(e.target.value))} />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-medium">Variable Cost to Make ($/unit)</label>
                     <Input type="number" value={variableCost} onChange={(e) => setVariableCost(Number(e.target.value))} />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-medium">Purchase Price to Buy ($/unit)</label>
                     <Input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} />
                  </div>
                  
                  <div className="p-4 bg-slate-100 rounded-lg text-center">
                     <span className="text-sm text-slate-500 uppercase">Break-Even Point</span>
                     <div className="text-3xl font-bold text-blue-600 my-1">{breakEvenQ > 0 ? breakEvenQ.toLocaleString() : "N/A"}</div>
                     <span className="text-xs text-slate-400">units</span>
                  </div>
                  
                  <div className="text-xs text-slate-500">
                    If Demand &gt; {breakEvenQ}, you should <strong>MAKE</strong>.<br/>
                    If Demand &lt; {breakEvenQ}, you should <strong>BUY</strong>.
                  </div>
               </div>

               <div className="lg:col-span-2 h-80">
                  <ResponsiveContainer width="100%" height="100%">
                     <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="volume" label={{ value: 'Volume', position: 'insideBottom', offset: -10 }} />
                        <YAxis label={{ value: 'Total Cost ($)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                        <Legend verticalAlign="top" height={36}/>
                        <Line type="monotone" dataKey="costMake" name="Cost to Make" stroke="#ef4444" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="costBuy" name="Cost to Buy" stroke="#3b82f6" strokeWidth={2} dot={false} />
                        {breakEvenQ > 0 && (
                           <ReferenceDot x={breakEvenQ} y={purchasePrice * breakEvenQ} r={6} fill="white" stroke="black" />
                        )}
                     </LineChart>
                  </ResponsiveContainer>
               </div>
            </div>
         </CardContent>
      </Card>
    </div>
  );
};