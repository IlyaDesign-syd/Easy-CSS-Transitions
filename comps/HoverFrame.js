import { useState, useRef, useEffect } from 'react';

const HoverFrame = () => {
  const [showText, setShowText] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setShowText(true);
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowText(false);
    }, 500);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div style={{ backgroundColor: 'red', height: '300px', width: '100px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >fdghthrd
      <div style={{ display: showText ? 'block' : 'none', position: 'absolute', top: 0, left: 0 }}>
        This is the text that appears when the mouse is hovered over the div.
      </div>
      <div style={{ backgroundColor: '#ccc', height: '100%', width: '100%' }}></div>
    </div>
  );
};

export default HoverFrame;