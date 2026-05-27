import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) {
      setError("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", msg: "" });
        
        // Pop canvas confetti celebration
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 }
        });

        // Hide success message after 6 seconds
        setTimeout(() => setSent(false), 6000);
      } else {
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (err) {
      console.error("SMTP contact error:", err);
      setError(
        err.message ||
          "Failed to connect to the backend server. Please verify the local server is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 bg-cyber-light dark:bg-cyber-dark relative z-10 overflow-hidden select-none"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[20%] right-[-10%] w-[380px] h-[380px] rounded-full bg-cyber-coral/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-accent/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
            <span className="font-outfit text-xs md:text-sm font-bold tracking-widest text-cyber-accent uppercase">
              Get In Touch
            </span>
            <span className="w-6 h-[2px] bg-cyber-accent rounded" />
          </div>

          <h2 className="font-playfair font-black text-3xl md:text-5xl text-slate-800 dark:text-slate-100 leading-tight">
            Let's Start a <span className="bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral bg-clip-text text-transparent italic font-playfair font-black">Project</span>
          </h2>
          <p className="font-poppins text-sm md:text-base text-slate-500 dark:text-slate-400 mt-4 max-w-xl">
            Whether you want to discuss full-stack jobs, request data science advice, or just say hello, my inbox is open!
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 text-left flex flex-col gap-6"
          >
            <div className="glass-panel border border-slate-200 dark:border-slate-800/40 rounded-3xl p-8 flex flex-col gap-6 shadow-xl">
              
              <h3 className="font-sora font-bold text-xl text-slate-800 dark:text-slate-100 mb-2">
                Contact Information
              </h3>
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyber-accent/15 border border-cyber-accent/30 flex items-center justify-center text-cyber-accent flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-outfit text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Direct Email
                  </div>
                  <a
                    href="mailto:abarnasriyak@gmail.com"
                    className="font-poppins text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyber-accent transition-colors"
                  >
                    abarnasriyak@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cyber-purple/15 border border-cyber-purple/30 flex items-center justify-center text-cyber-purple flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-outfit text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Location
                  </div>
                  <div className="font-poppins text-sm font-semibold text-slate-700 dark:text-slate-300">
                    American College, Chatrapatti,<br />Tamil Nadu, India
                  </div>
                </div>
              </div>

              <div className="font-poppins p-4 rounded-2xl bg-cyber-accent/5 border border-cyber-accent/20 text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                🚀 Messages are delivered instantly using Nodemailer. I typically respond to inbox submissions within 24 hours.
              </div>

            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel border border-slate-200 dark:border-slate-800/40 rounded-3xl p-8 md:p-10 shadow-xl relative text-left">
              
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-sora font-bold text-2xl text-slate-800 dark:text-slate-100 mb-2">
                    Message Dispatched!
                  </h3>
                  <p className="font-poppins text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    Thank you for reaching out, Abarna. I'll get back to you as soon as I review your inquiry.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSend} className="flex flex-col gap-5">
                  
                  {error && (
                    <div className="flex items-start gap-2 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-500">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-outfit text-xs font-bold text-slate-400 uppercase tracking-wide">
                        Name <span className="text-cyber-coral">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="font-poppins w-full bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-850 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="font-outfit text-xs font-bold text-slate-400 uppercase tracking-wide">
                        Email <span className="text-cyber-coral">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="font-poppins w-full bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-850 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-outfit text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion"
                      className="font-poppins w-full bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-850 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-outfit text-xs font-bold text-slate-400 uppercase tracking-wide">
                      Message <span className="text-cyber-coral">*</span>
                    </label>
                    <textarea
                      name="msg"
                      value={form.msg}
                      onChange={handleChange}
                      placeholder="Hi Abarna, I'd like to collaborate..."
                      rows={5}
                      className="font-poppins w-full bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-850 rounded-xl px-4 py-3 text-slate-800 dark:text-slate-100 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-full font-outfit font-extrabold text-sm tracking-wider uppercase bg-gradient-to-r from-cyber-accent to-cyber-purple text-cyber-dark shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-75 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending Message..." : "Send Message"}
                    {!loading && <Send size={15} />}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
