const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// Replace the wrapper to add 'group cursor-pointer'
code = code.replace(
  /className="content-stretch flex gap-\[20px\] items-center relative shrink-0"/g,
  'className="content-stretch flex gap-[20px] items-center relative shrink-0 group cursor-pointer"'
);

// Add text color transition
code = code.replace(
  /text-\[#920000\] text-\[24px\]/g,
  'text-[#920000] text-[24px] group-hover:text-[#d32f2f] transition-colors'
);

// Add translate-x-2 to the arrow wrapper
code = code.replace(
  /className="flex items-center justify-center relative shrink-0"/g,
  'className="flex items-center justify-center relative shrink-0 group-hover:translate-x-2 transition-transform duration-300"'
);

fs.writeFileSync('src/App.jsx', code, 'utf-8');
console.log('Hover effects applied to LEARN MORE > links');
