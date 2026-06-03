import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, Unlock, LogOut, Search, Trash2, Mail, 
  ExternalLink, Calendar, Users, MessageSquare, 
  RefreshCw, Eye, EyeOff, ShieldAlert, Copy, Check 
} from "lucide-react";

const API_BASE_URL = "http://localhost:5000/api";

export default function AdminMessages() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPasscode, setShowPasscode] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("latest"); // "latest" or "oldest"
  const [copiedId, setCopiedId] = useState(null);
  
  // Modal for delete confirmation
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // Check if passcode is saved in local storage
  useEffect(() => {
    const savedPasscode = localStorage.getItem("admin_passcode");
    if (savedPasscode) {
      verifySavedPasscode(savedPasscode);
    }
  }, []);

  const verifySavedPasscode = async (savedCode) => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode: savedCode })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setIsAuthenticated(true);
        fetchMessages(savedCode);
      } else {
        localStorage.removeItem("admin_passcode");
      }
    } catch (err) {
      console.error("Auto-auth verify failed:", err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!passcode) return;

    setError("");
    setShake(false);

    try {
      const response = await fetch(`${API_BASE_URL}/admin/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setIsAuthenticated(true);
        localStorage.setItem("admin_passcode", passcode);
        fetchMessages(passcode);
      } else {
        triggerShake(data.message || "Invalid Passcode");
      }
    } catch (err) {
      triggerShake("Could not connect to authentication server.");
    }
  };

  const triggerShake = (errMsg) => {
    setError(errMsg);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_passcode");
    setIsAuthenticated(false);
    setPasscode("");
    setMessages([]);
  };

  const fetchMessages = async (code = passcode || localStorage.getItem("admin_passcode")) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/messages`, {
        headers: {
          "Authorization": `Bearer ${code}`
        }
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setMessages(data.messages);
      } else {
        setError(data.message || "Failed to load messages.");
        if (response.status === 401) {
          handleLogout();
        }
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const code = passcode || localStorage.getItem("admin_passcode");
    setDeleting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/messages/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${code}`
        }
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setMessages(prev => prev.filter(msg => msg.id !== id));
        setDeleteConfirmId(null);
      } else {
        alert(data.message || "Failed to delete message");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting message");
    } finally {
      setDeleting(false);
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter & Sort logic
  const filteredMessages = messages.filter(msg => {
    const query = searchQuery.toLowerCase();
    return (
      msg.name.toLowerCase().includes(query) ||
      msg.email.toLowerCase().includes(query) ||
      (msg.subject && msg.subject.toLowerCase().includes(query)) ||
      msg.message.toLowerCase().includes(query)
    );
  });

  const sortedMessages = [...filteredMessages].sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return sortBy === "latest" ? dateB - dateA : dateA - dateB;
  });

  // Calculate statistics
  const totalSubmissions = messages.length;
  const uniqueContacts = new Set(messages.map(m => m.email)).size;
  const latestMessageDate = messages.length > 0 
    ? new Date(messages[0].created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    : "No messages yet";

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100 bg-cyber-light dark:bg-cyber-dark relative z-10 overflow-hidden font-sans pt-28 pb-16 px-4 md:px-8">
      {/* Ambient background glows */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-cyber-accent/5 dark:bg-cyber-accent/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-cyber-purple/5 dark:bg-cyber-purple/10 filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-20">
        
        <AnimatePresence mode="wait">
          {!isAuthenticated ? (
            // Passcode Screen
            <motion.div
              key="auth"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center items-center py-20"
            >
              <motion.div
                animate={shake ? { x: [-10, 10, -10, 10, -5, 5, -2, 2, 0] } : {}}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 rounded-3xl border border-slate-200 dark:border-slate-800/60 bg-white/70 dark:bg-cyber-darkSurface/50 backdrop-blur-xl shadow-2xl relative overflow-hidden"
              >
                {/* Floating Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-coral" />
                
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-cyber-accent/10 dark:bg-cyber-accent/20 border border-cyber-accent/30 flex items-center justify-center text-cyber-accent mb-4">
                    <Lock size={28} className="animate-pulse" />
                  </div>
                  <h2 className="font-outfit font-black text-2xl tracking-wide dark:text-white text-slate-800">
                    Security Access Portal
                  </h2>
                  <p className="font-poppins text-xs dark:text-slate-400 text-slate-500 mt-2 text-center">
                    Enter admin passcode to decrypt contact database submissions
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="relative">
                    <label className="block font-outfit text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Decryption Passcode
                    </label>
                    <div className="relative rounded-xl overflow-hidden">
                      <input
                        type={showPasscode ? "text" : "password"}
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        placeholder="••••••••"
                        className="font-poppins w-full bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl pl-4 pr-12 py-3.5 text-slate-800 dark:text-slate-100 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none transition-all"
                        autoFocus
                      />
                      <button
                        type="button"
                        onClick={() => setShowPasscode(!showPasscode)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyber-accent transition-colors"
                      >
                        {showPasscode ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-500"
                    >
                      <ShieldAlert size={16} className="flex-shrink-0 animate-bounce" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full font-outfit font-extrabold text-sm tracking-wider uppercase bg-gradient-to-r from-cyber-accent to-cyber-purple text-cyber-dark shadow-lg shadow-cyber-accent/15 hover:shadow-cyber-accent/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Decrypt & Enter</span>
                    <Unlock size={15} />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          ) : (
            // Dashboard Screen
            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8 text-left"
            >
              {/* Top Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-6">
                <div>
                  <h1 className="font-playfair font-black text-3xl md:text-4xl text-slate-800 dark:text-slate-100 flex items-center gap-3">
                    Inbound Messages
                    <span className="text-xs font-outfit font-extrabold tracking-widest bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent py-1 px-3 rounded-full uppercase">
                      Admin Terminal
                    </span>
                  </h1>
                  <p className="font-poppins text-sm text-slate-500 dark:text-slate-400 mt-2">
                    Manage and review contact submissions submitted via your portfolio website.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => fetchMessages()}
                    disabled={loading}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyber-accent/40 bg-white/50 dark:bg-slate-900/40 hover:text-cyber-accent transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-wider"
                  >
                    <RefreshCw size={14} className={loading ? "animate-spin text-cyber-accent" : ""} />
                    <span>{loading ? "Refreshing..." : "Refresh"}</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="p-3 rounded-xl border border-rose-200 dark:border-rose-950/40 bg-rose-500/5 hover:bg-rose-500/10 text-rose-500 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-wider"
                  >
                    <LogOut size={14} />
                    <span>Secure Exit</span>
                  </button>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-white/50 dark:bg-cyber-darkSurface/30 backdrop-blur-md flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-cyber-accent/10 dark:bg-cyber-accent/20 border border-cyber-accent/30 flex items-center justify-center text-cyber-accent">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <div className="font-outfit text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Total Submissions
                    </div>
                    <div className="font-sora font-bold text-2xl text-slate-800 dark:text-slate-100 mt-1">
                      {totalSubmissions}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-white/50 dark:bg-cyber-darkSurface/30 backdrop-blur-md flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-cyber-purple/10 dark:bg-cyber-purple/20 border border-cyber-purple/30 flex items-center justify-center text-cyber-purple">
                    <Users size={22} />
                  </div>
                  <div>
                    <div className="font-outfit text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Unique Contacts
                    </div>
                    <div className="font-sora font-bold text-2xl text-slate-800 dark:text-slate-100 mt-1">
                      {uniqueContacts}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-white/50 dark:bg-cyber-darkSurface/30 backdrop-blur-md flex items-center gap-4 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-cyber-coral/10 dark:bg-cyber-coral/20 border border-cyber-coral/30 flex items-center justify-center text-cyber-coral">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <div className="font-outfit text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Last Message Received
                    </div>
                    <div className="font-poppins font-semibold text-sm text-slate-800 dark:text-slate-200 mt-1.5 line-clamp-1">
                      {latestMessageDate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls (Search, Sort) */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-between bg-white/40 dark:bg-slate-900/20 p-4 border border-slate-200 dark:border-slate-800/40 rounded-2xl">
                <div className="relative w-full sm:max-w-md">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Search size={18} />
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by sender, email, subject, keyword..."
                    className="font-poppins w-full bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-850 rounded-xl pl-11 pr-4 py-2.5 text-slate-800 dark:text-slate-100 text-sm focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none transition-all"
                  />
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <span className="font-outfit text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
                    Sort Order:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="font-outfit font-bold text-xs bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-850 rounded-xl px-4 py-2.5 text-slate-700 dark:text-slate-300 focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none cursor-pointer"
                  >
                    <option value="latest">Latest Submissions First</option>
                    <option value="oldest">Oldest Submissions First</option>
                  </select>
                </div>
              </div>

              {/* Messages Content */}
              {loading && messages.length === 0 ? (
                <div className="flex flex-col justify-center items-center py-24 gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-cyber-accent/20 border-t-2 border-t-cyber-accent animate-spin" />
                  </div>
                  <span className="font-poppins text-sm text-slate-500 dark:text-slate-400">Decrypting messages database...</span>
                </div>
              ) : sortedMessages.length === 0 ? (
                <div className="p-12 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-white/20 dark:bg-cyber-darkSurface/10">
                  <p className="font-poppins text-slate-500 dark:text-slate-400">
                    {searchQuery ? "No messages matching your search filter." : "No contact form messages stored in the database yet."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {sortedMessages.map((msg, index) => {
                    const localTime = new Date(msg.created_at).toLocaleString(undefined, {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    });

                    return (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
                        className="p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/50 bg-white/60 dark:bg-cyber-darkSurface/20 backdrop-blur-md shadow-lg flex flex-col hover:border-cyber-accent/30 hover:shadow-cyber-accent/5 transition-all duration-300 relative overflow-hidden"
                      >
                        {/* Dynamic glow corner */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyber-accent/5 to-transparent pointer-events-none" />

                        {/* Message Metadata Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200/60 dark:border-slate-800/40">
                          <div>
                            <div className="flex flex-wrap items-center gap-2.5">
                              <h3 className="font-sora font-extrabold text-lg text-slate-800 dark:text-white">
                                {msg.name}
                              </h3>
                              <a
                                href={`mailto:${msg.email}`}
                                className="font-poppins text-xs font-semibold text-cyber-accent bg-cyber-accent/5 dark:bg-cyber-accent/10 border border-cyber-accent/20 px-2.5 py-1 rounded-full flex items-center gap-1 hover:bg-cyber-accent/10 transition-colors"
                              >
                                <Mail size={11} />
                                <span>{msg.email}</span>
                                <ExternalLink size={10} />
                              </a>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 mt-1.5 text-xs font-poppins">
                              <Calendar size={12} />
                              <span>{localTime}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-start md:self-center">
                            <button
                              onClick={() => copyToClipboard(msg.email, msg.id)}
                              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800/80 hover:border-cyber-accent/40 bg-white/40 dark:bg-slate-900/40 hover:text-cyber-accent transition-all cursor-pointer flex items-center gap-1.5 text-xs font-outfit"
                              title="Copy Email Address"
                            >
                              {copiedId === msg.id ? <Check size={14} className="text-cyber-neonGreen" /> : <Copy size={14} />}
                              <span>{copiedId === msg.id ? "Copied!" : "Copy Email"}</span>
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(msg.id)}
                              className="p-2.5 rounded-xl border border-rose-200/60 dark:border-rose-950/40 bg-rose-500/5 hover:bg-rose-500/10 text-rose-500 hover:text-rose-600 transition-all cursor-pointer"
                              title="Delete Submission"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>

                        {/* Subject & Message Body */}
                        <div className="pt-5 space-y-4">
                          {msg.subject && (
                            <div>
                              <span className="font-outfit text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                                Subject
                              </span>
                              <div className="font-poppins text-sm font-semibold text-slate-700 dark:text-slate-200">
                                {msg.subject}
                              </div>
                            </div>
                          )}

                          <div>
                            <span className="font-outfit text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                              Message Content
                            </span>
                            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-850/60 font-poppins text-sm text-slate-600 dark:text-slate-300 leading-relaxed white-space-pre-wrap break-all">
                              {msg.message}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDeleteConfirmId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-sm p-6 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-cyber-dark relative z-10 shadow-2xl overflow-hidden text-center"
            >
              {/* Floating Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-rose-500" />

              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 mx-auto mb-4">
                <Trash2 size={22} />
              </div>

              <h3 className="font-outfit font-black text-xl text-slate-800 dark:text-white">
                Delete Message?
              </h3>
              <p className="font-poppins text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Are you sure you want to permanently delete this contact submission from the database? This action cannot be undone.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setDeleteConfirmId(null)}
                  disabled={deleting}
                  className="py-2.5 rounded-full border border-slate-200 dark:border-slate-800 font-outfit font-bold text-xs tracking-wider uppercase text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(deleteConfirmId)}
                  disabled={deleting}
                  className="py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-outfit font-extrabold text-xs tracking-wider uppercase cursor-pointer disabled:opacity-50"
                >
                  {deleting ? "Deleting..." : "Confirm Delete"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
