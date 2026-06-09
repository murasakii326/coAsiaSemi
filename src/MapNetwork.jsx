import { motion } from 'framer-motion';

export default function MapNetwork() {
  const mapImage = "/Massive_world_map.jpeg";

  const nodes = [
    { name: 'Korea (HQ)', x: '84%', y: '40%' }, 
    { name: 'USA', x: '16%', y: '40%' },       
    { name: 'Taiwan', x: '82%', y: '48%' },    
    { name: 'Vietnam', x: '78%', y: '51%' },   
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden pointer-events-none">
      <motion.div 
        className="relative w-full h-full"
        initial={{ scale: 1.05, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <img 
          src={mapImage} 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          alt="World Map" 
        />

        {nodes.map((node, i) => (
          <motion.div 
            key={i}
            className="absolute flex flex-col items-center z-20"
            style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 1.5 + (i * 0.2) }}
            viewport={{ once: false }}
          >
            {/* Ping effect container */}
            <div className="relative flex justify-center items-center">
              <div className="w-5 h-5 bg-[#47e0ff] rounded-full animate-ping absolute opacity-60"></div>
              <div className="w-2.5 h-2.5 bg-white rounded-full border border-[#47e0ff] relative z-10 shadow-[0_0_10px_#47e0ff]"></div>
            </div>
            
            {/* Label */}
            <p className="mt-2 text-[#47e0ff] font-bold text-sm bg-black/60 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap shadow-[0_0_15px_rgba(71,224,255,0.2)]">
              {node.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
