import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MeaningAndRole } from './components/MeaningAndRole';
import { Objectives } from './components/Objectives';
import { Procedures } from './components/Procedures';
import { SupplierSelection } from './components/SupplierSelection';
import { MakeOrBuy } from './components/MakeOrBuy';
import { Section } from './types';
import { Menu } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.Role);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const renderSection = () => {
    switch (currentSection) {
      case Section.Role: return <MeaningAndRole />;
      case Section.Objectives: return <Objectives />;
      case Section.Cycle: return <Procedures />;
      case Section.Selection: return <SupplierSelection />;
      case Section.MakeOrBuy: return <MakeOrBuy />;
      default: return <MeaningAndRole />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <Sidebar 
        currentSection={currentSection} 
        onNavigate={setCurrentSection}
        isOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'md:ml-16' : 'md:ml-64'}`}>
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-10">
           <span className="font-bold text-slate-800">Procurement Guide</span>
           <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-slate-600">
             <Menu className="w-6 h-6" />
           </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto w-full">
           <div className="animate-in fade-in duration-500">
             {renderSection()}
           </div>
        </main>
      </div>
    </div>
  );
}