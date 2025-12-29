import React from 'react';
import { Section } from '../types';
import { BookOpen, Target, RotateCcw, Calculator, Scale, PanelLeft, PanelLeftClose } from 'lucide-react';
import { Button } from './ui/UIComponents';

interface SidebarProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export const Sidebar = ({ currentSection, onNavigate, isOpen, onCloseMobile, isCollapsed, toggleCollapse }: SidebarProps) => {
  const menuItems = [
    { id: Section.Role, label: '3.1 Meaning & Role', icon: BookOpen },
    { id: Section.Objectives, label: '3.2 Objectives', icon: Target },
    { id: Section.Cycle, label: '3.3 Procedures', icon: RotateCcw },
    { id: Section.Selection, label: '3.4 Supplier Selection', icon: Scale },
    { id: Section.MakeOrBuy, label: '3.5 Make or Buy', icon: Calculator },
  ];

  const handleNav = (id: Section) => {
    onNavigate(id);
    onCloseMobile();
  };

  return (
    <>
       {/* Mobile Overlay */}
       {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside className={`fixed top-0 left-0 z-30 h-screen bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${isCollapsed ? 'w-16' : 'w-64'}`}>
        <div className={`p-4 border-b border-slate-100 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && (
             <h1 className="text-xl font-bold text-slate-900 whitespace-nowrap overflow-hidden">
               Procurement<br/><span className="text-blue-600">Guide</span>
             </h1>
          )}
          
          {/* Collapse Toggle for Desktop */}
          <button 
             onClick={toggleCollapse}
             className="hidden md:flex p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
          >
             {isCollapsed ? <PanelLeftClose className="w-5 h-5" /> : <PanelLeft className="w-5 h-5" />}
          </button>
        </div>

        <nav className="p-2 space-y-1 flex-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full flex items-center px-3 py-3 rounded-lg transition-colors text-sm font-medium whitespace-nowrap overflow-hidden ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'} ${isCollapsed ? 'justify-center' : 'justify-start space-x-3'}`}
                title={isCollapsed ? item.label : ''}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
        
        {!isCollapsed && (
          <div className="p-6 border-t border-slate-100 bg-slate-50">
             <p className="text-xs text-slate-400">Chapter 3 Study Guide</p>
          </div>
        )}
      </aside>
    </>
  );
};