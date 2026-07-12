import {
  Stethoscope,
  Scissors,
  Heart,
  Clock,
  Syringe,
  Microscope,
  Pill,
  Bone,
  Home,
  Sparkles,
  Activity,
  ShieldCheck
} from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const services = [
    {
      icon: <Stethoscope size={36} />,
      title: "General Checkups",
      description: "Comprehensive health examinations to keep your pet in optimal condition. Regular wellness visits help prevent health issues before they become serious.",
    },
    {
      icon: <Syringe size={36} />,
      title: "Vaccinations",
      description: "Protect your pets with our complete vaccination programs. We follow the latest veterinary guidelines to ensure your pet stays safe from preventable diseases.",
    },
    {
      icon: <Heart size={36} />,
      title: "Surgery",
      description: "Advanced surgical procedures performed by experienced veterinary surgeons. From routine spay/neuter to complex operations, we provide expert surgical care.",
    },
    {
      icon: <Clock size={36} />,
      title: "Emergency Care",
      description: "24/7 emergency services available when your pet needs immediate medical attention. Our team is always ready to handle urgent situations.",
    },
    {
      icon: <Scissors size={36} />,
      title: "Grooming",
      description: "Professional grooming services including bathing, haircuts, nail trimming, and ear cleaning to keep your pet looking and feeling their best.",
    },
    {
      icon: <Microscope size={36} />,
      title: "Diagnostic Testing",
      description: "State-of-the-art laboratory and diagnostic imaging services. Blood work, X-rays, ultrasound, and more to accurately diagnose health conditions.",
    },
    {
      icon: <Pill size={36} />,
      title: "Pharmacy",
      description: "Full-service pharmacy with a wide range of medications and supplements. Convenient prescription refills and expert medication guidance.",
    },
    {
      icon: <Bone size={36} />,
      title: "Dental Care",
      description: "Complete dental services including cleanings, extractions, and oral health assessments to maintain your pet's dental hygiene.",
    },
    {
      icon: <Home size={36} />,
      title: "House Calls",
      description: "Mobile veterinary services for pets who are more comfortable at home. Convenient in-home care for senior pets or anxious animals.",
    },
    {
      icon: <Sparkles size={36} />,
      title: "Wellness Plans",
      description: "Customized wellness programs tailored to your pet's age, breed, and health needs. Preventive care packages to keep your pet healthy year-round.",
    },
    {
      icon: <Activity size={36} />,
      title: "Nutrition Counseling",
      description: "Expert dietary advice and weight management programs. We help you choose the right food and create healthy eating habits for your pet.",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Preventive Care",
      description: "Parasite prevention, flea and tick control, heartworm prevention, and other proactive measures to protect your pet's health.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-medium text-sm"> Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Comprehensive Pet Care Services
            </h1>
            <p className="text-xl text-muted-foreground">
              From routine checkups to specialized treatments, we provide everything your pet needs to live a long, healthy, and happy life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-8 bg-card rounded-3xl border border-border hover:shadow-2xl transition-all hover:scale-105 hover:border-primary/50"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is here to help. Contact us for a consultation and we'll guide you to the right care for your pet.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/appointment"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Book Appointment
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-card hover:bg-muted text-foreground rounded-2xl font-medium border border-border transition-all hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
