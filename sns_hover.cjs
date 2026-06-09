const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// The SNS icons container
// We will replace the class names for the 4 image wrappers inside data-node-id="567:202"

const hoverClasses = " cursor-pointer hover:-translate-y-2 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(71,224,255,0.6)]";

code = code.replace(
  /className="h-\[78px\] relative shrink-0 w-\[80px\]"( data-node-id="552:4852")/g,
  'className="h-[78px] relative shrink-0 w-[80px]' + hoverClasses + '"$1'
);

code = code.replace(
  /className="h-\[78px\] relative shrink-0 w-\[74px\]"( data-node-id="552:4851")/g,
  'className="h-[78px] relative shrink-0 w-[74px]' + hoverClasses + '"$1'
);

code = code.replace(
  /className="h-\[78px\] relative shrink-0 w-\[74px\]"( data-node-id="552:4850")/g,
  'className="h-[78px] relative shrink-0 w-[74px]' + hoverClasses + '"$1'
);

code = code.replace(
  /className="h-\[73\.596px\] relative shrink-0 w-\[74px\]"( data-node-id="567:201")/g,
  'className="h-[73.596px] relative shrink-0 w-[74px]' + hoverClasses + '"$1'
);

fs.writeFileSync('src/App.jsx', code, 'utf-8');
console.log('SNS icons hover effect applied');
