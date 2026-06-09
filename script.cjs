const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf-8');

// Replace standard footer sub-links
code = code.replace(
  /className="relative shrink-0 w-full"( data-node-id="552:48(44|45|46|23|24|25|26|28|29|30|31|32|34|35|36|37|38|40|41)")/g,
  'className="relative shrink-0 w-full cursor-pointer hover:text-[#47e0ff] transition-colors"$1'
);

// Replace main footer links
code = code.replace(
  /className="relative shrink-0"( data-node-id="552:49(26|27|28|29|30)")/g,
  'className="relative shrink-0 cursor-pointer hover:text-[#47e0ff] transition-colors"$1'
);

fs.writeFileSync('src/App.jsx', code, 'utf-8');
console.log('Footer links updated!');
