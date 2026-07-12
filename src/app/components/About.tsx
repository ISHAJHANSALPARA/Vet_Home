import { Award, Users, Heart, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const stats = [
    { icon: <Award size={32} />, value: "15+", label: "Years Experience" },
    { icon: <Users size={32} />, value: "10,000+", label: "Happy Pets" },
    { icon: <Heart size={32} />, value: "100%", label: "Dedicated Care" },
    { icon: <Clock size={32} />, value: "24/7", label: "Emergency Support" },
  ];

  const values = [
    {
      title: "Compassionate Care",
      description: "We treat every pet with the same love and attention we'd give our own. Your pet's comfort and wellbeing are our highest priorities.",
    },
    {
      title: "Expert Knowledge",
      description: "Our team stays current with the latest veterinary advances through continuous education and training, ensuring the best care possible.",
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art equipment and technology combined with a comfortable, stress-free environment for both pets and their owners.",
    },
    {
      title: "Client Partnership",
      description: "We believe in working together with pet owners, keeping you informed and involved in every decision about your pet's health.",
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
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="text-accent font-medium text-sm"> About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Where Pets Come First
            </h1>
            <p className="text-xl text-muted-foreground">
              Since 2010, ASHA Veterinary Clinic has been providing exceptional care to pets in our community with compassion, expertise, and dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ASHA Veterinary Clinic was founded in 2010 by Dr. Priya Patel, who dreamed of creating a veterinary practice that truly puts pets and their families first. What started as a small neighborhood clinic has grown into a full-service animal hospital, but our core values remain unchanged.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that every pet deserves compassionate, high-quality medical care in an environment that feels safe and welcoming. Our team is passionate about what we do, and it shows in the relationships we build with our patients and their families.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, ASHA serves thousands of pets in our community, offering everything from routine wellness exams to advanced surgical procedures. We're proud to be your partner in keeping your pets healthy and happy throughout their lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1570824104629-1817c91f7d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxjdXRlJTIwcHVwcGllcyUyMGtpdHRlbnN8ZW58MXx8fHwxNzc2MTg1NzAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cute kittens"
                className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-3xl border border-border shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your pet's wellbeing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-[3rem] border border-border shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                <div className="md:col-span-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
                    <img
                      src="https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx2ZXRlcmluYXJpYW4lMjB3aXRoJTIwcGV0cyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzYxODU3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Dr. Priya Patel"
                      className="relative rounded-3xl w-full h-[350px] object-cover shadow-xl"
                    />
                  </div>
                </div>

                <div className="md:col-span-3 flex flex-col justify-center">
                  <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 self-start">
                    <span className="text-primary font-medium text-sm">Lead Veterinarian</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">Dr. Priya Patel</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    DVM, MS (Veterinary Medicine)
                  </p>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Dr. Patel brings over 15 years of veterinary experience to ASHA Veterinary Clinic.
                    </p>
                    <p>
                      Her special interests include preventive medicine, soft tissue surgery, and senior pet care. Dr. Patel is known for her gentle approach with anxious pets and her dedication to client education.
                    </p>
                    <p>
                      When she's not caring for patients, Dr. Patel enjoys hiking with her two rescue dogs, Max and Luna, and volunteering at the local animal shelter.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">Qualifications:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Doctor of Veterinary Medicine (DVM)</li>
                      <li>• Master of Science in Veterinary Medicine</li>
                      <li>• Board Certified Veterinary Surgeon</li>
                      {/* <li>• Member, American Veterinary Medical Association</li> */}
                      <li>• Advanced Training in Emergency Medicine</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
