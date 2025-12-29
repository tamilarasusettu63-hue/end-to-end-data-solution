import { motion } from "framer-motion";

const DataFlowBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    y: 15 + i * 12,
    delay: i * 0.3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Data flow lines */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute left-0 right-0 h-px"
          style={{ top: `${line.y}%` }}
        >
          <motion.div
            className="h-full w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            animate={{
              x: ["-100%", "calc(100vw + 100%)"],
            }}
            transition={{
              duration: 8,
              delay: line.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />
    </div>
  );
};

export default DataFlowBackground;
