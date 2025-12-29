import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Terminal, CheckCircle, Loader2 } from "lucide-react";

const sampleInput = {
  feature_1: 0.85,
  feature_2: 23.5,
  feature_3: "category_A",
  feature_4: 156,
};

const sampleOutput = {
  prediction: "Class_A",
  confidence: 0.952,
  probabilities: {
    Class_A: 0.952,
    Class_B: 0.031,
    Class_C: 0.017,
  },
  inference_time_ms: 42,
};

const ApiDemoSection = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    setShowOutput(false);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsRunning(false);
    setShowOutput(true);
  };

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Live <span className="text-gradient-primary">API Demo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience real-time predictions with our deployed REST API
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-sm text-muted-foreground ml-2 font-mono">api.predict.model</span>
              <Terminal className="w-4 h-4 text-muted-foreground ml-auto" />
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm">
              {/* Request */}
              <div className="mb-6">
                <div className="text-muted-foreground mb-2">
                  <span className="text-primary">POST</span> /api/v1/predict
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/30">
                  <pre className="text-muted-foreground overflow-x-auto">
                    {JSON.stringify(sampleInput, null, 2)}
                  </pre>
                </div>
              </div>

              {/* Run button */}
              <div className="flex justify-center mb-6">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleRun}
                  disabled={isRunning}
                  className="min-w-[180px]"
                >
                  {isRunning ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Run Prediction
                    </>
                  )}
                </Button>
              </div>

              {/* Response */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: showOutput ? 1 : 0, 
                  height: showOutput ? "auto" : 0 
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Response (200 OK)</span>
                  <span className="text-muted-foreground ml-auto">42ms</span>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-green-500/20">
                  <pre className="text-green-300 overflow-x-auto">
                    {JSON.stringify(sampleOutput, null, 2)}
                  </pre>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApiDemoSection;
