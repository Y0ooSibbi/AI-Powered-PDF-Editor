import React, { useState, useRef } from 'react';
import Toolbar from './components/Toolbar';
import './App.css';

const App = () => {
  const [content, setContent] = useState('');
  const [command, setCommand] = useState(''); // State for user commands
  const textAreaRef = useRef(null);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleBoldClick = () => {
    document.execCommand('bold', false, null);
    textAreaRef.current.focus();
  };

  const handleItalicClick = () => {
    document.execCommand('italic', false, null);
    textAreaRef.current.focus();
  };

  const handleUnderlineClick = () => {
    document.execCommand('underline', false, null);
    textAreaRef.current.focus();
  };

  const handleApplyCommand = () => {
    // Process the user's command here using AI and apply changes to the PDF
    // You will need to implement the logic for AI processing and PDF editing here
    // For demonstration purposes, we'll just log the command for now
    console.log('User command:', command);

    // Clear the command input field
    setCommand('');

    // Focus back on the content editor
    textAreaRef.current.focus();
  };

  return (
    <>
      <Toolbar
        onBoldClick={handleBoldClick}
        onItalicClick={handleItalicClick}
        onUnderlineClick={handleUnderlineClick}
      />
      <div className="app-container">
        <div className="editor">
          <div
            className="editor-content"
            ref={textAreaRef}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={handleContentChange}
            placeholder="Start typing..."
          >
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
