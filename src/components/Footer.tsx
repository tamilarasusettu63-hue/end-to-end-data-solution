import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* CTA */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Interested in this project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Check out the source code or get in touch to learn more about the implementation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg">
              <Github className="w-5 h-5" />
              View on GitHub
              <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="glass" size="lg">
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2024 Data Science Portfolio. Built with passion for machine learning.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
