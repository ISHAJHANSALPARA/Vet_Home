import { Link } from "react-router";
import { Heart, Scissors, Stethoscope, Clock, Star } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: "Vaccination",
      description: "Keep your pets protected with our comprehensive vaccination programs",
    },
    {
      icon: <Scissors size={32} />,
      title: "Grooming",
      description: "Professional grooming services to keep your pet looking and feeling great",
    },
    {
      icon: <Heart size={32} />,
      title: "Surgery",
      description: "Advanced surgical care with experienced veterinary surgeons",
    },
    {
      icon: <Clock size={32} />,
      title: "Emergency Care",
      description: "24/7 emergency services for when your pet needs immediate attention",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      pet: "Tommy (Golden Retriever)",
      rating: 5,
      text: "ASHA Veterinary Clinic has been wonderful for Tommy. The staff is caring and professional, and Dr. Patel always takes time to explain everything clearly.",
    },
    {
      name: "Meera Singh",
      pet: "Mina (Persian Cat)",
      rating: 5,
      text: "I wouldn't trust anyone else with Mina's care. The clinic is clean, modern, and the team genuinely loves animals. Highly recommend!",
    },
    {
      name: "Amit Desai",
      pet: "Charlie (Beagle)",
      rating: 5,
      text: "From routine checkups to emergency visits, ASHA has always been there for us. They treat Charlie like family, and it shows in their exceptional care.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-medium text-sm"> Trusted Pet Care Since 2010</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Caring for Your Pets{" "}
              <span className="text-primary">Like Family</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert veterinary care with compassion and dedication. Your pet's health and happiness are our top priority.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-card hover:bg-muted text-foreground rounded-2xl font-medium border border-border transition-all hover:scale-105"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxoYXBweSUyMGRvZyUyMGNhdCUyMHRvZ2V0aGVyJTIwdmV0ZXJpbmFyeXxlbnwxfHx8fDE3NzYxODU3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Happy dog and cat together"
              className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive veterinary care tailored to your pet's unique needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-background to-muted rounded-3xl border border-border hover:shadow-xl transition-all hover:scale-105 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-2xl font-medium shadow-md hover:shadow-lg transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjB3aXRoJTIwcGV0cyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzYxODU3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Veterinarian with pet"
                className="rounded-[3rem] shadow-2xl w-full h-[450px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
                <span className="text-accent font-medium text-sm"> About Our Clinic</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Experience You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At ASHA Veterinary Clinic, we've been serving our community with excellence for over a decade. Our team of experienced veterinarians and caring staff are dedicated to providing the highest quality care for your beloved pets.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe every pet deserves compassionate, personalized care in a comfortable environment. From routine checkups to complex procedures, we're here for you and your furry family members.
              </p>
              <Link
                to="/about"
                className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-medium shadow-md hover:shadow-lg transition-all"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">What Pet Parents Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our happy clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-background to-muted rounded-3xl border border-border shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-2xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Give Your Pet the Best Care?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule an appointment today and experience the ASHA difference
            </p>
            <Link
              to="/appointment"
              className="inline-block px-10 py-5 bg-white text-primary rounded-2xl font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
