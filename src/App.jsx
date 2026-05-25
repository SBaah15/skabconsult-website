import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin, Shield, CheckCircle,
  BarChart, Globe, Users, Briefcase, Database, Search, MonitorPlay,
  BookOpen, Star, ArrowRight,
  Sparkles, Loader2
} from 'lucide-react';

const TwitterIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768" /><path d="M20 4l-7.364 7.364" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const TiktokIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsappIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

// --- STYLES & ANIMATIONS ---
const customStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes zoomBackground {
    0% { transform: scale(1); }
    100% { transform: scale(1.15); }
  }
  .animate-zoom-bg {
    animation: zoomBackground 20s infinite alternate ease-in-out;
  }
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  .eclipse-btn {
    border-radius: 50%;
    padding: 10px 24px;
    background: linear-gradient(to right, #ae00ff, #e085ff, #ae00ff);
    color: white;
    font-weight: bold;
    transition: all 0.3s ease;
    box-shadow: 0 0 10px rgba(174, 0, 255, 0.4);
  }
  .eclipse-btn:hover {
    box-shadow: 0 0 25px rgba(174, 0, 255, 0.9);
    transform: scale(1.05);
  }
  .eclipse-nav {
    border-radius: 40px;
    padding: 2px;
    background: linear-gradient(to right, #ae00ff, #5c0087);
    transition: all 0.3s ease;
  }
  .eclipse-nav-inner {
    background: #000000;
    border-radius: 38px;
    padding: 8px 16px;
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
  }
  .eclipse-nav:hover {
    box-shadow: 0 0 20px #ae00ff;
    transform: translateY(-2px);
  }
  .eclipse-nav:hover .eclipse-nav-inner {
    color: #ae00ff;
  }
  .no-select {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  .text-gradient {
    background: linear-gradient(to right, #000000, #ae00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  html {
    scroll-behavior: smooth;
  }
`;

// --- GEMINI API HELPER (With Exponential Backoff) ---
const callGeminiAPI = async (prompt, retries = 5, delay = 1000) => {
  const apiKey = ""; // Execution environment injects this
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
  } catch (error) {
    if (retries > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return callGeminiAPI(prompt, retries - 1, delay * 2); // 1s, 2s, 4s, 8s, 16s
    } else {
      throw new Error("AI Service is currently busy. Please try again later.");
    }
  }
};

// --- MAIN APPLICATION COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPriceModalOpen, setPriceModalOpen] = useState(false);
  const [isPolicyModalOpen, setPolicyModalOpen] = useState(null); // 'privacy' | 'terms'
  const [cookieConsent, setCookieConsent] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  // Security Measures & Setup
  useEffect(() => {
    const handleContextMenu = (e) => { e.preventDefault(); };
    const handleCopy = (e) => { e.preventDefault(); };
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 's' || e.key === 'u')) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('keydown', handleKeyDown);
    
    if(!localStorage.getItem('skab_cookies')) {
      setCookieConsent(false);
    }

    // --- Live Chat Widget Integration ---
    const chatScript = document.createElement("script");
    chatScript.async = true;
    chatScript.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default'; // Placeholder
    chatScript.charset = 'UTF-8';
    chatScript.setAttribute('crossorigin', '*');
    document.head.appendChild(chatScript);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('skab_cookies', 'true');
    setCookieConsent(true);
  };

  const navItems = [
    { id: 'home', label: 'The Company' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'portfolio', label: 'Project Portfolio' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'partner', label: 'Partner Us' },
  ];

  return (
    <div className="min-h-screen bg-[#E1E9E5] font-sans text-gray-800 no-select">
      <style>{customStyles}</style>

      {/* --- TOP HEADER --- */}
      <div className="bg-gradient-to-r from-[#ae00ff] via-[#d066ff] to-[#ae00ff] text-[#000000] py-2 px-4 shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-semibold">
          <div className="flex items-center space-x-6 mb-2 md:mb-0">
            {/* Logo */}
            <div className="flex items-center bg-white px-3 py-1 rounded-lg cursor-pointer shadow-sm" onClick={() => setCurrentPage('home')}>
               <img src="/Actual SKAB Logo.png" alt="Skab Consult Logo" className="h-8 object-contain" />
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="flex items-center gap-1"><Mail size={14}/> info@skabconsult.com</span>
              <span className="flex items-center gap-1"><Phone size={14}/> +233 242 523 480</span>
            </div>
          </div>
          <div>
            <button 
              onClick={() => setPriceModalOpen(true)}
              className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition shadow-[0_0_10px_rgba(0,0,0,0.5)] border border-[#ae00ff] flex items-center gap-2"
              aria-label="Contact for Price and Payment"
            >
              <Briefcase size={16} className="text-[#ae00ff]" />
              Contact for Price and Payment
            </button>
          </div>
        </div>
      </div>

      {/* --- DOWN HEADER (MEGA MENU) --- */}
      <div className="bg-[#000000] sticky top-0 z-40 border-b-2 border-[#ae00ff]">
        <div className="max-w-7xl mx-auto px-4 py-4 relative">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-[#ae00ff]">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-wrap justify-center w-full gap-4 relative" aria-label="Main Navigation">
              {navItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredNav(item.id)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <div className={`eclipse-nav ${currentPage === item.id ? 'ring-2 ring-white' : ''}`}>
                    <div 
                      className="eclipse-nav-inner flex items-center gap-1"
                      onClick={() => setCurrentPage(item.id)}
                    >
                      {item.label}
                      {(item.id === 'services' || item.id === 'portfolio' || item.id === 'contact' || item.id === 'partner') && 
                        <ChevronDown size={14} className="text-gray-400 group-hover:text-[#ae00ff]" />
                      }
                    </div>
                  </div>

                  {/* Mega Dropdown Triggers */}
                  {hoveredNav === item.id && item.id === 'services' && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-black border-2 border-[#ae00ff] rounded-xl shadow-[0_0_20px_#ae00ff] p-4 z-50 text-white animate-fade-in-up">
                      <ul className="space-y-3">
                        {['Data Solutions', 'Research & Evaluation', 'Digital Marketing', 'Web Design', 'Training and Mentorship'].map(s => (
                           <li key={s} className="hover:text-[#ae00ff] border-b border-gray-800 pb-2 cursor-pointer transition-colors" onClick={() => setCurrentPage('services')}>
                             {s}
                           </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {hoveredNav === item.id && item.id === 'portfolio' && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-black border-2 border-[#ae00ff] rounded-xl shadow-[0_0_20px_#ae00ff] p-4 z-50 text-white animate-fade-in-up">
                      <ul className="space-y-3">
                        {['Evaluation Projects', 'Research Projects', 'Web Design Projects'].map(s => (
                           <li key={s} className="hover:text-[#ae00ff] border-b border-gray-800 pb-2 cursor-pointer transition-colors" onClick={() => setCurrentPage('portfolio')}>
                             {s}
                           </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {hoveredNav === item.id && item.id === 'contact' && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-72 bg-black border-2 border-[#ae00ff] rounded-xl shadow-[0_0_20px_#ae00ff] p-4 z-50 text-white animate-fade-in-up">
                      <div className="text-sm space-y-4">
                        <div>
                          <strong className="text-[#ae00ff]">Mobile & WhatsApp:</strong>
                          <p>+233 59 591 2902</p>
                          <p>+233 24 252 3480</p>
                          <p>+233 20 226 3839</p>
                          <p>+233 20 226 3938</p>
                        </div>
                        <div>
                          <strong className="text-[#ae00ff]">Head Office (Ghana):</strong>
                          <p>Antelope Street, North Legon, Accra</p>
                          <p>Digital Address: GM-070-3696</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {hoveredNav === item.id && item.id === 'partner' && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-56 bg-black border-2 border-[#ae00ff] rounded-xl shadow-[0_0_20px_#ae00ff] p-4 z-50 text-white animate-fade-in-up">
                       <ul className="space-y-3">
                        {['Affiliate/Partner', 'Intern', 'Referral Partner', 'NGO', 'Sponsor/Donor'].map(s => (
                           <li key={s} className="hover:text-[#ae00ff] border-b border-gray-800 pb-2 cursor-pointer transition-colors" onClick={() => setCurrentPage('partner')}>
                             {s}
                           </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Content */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 bg-gray-900 p-4 rounded-xl border border-[#ae00ff]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setCurrentPage(item.id); setMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-white ${currentPage === item.id ? 'bg-[#ae00ff]' : 'hover:bg-gray-800'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* --- MAIN PAGE CONTENT RENDERER --- */}
      <main className="min-h-[70vh]">
        {currentPage === 'home' && <Home />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'industries' && <Industries />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'partner' && <PartnerUs />}
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#010a05] text-[#02FAE9] pt-16 pb-8 border-t-4 border-[#ae00ff]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-white p-2 rounded-xl inline-block cursor-pointer shadow-[0_0_15px_rgba(174,0,255,0.3)]">
               <img src="/Actual SKAB Logo.png" alt="Skab Consult Logo" className="h-12 object-contain" />
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Leading consulting company, dedicated to helping individuals and businesses achieve their goals.
            </p>
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com/skabconsult' },
                  { Icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/skabconsult' },
                  { Icon: YoutubeIcon, label: 'YouTube', href: 'https://youtube.com/@skabconsult' },
                  { Icon: TwitterIcon, label: 'X (Twitter)', href: 'https://x.com/skabconsult' },
                  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/company/skabconsult' },
                  { Icon: TiktokIcon, label: 'TikTok', href: 'https://tiktok.com/@skabconsult' },
                  { Icon: WhatsappIcon, label: 'WhatsApp', href: 'https://wa.me/233595912902' },
                ].map(({ Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-full hover:bg-[#ae00ff] hover:text-white transition cursor-pointer" aria-label={label} title={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-[#ae00ff] pb-2 inline-block">Head Office (Ghana)</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#ae00ff] shrink-0 mt-1" size={18} />
                <span>Antelope Street, North Legon<br/>Accra, Ghana<br/>Digital Address: GM-070-3696</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#ae00ff] shrink-0" size={18} />
                <span>+233 59 591 2902<br/>+233 24 252 3480</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#ae00ff] shrink-0" size={18} />
                <span>info@skabconsult.com<br/>contact@skabconsult.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 border-b border-[#ae00ff] pb-2 inline-block">Office Hours (GMT)</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex justify-between"><span>Mon - Sat:</span> <span>8:00 AM - 10:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>12:00 PM - 10:00 PM</span></li>
            </ul>
            
            <h3 className="text-white text-lg font-bold mb-4 border-b border-[#ae00ff] pb-2 inline-block">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => setPolicyModalOpen('privacy')} className="hover:text-white hover:underline transition">Privacy Policy</button></li>
              <li><button onClick={() => setPolicyModalOpen('terms')} className="hover:text-white hover:underline transition">Terms of Service</button></li>
            </ul>
          </div>

          {/* Feedback Form */}
          <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-white text-lg font-bold mb-4">Feedback</h3>
            <p className="text-xs mb-4">We need your views about our services: Communication, Delivery, Pricing, Timeline, Operations.</p>
            
            <form name="feedback" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-3">
              <input type="hidden" name="form-name" value="feedback" />
              <p className="hidden"><input name="bot-field" /></p>

              <input type="text" name="name" placeholder="Name" className="w-full bg-black border border-gray-700 rounded p-2 text-sm text-white focus:border-[#ae00ff] outline-none" required />
              <input type="email" name="email" placeholder="Email" className="w-full bg-black border border-gray-700 rounded p-2 text-sm text-white focus:border-[#ae00ff] outline-none" required />
              <select name="category" className="w-full bg-black border border-gray-700 rounded p-2 text-sm text-white focus:border-[#ae00ff] outline-none" required>
                <option value="">Select Category</option>
                <option value="communication">Communication</option>
                <option value="delivery">Delivery Approach</option>
                <option value="pricing">Pricing</option>
                <option value="timeline">Timeline</option>
                <option value="operations">Operations</option>
              </select>
              <textarea placeholder="Your Views" rows="3" className="w-full bg-black border border-gray-700 rounded p-2 text-sm text-white focus:border-[#ae00ff] outline-none" required></textarea>
              <button type="submit" className="w-full bg-[#ae00ff] text-white py-2 rounded hover:bg-purple-700 transition font-bold text-sm">Submit Feedback</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-gray-800 text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} Skab Consult. All rights reserved. | Secured by Advanced Digital Protocol</p>
        </div>
      </footer>

      {/* --- MODALS --- */}

      {/* Price Request Modal */}
      {isPriceModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-[#E1E9E5] text-black w-full max-w-2xl rounded-3xl overflow-hidden shadow-[0_0_40px_#ae00ff] border border-[#ae00ff] relative animate-fade-in-up">
            <button onClick={() => setPriceModalOpen(false)} className="absolute top-4 right-4 bg-black text-white rounded-full p-2 hover:bg-red-600 transition">
              <X size={20} />
            </button>
            
            <div className="bg-black text-white p-6 border-b-4 border-[#ae00ff]">
              <h2 className="text-2xl font-bold flex items-center gap-3"><Briefcase className="text-[#ae00ff]"/> Contact for Price and Payment</h2>
            </div>
            
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="bg-purple-100 border-l-4 border-[#ae00ff] p-4 mb-6 text-sm">
                <strong>Price Request:</strong> Price varies according to the task(s) and nature of the service. For detailed and specific prices, kindly fill the "price request form".
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                <div className="bg-white p-4 rounded-xl shadow">
                  <h4 className="font-bold mb-2 text-[#ae00ff]">Direct Contacts</h4>
                  <p>WhatsApp/Call:</p>
                  <p className="font-mono text-xs mt-1">
                    +233 24 252 3480<br/>
                    +233 20 226 3839<br/>
                    +233 20 226 3938<br/>
                    +233 59 591 2902
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <h4 className="font-bold mb-2 text-[#ae00ff]">Email Us</h4>
                  <p className="font-mono text-xs mt-1">
                    info@skabconsult.com<br/>
                    services@skabconsult.com
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 border-b pb-2">Price Request Form</h3>
              <form name="price-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Form submitted to secure backend."); setPriceModalOpen(false); }}>
                <input type="hidden" name="form-name" value="price-request" />
                <p className="hidden"><input name="bot-field" /></p>

                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="first_name" placeholder="First Name" className="w-full p-3 rounded bg-white border outline-none focus:border-[#ae00ff]" required />
                  <input type="text" name="last_name" placeholder="Last Name" className="w-full p-3 rounded bg-white border outline-none focus:border-[#ae00ff]" required />
                </div>
                <input type="email" name="email" placeholder="Email Address" className="w-full p-3 rounded bg-white border outline-none focus:border-[#ae00ff]" required />
                <select name="service_required" className="w-full p-3 rounded bg-white border outline-none focus:border-[#ae00ff]" required>
                  <option value="">Select Required Service</option>
                  <option value="data">Data Solutions</option>
                  <option value="research">Research & Evaluation</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="web">Web Design</option>
                  <option value="training">Training and Mentorship</option>
                </select>
                <textarea name="task_description" placeholder="Describe the nature of your task..." rows="4" className="w-full p-3 rounded bg-white border outline-none focus:border-[#ae00ff]" required></textarea>
                <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-[#ae00ff] transition text-lg shadow-lg">
                  Request Pricing
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Policy Modals */}
      {isPolicyModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white text-black w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl relative animate-fade-in-up">
             <button onClick={() => setPolicyModalOpen(null)} className="absolute top-4 right-4 bg-gray-200 text-black rounded-full p-2 hover:bg-red-500 hover:text-white transition">
              <X size={20} />
            </button>
            
            <div className="p-8 max-h-[80vh] overflow-y-auto mt-8">
              {isPolicyModalOpen === 'privacy' && (
                <div className="prose max-w-none text-sm">
                  <h2 className="text-3xl font-bold mb-2 text-[#ae00ff]">Privacy Policy for Skab Consult</h2>
                  <p className="font-bold mb-6">Effective Date: May 20, 2026</p>
                  <p className="mb-4">At Skab Consult, we respect your privacy. This policy outlines how we handle your information:</p>
                  <ul className="list-disc pl-5 space-y-3 mb-6">
                    <li><strong>Data Collection:</strong> We collect names, emails, and project details provided via our Contact Form.</li>
                    <li><strong>Usage:</strong> Your data is used strictly to provide analytics, research services and process payments via secure channels.</li>
                    <li><strong>Protection:</strong> We do not sell or share your data with third parties for marketing. All research data is stored securely in our Microsoft Workspace environment.</li>
                    <li><strong>Cookies:</strong> Our site uses Analytics to track visitor locations and site performance.</li>
                  </ul>
                  <p>For questions, contact: info@skabconsult.com</p>
                </div>
              )}
              {isPolicyModalOpen === 'terms' && (
                <div className="prose max-w-none text-sm">
                  <h2 className="text-3xl font-bold mb-2 text-[#ae00ff]">Terms of Service for Skab Consult</h2>
                  <p className="font-bold mb-6">Last Updated: May 20, 2026</p>
                  <p className="mb-4">By engaging with Skab Consult, you agree to the following:</p>
                  <ul className="list-disc pl-5 space-y-4 mb-6">
                    <li><strong>Services:</strong> We provide consultancy services exclusively outlined and described in the Services menu.</li>
                    <li><strong>Payments:</strong> Payments are due according to the terms stated on your invoice. We accept Credit Cards and Mobile Money via our secure payment partners.</li>
                    <li><strong>30% Minimum payment:</strong> Skab Consult accepts a non-refundable 30% payment of the agreed total cost of service before commencing any agreed task(s). This is the minimum amount you (i.e., client) will pay and it will be part of your total bill for the service(s) you purchased.</li>
                    <li><strong>Refund:</strong> Unless otherwise agreed in writing, due to the digital and labour-intensive nature of our research services, Skab Consult do not refund if task(s) or work commenced two days after agreement. However, Skab Consult refunds 70% of the total amount paid in case Skab Consult is unable to meet your timeline(s), and you decide not to extend the timeline(s).</li>
                    <li>
                      <div className="bg-red-50 text-red-800 border-l-4 border-red-600 p-4 rounded">
                        <strong>Scam Alert:</strong> "Any payment without our payment platform or contact +233595912902 / +233242523480 / +233202263839/ +233202263938) is unauthorized and considered a scam. Verify our contact numbers or email addresses (Use info@skabconsult.com, or contact@skabconsult.com reach out to us on +233595912902 / +233242523480 / +233202263839/ +233202263938 before making any payment."
                      </div>
                    </li>
                    <li><strong>Intellectual Property:</strong> Upon full payment, the final report, product and/or service is yours to use. We own no copyright of what you have paid for. All is yours. However, Skab Consult retains the rights to the underlying methodologies and tools used.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cookies Consent */}
      {!cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 border-t-2 border-[#ae00ff] z-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">We use cookies to enhance your experience, track site performance, and analyze traffic. By continuing to visit this site you agree to our use of cookies.</p>
          <div className="flex gap-4 whitespace-nowrap">
            <button onClick={() => setPolicyModalOpen('privacy')} className="text-[#02FAE9] underline text-sm hover:text-white">Privacy Policy</button>
            <button onClick={acceptCookies} className="bg-[#ae00ff] px-6 py-2 rounded font-bold hover:bg-purple-700 transition">Accept Cookies</button>
          </div>
        </div>
      )}
    </div>
  );
}

// --- PAGE COMPONENTS ---

function Home() {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url(/background.jpeg)'}}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 z-10"></div>
        
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
            Excellence in <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ae00ff] to-[#02FAE9]">Consultancy Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light border-l-4 border-[#ae00ff] pl-6 text-left bg-black/30 p-4 rounded-r-xl backdrop-blur-sm">
            <strong className="text-white">Expert consulting at its Best!</strong><br/>
            Skab Consult is a leading consulting company, dedicated to helping individuals and businesses achieve their goals. We specialize in providing expert guidance for educational and business purposes.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="eclipse-btn text-lg">Get Started</button>
            <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition">Get Consultation</button>
          </div>
        </div>
      </div>

      {/* About Us & MVV Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-200">
          <div className="md:w-1/2 bg-gray-900 text-white p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ae00ff] to-transparent"></div>
            <h2 className="text-3xl font-bold mb-6 text-[#ae00ff]">About Us</h2>
            <p className="leading-relaxed text-gray-300 relative z-10 group-hover:scale-105 transition-transform duration-700">
              Skab Consult specializes in offering comprehensive research, monitoring, and evaluation services, as well as mentorship and training. Our commitment to excellence ensures that our clients receive tailored solutions that meet their unique needs.
            </p>
          </div>
          <div className="md:w-1/2 p-12 bg-[#E1E9E5]">
            <h3 className="text-2xl font-bold mb-8">Our Core Framework</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Mission & Vision', icon: Globe, desc: 'Empowering global success.' },
                { title: 'Professionalism', icon: Briefcase, desc: 'Highest standard of work.' },
                { title: 'Confidentiality', icon: Shield, desc: 'Your data is safe with us.' },
                { title: 'Timely Delivery', icon: CheckCircle, desc: 'Punctual, always.' },
                { title: 'Quality Assurance', icon: Star, desc: 'Excellence guaranteed.' },
                { title: 'Ethical Standards', icon: BookOpen, desc: 'No copyright issues.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-md hover:shadow-[0_0_15px_#ae00ff] transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#ae00ff]">
                  <item.icon size={24} className="text-[#ae00ff] mb-2" />
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Successful Companies Banner placeholder */}
      <div className="bg-black py-12 border-y-2 border-[#ae00ff]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-white text-2xl font-bold mb-8">Trusted by successful companies & institutions in Ghana</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Placeholders for logos */}
            {['Ministry of Gender, Children and Social Protection', 'Donewell Research', 'CRESCENT', 'University of Ghana', 'Kwame Nkrumah University of Science and Technology'].map((partner, i) => (
              <div key={i} className="w-32 h-16 bg-gray-800 rounded border border-gray-700 flex items-center justify-center text-gray-500 font-bold hover:bg-[#ae00ff] hover:text-white transition duration-500 cursor-pointer text-xs text-center p-2">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const [researchField, setResearchField] = useState('');
  const [researchTopics, setResearchTopics] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // GEMINI FEATURE 1: AI Research Topic Ideator
  const generateResearchIdeas = async () => {
    if(!researchField.trim()) return;
    setIsGenerating(true);
    setResearchTopics('');
    
    try {
      const prompt = `You are a highly academic and professional research consultant at Skab Consult. A client is interested in researching: "${researchField}". Generate 3 rigorous, unique, and actionable research topics/project titles they could pursue. Format as a clean, numbered list with no introductory or concluding chat text.`;
      const result = await callGeminiAPI(prompt);
      setResearchTopics(result);
    } catch (e) {
      setResearchTopics(`Error: ${e.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="animate-fade-in-up pb-20">
      {/* Service Header */}
      <div className="bg-black text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" alt="Consulting" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg"><span className="text-[#ae00ff]">Comprehensive</span> solutions for your needs</h1>
          <div className="mt-8 inline-block bg-white text-black px-6 py-4 rounded-xl shadow-[0_10px_30px_rgba(174,0,255,0.4)] border border-[#ae00ff] transform hover:scale-105 transition">
            <p className="text-xl font-bold italic text-gradient">"With Over 10 Years of Experience, We Won't Let You Down"</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 space-y-20">
        
        {/* Service 1 */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="bg-[#ae00ff] text-white p-4 rounded-2xl inline-block mb-4 shadow-lg">
              <Database size={40} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Data Solutions</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed text-justify">
              <p>We focus on acquisition of primary and secondary data such as online data, personal data, family data, household data, macro-and micro data, health data, meta data, agricultural data, IT data, Geo-Data, etc.</p>
              <p>We use both conventional questionnaires, interview guides, and digital data collection tools (Survey 123, SurveyToGo, ODK-Kobo ToolBox, Survey 54, Survey Monkey, etc.).</p>
              <p><strong>Our Capabilities:</strong> Correlation, Regression, Multi-Level Regression, Structural Equation Modeling, Risk Analysis, Root Cause Analysis, Scenario Analysis, Sensitivity Analysis, and more.</p>
              <p><strong>Our Analytical Tools:</strong> ArcGIS, ASPIRE & AdePT, ATLAST.ti, DEVResults, EPI-Info, GENSTAT, Microsoft Excel, LaTeX, LISREL, IBM SPSS, Stata, SmartPLS, NVivo.</p>
            </div>
          </div>
          <div className="md:w-1/2">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Data" className="rounded-3xl shadow-2xl border-4 border-white" />
          </div>
        </div>

        {/* Service 2 with AI Feature */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
          <div className="md:w-1/2">
            <div className="bg-black text-[#ae00ff] p-4 rounded-2xl inline-block mb-4 shadow-lg border border-[#ae00ff]">
              <Search size={40} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Research & Evaluation</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed text-justify">
              <p>We conduct rigorous research and evaluations using scientific and systematic approaches. Services include systematic review, empirical review, ethnographic study, qualitative research, quantitative research, case study, action research, market surveys, proposal writing, and more.</p>
              <p>Our approach follows World Bank, World Health Organization, USAID, and UN evaluation protocols.</p>
            </div>

            {/* AI Research Ideator UI */}
            <div className="mt-8 bg-purple-50 p-6 rounded-2xl border-2 border-purple-200 shadow-inner">
               <h4 className="font-bold flex items-center gap-2 text-purple-900 mb-2">
                 <Sparkles className="text-[#ae00ff]" size={20} /> AI Research Ideator
               </h4>
               <p className="text-xs text-purple-700 mb-4">Stuck on a topic? Enter your field of interest and our AI will suggest 3 rigorous research project ideas.</p>
               
               <div className="flex gap-2 mb-4">
                 <input 
                   type="text" 
                   placeholder="e.g., SME supply chain in Ghana" 
                   value={researchField}
                   onChange={(e) => setResearchField(e.target.value)}
                   className="flex-1 p-2 border rounded-lg outline-none focus:border-[#ae00ff] text-sm"
                 />
                 <button 
                   onClick={generateResearchIdeas}
                   disabled={isGenerating || !researchField.trim()}
                   className="bg-[#ae00ff] text-white px-4 py-2 rounded-lg font-bold hover:bg-purple-700 disabled:opacity-50 transition flex items-center gap-2 text-sm whitespace-nowrap"
                 >
                   {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                   Generate
                 </button>
               </div>

               {researchTopics && (
                 <div className="bg-white p-4 rounded-lg border border-purple-100 text-sm shadow-sm whitespace-pre-wrap leading-relaxed text-gray-800">
                   {researchTopics}
                 </div>
               )}
            </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
             <img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800" alt="Research" className="rounded-3xl shadow-2xl border-4 border-white" />
          </div>
        </div>

        {/* Service 3 (Digital vs Social Table) */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-[#ae00ff]">
          <div className="text-center mb-10">
            <MonitorPlay size={40} className="mx-auto text-[#ae00ff] mb-4" />
            <h2 className="text-3xl font-bold mb-4">Digital & Social Media Marketing</h2>
            <p className="max-w-3xl mx-auto text-sm text-gray-600">Advanced online altimetric algorithm technology to reconfigure digital platforms to reach exact clients.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2">Digital Marketing</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2"><CheckCircle size={16} className="text-[#ae00ff] shrink-0 mt-1"/> Includes online (SEO, PPC, email, websites) and offline (TV, radio, SMS).</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-[#ae00ff] shrink-0 mt-1"/> Build awareness, generate leads, convert sales.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-[#ae00ff] shrink-0 mt-1"/> Global, multi-channel, measurable across diverse platforms.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-[#ae00ff] shrink-0 mt-1"/> Broader data: website traffic, conversion rates, ad performance.</li>
              </ul>
            </div>
            <div className="bg-[#ae00ff]/10 p-6 rounded-2xl border border-[#ae00ff]">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-[#ae00ff] pb-2 text-[#ae00ff]">Social Media Marketing</h3>
              <ul className="space-y-3 text-sm text-gray-800">
                <li className="flex gap-2"><CheckCircle size={16} className="text-[#ae00ff] shrink-0 mt-1"/> Limited to social platforms (Facebook, IG, TikTok, X, YouTube).</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-[#ae00ff] shrink-0 mt-1"/> Build brand presence, foster community, drive traffic.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-[#ae00ff] shrink-0 mt-1"/> Platform-specific, audience engagement driven.</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-[#ae00ff] shrink-0 mt-1"/> Engagement metrics: likes, shares, comments, followers.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 4 & 5 Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-black text-white p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition"><Globe size={100} /></div>
            <h2 className="text-2xl font-bold mb-4 text-[#ae00ff] relative z-10">Web & App Design</h2>
            <div className="space-y-3 text-sm relative z-10 text-gray-300">
              <p>Use of latest ultra-modern information technologies to build professional websites. Includes dynamic and interactive websites, ecommerce, health websites, etc.</p>
              <p><strong>Functions:</strong> SEO, payments, WhatsApp messaging integration.</p>
              <p className="text-white font-bold bg-[#ae00ff] p-2 inline-block rounded mt-2">Data Collection App Design</p>
              <p>Digital platform apps to enable data collection via computer, tablet, or phone anywhere, anytime.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
            <Users size={40} className="text-[#ae00ff] mb-4" />
            <h2 className="text-2xl font-bold mb-4">Training & Mentorship</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              We provide professional training and mentorship for individuals, students, professional workers, and organizations in relation to research, data collection and analysis, project evaluation, web design, graphic designs, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Industries() {
  const areas = [
    "SMEs (Market Traders, Farmers)",
    "Mining & Oil",
    "Agriculture & Fisheries",
    "Healthcare & Pharmaceuticals",
    "Education & Research Institutions",
    "Finance & Banking",
    "NGOs & Non-Profits",
    "Government Agencies"
  ];

  return (
    <div className="animate-fade-in-up py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Industries We <span className="text-[#ae00ff]">Empower</span></h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Providing tailored consultancy across a diverse range of economic sectors in Africa and beyond.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Areas We Operate */}
        <div>
          <div className="bg-white rounded-2xl shadow-xl p-8 h-full border-t-4 border-[#ae00ff]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Globe className="text-[#ae00ff]"/> Areas We Operate</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-[#ae00ff] transition cursor-default">
                  <CheckCircle size={16} className="text-[#ae00ff]" />
                  <span className="text-sm font-semibold">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How We Operate */}
        <div>
           <div className="bg-black text-white rounded-2xl shadow-[0_0_20px_rgba(174,0,255,0.3)] p-8 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ae00ff] rounded-full filter blur-[80px] opacity-50"></div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Briefcase className="text-[#ae00ff]"/> How We Operate</h2>
            
            <div className="space-y-6 relative z-10">
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
                <h3 className="font-bold text-[#ae00ff] mb-2 text-lg">Experts Teamwork</h3>
                <p className="text-sm text-gray-300">We deploy multidisciplinary teams. Every project benefits from a synthesis of specialized knowledge, ensuring comprehensive problem-solving.</p>
              </div>
              <div className="bg-gray-900 p-5 rounded-xl border border-gray-800">
                <h3 className="font-bold text-[#ae00ff] mb-2 text-lg">Pool of Experts' Resources</h3>
                <p className="text-sm text-gray-300">We tap into an extensive network across industries. From grassroots SME frameworks to complex mining analytics, our resource pool is vast and accessible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const projects = [
    { type: 'Evaluation', title: 'National SME Assessment', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500' },
    { type: 'Research', title: 'Agricultural Yield Analysis', img: 'https://images.unsplash.com/photo-1586771107445-d3af2864c017?auto=format&fit=crop&q=80&w=500' },
    { type: 'Web Design', title: 'E-commerce Platform for Traders', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=500' },
    { type: 'Evaluation', title: 'Healthcare Intervention Review', img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=500' },
    { type: 'Research', title: 'Market Demographics 2025', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500' },
    { type: 'Web Design', title: 'NGO Data Collection App', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=500' },
  ];

  return (
    <div className="animate-fade-in-up py-20 px-4 max-w-7xl mx-auto">
       <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Project <span className="text-[#ae00ff]">Portfolio</span></h1>
        <p className="text-gray-600 max-w-2xl mx-auto">A glimpse into our successful engagements across various sectors.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(174,0,255,0.2)] transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="h-48 overflow-hidden relative">
              <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute top-4 left-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-sm border border-[#ae00ff]">
                {proj.type} Project
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <button className="text-[#ae00ff] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                View Details <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const [projectDescription, setProjectDescription] = useState('');
  const [isEnhancing, setIsEnhancing] = useState(false);

  // GEMINI FEATURE 2: AI Proposal Description Enhancer
  const enhanceDescription = async () => {
    if (!projectDescription.trim()) return;
    setIsEnhancing(true);
    try {
      const prompt = `You are a professional business consultant writing for a client. Take the following rough project description and rewrite it so it sounds highly professional, well-structured, clear, and appropriate for a consulting firm service request. Keep it concise.\n\nOriginal rough draft:\n"${projectDescription}"`;
      const improvedText = await callGeminiAPI(prompt);
      setProjectDescription(improvedText);
    } catch (e) {
      alert(e.message);
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <div className="animate-fade-in-up py-20 px-4 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Info Side */}
        <div className="lg:w-1/3 bg-black text-white p-10 relative">
          <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-[#ae00ff] to-transparent"></div>
          <h2 className="text-3xl font-bold mb-8 text-[#ae00ff]">Contact & Pricing</h2>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">Mobile & WhatsApp</h4>
              <p className="font-mono">+233 59 591 2902</p>
              <p className="font-mono">+233 24 252 3480</p>
              <p className="font-mono">+233 20 226 3839</p>
              <p className="font-mono">+233 20 226 3938</p>
            </div>
            
            <div>
              <h4 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">Email Addresses</h4>
              <p>info@skabconsult.com</p>
              <p>contact@skabconsult.com</p>
              <p>services@skabconsult.com</p>
            </div>

            <div>
               <h4 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">Payment Methods</h4>
               <div className="flex gap-2 mb-2">
                 <span className="bg-[#ae00ff] text-white text-xs px-2 py-1 rounded">Mobile Money</span>
                 <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Visa / Mastercard</span>
               </div>
               <p className="text-xs text-gray-400 mt-2">Automated USD deduction available via secure payment link upon invoice generation.</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="lg:w-2/3 p-10 bg-gray-50 flex flex-col justify-between">
          <div>
            <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-800 text-sm">
              <strong>Security Notice:</strong> Any payment without our platform or listed contact numbers is unauthorized and considered a scam. Verify with our official emails before payment.
            </div>

            <h3 className="text-2xl font-bold mb-6">Schedule Consultation / Price Request</h3>
            
            <form name="consultation-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Form submitted locally."); }}>
              <input type="hidden" name="form-name" value="consultation-request" />
              <p className="hidden"><input name="bot-field" /></p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" name="full_name" placeholder="Full Name" className="w-full p-4 rounded-lg border border-gray-300 focus:border-[#ae00ff] focus:ring-1 focus:ring-[#ae00ff] outline-none transition bg-white" required />
                <input type="email" name="email" placeholder="Email Address" className="w-full p-4 rounded-lg border border-gray-300 focus:border-[#ae00ff] focus:ring-1 focus:ring-[#ae00ff] outline-none transition bg-white" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-4 rounded-lg border border-gray-300 focus:border-[#ae00ff] focus:ring-1 focus:ring-[#ae00ff] outline-none transition bg-white" required />
                <select name="service_needed" className="w-full p-4 rounded-lg border border-gray-300 focus:border-[#ae00ff] focus:ring-1 focus:ring-[#ae00ff] outline-none transition bg-white" required>
                  <option value="">Select Service Needed</option>
                  <option value="data">Data Solutions</option>
                  <option value="research">Research & Evaluation</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="web">Web Design</option>
                  <option value="training">Training</option>
                </select>
              </div>

              {/* AI Powered Textarea */}
              <div className="relative border border-gray-300 rounded-lg bg-white overflow-hidden focus-within:border-[#ae00ff] focus-within:ring-1 focus-within:ring-[#ae00ff] transition-all">
                <textarea 
                  name="project_description" 
                  placeholder="Describe your project or request..." 
                  rows="5" 
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full p-4 outline-none resize-none bg-transparent" 
                  required
                />
                <div className="bg-gray-100 p-2 flex justify-between items-center border-t border-gray-200">
                  <span className="text-xs text-gray-500 ml-2">Not sure what to say? Let AI help.</span>
                  <button 
                    type="button" 
                    onClick={enhanceDescription}
                    disabled={isEnhancing || !projectDescription.trim()}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#ae00ff] to-[#7b00b3] text-white text-xs px-3 py-1.5 rounded font-bold hover:shadow-[0_0_10px_#ae00ff] disabled:opacity-50 transition-all"
                  >
                    {isEnhancing ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                    ✨ Professionalize Description
                  </button>
                </div>
              </div>

              <button type="submit" className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-[#ae00ff] hover:shadow-[0_5px_20px_rgba(174,0,255,0.4)] transition-all w-full md:w-auto">
                Submit Securely
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-96 relative bg-white">
         <iframe
            title="Office Location Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=North%20Legon,%20Accra,%20Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
      </div>
    </div>
  );
}

function PartnerUs() {
  return (
    <div className="animate-fade-in-up py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Partner <span className="text-[#ae00ff]">With Us</span></h1>
        <p className="text-gray-600">Join our network of professionals, interns, and sponsors to create lasting impact.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-[#ae00ff]">
        <form name="partnership-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submitted locally"); }}>
          <input type="hidden" name="form-name" value="partnership-request" />
          <p className="hidden"><input name="bot-field" /></p>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">Partnership Type</label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {['Affiliate', 'Intern', 'Referral', 'NGO', 'Sponsor'].map(type => (
                <label key={type} className="flex items-center gap-2 p-3 border rounded cursor-pointer hover:bg-gray-50 focus-within:border-[#ae00ff] focus-within:ring-1 focus-within:ring-[#ae00ff]">
                  <input type="radio" name="partnerType" value={type} className="text-[#ae00ff] focus:ring-[#ae00ff]" required />
                  <span className="text-sm font-semibold">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="organization_name" placeholder="Organization / Full Name" className="w-full p-3 border rounded bg-gray-50 focus:bg-white focus:border-[#ae00ff] outline-none transition" required />
            <input type="email" name="email" placeholder="Email Address" className="w-full p-3 border rounded bg-gray-50 focus:bg-white focus:border-[#ae00ff] outline-none transition" required />
          </div>

          <textarea name="collaboration_details" placeholder="Briefly describe how we can collaborate or what you aim to achieve..." rows="4" className="w-full p-3 border rounded bg-gray-50 focus:bg-white focus:border-[#ae00ff] outline-none transition" required></textarea>

          {/* Donation/Sponsor Payment Section Placeholder */}
          <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 mt-6">
             <h4 className="font-bold text-black mb-2 flex items-center gap-2"><Globe size={18} className="text-[#ae00ff]"/> Sponsor / Donate via VISA/Mastercard</h4>
             <p className="text-xs text-gray-600 mb-4">If you selected Sponsor/Donor, you will be redirected to our secure gateway upon submission to process your contribution securely.</p>
             <input type="number" name="donation_amount" placeholder="Donation Amount (USD) - Optional" className="w-full md:w-1/2 p-3 border rounded bg-white focus:border-[#ae00ff] outline-none transition" />
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full eclipse-btn text-lg shadow-lg">Submit Partnership Request</button>
          </div>
        </form>
      </div>
    </div>
  );
}