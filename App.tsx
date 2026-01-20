
import React, { useState, useEffect, useRef } from 'react';
import { 
  Fan, 
  ThermometerSnowflake, 
  Wrench, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Menu, 
  X,
  Linkedin,
  Facebook,
  Calculator,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  MessageSquare,
  Box,
  BarChart3,
  History,
  FileText,
  Award,
  Calendar,
  TrendingUp,
  Download,
  Snowflake,
  Activity,
  Zap,
  Layers,
  Globe,
  // Fix: Added missing Users icon import
  Users
} from 'lucide-react';

// Reusable Section Heading
const SectionHeading: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="text-center mb-16 px-4">
    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-[10px] font-bold uppercase tracking-widest border border-cyan-500/20">
      <Activity size={12} className="animate-pulse" /> Engineering Excellence
    </div>
    <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    {subtitle && <p className={`max-w-2xl mx-auto text-lg font-medium ${light ? 'text-blue-100/70' : 'text-slate-500'}`}>{subtitle}</p>}
    <div className={`w-20 h-1.5 mx-auto mt-6 rounded-full ${light ? 'bg-cyan-400' : 'bg-blue-600'}`}></div>
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [arMode, setArMode] = useState<'split' | 'cassette'>('split');
  const [roomArea, setRoomArea] = useState(30);
  const [activePortalTab, setActivePortalTab] = useState('Analytics');
  const [showBooking, setShowBooking] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const costTraditional = Math.round(roomArea * 450);
  const costVRF = Math.round(roomArea * 280);
  const savings = costTraditional - costVRF;

  const openWhatsApp = () => {
    window.open('https://wa.me/254729568742', '_blank');
  };

  const handleDownloadPDF = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`System Efficiency Report for ${roomArea}m² generated. Your estimated KES ${savings.toLocaleString()} annual savings audit is ready for download.`);
    }, 1500);
  };

  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'ROI Engine', href: '#energy-roi' },
    { name: 'AR Simulation', href: '#ar-preview' },
    { name: 'Asset Hub', href: '#portal' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 selection:bg-cyan-100 overflow-x-hidden scroll-smooth">
      
      {/* AI Chat Bot Floating */}
      <div className={`fixed bottom-6 right-6 z-[300] transition-all duration-500 transform ${showChat ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-90 pointer-events-none opacity-0'}`}>
        <div className="bg-white w-[380px] max-w-[90vw] rounded-[2.5rem] shadow-3xl border border-slate-200/60 overflow-hidden">
          <div className="bg-slate-900 p-7 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <Cpu size={22} className="text-slate-950" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-tight">Maxi-Core Intelligence</h4>
                <div className="flex items-center gap-1.5 text-[9px] uppercase font-black tracking-widest opacity-60">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Systems Online
                </div>
              </div>
            </div>
            <button onClick={() => setShowChat(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors"><X size={20} /></button>
          </div>
          <div className="h-[350px] p-6 overflow-y-auto space-y-4 bg-slate-50/80">
            <div className="bg-white p-4 rounded-3xl rounded-tl-none shadow-sm text-sm text-slate-600 border border-slate-100 leading-relaxed">
              Hello. I am the Maximal AI Assistant. I can process load calculations, suggest unit sizing based on your KES savings goals, or connect you with a site engineer at Nextgen Mall.
            </div>
            <div className="flex flex-col gap-2.5">
              <button onClick={() => { setShowEmergency(true); setShowChat(false); }} className="bg-red-50 text-red-600 px-5 py-3 rounded-2xl text-xs font-black border border-red-100 text-left hover:bg-red-600 hover:text-white transition-all">Report Critical Failure</button>
              <button onClick={() => { setShowChat(false); handleNavClick('#ar-preview'); }} className="bg-cyan-50 text-cyan-700 px-5 py-3 rounded-2xl text-xs font-black border border-cyan-100 text-left hover:bg-cyan-600 hover:text-white transition-all">Launch 3D Projection</button>
              <button onClick={openWhatsApp} className="bg-emerald-50 text-emerald-600 px-5 py-3 rounded-2xl text-xs font-black border border-emerald-100 text-left hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2">WhatsApp Direct Link <Phone size={12}/></button>
            </div>
          </div>
          <div className="p-5 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input type="text" placeholder="Type technical query..." className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
              <button className="bg-slate-900 text-white p-3 rounded-2xl hover:bg-blue-600 transition-all"><ArrowRight size={22} /></button>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setShowChat(true)}
        className={`fixed bottom-6 right-6 z-[250] bg-slate-900 text-white p-5 rounded-3xl shadow-3xl transition-all hover:scale-110 hover:bg-blue-600 active:scale-95 ${showChat ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}
      >
        <MessageSquare size={30} strokeWidth={2.5} />
      </button>

      {/* Modern Navigation */}
      <nav className={`fixed w-full z-[400] transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-2xl shadow-xl py-3 border-b border-slate-200/50' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl group-hover:bg-blue-600 transition-all duration-500">
              <ThermometerSnowflake className="text-cyan-400 w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-2xl tracking-tighter uppercase leading-none ${scrolled ? 'text-slate-950' : 'text-white'}`}>MAXIMAL</span>
              <span className={`text-[10px] font-black tracking-[0.4em] ${scrolled ? 'text-blue-600' : 'text-cyan-400'}`}>VENTURES E.A.</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((item) => (
              <button key={item.name} onClick={() => handleNavClick(item.href)} className={`font-black text-[11px] uppercase tracking-[0.25em] hover:text-cyan-500 transition-all relative group ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
            <div className="h-6 w-px bg-slate-300/30"></div>
            <button onClick={() => setActiveLang(activeLang === 'EN' ? 'SW' : 'EN')} className={`font-bold text-xs flex items-center gap-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              <Globe size={14} /> {activeLang}
            </button>
            <button onClick={() => setShowBooking(true)} className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.15em] hover:bg-cyan-400 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all shadow-xl shadow-cyan-500/20">
              Audit Booking
            </button>
          </div>

          <button 
            className={`lg:hidden p-3 rounded-2xl shadow-2xl border-2 transition-all ${isMenuOpen ? 'bg-slate-950 text-white border-slate-800' : scrolled ? 'bg-slate-950 text-white border-slate-800' : 'bg-white/10 text-white border-white/20 backdrop-blur-md'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Fullscreen Navigation */}
        <div className={`fixed inset-0 bg-slate-950 z-[410] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col h-full p-10 pt-40 overflow-y-auto">
            <div className="flex flex-col space-y-10 text-left">
              {navLinks.map((item, idx) => (
                <button 
                  key={item.name} 
                  onClick={() => handleNavClick(item.href)}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                  className={`text-6xl font-black text-white hover:text-cyan-400 transition-all tracking-tighter text-left ${isMenuOpen ? 'translate-x-0' : '-translate-x-10'}`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-12 flex flex-col gap-5">
                <button onClick={() => { setShowBooking(true); setIsMenuOpen(false); }} className="bg-cyan-500 text-slate-950 py-7 rounded-3xl font-black text-3xl shadow-2xl shadow-cyan-500/30">
                  Request HVAC Audit
                </button>
                <button onClick={() => { setShowEmergency(true); setIsMenuOpen(false); }} className="bg-red-600 text-white py-7 rounded-3xl font-black text-3xl shadow-2xl shadow-red-600/30">
                  Critical Response
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 industrial-gradient">
        <div className="absolute inset-0 z-0 scale-105 animate-slow-zoom opacity-30">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="HVAC Engineering" />
          <div className="absolute inset-0 bg-slate-950/80"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl text-left">
            <div className="inline-flex items-center space-x-3 frost-glass px-5 py-3 rounded-2xl mb-12 border border-white/10">
              <ShieldCheck className="text-cyan-400 w-5 h-5" />
              <span className="text-[10px] font-black tracking-[0.4em] text-white uppercase">Kenya's Premium HVAC-R Authority</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] mb-12 tracking-tighter animate-fade-in-up">
              Engineered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">Resilience.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-300 mb-16 leading-relaxed font-medium max-w-4xl animate-fade-in-up delay-100">
              Transforming commercial and industrial environments with ultra-efficient cooling, custom cold-chain infrastructure, and AI-managed climate systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <button onClick={() => setShowChat(true)} className="bg-cyan-500 text-slate-950 px-14 py-7 rounded-[2.5rem] font-black text-xl flex items-center justify-center gap-4 shadow-3xl shadow-cyan-500/40 hover:bg-cyan-400 hover:-translate-y-2 transition-all group">
                Consult Technical AI <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button onClick={() => handleNavClick('#energy-roi')} className="bg-white/5 backdrop-blur-2xl border border-white/10 text-white px-14 py-7 rounded-[2.5rem] font-black text-xl flex items-center justify-center gap-4 hover:bg-white/10 transition-all text-center">
                ROI Optimization
              </button>
            </div>
          </div>
        </div>

        {/* Static decorative data points */}
        <div className="absolute bottom-12 right-12 hidden lg:flex gap-10">
          <div className="text-right">
            <p className="text-cyan-400 font-black text-4xl">99.8%</p>
            <p className="text-white/40 text-[10px] uppercase font-black tracking-widest">System Uptime</p>
          </div>
          <div className="text-right">
            <p className="text-cyan-400 font-black text-4xl">30%</p>
            <p className="text-white/40 text-[10px] uppercase font-black tracking-widest">Energy Saved</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative scroll-mt-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading title="Precision Solutions" subtitle="Bespoke engineering for commercial, industrial, and specialized sectors across East Africa." />
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Fan className="w-10 h-10" />, 
                title: "VRF/VRV Infrastructure", 
                desc: "Intelligent variable flow systems for large-scale multi-zone commercial buildings.",
                tag: "Scalable"
              },
              { 
                icon: <ThermometerSnowflake className="w-10 h-10" />, 
                title: "Industrial Cold Storage", 
                desc: "Precision refrigeration for food processing, pharma, and agricultural storage needs.",
                tag: "Critical"
              },
              { 
                icon: <Zap className="w-10 h-10" />, 
                title: "Energy Retrofitting", 
                desc: "Upgrading legacy systems to modern inverter tech, slashing operational costs instantly.",
                tag: "Economical"
              }
            ].map((service, i) => (
              <div key={i} className="group bg-slate-50 p-12 rounded-[3rem] border border-slate-200/60 hover:border-cyan-500/50 hover:bg-white hover:shadow-3xl transition-all duration-700 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors">
                  <Layers size={80} />
                </div>
                <div className="w-20 h-20 bg-slate-900 text-cyan-400 rounded-3xl flex items-center justify-center mb-8 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {service.icon}
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-[10px] font-black uppercase tracking-widest mb-4">
                  {service.tag}
                </span>
                <h3 className="text-3xl font-black mb-6 text-slate-950">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">{service.desc}</p>
                <button className="flex items-center gap-3 font-black text-xs uppercase tracking-widest text-slate-900 group-hover:text-cyan-600 transition-colors">
                  Detailed Specs <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive ROI Section */}
      <section id="energy-roi" className="py-32 bg-slate-50 border-y border-slate-200 scroll-mt-20">
        <div className="container mx-auto px-6">
          <SectionHeading title="System ROI Engine" subtitle="Calculate the fiscal and environmental impact of upgrading to Maximal climate solutions." />
          <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-5 text-left">
              <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-200">
                 <h4 className="text-3xl font-black mb-8 flex items-center gap-4 text-slate-950"><Calculator className="text-blue-600" /> Technical Parameters</h4>
                 
                 <div className="space-y-10">
                   <div>
                     <div className="flex justify-between items-center mb-6">
                       <label className="text-xs font-black uppercase tracking-widest text-slate-500">Floor Surface Area</label>
                       <span className="text-2xl font-black text-blue-600">{roomArea} m²</span>
                     </div>
                     <input 
                       type="range" 
                       min="20" 
                       max="1000" 
                       step="10"
                       value={roomArea} 
                       onChange={(e) => setRoomArea(parseInt(e.target.value))} 
                       className="w-full h-1.5 bg-slate-100 rounded-full appearance-none accent-cyan-500 cursor-pointer" 
                     />
                   </div>

                   <div className="space-y-5">
                      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex justify-between items-center group hover:bg-white hover:shadow-xl transition-all">
                         <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Maximal Inverter Tech</p>
                            <p className="font-bold text-slate-900">Estimated Annual CAPEX</p>
                         </div>
                         <span className="text-2xl font-black text-emerald-600">KES {costVRF.toLocaleString()}</span>
                      </div>
                      <div className="p-8 bg-slate-100/50 rounded-3xl flex justify-between items-center opacity-60">
                         <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Standard Split Units</p>
                            <p className="font-bold text-slate-400 italic">Market Average Cost</p>
                         </div>
                         <span className="text-xl font-black text-slate-400 line-through">KES {costTraditional.toLocaleString()}</span>
                      </div>
                   </div>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 text-left">
               <div className="bg-slate-900 p-12 rounded-[4.5rem] text-white flex flex-col justify-between shadow-3xl shadow-slate-900/40 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700"></div>
                  <TrendingUp size={60} className="mb-8 text-cyan-400 animate-pulse" />
                  <div>
                    <h5 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-3">Projected Annual Savings</h5>
                    <p className="text-6xl font-black text-white leading-none">KES {savings.toLocaleString()}</p>
                    <p className="mt-6 text-cyan-400/80 font-bold flex items-center gap-2">
                      <Zap size={16} /> 38% Reduction in Consumption
                    </p>
                  </div>
                  <p className="mt-12 text-slate-500 text-xs font-medium border-t border-slate-800 pt-8">Calculated based on 2024 East African energy tariffs and average cooling degree days.</p>
               </div>
               
               <div className="bg-blue-600 p-12 rounded-[4.5rem] text-white flex flex-col justify-between shadow-3xl shadow-blue-600/30">
                  <div>
                    <h5 className="text-2xl font-black flex items-center gap-4 text-white mb-8"><Award className="text-cyan-300" /> Efficiency Grade</h5>
                    <div className="space-y-6">
                       {[
                         { label: 'EER: 4.8 Rating', desc: 'Highest efficiency commercial grade.' },
                         { label: 'R32 Refrigerant', desc: 'Next-gen low GWP eco-compliance.' },
                         { label: 'AI Adaptive Load', desc: 'Self-adjusting based on occupancy.' }
                       ].map((item, idx) => (
                         <div key={idx} className="group cursor-help border-b border-white/10 pb-4">
                           <div className="flex items-center gap-4 text-sm font-black text-white">
                              <CheckCircle2 size={18} className="text-cyan-300" /> {item.label}
                           </div>
                           <p className="text-[11px] text-blue-100/60 ml-8 mt-1 font-bold tracking-wide">{item.desc}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                  <button 
                    onClick={handleDownloadPDF} 
                    disabled={downloading}
                    className="w-full py-6 bg-slate-950 hover:bg-black text-white rounded-3xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-4 shadow-xl disabled:opacity-50"
                  >
                    {downloading ? (
                      <span className="flex items-center gap-3"><div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div> Processing Audit...</span>
                    ) : (
                      <><Download size={20} /> Export Audit Report</>
                    )}
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* AR Simulation Showroom */}
      <section id="ar-preview" className="py-40 bg-slate-950 text-white overflow-hidden text-left scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 space-y-10">
               <div className="inline-flex items-center gap-3 bg-cyan-500/10 px-5 py-2.5 rounded-2xl text-cyan-400 font-black text-[11px] uppercase border border-cyan-500/20 tracking-widest">
                  <Box size={18} /> Interactive 3D Simulation
               </div>
               <h2 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                 Simulate <br/><span className="text-cyan-500">Infrastructure.</span>
               </h2>
               <p className="text-xl text-slate-400 leading-relaxed max-w-xl font-medium">
                  Experience our virtual placement engine. Toggle between industrial split systems and commercial ceiling cassettes to visualize the perfect fit for your facility.
               </p>
               <div className="flex flex-wrap gap-5">
                  <button 
                    onClick={() => setArMode('split')} 
                    className={`flex-1 md:flex-none px-10 py-6 rounded-3xl font-black text-sm uppercase tracking-widest border-2 transition-all flex items-center justify-center gap-4 ${arMode === 'split' ? 'bg-cyan-500 border-cyan-500 text-slate-950 shadow-3xl shadow-cyan-500/40' : 'bg-transparent border-white/10 text-white/40 hover:border-white/20'}`}
                  >
                    <ThermometerSnowflake size={22} /> High-Wall Unit
                  </button>
                  <button 
                    onClick={() => setArMode('cassette')} 
                    className={`flex-1 md:flex-none px-10 py-6 rounded-3xl font-black text-sm uppercase tracking-widest border-2 transition-all flex items-center justify-center gap-4 ${arMode === 'cassette' ? 'bg-cyan-500 border-cyan-500 text-slate-950 shadow-3xl shadow-cyan-500/40' : 'bg-transparent border-white/10 text-white/40 hover:border-white/20'}`}
                  >
                    <Fan size={22} /> Ceiling Cassette
                  </button>
               </div>
               <p className="text-slate-500 text-xs font-bold flex items-center gap-3">
                 <Globe size={14} className="text-cyan-500" /> Multi-Reflective surfaces simulated in real-time.
               </p>
            </div>
            
            <div className="lg:w-1/2 relative perspective-1000 w-full flex justify-center">
               <div className="aspect-square bg-white/5 rounded-[5rem] border-[16px] border-slate-900/60 flex items-center justify-center relative overflow-hidden group transition-all duration-1000 hover:rotate-y-12 hover:scale-105 shadow-3xl max-w-lg w-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
                  
                  <div className="relative z-10 transition-all duration-700">
                    {arMode === 'split' ? (
                      <div className="bg-white p-10 rounded-[3rem] shadow-3xl w-80 animate-fade-in-up border border-slate-200 transform group-hover:translate-z-20 transition-transform">
                          <div className="flex justify-between items-start mb-6">
                            <div className="h-3 bg-slate-100 w-16 rounded-full"></div>
                            <span className="text-[10px] font-black text-cyan-600 border-2 border-cyan-100 px-3 py-1 rounded-xl uppercase tracking-tighter">V-Arctic Inverter</span>
                          </div>
                          <p className="text-slate-950 font-black text-3xl mb-1 tracking-tight">Maximal V9</p>
                          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Heavy-Duty Chassis</p>
                          <div className="flex gap-3">
                             {[...Array(5)].map((_,i) => <div key={i} className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse-scale" style={{ animationDelay: `${i*150}ms` }}></div>)}
                          </div>
                      </div>
                    ) : (
                      <div className="bg-white p-16 rounded-full shadow-3xl w-80 h-80 border-[24px] border-slate-50 flex items-center justify-center relative group-hover:shadow-cyan-500/30 group-hover:translate-z-20 transition-all">
                          <div className="absolute inset-0 flex items-center justify-center animate-fan-spin">
                            <Fan size={160} className="text-slate-100 group-hover:text-cyan-50 transition-colors" />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-10 h-10 bg-slate-900 rounded-full shadow-2xl border-4 border-white flex items-center justify-center">
                                <Snowflake size={18} className="text-cyan-400" />
                            </div>
                          </div>
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-5 bg-slate-950/90 backdrop-blur-2xl px-8 py-4 rounded-3xl border border-white/10 group-hover:border-cyan-500/40 transition-all shadow-2xl">
                     <div className="w-3.5 h-3.5 bg-cyan-500 rounded-full animate-ping"></div>
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Simulation Active</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Client Hub Portal */}
      <section id="portal" className="py-40 bg-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <SectionHeading title="Asset Portal" subtitle="The command center for facility managers to monitor service cycles and system health." />
          <div className="bg-slate-950 rounded-[5rem] shadow-3xl border border-slate-900 overflow-hidden flex flex-col lg:flex-row max-w-7xl mx-auto text-left min-h-[700px]">
            <div className="lg:w-80 border-r border-slate-900 p-12 space-y-16">
               <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center border-2 border-slate-800 shadow-inner">
                     <Users className="text-cyan-400" size={28} />
                  </div>
                  <div>
                    <p className="font-black text-white text-lg tracking-tight">Admin Console</p>
                    <p className="text-[10px] uppercase font-black text-cyan-500 tracking-[0.2em] opacity-80">Nextgen Mall HQ</p>
                  </div>
               </div>
               <nav className="flex flex-col gap-5">
                  {[
                    { label: 'Analytics', icon: <BarChart3 size={20} /> },
                    { label: 'Asset Map', icon: <MapPin size={20} /> },
                    { label: 'History', icon: <History size={20} /> },
                    { label: 'Invoices', icon: <FileText size={20} /> }
                  ].map(tab => (
                    <button key={tab.label} onClick={() => setActivePortalTab(tab.label)} className={`flex items-center gap-5 p-6 rounded-3xl font-black text-sm transition-all ${activePortalTab === tab.label ? 'bg-cyan-500 text-slate-950 shadow-2xl translate-x-3' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}>
                       {tab.icon} {tab.label}
                    </button>
                  ))}
               </nav>
            </div>
            
            <div className="flex-1 p-16 space-y-12 text-white relative">
               <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                  <Activity size={300} strokeWidth={0.5} />
               </div>
               
               <div className="flex justify-between items-center relative z-10">
                  <h4 className="text-4xl font-black tracking-tighter">{activePortalTab} View</h4>
                  <div className="flex items-center gap-4">
                    <span className="px-5 py-2.5 bg-cyan-500/10 text-cyan-400 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-cyan-500/20 flex items-center gap-3">
                       <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></span> Real-time Data
                    </span>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-8 relative z-10">
                  <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-10 rounded-[3rem] group hover:bg-slate-900 transition-all">
                     <div className="flex items-center gap-6 mb-8">
                        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 border border-slate-700 shadow-inner group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all"><Wrench size={28}/></div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Open Ticket #MX-1092</p>
                           <h5 className="text-xl font-black text-white">Inverter Calibration</h5>
                        </div>
                     </div>
                     <p className="text-slate-400 text-sm font-medium mb-8">Scheduled technical audit for AHU units on Level 3. Senior Engineer John Mubea dispatched.</p>
                     <button onClick={openWhatsApp} className="w-full px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                        Track Dispatch Status
                     </button>
                  </div>

                  <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-10 rounded-[3rem] group hover:bg-slate-900 transition-all">
                     <div className="flex items-center gap-6 mb-8">
                        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 border border-slate-700 shadow-inner"><Activity size={28}/></div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Infrastructure Health</p>
                           <h5 className="text-xl font-black text-white">System Optimal</h5>
                        </div>
                     </div>
                     <div className="flex items-end gap-2 mb-8">
                        <span className="text-4xl font-black text-emerald-400">94.2%</span>
                        <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Efficiency Factor</span>
                     </div>
                     <button className="w-full px-8 py-5 bg-cyan-500 text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-cyan-400">
                        View Detailed Metrics
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Certification Footnote */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left space-y-4">
            <h5 className="text-2xl font-black text-slate-950">Join our Technical Network</h5>
            <p className="text-slate-500 font-medium">Monthly HVAC-R case studies and energy trends in East Africa.</p>
          </div>
          <div className="flex-1 max-w-md w-full flex gap-3">
             <input type="email" placeholder="professional@company.com" className="flex-1 bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm font-bold outline-none focus:ring-2 focus:ring-cyan-500" />
             <button className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">Join</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-32 pb-12 text-left border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-24 mb-24">
            <div className="lg:col-span-5 space-y-12">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-slate-900 rounded-[2rem] flex items-center justify-center border-2 border-slate-800"><ThermometerSnowflake className="text-cyan-400 w-9 h-9" /></div>
                <div className="flex flex-col">
                  <span className="font-black text-3xl tracking-tighter uppercase leading-none">MAXIMAL</span>
                  <span className="text-[11px] font-black tracking-[0.5em] text-cyan-500">VENTURES E.A.</span>
                </div>
              </div>
              <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-lg">Providing precision-engineered climate solutions and refrigeration infrastructure across the East African landscape.</p>
              <div className="flex gap-5">
                <a href="https://ke.linkedin.com/company/maximal-ventures-e-a-limited" className="w-16 h-16 bg-slate-900 border-2 border-slate-800 rounded-3xl flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 hover:-translate-y-2 transition-all duration-500"><Linkedin size={28} /></a>
                <a href="https://www.facebook.com/p/Maximal-ventures-EA-LTD-61570224386317/" className="w-16 h-16 bg-slate-900 border-2 border-slate-800 rounded-3xl flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 hover:-translate-y-2 transition-all duration-500"><Facebook size={28} /></a>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-8">
                <h5 className="font-black text-[11px] uppercase tracking-[0.4em] text-cyan-500">Systems</h5>
                <ul className="space-y-5 text-slate-400 font-black text-[13px] uppercase tracking-widest">
                  <li><button className="hover:text-cyan-400 transition-colors">VRF Commercial</button></li>
                  <li><button className="hover:text-cyan-400 transition-colors">Cleanroom HVAC</button></li>
                  <li><button className="hover:text-cyan-400 transition-colors">Pharma Cooling</button></li>
                  <li><button className="hover:text-cyan-400 transition-colors">Server Clusters</button></li>
                </ul>
              </div>
              <div className="space-y-8">
                <h5 className="font-black text-[11px] uppercase tracking-[0.4em] text-cyan-500">Headquarters</h5>
                <div className="text-slate-400 text-sm font-bold space-y-6">
                  <p className="leading-relaxed">Nextgen Mall, Mombasa Road,<br/>Nairobi, Kenya</p>
                  <button onClick={openWhatsApp} className="text-cyan-400 hover:text-white flex items-center gap-3 transition-colors bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                    <Phone size={16} /> +254 729 568742
                  </button>
                </div>
              </div>
              <div className="space-y-8">
                <h5 className="font-black text-[11px] uppercase tracking-[0.4em] text-cyan-500">Operational</h5>
                <div className="text-slate-400 text-xs font-black uppercase tracking-widest space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                    <span>Mon - Fri</span>
                    <span className="text-white">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                    <span>Sat</span>
                    <span className="text-white">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sun</span>
                    <span className="text-red-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            <p>© {new Date().getFullYear()} Maximal Ventures E.A. Limited • All Rights Reserved</p>
            <div className="flex gap-10">
              <button className="hover:text-white transition-colors">Privacy Protocol</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Global CSS Enhancements */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom { from { transform: scale(1); } to { transform: scale(1.08); } }
        .animate-slow-zoom { animation: slow-zoom 25s ease-in-out infinite alternate; }
        
        @keyframes fan-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-fan-spin { animation: fan-spin 1.8s linear infinite; }
        
        @keyframes fade-in-up { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        @keyframes pulse-scale { 
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.25); opacity: 1; }
        }
        .animate-pulse-scale { animation: pulse-scale 2.5s infinite ease-in-out; }
        
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-12 { transform: rotateY(12deg); }
        .translate-z-20 { transform: translateZ(30px); }
        
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
        
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 24px; width: 24px; border-radius: 50%; 
          background: #06b6d4; cursor: pointer; border: 4px solid white; 
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.15);
          transition: all 0.2s ease;
        }
        input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.15); }
        
        .shadow-3xl { box-shadow: 0 40px 70px -15px rgba(0, 0, 0, 0.6); }
        
        .industrial-gradient { 
          background: linear-gradient(145deg, #020617 0%, #0f172a 100%); 
        }
        
        .frost-glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
      `}} />
    </div>
  );
};

export default App;
