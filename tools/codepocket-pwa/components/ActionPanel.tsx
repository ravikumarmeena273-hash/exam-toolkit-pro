import React from 'react';
import { Save, FileText, FileCode } from 'lucide-react';
import { FileData } from '../types';

interface ActionPanelProps {
  fileData: FileData;
  setFileData: React.Dispatch<React.SetStateAction<FileData>>;
  onSave: () => void;
}

const ActionPanel: React.FC<ActionPanelProps> = ({ fileData, setFileData, onSave }) => {
  return (
    <div className="bg-lightSurface dark:bg-darkSurface border-t border-slate-200 dark:border-slate-800 p-4 pb-6 md:pb-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-colors duration-300 shrink-0 z-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-center">
        
        {/* Inputs Container */}
        <div className="flex-1 grid grid-cols-12 gap-3 w-full">
          {/* Filename Input */}
          <div className="col-span-8 md:col-span-9 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FileText className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={fileData.name}
              onChange={(e) => setFileData({ ...fileData, name: e.target.value })}
              placeholder="Filename"
              className="block w-full pl-10 pr-3 py-3 rounded-2xl border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 text-sm font-medium transition-all"
            />
          </div>

          {/* Extension Input */}
          <div className="col-span-4 md:col-span-3 relative">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-slate-400 font-bold">.</span>
            </div>
            <input
              type="text"
              value={fileData.extension}
              onChange={(e) => setFileData({ ...fileData, extension: e.target.value })}
              placeholder="ext"
              className="block w-full pl-6 pr-3 py-3 rounded-2xl border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 text-sm font-medium transition-all"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={onSave}
          className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white rounded-2xl font-bold shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <Save size={18} className="stroke-2" />
          <span>Save File</span>
        </button>
      </div>
    </div>
  );
};

export default ActionPanel;