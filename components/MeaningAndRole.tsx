import React, { useState } from 'react';
import { SECTION_3_1_DATA } from '../constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Badge } from './ui/UIComponents';
import { ArrowRightLeft, BookOpen, Search, Wallet, Truck, RotateCw } from 'lucide-react';
import { SubConcept, Principle, SpecMethod } from '../types';

const FlipCard = ({ spec }: { spec: SpecMethod }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-64 w-full cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative h-full w-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute h-full w-full backface-hidden">
          <Card className="h-full flex flex-col items-center justify-center p-6 text-center hover:border-blue-300 transition-colors">
            <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-slate-900">{spec.method_type}</h4>
            <p className="text-sm text-slate-500 mt-2 line-clamp-3">{spec.summary}</p>
            <span className="absolute bottom-4 right-4 text-xs text-blue-400 flex items-center">
              <RotateCw className="w-3 h-3 mr-1" /> Flip
            </span>
          </Card>
        </div>
        {/* Back */}
        <div className="absolute h-full w-full backface-hidden rotate-y-180">
          <Card className="h-full bg-slate-800 text-white border-slate-700 overflow-y-auto">
            <CardContent className="text-sm space-y-2 pt-6">
              <p><strong className="text-blue-300">Pros:</strong> {spec.pros[0]}</p>
              <p><strong className="text-red-300">Cons:</strong> {spec.cons[0]}</p>
              <div className="mt-2 p-2 bg-slate-700 rounded text-xs italic">
                "{spec.example}"
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const MeaningAndRole = () => {
  const purchasingVsProcurement = SECTION_3_1_DATA.content_modules[0];
  const fiveRights = SECTION_3_1_DATA.content_modules[1];
  const specs = SECTION_3_1_DATA.content_modules[2];

  return (
    <div className="space-y-12">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">3.1 Meaning & Role</h2>
        <p className="text-slate-500 mt-2">The foundation of modern supply chain management.</p>
      </div>

      {/* Purchasing vs Procurement Split Screen */}
      <section>
        <div className="flex items-center space-x-2 mb-6">
          <ArrowRightLeft className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-slate-800">Purchasing vs. Procurement</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {purchasingVsProcurement.sub_concepts.map((concept: SubConcept) => (
            <Card key={concept.term} className={`border-l-4 ${concept.term === 'Purchasing' ? 'border-l-blue-400' : 'border-l-green-400'}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${concept.term === 'Purchasing' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                      {concept.term === 'Purchasing' ? <Wallet className="h-5 w-5" /> : <Truck className="h-5 w-5" />}
                    </div>
                    <CardTitle className="text-xl">{concept.term}</CardTitle>
                  </div>
                  <Badge variant={concept.term === 'Purchasing' ? 'secondary' : 'default'}>{concept.scope}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{concept.academic_definition}</p>
                <ul className="space-y-2">
                  {concept.key_characteristics.slice(0, 3).map((char, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <span className="mr-2 text-blue-500">•</span>
                      {char}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5 Rights */}
      <section>
        <div className="flex items-center space-x-2 mb-6">
          <Search className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-slate-800">The 5 Rights (Principles)</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fiveRights.principles.map((right: Principle) => (
            <Card key={right.name} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-blue-700">{right.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 font-medium mb-2">{right.definition}</p>
                <p className="text-xs text-slate-500 bg-slate-50 p-2 rounded">
                  Example: {right.practical_example.substring(0, 80)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Specifications Flip Cards */}
      <section>
        <div className="flex items-center space-x-2 mb-6">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <h3 className="text-xl font-bold text-slate-800">Methods of Description</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specs.methods_of_description.map((spec: SpecMethod, idx: number) => (
            <FlipCard key={idx} spec={spec} />
          ))}
        </div>
      </section>

       <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <h4 className="font-bold text-blue-800 mb-2">🎓 Study Tip</h4>
          <ul className="list-disc list-inside text-sm text-blue-900 space-y-1">
            {SECTION_3_1_DATA.content_modules[3].tips_for_students.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
