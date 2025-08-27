const Window = ({
  children,
  title,
  text,
}: {
  children: React.ReactNode;
  title: string;
  text?: boolean;
}) => {
  return (
    <div className="relative w-full h-full max-h-full rounded-lg bg-slate-900 p-2 flex flex-col min-h-0">
      <div className="relative flex text-center flex-none">
        <div className="flex pl-3.5 pt-3">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/50"
          >
            <circle r="12" cy="12" cx="12"></circle>
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/50"
          >
            <circle r="12" cy="12" cx="12"></circle>
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/50"
          >
            <circle r="12" cy="12" cx="12"></circle>
          </svg>
        </div>
        <span className="absolute inset-x-0 top-2 text-xs text-white">
          {title}.tsx
        </span>
      </div>
      {text ? (
        <div className="mt-2 space-y-1 px-5 pb-10 flex-1 overflow-auto min-h-0 flex flex-col justify-center items-stretch">
          <p className="mt-1 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span className="text-slate-500">&lt;</span>
            <span className="text-pink-400">{title}</span>
            <span className="text-slate-500">&gt;</span>
          </p>
          <p className="ml-3 font-mono text-xs font-normal tracking-wide text-violet-400">
            <span className="text-slate-500">&lt;</span>
            <span className="text-pink-400">Text</span>
            <span className="text-slate-500">&gt;</span>
            <span className="inline-block px-1 ml-3">
              <span className="text-blue-400">{children}</span>
            </span>
            <span className="text-slate-500">&lt;/</span>
            <span className="text-pink-400">Text</span>
            <span className="text-slate-500">&gt;</span>
          </p>
          <p className="font-mono text-xs font-normal tracking-wide text-violet-400">
            <span className="text-slate-500">&lt;/</span>
            <span className="text-pink-400">{title}</span>
            <span className="text-slate-500">&gt;</span>
          </p>
        </div>
      ) : (
        <div className="mt-2 space-y-1 px-5 pb-10 flex-1 overflow-auto min-h-0 flex flex-col justify-center items-stretch">
          {children}
        </div>
      )}
    </div>
  );
};

export default Window;
