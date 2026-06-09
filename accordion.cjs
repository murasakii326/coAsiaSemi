const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// Update the container
code = code.replace(
  /className="content-stretch flex gap-\[25px\] items-center relative shrink-0 w-full"( data-node-id="567:172")/g,
  'className="content-stretch flex gap-[25px] items-center relative shrink-0 w-full group/news"$1'
);

// Update Child 1
code = code.replace(
  /className="content-stretch flex flex-col gap-\[19px\] items-start relative shrink-0 w-\[523px\]"/g,
  'className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 flex-1 transition-all duration-500 ease-in-out group-hover/news:flex-[0.75] hover:!flex-[1.5] cursor-pointer group/item"'
);

// Update Child 2
code = code.replace(
  /className="content-stretch flex flex-col gap-\[18px\] items-start relative shrink-0 w-\[523px\]"/g,
  'className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 flex-1 transition-all duration-500 ease-in-out group-hover/news:flex-[0.75] hover:!flex-[1.5] cursor-pointer group/item"'
);

// Update Child 3
code = code.replace(
  /className="content-stretch flex flex-col gap-\[17px\] items-start relative shrink-0 w-\[522px\]"/g,
  'className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 flex-1 transition-all duration-500 ease-in-out group-hover/news:flex-[0.75] hover:!flex-[1.5] cursor-pointer group/item"'
);

// I should also ensure that the images inside these cards cover the container elegantly when width changes.
// The images are in divs like:
// <div className="aspect-[523/239] relative shrink-0 w-full" ...
// <img alt="" className="absolute h-[100.18%] left-[0.04%] max-w-none top-[-0.09%] w-[99.91%]" src={...} />
// We need to change the image classes to `absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105` to look great during resize.

// News 1 Image wrapper
code = code.replace(
  /className="aspect-\[523\/239\] relative shrink-0 w-full"( data-node-id="552:4894")/g,
  'className="aspect-[523/239] relative shrink-0 w-full overflow-hidden rounded-xl"$1'
);
code = code.replace(
  /className="absolute h-\[100\.18%\] left-\[0\.04%\] max-w-none top-\[-0\.09%\] w-\[99\.91%\]"/g,
  'className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"'
);

// News 2 Image wrapper
code = code.replace(
  /className="aspect-\[523\/240\] relative shrink-0 w-full"( data-node-id="552:4887")/g,
  'className="aspect-[523/240] relative shrink-0 w-full overflow-hidden rounded-xl"$1'
);
code = code.replace(
  /className="absolute h-\[162\.71%\] left-0 max-w-none top-\[-33\.44%\] w-full"/g,
  'className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"'
);

// News 3 Image wrapper
code = code.replace(
  /className="aspect-\[522\/240\] relative shrink-0 w-full"( data-node-id="552:4901")/g,
  'className="aspect-[522/240] relative shrink-0 w-full overflow-hidden rounded-xl"$1'
);
code = code.replace(
  /className="absolute h-full left-\[-0\.1%\] max-w-none top-0 w-\[100\.1%\]"/g,
  'className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"'
);

fs.writeFileSync('src/App.jsx', code, 'utf-8');
console.log('Accordion effect applied');
