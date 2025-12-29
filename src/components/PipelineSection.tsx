import { motion } from "framer-motion";
import { Database, Wrench, Brain, Rocket, ArrowRight } from "lucide-react";

const stages = [
  {
    icon: Database,
    title: "Data Collection",
    description: "Gathering raw data from reliable sources, understanding patterns and initial exploration.",
    color: "from-cyan-500 to-blue-500",
    details: ["50,000+ records", "5 data sources", "Real-time feeds"],
  },
  {
    icon: Wrench,
    title: "Preprocessing",
    description: "Cleaning, handling missing values, feature engineering and data transformation.",
    color: "from-blue-500 to-purple-500",
    details: ["Missing value handling", "Feature scaling", "Outlier detection"],
  },
  {
    icon: Brain,
    title: "Model Training",
    description: "Building, training and evaluating multiple ML models to find the best performer.",
    color: "from-purple-500 to-pink-500",
    details: ["5 algorithms tested", "Cross-validation", "Hyperparameter tuning"],
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "REST API deployment with real-time predictions and interactive web interface.",
    color: "from-pink-500 to-orange-500",
    details: ["FastAPI backend", "Docker container", "CI/CD pipeline"],
  },
];

const PipelineSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient-primary">Pipeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete data science lifecycle from raw data to production deployment
          </p>
        </motion.div>

        {/* Pipeline stages */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 opacity-30" />

          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stage.color} p-0.5 mb-5`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <stage.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                {/* Stage number */}
                <div className="text-xs text-muted-foreground mb-2">STAGE {index + 1}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{stage.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">{stage.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {stage.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              {index < stages.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PipelineSection;
