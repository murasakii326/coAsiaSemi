const fs = require('fs');
const inputFile = 'C:\\Users\\minme\\.gemini\\antigravity-ide\\brain\\65ef8648-212b-4d35-9deb-ef1262b88375\\.system_generated\\steps\\10\\output.txt';
let outputCode = fs.readFileSync(inputFile, 'utf-8');

// Replace local asset paths
outputCode = outputCode.replace(/http:\/\/localhost:3845\/assets\//g, '/assets/');

// Remove system message
const systemMsgIndex = outputCode.indexOf('SUPER CRITICAL:');
if (systemMsgIndex !== -1) {
  outputCode = outputCode.substring(0, systemMsgIndex);
}

// Extract constants (first 36 lines)
const lines = outputCode.split('\n');
const constLines = lines.slice(0, 36).join('\n');
let jsxCode = lines.slice(36).join('\n');

const zoomWrapper = `import React, { useEffect, useState } from 'react';

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const newScale = Math.min(window.innerWidth / 1920, 1);
      setScale(newScale);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full overflow-x-hidden flex justify-center">
      <div className="w-[1920px] origin-top bg-white" style={{ zoom: scale }}>
`;

jsxCode = jsxCode.replace('export default function Component() {\n  return (', zoomWrapper);

// Put the background video in the top-0 container (552:4914 is the empty background container)
const videoHtml = '<div className="absolute h-[1080px] left-0 top-0 w-[1920px] overflow-hidden bg-black" data-node-id="552:4914"><video autoPlay loop muted playsInline className="absolute h-full w-full object-cover opacity-80"><source src="/main-bg.mp4" type="video/mp4" /></video></div>';
jsxCode = jsxCode.replace('<div className="absolute h-[1080px] left-0 top-0 w-[1920px]" data-node-id="552:4914" />', videoHtml);

// Make the top container's text more visible if needed (opacity handles it)

// Balance the div tags
const openDivs = (jsxCode.match(/<div(\s|>)/g) || []).length;
const selfClosing = (jsxCode.match(/<div[^>]*\/>/g) || []).length;
const open = openDivs - selfClosing;
const close = (jsxCode.match(/<\/div>/g) || []).length;

const missing = open - close;
let closingTags = '';
for(let i=0; i<missing; i++) closingTags += '</div>\n';

jsxCode = jsxCode.replace(/\s*\);\s*}\s*$/, '\n' + closingTags + '  );\n}\n');

const finalCode = constLines + '\n' + jsxCode;
fs.writeFileSync('src/App.jsx', finalCode, 'utf-8');
console.log('Fixed exactly with video at top-0!');
