import { motion } from "framer-motion";

const technologies = [
  { name: "Python", category: "Language" },
  { name: "Pandas", category: "Data Processing" },
  { name: "NumPy", category: "Computation" },
  { name: "Scikit-learn", category: "ML Library" },
  { name: "TensorFlow", category: "Deep Learning" },
  { name: "FastAPI", category: "API Framework" },
  { name: "Docker", category: "Containerization" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Caching" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "AWS", category: "Cloud" },
  { name: "Grafana", category: "Monitoring" },
];

const TechStackSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-standard tools and technologies powering this project
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl px-5 py-3 cursor-default group hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                {tech.name}
              </div>
              <div className="text-xs text-muted-foreground">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
