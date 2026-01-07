import React from 'react';

const AppStoreButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <button className={`flex items-center gap-3 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-all active:scale-95 shadow-lg ${className}`}>
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.837 14.544c-.035 2.802 2.457 3.737 2.566 3.784-.012.035-.403 1.378-1.332 2.735-.802 1.168-1.636 2.333-2.952 2.356-1.284.024-1.706-.767-3.186-.767-1.49 0-1.956.744-3.197.791-1.272.046-2.269-1.273-3.093-2.462-1.684-2.428-2.972-6.864-1.229-9.873.865-1.499 2.418-2.451 4.116-2.475 1.295-.023 2.517.872 3.308.872.79 0 2.268-1.08 3.837-.918.653.023 2.488.267 3.664 1.986-.093.058-2.186 1.278-2.186 3.824zm-4.73-10.706c.674-.814 1.127-1.94 1.001-3.079-1.07.047-2.362.72-3.037 1.522-.603.709-1.127 1.848-1.001 2.962 1.186.094 2.396-.604 3.037-1.405z"/>
      </svg>
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] uppercase font-medium text-gray-300">Download on the</span>
        <span className="text-xl font-semibold -mt-0.5 font-sans">App Store</span>
      </div>
    </button>
  );
};

export default AppStoreButton;