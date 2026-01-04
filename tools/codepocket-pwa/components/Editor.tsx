import React from 'react';

interface EditorProps {
  content: string;
  onChange: (val: string) => void;
}

const Editor: React.FC<EditorProps> = ({ content, onChange }) => {
  return (
    <div className="flex-1 w-full h-full relative group">
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        placeholder="// Start typing your code or text here..."
        className="w-full h-full p-4 md:p-6 bg-transparent resize-none focus:outline-none font-mono text-sm md:text-base leading-relaxed text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600"
      />
    </div>
  );
};

export default Editor;