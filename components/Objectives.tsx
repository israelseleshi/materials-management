import React, { useState } from 'react';
import { SECTION_3_2_DATA } from '../constants';
import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from './ui/UIComponents';
import { Target, AlertTriangle, Lightbulb, Activity, Check, X, Shield, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { CoreConcept, QuizQuestion } from '../types';

export const Objectives = () => {
  const { module_metadata, core_concepts, interactive_quiz_data } = SECTION_3_2_DATA;

  return (
    <div className="space-y-10">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">{module_metadata.section_title}</h2>
            <p className="text-slate-500 mt-2">{module_metadata.learning_outcome}</p>
          </div>
          <Badge variant="outline">Updated: {module_metadata.last_updated}</Badge>
        </div>
      </div>

      <div className="grid gap-8">
        {core_concepts.map((concept) => (
          <ConceptCard key={concept.id} concept={concept} />
        ))}
      </div>

      <QuizSection quizData={interactive_quiz_data} />
    </div>
  );
};

const ConceptCard = ({ concept }: { concept: CoreConcept }) => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <Card className="overflow-hidden border-t-4 border-t-blue-600">
      <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <Badge>{concept.category}</Badge>
               {concept.priority_level.includes("Critical") && <Badge variant="default" className="bg-red-600">Critical</Badge>}
            </div>
            <CardTitle className="text-xl text-slate-900">{concept.title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-6">
        {/* Definition & Analysis */}
        <div className="prose prose-sm text-slate-600 max-w-none">
          <p className="font-medium text-slate-900 text-base">{concept.definition}</p>
          {concept.comprehensive_analysis && (
            <ul className="mt-4 space-y-2 list-disc pl-5">
              {concept.comprehensive_analysis.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
          {concept.explanation && <p className="mt-2">{concept.explanation}</p>}
        </div>

        {/* Sub Concepts (for Prudently/Competitively) */}
        {concept.sub_concepts && (
          <div className="grid md:grid-cols-2 gap-4">
            {concept.sub_concepts.map((sub, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-800 mb-2">{sub.term}</h4>
                <p className="text-sm text-slate-600 mb-3">{sub.explanation}</p>
                {sub.tactics && (
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase">Tactics:</span>
                    <ul className="mt-1 space-y-1">
                      {sub.tactics.map((t, i) => (
                        <li key={i} className="text-xs flex items-center text-slate-700">
                          <ArrowRight className="w-3 h-3 mr-1 text-blue-500" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Integration Points */}
        {concept.integration_points && (
          <div className="space-y-3">
             <h4 className="font-bold text-slate-900 flex items-center"><Users className="w-4 h-4 mr-2"/> Integration Matrix</h4>
             <div className="grid sm:grid-cols-2 gap-3">
               {concept.integration_points.map((point, idx) => (
                 <div key={idx} className="bg-white border border-slate-200 p-3 rounded shadow-sm">
                    <span className="text-xs font-bold text-blue-600 block mb-1">{point.department}</span>
                    <p className="text-sm text-slate-700">{point.interaction}</p>
                 </div>
               ))}
             </div>
          </div>
        )}

        {/* Risk Factors & KPIs Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {concept.risk_factors && (
             <div className="bg-red-50 p-4 rounded-lg border border-red-100">
               <h4 className="flex items-center text-sm font-bold text-red-800 mb-3">
                 <AlertTriangle className="w-4 h-4 mr-2" /> Risk Factors
               </h4>
               <ul className="space-y-2">
                 {concept.risk_factors.map((risk, idx) => (
                   <li key={idx} className="text-sm text-red-700 flex items-start">
                     <span className="mr-2">•</span>{risk}
                   </li>
                 ))}
               </ul>
             </div>
          )}
          {concept.key_performance_indicators && (
             <div className="bg-green-50 p-4 rounded-lg border border-green-100">
               <h4 className="flex items-center text-sm font-bold text-green-800 mb-3">
                 <Activity className="w-4 h-4 mr-2" /> KPIs
               </h4>
               <ul className="space-y-2">
                 {concept.key_performance_indicators.map((kpi, idx) => (
                   <li key={idx} className="text-sm text-green-700 flex items-start">
                     <span className="mr-2">•</span>{kpi}
                   </li>
                 ))}
               </ul>
             </div>
          )}
        </div>

        {/* Case Study Toggle */}
        {concept.case_study && (
          <div className="border-t border-slate-100 pt-4">
             <button 
               onClick={() => setShowCaseStudy(!showCaseStudy)}
               className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
             >
               <Lightbulb className="w-4 h-4 mr-2" />
               {showCaseStudy ? "Hide Case Study" : `Case Study: ${concept.case_study.scenario_title}`}
             </button>
             
             {showCaseStudy && (
               <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 animate-in slide-in-from-top-2">
                  <h4 className="font-bold text-yellow-900 mb-2">{concept.case_study.scenario_title}</h4>
                  <div className="space-y-2 text-sm text-yellow-800">
                    <p><strong>Situation:</strong> {concept.case_study.situation}</p>
                    {concept.case_study.conflict && <p><strong>Conflict:</strong> {concept.case_study.conflict}</p>}
                    {concept.case_study.action && <p><strong>Action:</strong> {concept.case_study.action}</p>}
                    <p><strong>Outcome:</strong> {concept.case_study.outcome}</p>
                    {concept.case_study.lesson && <p className="mt-2 pt-2 border-t border-yellow-200 font-semibold">💡 Lesson: {concept.case_study.lesson}</p>}
                  </div>
               </div>
             )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const QuizSection = ({ quizData }: { quizData: QuizQuestion[] }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState<Record<number, boolean>>({});

  const handleSelect = (qIdx: number, option: string) => {
    if (showResult[qIdx]) return;
    setAnswers(prev => ({ ...prev, [qIdx]: option }));
  };

  const checkAnswer = (qIdx: number) => {
    setShowResult(prev => ({ ...prev, [qIdx]: true }));
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
        <Shield className="w-6 h-6 mr-2 text-blue-600"/> Knowledge Check
      </h3>
      <div className="grid gap-6">
        {quizData.map((q, idx) => (
          <Card key={idx} className="border-slate-200">
            <CardHeader className="bg-slate-50 pb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Question {idx + 1}</span>
              <p className="font-semibold text-slate-800 text-lg">{q.question}</p>
            </CardHeader>
            <CardContent className="pt-6">
               <div className="space-y-3">
                 {q.options.map((option) => {
                   const isSelected = answers[idx] === option;
                   const isRevealed = showResult[idx];
                   const isCorrect = option === q.correct_answer;
                   
                   let btnClass = "w-full text-left p-3 rounded-lg border transition-all text-sm ";
                   if (isRevealed) {
                     if (isCorrect) btnClass += "bg-green-100 border-green-300 text-green-800 font-medium";
                     else if (isSelected) btnClass += "bg-red-100 border-red-300 text-red-800";
                     else btnClass += "bg-slate-50 border-slate-200 opacity-50";
                   } else {
                     if (isSelected) btnClass += "bg-blue-50 border-blue-300 text-blue-800 shadow-sm ring-1 ring-blue-300";
                     else btnClass += "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300";
                   }

                   return (
                     <button 
                        key={option}
                        onClick={() => handleSelect(idx, option)}
                        className={btnClass}
                        disabled={isRevealed}
                     >
                       <div className="flex items-center justify-between">
                         <span>{option}</span>
                         {isRevealed && isCorrect && <Check className="w-4 h-4 text-green-600"/>}
                         {isRevealed && isSelected && !isCorrect && <X className="w-4 h-4 text-red-600"/>}
                       </div>
                     </button>
                   );
                 })}
               </div>
               
               {!showResult[idx] ? (
                 <Button 
                   onClick={() => checkAnswer(idx)} 
                   disabled={!answers[idx]}
                   className="mt-4 w-full md:w-auto"
                 >
                   Check Answer
                 </Button>
               ) : (
                 <div className="mt-4 p-4 bg-slate-50 rounded-lg text-sm text-slate-700 animate-in fade-in">
                   <p className="font-bold mb-1">Explanation:</p>
                   {q.explanation}
                 </div>
               )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};