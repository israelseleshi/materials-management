import React from 'react';

// Card Components
export const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg border border-slate-200 shadow-sm ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pb-2 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`font-semibold leading-none tracking-tight text-slate-900 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pt-2 ${className}`}>
    {children}
  </div>
);

export const CardDescription = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-sm text-slate-500 mt-2 ${className}`}>
    {children}
  </p>
);

// Badge
export const Badge = ({ children, variant = 'default', className = "" }: { children: React.ReactNode; variant?: 'default' | 'secondary' | 'outline'; className?: string }) => {
  const styles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "border border-slate-200 text-slate-900 hover:bg-slate-100"
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
}

export const Button = ({ children, variant = 'primary', className = "", ...props }: ButtonProps) => {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-600",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900"
  };
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Input
export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
    {...props}
  />
);

// Slider (Simple HTML range wrapper styled)
interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  valueDisplay?: string | number;
}
export const Slider = ({ label, valueDisplay, ...props }: SliderProps) => (
  <div className="w-full space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium text-slate-700">{label}</span>
      <span className="text-slate-500">{valueDisplay}</span>
    </div>
    <input
      type="range"
      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      {...props}
    />
  </div>
);