import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: "Phone",
      details: ["+19 9988746537", "Emergency: +19 9999999999"],
    },
    {
      icon: <Mail size={28} />,
      title: "Email",
      details: ["info@ashavet.com", "emergency@ashavet.com"],
    },
    {
      icon: <MapPin size={28} />,
      title: "Address",
      details: ["120 XYZ Society", "Surat, Gujrat 395001"],
    },
    {
      icon: <Clock size={28} />,
      title: "Hours",
      details: ["Mon-Fri: 9 AM - 7 PM", "Sat-Sun: 10 AM - 5 PM"],
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
              <span className="text-accent font-medium text-sm"> Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-card rounded-3xl border border-border shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 text-center border border-primary/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="asha@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-input-background border border-input rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map and Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Clinic</h2>
                <div className="relative w-full h-[350px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden border border-border shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin size={48} className="text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        120 xyz socitey
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        Surat, Gujrat 
                      </p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>

                  {/* Decorative grid overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-foreground" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-card rounded-3xl border border-border p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Clock size={24} className="text-white" />
                  </div>
                  Opening Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">Sunday</span>
                    <span className="text-muted-foreground">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground font-medium">Emergency Care</span>
                    <span className="text-accent font-medium">24/7 Available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "Do I need an appointment?",
                a: "While we accept walk-ins, we recommend scheduling an appointment to minimize wait times and ensure we can give your pet the attention they deserve.",
              },
              {
                q: "What should I bring to the first visit?",
                a: "Please bring any previous medical records, current medications, and a list of questions or concerns you have about your pet's health.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we work with several pet financing companies and offer flexible payment options. Contact us to discuss what works best for your situation.",
              },
              {
                q: "What if my pet has an emergency after hours?",
                a: "We provide 24/7 emergency care. Call our emergency line at +19 99999 99999 and a veterinarian will assist you immediately.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
