import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, PawPrint, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    petName: "",
    ownerName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        petName: "",
        ownerName: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "General Checkup",
    "Vaccination",
    "Surgery",
    "Emergency Care",
    "Grooming",
    "Diagnostic Testing",
    "Dental Care",
    "Nutrition Counseling",
    "Other",
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
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
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <span className="text-secondary font-medium text-sm"> Book an Appointment</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Schedule Your Visit
            </h1>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get back to you shortly to confirm your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[3rem] p-12 text-center border border-primary/20">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                  ✓
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Appointment Requested!</h2>
                <p className="text-lg text-muted-foreground">
                  Thank you for choosing ASHA Veterinary Clinic. We'll contact you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-[3rem] border border-border shadow-2xl p-8 md:p-12 space-y-6">
                {/* Pet Information */}
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <PawPrint size={20} className="text-white" />
                    </div>
                    Pet Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="petName" className="block text-foreground mb-2">
                        Pet Name *
                      </label>
                      <div className="relative">
                        <PawPrint size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          id="petName"
                          name="petName"
                          value={formData.petName}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="Enter your pet's name"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Owner Information */}
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <User size={20} className="text-white" />
                    </div>
                    Your Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ownerName" className="block text-foreground mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          id="ownerName"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-foreground mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="+19 99999 99999"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-foreground mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Calendar size={20} className="text-white" />
                    </div>
                    Appointment Details
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="service" className="block text-foreground mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-foreground mb-2">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-foreground mb-2">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <Clock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none"
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-foreground mb-2">
                        Additional Notes (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare size={20} className="absolute left-4 top-4 text-muted-foreground" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-12 pr-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                          placeholder="Any specific concerns or information we should know?"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Request Appointment
                </button>

                <p className="text-center text-sm text-muted-foreground">
                  * Required fields. We'll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 bg-card rounded-3xl border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📞
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Call Us</h3>
              <p className="text-muted-foreground mb-2">For immediate assistance</p>
              <p className="text-primary font-medium">+19 99999 99999</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-8 bg-card rounded-3xl border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🕒
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Opening Hours</h3>
              <p className="text-muted-foreground mb-2">Mon - Fri: 9 AM - 7 PM</p>
              <p className="text-muted-foreground">Sat - Sun: 10 AM - 5 PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-8 bg-card rounded-3xl border border-border"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🚨
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Emergency Care</h3>
              <p className="text-muted-foreground mb-2">24/7 availability</p>
              <p className="text-accent font-medium">+19 99999 99999</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
