import React from 'react';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import PrintIcon from '@mui/icons-material/Print';
import AbcIcon from '@mui/icons-material/Abc';
import BrushIcon from '@mui/icons-material/Brush';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import AddLinkIcon from '@mui/icons-material/AddLink';

const Toolbar = ({
  onBoldClick,
  onItalicClick,
  onUnderlineClick,
  onUndoClick,
  onRedoClick,
  command,
  handleCommandChange,
  handleApplyCommand,
}) => {
  const toolbarStyle = {
    backgroundColor: 'rgba(183, 225, 228, 255)', // Slight dark grey background
    padding: '8px', // Adjust padding as needed
    display: 'flex',
    alignItems: 'center',
  };

  const buttonStyle = {
    border: 'none', // Remove borders
    background: 'none', // Remove background
    padding: '0', // Remove padding
    cursor: 'pointer', // Add pointer cursor
    marginRight: '8px', // Add margin between buttons
  };

  const iconStyle = {
    color: 'rgba(90, 185, 193, 1)', // Set icon color to rgba(90, 185, 193, 1)
  };

  const inputStyle = {
    marginLeft: 'auto', // Push the input box to the right
    marginRight: '8px', // Add some margin for spacing
  };

  return (
    <div className="toolbar" style={toolbarStyle}>
      <button style={buttonStyle} onClick={onUndoClick}>
        <UndoIcon style={iconStyle} />
      </button>
      <button style={buttonStyle} onClick={onRedoClick}>
        <RedoIcon style={iconStyle} />
      </button>
      <button style={buttonStyle} onClick={onBoldClick}>
        <FormatBoldIcon style={iconStyle} />
      </button>
      <button style={buttonStyle} onClick={onItalicClick}>
        <FormatItalicIcon style={iconStyle} />
      </button>
      <button style={buttonStyle} onClick={onUnderlineClick}>
        <FormatUnderlinedIcon style={iconStyle} />
      </button>
      <button style={buttonStyle}>
        <PrintIcon style={iconStyle} />
      </button>
      <button style={buttonStyle}>
        <AbcIcon style={iconStyle} />
      </button>
      <button style={buttonStyle}>
        <BrushIcon style={iconStyle} />
      </button>
      <button style={buttonStyle}>
        <AddLinkIcon style={iconStyle} />
      </button>
      {/* Add more Material-UI Icons as needed */}
      <input
        type="text"
        className="command-input"
        value={command}
        onChange={handleCommandChange}
        placeholder="Enter command..."
        style={inputStyle}
      />
      <button className="apply-button" onClick={handleApplyCommand}>
        Apply
      </button>
    </div>
  );
};

export default Toolbar;
