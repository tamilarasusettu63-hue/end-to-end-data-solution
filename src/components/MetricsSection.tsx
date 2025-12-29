import { motion } from "framer-motion";
import { TrendingUp, Target, Zap, BarChart3 } from "lucide-react";

const metrics = [
  {
    icon: Target,
    label: "Accuracy",
    value: "95.2%",
    change: "+2.3%",
    positive: true,
    description: "Model prediction accuracy on test set",
  },
  {
    icon: TrendingUp,
    label: "Precision",
    value: "94.8%",
    change: "+1.8%",
    positive: true,
    description: "True positive rate across all classes",
  },
  {
    icon: BarChart3,
    label: "Recall",
    value: "93.6%",
    change: "+3.1%",
    positive: true,
    description: "Sensitivity measure of the model",
  },
  {
    icon: Zap,
    label: "F1-Score",
    value: "94.2%",
    change: "+2.4%",
    positive: true,
    description: "Harmonic mean of precision and recall",
  },
];

const MetricsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Model <span className="text-gradient-primary">Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key metrics demonstrating the effectiveness of our trained model
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <span className={`text-sm font-medium ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.change}
                </span>
              </div>

              <div className="text-3xl font-bold mb-1 text-gradient-primary">{metric.value}</div>
              <div className="text-lg font-medium text-foreground mb-2">{metric.label}</div>
              <p className="text-sm text-muted-foreground">{metric.description}</p>

              {/* Progress bar */}
              <div className="mt-4 h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: metric.value }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  className="h-full bg-gradient-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
