import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Editor from './components/Editor';
import ActionPanel from './components/ActionPanel';
import { useTheme } from './hooks/useTheme';
import { FileData } from './types';

const App: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [fileData, setFileData] = useState<FileData>({
    name: 'untitled',
    extension: 'txt'
  });
  const { isDark, toggleTheme } = useTheme();

  // Load draft from local storage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('cp_draft_content');
    const savedName = localStorage.getItem('cp_draft_name');
    const savedExt = localStorage.getItem('cp_draft_ext');

    if (savedContent) setContent(savedContent);
    if (savedName) setFileData(prev => ({ ...prev, name: savedName }));
    if (savedExt) setFileData(prev => ({ ...prev, extension: savedExt }));
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('cp_draft_content', content);
    localStorage.setItem('cp_draft_name', fileData.name);
    localStorage.setItem('cp_draft_ext', fileData.extension);
  }, [content, fileData]);

  const handleSave = () => {
    if (!content) {
      alert('File content is empty!');
      return;
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Ensure clean extension
    let ext = fileData.extension.replace(/^\./, '');
    if (!ext) ext = 'txt';

    link.href = url;
    link.download = `${fileData.name || 'untitled'}.${ext}`;
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`flex flex-col h-full ${isDark ? 'dark' : ''}`}>
      <div className="flex flex-col h-full bg-light dark:bg-dark relative">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="flex-1 overflow-hidden relative flex flex-col w-full max-w-5xl mx-auto">
          <Editor 
            content={content} 
            onChange={setContent} 
          />
        </main>
        
        <ActionPanel 
          fileData={fileData} 
          setFileData={setFileData} 
          onSave={handleSave} 
        />
      </div>
    </div>
  );
};

export default App;