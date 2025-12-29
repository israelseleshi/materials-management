import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Slider, Input } from './ui/UIComponents';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const SupplierSelection = () => {
  // Calculator State
  const [weights, setWeights] = useState({ quality: 40, price: 35, delivery: 25 });
  const [scoresA, setScoresA] = useState({ quality: 80, price: 70, delivery: 90 });
  const [scoresB, setScoresB] = useState({ quality: 90, price: 60, delivery: 70 });

  // Adjust weights logic to ensure they roughly sum to 100 for visual sanity, 
  // though we will just normalize or allow user to mess it up for learning.
  const totalWeight = weights.quality + weights.price + weights.delivery;
  
  const finalScoreA = useMemo(() => {
    return (scoresA.quality * weights.quality + scoresA.price * weights.price + scoresA.delivery * weights.delivery) / 100;
  }, [weights, scoresA]);

  const finalScoreB = useMemo(() => {
    return (scoresB.quality * weights.quality + scoresB.price * weights.price + scoresB.delivery * weights.delivery) / 100;
  }, [weights, scoresB]);

  const chartData = [
    { name: 'Supplier A', score: finalScoreA },
    { name: 'Supplier B', score: finalScoreB },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">3.4 Supplier Selection</h2>
        <p className="text-slate-500 mt-2">Evaluation techniques and sourcing types.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
         <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
            <h4 className="font-bold text-slate-800">Sole Sourcing</h4>
            <p className="text-xs text-slate-500 mt-1">Monopoly / Patent forced.</p>
         </div>
         <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
            <h4 className="font-bold text-slate-800">Single Sourcing</h4>
            <p className="text-xs text-slate-500 mt-1">Voluntary Partnership.</p>
         </div>
         <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
            <h4 className="font-bold text-slate-800">Multiple Sourcing</h4>
            <p className="text-xs text-slate-500 mt-1">Competitive Bidding.</p>
         </div>
      </div>

      <Card className="border-blue-200 shadow-md">
        <CardHeader className="bg-slate-50 border-b border-slate-100">
          <CardTitle>Interactive: Weighted Point Method</CardTitle>
          <p className="text-sm text-slate-500">Adjust importance (weights) to see how it changes the winner.</p>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                <h4 className="font-semibold text-sm text-slate-700 uppercase tracking-wider">Step 1: Assign Weights (%)</h4>
                <Slider 
                  label="Quality Importance" 
                  min="0" max="100" 
                  value={weights.quality} 
                  valueDisplay={`${weights.quality}%`}
                  onChange={(e) => setWeights({...weights, quality: parseInt(e.target.value)})}
                />
                <Slider 
                  label="Price Importance" 
                  min="0" max="100" 
                  value={weights.price} 
                  valueDisplay={`${weights.price}%`}
                  onChange={(e) => setWeights({...weights, price: parseInt(e.target.value)})}
                />
                <Slider 
                  label="Delivery Importance" 
                  min="0" max="100" 
                  value={weights.delivery} 
                  valueDisplay={`${weights.delivery}%`}
                  onChange={(e) => setWeights({...weights, delivery: parseInt(e.target.value)})}
                />
                <div className={`text-right text-xs font-bold ${totalWeight !== 100 ? 'text-red-500' : 'text-green-600'}`}>
                   Total: {totalWeight}%
                </div>
              </div>

              <div className="space-y-4">
                 <h4 className="font-semibold text-sm text-slate-700 uppercase tracking-wider">Step 2: Supplier Raw Scores (0-100)</h4>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <span className="text-sm font-bold block text-blue-600">Supplier A</span>
                       <Input type="number" placeholder="Qual" value={scoresA.quality} onChange={(e) => setScoresA({...scoresA, quality: Number(e.target.value)})} />
                       <Input type="number" placeholder="Price" value={scoresA.price} onChange={(e) => setScoresA({...scoresA, price: Number(e.target.value)})} />
                    </div>
                    <div className="space-y-2">
                       <span className="text-sm font-bold block text-green-600">Supplier B</span>
                       <Input type="number" placeholder="Qual" value={scoresB.quality} onChange={(e) => setScoresB({...scoresB, quality: Number(e.target.value)})} />
                       <Input type="number" placeholder="Price" value={scoresB.price} onChange={(e) => setScoresB({...scoresB, price: Number(e.target.value)})} />
                    </div>
                 </div>
              </div>
            </div>

            {/* Visual Output */}
            <div className="flex flex-col justify-center h-80">
               <h4 className="text-center font-semibold mb-4 text-slate-700">Final Weighted Score</h4>
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={chartData}>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
                   <XAxis dataKey="name" />
                   <YAxis domain={[0, 100]} />
                   <Tooltip cursor={{fill: 'transparent'}} />
                   <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#22c55e'} />
                      ))}
                   </Bar>
                 </BarChart>
               </ResponsiveContainer>
               <div className="text-center mt-2 font-mono text-sm">
                  Winner: {finalScoreA > finalScoreB ? 'Supplier A' : 'Supplier B'}
               </div>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};