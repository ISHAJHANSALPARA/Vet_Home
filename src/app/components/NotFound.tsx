import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Looks like this page went for a walk and didn't come back. Let's get you back on track!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            >
              <Home size={20} />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-card hover:bg-muted text-foreground rounded-2xl font-medium border border-border transition-all hover:scale-105 flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1599995821374-ea079ff4fc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjdXRlJTIwcHVwcGllcyUyMGtpdHRlbnN8ZW58MXx8fHwxNzc2MTg1NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cute puppy"
              className="rounded-3xl shadow-2xl max-w-md mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
