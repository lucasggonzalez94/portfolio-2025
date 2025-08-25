import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="px-4 py-3 rounded-full backdrop-blur-lg border border-indigo-500/50 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 active:scale-95 transition-all duration-300 ease-out cursor-pointer hover:border-indigo-500/50 hover:bg-gradient-to-tr hover:from-indigo-500/30 hover:to-black/40 group relative overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
      <div className="relative z-10">{children}</div>
    </button>
  );
}
