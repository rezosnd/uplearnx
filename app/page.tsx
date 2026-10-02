"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { WebsiteShaderCanvas } from "@/components/ui/shader-aurora-veil";
import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller";
import { ArrowRight, Phone, MessageCircle, ExternalLink, FileCheck, GraduationCap, BadgePercent, Headset, BookOpen, Users, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustStatisticsSection />
      <TrustedBySection />
      <HowItWorksSection />
      <ServicesSection />
      <TheUplearnxEdgeSection />
      <EligibilitySection />
      <FaqSection />
      <Footer />
      <FloatingElements />
    </>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 inset-x-0 px-6 md:px-20 py-4 md:py-8 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/">
              <div className="font-anton text-2xl text-primary tracking-wider flex items-center gap-2">
                 <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                 UPLEARNX
              </div>
            </Link>
            <ul className="font-anton hidden md:flex items-center gap-6 text-tertiary text-sm ml-16 bg-white px-8 py-3 rounded-full">
              <li><Link className="hover:text-primary transition-colors" href="/">HOME</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#how-it-works">HOW IT WORKS</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#services">SERVICES</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#why-uplearnx">WHY UPLEARNX</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#faqs">FAQS</Link></li>
            </ul>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-sm text-primary hover:text-secondary transition-colors focus:outline-none z-[60] cursor-pointer relative" aria-label="Open menu">
            {isMobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#091128]/95 backdrop-blur-3xl z-[49] flex flex-col items-center justify-center px-6 h-[100dvh] w-screen overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent pointer-events-none"></div>
            <ul className="font-anton flex flex-col items-center gap-10 text-white text-3xl sm:text-4xl w-full relative z-10">
              {[
                { label: "HOME", href: "/" },
                { label: "HOW IT WORKS", href: "#how-it-works" },
                { label: "SERVICES", href: "#services" },
                { label: "WHY UPLEARNX", href: "#why-uplearnx" },
                { label: "FAQS", href: "#faqs" },
              ].map((link, i) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="hover:text-secondary transition-colors block" 
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["/hero.jpg", "/study_desk.jpg", "/team_collaboration.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="h-svh relative w-full overflow-x-hidden bg-[#F8FAFC]">
      {images.map((src, index) => (
        <img 
          key={src}
          src={src} 
          className={`absolute right-0 h-full w-full md:w-[70%] object-cover transition-opacity duration-1000 z-0 ${index === currentSlide ? 'opacity-20 md:opacity-100' : 'opacity-0'}`} 
          alt="" 
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-0"></div>
      
      {/* Animated Aurora Shader Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80" style={{ maskImage: 'linear-gradient(to right, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)' }}>
        <WebsiteShaderCanvas preset="aurora-veil" tone="light" className="w-full h-full" />
      </div>
      
      <div className="absolute top-0 h-full w-full inset-x-0 flex flex-col px-6 md:px-20 pt-[18vh] md:pt-[20vh] z-10">
        <div className="opacity-0 animate-fade-in-up">
          <p className="font-sans font-semibold text-primary tracking-wider text-[9px] sm:text-xs md:text-sm uppercase bg-primary/10 inline-block w-fit max-w-full px-3 py-1.5 rounded-full leading-relaxed">
            PMP<sup className="text-[0.6em] align-super">®</sup> CERTIFICATION EXAM SUPPORT — 2026 UPDATED SYLLABUS
          </p>
        </div>
        <h1 className="uppercase text-[13vw] sm:text-[10vw] md:text-[7.5vw] font-anton leading-[1] md:leading-[0.9] text-primary mt-6 md:mt-8 opacity-0 animate-fade-in-up delay-100">
          Get Expert Support<br /> For Your PMP<sup className="text-[0.4em] align-super">®</sup><br /> Certification.
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 mt-8 opacity-0 animate-fade-in-up delay-200 w-full sm:w-max">
          <a href="#eligibility" className="bg-primary hover:bg-secondary text-white transition-all font-anton h-14 px-8 text-sm md:text-base flex items-center justify-center w-full sm:w-auto shadow-md">
            CHECK MY ELIGIBILITY
          </a>
          <a className="bg-white/50 backdrop-blur border border-primary/20 text-primary hover:bg-primary/5 transition-all font-anton h-14 px-8 text-sm md:text-base flex items-center justify-center w-full sm:w-auto" href="#">
            CHAT ON WHATSAPP
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:items-center mt-auto pb-10 md:pb-20 w-full md:max-w-3xl gap-6 opacity-0 animate-fade-in-up delay-300">
          <div className="flex gap-2 justify-start order-2 md:order-1">
            {images.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-6 w-6 md:h-7 md:w-7 transition-colors duration-300 cursor-pointer ${idx === currentSlide ? 'bg-secondary' : 'bg-primary'}`} 
                aria-label={`Show slide ${idx + 1}`}
              ></button>
            ))}
          </div>
          <p className="text-sm md:text-sm text-primary/95 md:font-medium max-w-md order-1 md:order-2 leading-relaxed md:ml-auto">
            End-to-end guidance, application support, exam preparation, and dedicated assistance from experienced PMP<sup className="text-[0.6em] align-super">®</sup> professionals with 10+ years of EdTech excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

function TrustStatisticsSection() {
  return (
    <div className="relative pt-16 md:pt-24 px-6 md:px-20 pb-16 md:pb-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-sans font-medium text-primary tracking-wider text-xs uppercase">THE UPLEARNX DIFFERENCE</p>
        <h1 className="uppercase text-4xl md:text-[4vw] font-anton leading-[1.1] text-primary mt-4">
          Built Around Your <br /> Certification Success
        </h1>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-full md:max-w-[50vw] mt-12 md:mt-20 gap-10 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-sm"
        >
          <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <p className="font-anton text-secondary uppercase tracking-widest text-xs">Pay After Pass.</p>
          <h3 className="text-2xl md:text-3xl mt-2 text-primary uppercase font-anton">100% Risk Free.</h3>
          <p className="text-sm md:text-base leading-relaxed mt-4 font-sans text-tertiary">
            With our Pay After Pass support model, you can begin your certification journey without paying our service fee upfront.<br/><br/>
            Clear process. Dedicated support. No upfront service fee for our support service.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm"
        >
          <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <p className="font-anton text-secondary uppercase tracking-widest text-xs">Expert Mentorship.</p>
          <h3 className="text-2xl md:text-3xl mt-2 text-primary uppercase font-anton">Senior Mentors.</h3>
          <p className="text-sm md:text-base leading-relaxed mt-4 font-sans text-tertiary">
            Get direct guidance from experienced PMP® professionals and project-management veterans with extensive enterprise experience.<br/><br/>
            A dedicated support ecosystem designed for professionals who want a clear, guided, and structured PMP® certification journey.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap items-center gap-6 md:gap-10 mt-16 md:mt-[15vh] mb-12"
      >
        <div className="text-sm">
          <h3 className="text-3xl md:text-4xl text-primary uppercase font-anton">40,000+</h3>
          <p className="leading-relaxed font-semibold text-primary/60 tracking-widest mt-2 text-[10px] md:text-xs">PROFESSIONALS REACHED</p>
        </div>
        <div className="hidden sm:block w-px h-12 bg-primary/10"></div>
        <div className="text-sm">
          <h3 className="text-3xl md:text-4xl text-primary uppercase font-anton">99.4%</h3>
          <p className="leading-relaxed font-semibold text-primary/60 tracking-widest mt-2 text-[10px] md:text-xs">FIRST-TRY PASS RATE</p>
        </div>
      </motion.div>

      <div className="hidden md:block absolute right-0 h-[50vh] bg-secondary w-16 top-1/2 -translate-y-1/2 rounded-l-3xl shadow-lg pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.4 }}
        className="flex relative md:absolute justify-center mt-12 md:mt-0 mx-auto md:mx-0 md:right-6 md:top-1/2 md:-translate-y-1/2 w-40 h-40 md:w-48 md:h-48 group items-center z-20"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl group-hover:bg-secondary/20 transition-colors duration-700"></div>
        <a href="#why-uplearnx" className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite] text-primary group-hover:text-secondary transition-colors duration-500">
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
            <text className="font-anton text-[10.5px] uppercase tracking-widest fill-current">
              <textPath href="#circlePath" startOffset="0%">
                DISCOVER THE UPLEARNX EDGE • DISCOVER THE UPLEARNX EDGE • 
              </textPath>
            </text>
          </svg>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-secondary rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-2xl relative overflow-hidden group-hover:shadow-secondary/50 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 rotate-45 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" viewBox="0 0 24 24"><path fill="currentColor" d="M13 7.828V20h-2V7.828l-5.364 5.364l-1.414-1.414L12 4l7.778 7.778l-1.414 1.414z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-6 w-6 md:h-8 md:w-8 rotate-45 -translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" viewBox="0 0 24 24"><path fill="currentColor" d="M13 7.828V20h-2V7.828l-5.364 5.364l-1.414-1.414L12 4l7.778 7.778l-1.414 1.414z"></path></svg>
          </div>
        </a>
      </motion.div>
    </div>
  );
}

function TrustedBySection() {
  const partners = [
    { name: 'MICROSOFT', gradient: { from: '#091128', via: '#1E3A8A', to: '#FF6B00' } },
    { name: 'AMAZON', gradient: { from: '#FF6B00', via: '#EA580C', to: '#9A3412' } },
    { name: 'GOOGLE', gradient: { from: '#091128', via: '#FF6B00', to: '#091128' } },
    { name: 'DELOITTE', gradient: { from: '#1E293B', via: '#091128', to: '#020617' } },
    { name: 'IBM', gradient: { from: '#2563EB', via: '#1D4ED8', to: '#1E3A8A' } },
    { name: 'ACCENTURE', gradient: { from: '#FF6B00', via: '#091128', to: '#FF6B00' } },
  ];

  return (
    <MarqueeLogoScroller
      title="Professionals From Leading Organizations Choose Better Support"
      description="Our certification-support approach is designed for ambitious professionals working across technology, consulting, finance, operations, engineering, and other project-driven industries."
      logos={partners}
      speed="normal"
    />
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Submit Details", desc: "Start by sharing your basic professional and educational details. Our team reviews your information to understand your eligibility and certification goals.", micro: "Tell us where you are. We'll help you understand what's next." },
    { num: "02", title: "Application Support", desc: "Get guidance while preparing your PMP® application, experience information, and supporting details.", micro: "Prepare your application with expert guidance." },
    { num: "03", title: "PMI Approval", desc: "Once your application is submitted, our team helps you understand the approval process and the next steps required by PMI.", micro: "Move forward with confidence." },
    { num: "04", title: "Schedule Exam", desc: "After approval, get guidance on the examination scheduling process and prepare for your selected exam date.", micro: "Choose your target date and get ready." },
    { num: "05", title: "Exam Preparation", desc: "Use structured preparation resources, study materials, expert guidance, and focused support to prepare for your PMP® examination.", micro: "Prepare smarter. Stay focused." },
    { num: "06", title: "Exam Clearance", desc: "Complete your PMP® examination and move toward earning your professional credential with dedicated support throughout the journey.", micro: "Your certification journey reaches its final milestone." }
  ];

  return (
    <div id="how-it-works" className="relative pt-16 md:pt-24 px-6 md:px-20 pb-16 md:pb-24 overflow-hidden">
      <img src="/team_collaboration.jpg" className="absolute left-0 top-0 h-full w-full object-cover z-0 opacity-5" alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/60 to-[#F8FAFC] z-0"></div>
      
      {/* Animated Aurora Shader for Glassmorphism Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 mix-blend-multiply" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}>
        <WebsiteShaderCanvas preset="aurora-veil" tone="light" className="w-full h-full" />
      </div>
      
      <div className="relative z-10">
        <p className="font-sans font-medium text-primary tracking-wider text-xs uppercase opacity-0 animate-fade-in-up">THE CLEAR PATHWAY</p>
        <h2 className="uppercase text-4xl md:text-[4vw] font-anton leading-none text-primary mt-4 opacity-0 animate-fade-in-up delay-100">How It Works</h2>
        <p className="text-sm md:text-base leading-relaxed mt-5 font-sans text-tertiary max-w-2xl opacity-0 animate-fade-in-up delay-200">
          A structured, stress-free roadmap to earning your PMP<sup className='text-[0.6em] align-super'>®</sup> credential. We break the certification journey into clear stages so you always know what happens next.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-20 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} style={{ animationDelay: `${(idx + 3) * 100}ms` }} className="bg-white/40 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:bg-white/60 hover:border-secondary/30 hover:shadow-[0_20px_40px_rgb(255,107,0,0.1)] transition-all duration-500 group flex flex-col hover:-translate-y-2 opacity-0 animate-fade-in-up">
              <div className="font-anton text-5xl text-primary/10 group-hover:text-secondary group-hover:scale-110 group-hover:translate-x-2 origin-left transition-all duration-500">{step.num}</div>
              <h3 className="text-xl font-anton text-primary uppercase mt-4 mb-3 tracking-wide">{step.title}</h3>
              <p className="text-sm text-tertiary leading-relaxed font-sans mb-6 flex-grow">{step.desc}</p>
              <div className="border-t border-primary/10 pt-4 mt-auto overflow-hidden">
                <span className="inline-block text-[10px] font-sans font-semibold text-primary/50 uppercase tracking-widest group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">{step.micro}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    { label: "APPLICATION", title: "Application Filing Support", desc: "Get step-by-step assistance with preparing and submitting your PMP® application, including guidance on documenting your professional experience.", highlight: "Expert Application Guidance", icon: FileCheck, colSpan: "md:col-span-2", bg: "bg-[#050B14] text-white", text: "text-white", labelColor: "text-secondary", highlightColor: "text-white/40", border: "border-white/10" },
    { label: "EDUCATION", title: "35 Contact Hours (PDUs)", desc: "Get support with the required professional education and contact-hour component of your PMP® certification journey.", highlight: "Structured Learning Support", icon: GraduationCap, colSpan: "md:col-span-1", bg: "bg-white text-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)]", text: "text-primary", labelColor: "text-secondary", highlightColor: "text-primary/40", border: "border-primary/5" },
    { label: "SAVINGS", title: "Exam Fee Discounts", desc: "Get guidance on examination costs, available pricing options, and applicable savings when planning your PMP® examination.", highlight: "Plan Your Exam Cost", icon: BadgePercent, colSpan: "md:col-span-1", bg: "bg-white text-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)]", text: "text-primary", labelColor: "text-secondary", highlightColor: "text-primary/40", border: "border-primary/5" },
    { label: "EXAM SUPPORT", title: "Live Exam Support", desc: "Receive dedicated guidance around your examination journey, from preparation and scheduling to the final examination stage.", highlight: "Dedicated Assistance", icon: Headset, colSpan: "md:col-span-2", bg: "bg-gradient-to-br from-secondary to-[#cc5800] text-white shadow-xl shadow-secondary/20", text: "text-white", labelColor: "text-white/80", highlightColor: "text-white/60", border: "border-white/20" },
    { label: "PREPARATION", title: "Study Material Vault", desc: "Access a curated collection of preparation resources designed to help you understand the PMP® examination and prepare systematically.", highlight: "Resources At Your Fingertips", icon: BookOpen, colSpan: "md:col-span-2", bg: "bg-[#050B14] text-white", text: "text-white", labelColor: "text-secondary", highlightColor: "text-white/40", border: "border-white/10" },
    { label: "CONCIERGE", title: "Dedicated Concierge", desc: "Get personalized assistance throughout your journey, with a dedicated support experience whenever you need guidance.", highlight: "1-on-1 Support", icon: Users, colSpan: "md:col-span-1", bg: "bg-white text-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)]", text: "text-primary", labelColor: "text-secondary", highlightColor: "text-primary/40", border: "border-primary/5" }
  ];

  return (
    <div id="services" className="relative pt-24 md:pt-32 px-6 md:px-20 pb-24 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 relative">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-10 relative z-20"
          >
            <div className="relative w-36 h-36 group flex items-center justify-center">
              <div className="absolute inset-0 bg-secondary/5 rounded-full blur-xl group-hover:bg-secondary/10 transition-colors duration-700"></div>
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] text-primary/40 group-hover:text-primary transition-colors duration-500">
                <path id="circlePathServices" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                <text className="font-anton text-[10px] uppercase tracking-[0.2em] fill-current">
                  <textPath href="#circlePathServices" startOffset="0%">
                    ALL-INCLUSIVE SUPPORT • ALL-INCLUSIVE SUPPORT • 
                  </textPath>
                </text>
              </svg>
              <div className="w-14 h-14 bg-white text-secondary border border-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-secondary group-hover:border-primary transition-all duration-500 shadow-xl relative overflow-hidden group-hover:shadow-primary/30 group-hover:scale-110">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
                <ArrowRight className="absolute w-5 h-5 -rotate-45 -translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="uppercase text-4xl md:text-5xl lg:text-6xl font-anton leading-[1.1] text-primary relative z-10"
          >
            What You Get With <span className="text-secondary">UPlearnx</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed mt-6 font-sans text-tertiary max-w-3xl mx-auto relative z-10"
          >
            Everything you need to navigate your PMP<sup className='text-[0.6em] align-super'>®</sup> certification journey with greater clarity, structure, and expert support.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`${svc.colSpan} ${svc.bg} border ${svc.border} p-8 md:p-10 rounded-3xl flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group overflow-hidden relative cursor-pointer`}
            >
              <div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 group-hover:-translate-x-4 group-hover:translate-y-4 transition-all duration-700 pointer-events-none">
                 <svc.icon className={`w-64 h-64 ${svc.text}`} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl ${svc.text === 'text-white' ? 'bg-white/10 border-white/20' : 'bg-primary/5 border-primary/10'} backdrop-blur-md flex items-center justify-center mb-8 border group-hover:scale-110 transition-transform duration-500`}>
                  <svc.icon className={`w-6 h-6 ${svc.labelColor === 'text-white/80' ? 'text-white' : 'text-secondary'}`} />
                </div>
                <div className={`font-anton ${svc.labelColor} text-xs tracking-widest uppercase mb-4`}>{svc.label}</div>
                <h3 className={`text-2xl md:text-3xl font-anton uppercase mb-4 tracking-wide ${svc.text}`}>{svc.title}</h3>
                <p className={`text-sm leading-relaxed font-sans ${svc.text} opacity-80 max-w-md`}>{svc.desc}</p>
              </div>

              <div className="relative z-10 mt-12 flex items-center justify-between border-t border-current/10 pt-6">
                <span className={`text-xs font-anton tracking-widest uppercase ${svc.highlightColor} group-hover:text-current transition-colors duration-300`}>{svc.highlight}</span>
                <div className={`w-10 h-10 rounded-full ${svc.text === 'text-white' ? 'bg-white/10 group-hover:bg-white group-hover:text-primary' : 'bg-primary/5 group-hover:bg-primary group-hover:text-white'} flex items-center justify-center transition-all duration-300 overflow-hidden`}>
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-20 md:mt-32 relative bg-[#091128] rounded-[40px] p-10 md:p-16 overflow-hidden shadow-2xl border border-white/10 group"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-anton text-white uppercase leading-tight">Everything You Need.<br/><span className="text-secondary">One Guided Journey.</span></h3>
              <p className="text-base md:text-lg text-white/70 font-sans mt-6">Stop navigating the certification process alone. Get structured guidance from application to examination.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 justify-center">
              <a href="#eligibility" className="bg-secondary hover:bg-white transition-colors text-white hover:text-primary font-anton h-14 px-8 md:px-10 flex items-center justify-center gap-2 rounded-full uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 duration-300 group/btn">
                Check My Eligibility <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <a href="#" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-primary text-white font-anton h-14 px-8 md:px-10 flex items-center justify-center gap-2 rounded-full uppercase tracking-wider text-sm transition-all duration-300 hover:-translate-y-1">
                <MessageCircle className="w-4 h-4" /> Talk to an Advisor
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TheUplearnxEdgeSection() {
  const edges = [
    { title: "Pay After Pass", desc: "No upfront fee for our support service. Complete your certification journey with greater peace of mind and pay our service fee after you pass your examination.", short: "Pay only when you pass your exam." },
    { title: "PMI Audit Protection", desc: "Every application is prepared carefully with attention to the information and documentation required for the application process, helping you navigate potential audit requirements with greater confidence.", short: "Guidance when you need it most." },
    { title: "100% Risk-Free Approach", desc: "Our Pay After Pass model is designed to remove upfront service-fee risk and align our support with your certification journey.", short: "Pay only when you pass your exam." },
    { title: "Senior Mentors", desc: "Get direct guidance from experienced PMP® professionals and project-management veterans with extensive enterprise experience.", short: "Guidance from experienced professionals." },
    { title: "24/7 Dedicated Concierge", desc: "Get responsive assistance through WhatsApp or phone whenever you need answers, guidance, or help moving to the next stage.", short: "Support whenever you need it." }
  ];

  return (
    <div id="why-uplearnx" className="relative pt-16 md:pt-24 px-6 md:px-20 pb-16 md:pb-24 bg-primary text-white">
      <p className="font-sans font-medium text-secondary tracking-wider text-xs uppercase">THE UPLEARNX EDGE</p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-4 mb-12 md:mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="uppercase text-4xl md:text-[4vw] font-anton leading-none text-white">Why Top Professionals Trust UPlearnx</h2>
          <p className="text-lg md:text-xl font-medium text-white/90 mt-6 font-sans">We remove the stress, confusion, and risk from the PMP<sup className='text-[0.6em] align-super'>®</sup> certification journey.</p>
          <p className="text-sm md:text-base text-white/70 mt-3 font-sans">Our battle-tested mentorship framework is designed to help you navigate the certification process with clarity, structured guidance, and confidence.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {edges.map((edge, i) => (
          <div key={i} className="border border-white/10 hover:border-secondary flex flex-col justify-between p-8 transition-all duration-300 group rounded-xl bg-white/5 hover:bg-white/10">
            <div>
              <h3 className="text-xl md:text-2xl font-anton tracking-wide uppercase group-hover:text-secondary transition-colors duration-300 text-white">{edge.title}</h3>
              <p className="text-sm text-white/70 font-sans leading-relaxed mt-4">{edge.desc}</p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between">
              <span className="text-[10px] font-sans uppercase font-medium tracking-widest text-white/50 group-hover:text-secondary transition-colors duration-300">{edge.short}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-white/10">
        <h3 className="text-2xl font-anton uppercase text-white mb-8">More Reasons to Choose Us</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
          <div>
            <h4 className="font-anton text-lg text-secondary uppercase">One Structured Journey</h4>
            <p className="font-sans text-sm text-white/70 mt-2">From eligibility to examination, your entire journey is organized into clear stages.</p>
          </div>
          <div>
            <h4 className="font-anton text-lg text-secondary uppercase">Expert-Led Guidance</h4>
            <p className="font-sans text-sm text-white/70 mt-2">Get support from experienced professionals instead of navigating every step alone.</p>
          </div>
          <div>
            <h4 className="font-anton text-lg text-secondary uppercase">Personalized Assistance</h4>
            <p className="font-sans text-sm text-white/70 mt-2">Your questions, application, preparation, and next steps receive dedicated attention.</p>
          </div>
          <div>
            <h4 className="font-anton text-lg text-secondary uppercase">Clear Communication</h4>
            <p className="font-sans text-sm text-white/70 mt-2">Know what you need, when you need it, and what happens next.</p>
          </div>
          <div>
            <h4 className="font-anton text-lg text-secondary uppercase">Professional Support</h4>
            <p className="font-sans text-sm text-white/70 mt-2">Built for working professionals who need an efficient and organized certification experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EligibilitySection() {
  return (
    <div id="eligibility" className="relative pt-16 md:pt-24 px-6 md:px-20 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="w-full lg:w-1/2">
          <p className="font-sans font-medium text-secondary tracking-wider text-xs uppercase">START HERE</p>
          <h2 className="uppercase text-4xl md:text-5xl lg:text-[4vw] font-anton leading-none text-primary mt-4">Check Your PMP<sup className='text-[0.6em] align-super'>®</sup> Eligibility</h2>
          <p className="text-base leading-relaxed mt-6 font-sans text-tertiary">
            Not sure whether you're ready to begin your PMP<sup className='text-[0.6em] align-super'>®</sup> certification journey? Share your details and let our advisors help you understand the applicable requirements and next steps.
          </p>
          
          <div className="mt-10 p-6 bg-blue-50 border-l-4 border-secondary rounded-r-xl">
            <h4 className="font-anton text-xl uppercase text-primary mb-2">READY WHEN YOU ARE</h4>
            <p className="font-sans text-sm text-tertiary">Don't let application complexity, preparation confusion, or unanswered questions slow you down. Get a structured path, experienced guidance, and dedicated support from start to finish.</p>
            <div className="flex gap-4 mt-6">
              <span className="text-xs font-sans font-semibold text-primary uppercase bg-white px-3 py-1 rounded-full shadow-sm">Expert Guidance</span>
              <span className="text-xs font-sans font-semibold text-primary uppercase bg-white px-3 py-1 rounded-full shadow-sm">Dedicated Support</span>
              <span className="text-xs font-sans font-semibold text-primary uppercase bg-white px-3 py-1 rounded-full shadow-sm">Pay After Pass</span>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-primary/10">
            <h3 className="text-2xl font-anton text-primary uppercase mb-6">Let's Check Your Eligibility</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full bg-[#f8fafc] border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" placeholder="Enter your email address" className="w-full bg-[#f8fafc] border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                  <input type="tel" placeholder="Enter your WhatsApp number" className="w-full bg-[#f8fafc] border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Highest Qualification</label>
                  <select className="w-full bg-[#f8fafc] border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm text-tertiary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none">
                    <option value="" disabled selected>Select your qualification</option>
                    <option>Diploma</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Years of Experience</label>
                  <select className="w-full bg-[#f8fafc] border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm text-tertiary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none">
                    <option value="" disabled selected>Select experience</option>
                    <option>Less than 1 year</option>
                    <option>1–3 years</option>
                    <option>3–5 years</option>
                    <option>5–10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Project Management Experience</label>
                <textarea rows={3} placeholder="Tell us briefly about your project experience" className="w-full bg-[#f8fafc] border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"></textarea>
              </div>
              <div className="flex items-start gap-3 mt-4">
                <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-secondary border-primary/20 rounded focus:ring-secondary" />
                <label htmlFor="consent" className="text-xs text-tertiary font-sans leading-relaxed">
                  I agree to be contacted by UPlearnx regarding my PMP<sup className='text-[0.6em] align-super'>®</sup> certification eligibility and support services.
                </label>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-secondary text-white font-anton uppercase tracking-wider py-4 rounded-xl shadow-md transition-colors mt-6 text-lg">
                Check My Eligibility &rarr;
              </button>
              <p className="text-[10px] text-center text-tertiary font-sans mt-4 uppercase tracking-widest">
                Your information is used only to respond to your eligibility request and provide relevant certification guidance.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  const faqs = [
    { q: 'How exactly does "Pay After Pass" work?', a: "With the Pay After Pass model, you don't pay the UPlearnx support-service fee upfront. You receive support throughout your certification journey and pay the applicable service fee after you successfully pass your examination, subject to the terms of your selected plan." },
    { q: "What if my application gets audited by PMI?", a: "If your application is selected for a PMI audit, our team can guide you through the audit process and help you understand the documentation and information you may need to provide. Final approval and audit decisions remain with PMI." },
    { q: "Do I need an existing approved PMI application?", a: "No. UPlearnx can guide you through the application process from the beginning, including understanding the requirements, preparing your information, and moving through the submission process." },
    { q: "What are the standard PMI examination fees?", a: "PMP® examination fees are set by PMI and can vary based on factors such as membership status and applicable regional pricing. Your advisor can help you understand the current examination-fee structure before you schedule your exam." },
    { q: "How quickly can I get started?", a: "You can begin by completing the eligibility form or contacting our team through WhatsApp. Once we receive your information, an advisor can guide you through the next steps." },
    { q: "What does UPlearnx help me with?", a: "UPlearnx provides certification-support services including eligibility guidance, application support, professional education/contact-hour support, study resources, examination scheduling guidance, and dedicated concierge assistance." },
    { q: "Do you provide study materials?", a: "Yes. Eligible learners can receive access to the UPlearnx Study Material Vault containing resources intended to support PMP® examination preparation." },
    { q: "Will I get personal support?", a: "Yes. UPlearnx provides dedicated assistance so you can ask questions, understand your next steps, and receive guidance throughout your certification journey." },
    { q: "Can I contact an advisor before signing up?", a: "Absolutely. You can contact a PMP® advisor through WhatsApp or the advisor CTA on this website to discuss your situation and understand the available support options." },
    { q: "Is UPlearnx affiliated with PMI?", a: "UPlearnx is an independent certification-support and education service. PMP® and PMI® are marks of Project Management Institute, Inc. UPlearnx is not PMI unless explicitly stated otherwise." }
  ];

  return (
    <div id="faqs" className="bg-white py-16 md:py-24 px-6 md:px-20 border-t border-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-sans font-medium text-secondary tracking-wider text-xs uppercase">FAQ & ANSWERS</p>
          <h2 className="uppercase text-4xl font-anton text-primary mt-3">Frequently Asked Questions</h2>
          <p className="text-sm md:text-base text-tertiary font-sans mt-4">Everything you need to know before starting your PMP<sup className='text-[0.6em] align-super'>®</sup> certification support journey.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <details className="group bg-[#f8fafc] border border-primary/10 rounded-xl overflow-hidden cursor-pointer">
                <summary className="flex justify-between items-center font-anton text-lg md:text-xl uppercase text-primary px-6 py-5 group-open:bg-primary/5 transition-colors">
                  {faq.q}
                  <span className="text-secondary text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-5 border-t border-primary/5 bg-white text-sm md:text-base text-tertiary font-sans leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative -mt-8 md:-mt-12 z-20">
      {/* Floating Call to Action Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 -mb-24 md:-mb-32 pointer-events-auto"
      >
        <div className="bg-[#091128] border border-white/10 p-8 md:p-16 rounded-[40px] text-center flex flex-col items-center shadow-[0_30px_80px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all duration-500 group overflow-hidden relative">
           {/* Glow Effect */}
           <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
           
           <h3 className="font-anton text-lg md:text-xl text-secondary uppercase tracking-widest mb-4 relative z-10">A BETTER WAY TO NAVIGATE PMP<sup className='text-[0.6em] align-super'>®</sup> CERTIFICATION</h3>
           <h2 className="text-3xl md:text-5xl font-anton uppercase text-white mb-6 relative z-10 leading-tight">Less Confusion. More Guidance.<br className="hidden md:block"/> One Clear Path.</h2>
           <p className="text-sm md:text-base text-white/70 max-w-3xl mb-10 leading-relaxed relative z-10">
             Your professional goals are important. Your certification journey shouldn't feel complicated. UPlearnx brings application guidance, preparation resources, expert mentorship, and dedicated support together in one structured experience.
           </p>
           <a href="#eligibility" className="relative z-10 bg-secondary hover:bg-white hover:text-primary transition-all duration-300 text-white font-anton h-14 px-10 flex items-center justify-center gap-3 rounded-full uppercase tracking-wider text-lg shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:-translate-y-1 group/btn">
             Start My PMP<sup className='text-[0.6em] align-super'>®</sup> Journey <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
           </a>
        </div>
      </motion.div>

      <footer className="relative bg-[#050B14] overflow-hidden text-white pt-40 md:pt-48 pb-10 font-sans border-t border-primary/20">
        
        {/* Interactive Kinetic Dots Shader Background */}
        <div className="absolute inset-0 z-0 opacity-60 overflow-hidden pointer-events-auto">
          <WebsiteShaderCanvas preset="kinetic-dots" tone="dark" className="w-full h-full" />
        </div>

        {/* Massive Background Text Watermark */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none overflow-hidden translate-y-1/4 opacity-[0.03] z-0">
          <h1 className="text-[30vw] font-anton leading-none text-white whitespace-nowrap">UPLEARNX</h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10"
          >
            
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="font-anton text-4xl text-white tracking-wider block mb-2 group pointer-events-auto w-max">
                UP<span className="text-secondary transition-colors group-hover:text-white">LEARNX</span>
              </Link>
              <p className="font-sans font-bold text-[10px] text-white/50 tracking-widest uppercase mb-6 flex items-center gap-2">
                GLOBAL PMP<sup className='text-[0.6em] align-super'>®</sup> ACCELERATOR
              </p>
              <p className="text-sm text-white/60 leading-relaxed font-sans mb-8 pr-4">
                An international EdTech platform delivering PMP<sup className='text-[0.6em] align-super'>®</sup> certification support with dedicated guidance throughout your certification journey.
              </p>
              <div className="flex items-center gap-3 text-xs font-sans font-medium text-white/80 bg-white/5 border border-white/10 w-max px-4 py-2 rounded-full shadow-inner pointer-events-auto">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                24/7 Mentor Support Active
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="lg:col-span-2 lg:col-start-6">
              <h3 className="font-anton text-sm text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Quick Links
              </h3>
              <ul className="text-sm text-white/60 space-y-4 font-sans">
                {['Home', 'How It Works', 'Our Services', 'Why UPlearnx', 'FAQs'].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="group flex items-center gap-2 hover:text-secondary transition-colors pointer-events-auto w-max">
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="font-anton text-sm text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Services
              </h3>
              <ul className="text-sm text-white/60 space-y-4 font-sans">
                {['Application Filing', '35 Contact Hours (PDUs)', 'Exam Schedule Guidance', 'Pay After Pass'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="group flex items-center gap-2 hover:text-secondary transition-colors pointer-events-auto w-max">
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                      <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Get Support */}
            <div className="lg:col-span-3">
              <h3 className="font-anton text-sm text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Support
              </h3>
              <div className="text-sm text-white/60 space-y-4 font-sans flex flex-col items-start pointer-events-auto">
                <a href="tel:#" className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 rounded-xl transition-all w-full font-anton uppercase tracking-wider text-xs hover:-translate-y-1">
                  <Phone className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" /> Call PMP Advisor
                </a>
                <a href="#" className="group flex items-center gap-3 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20 hover:border-secondary/40 px-5 py-3 rounded-xl transition-all w-full font-anton uppercase tracking-wider text-xs hover:-translate-y-1">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <div className="pt-2 flex flex-col gap-3 w-full">
                  <Link href="#eligibility" className="flex items-center justify-between group hover:text-white transition-colors border-b border-white/5 pb-2">
                    <span>Check My Eligibility</span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link href="#" className="flex items-center justify-between group hover:text-white transition-colors border-b border-white/5 pb-2">
                    <span>Talk to a PMP<sup className='text-[0.6em] align-super'>®</sup> Expert</span>
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-xs text-white/40 font-sans pointer-events-auto"
          >
            <p className="leading-relaxed">
              PMP<sup className='text-[0.6em] align-super'>®</sup>, PMI<sup className='text-[0.6em] align-super'>®</sup>, and Project Management Professional are marks of Project Management Institute, Inc. UPlearnx is an independent education and certification-support service and is not affiliated with, sponsored by, or endorsed by PMI unless expressly stated otherwise.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="#" className="hover:text-white transition-colors">Refund Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </motion.div>
          
          <div className="mt-8 pt-6 border-t border-white/5 text-center text-[10px] text-white/30 uppercase tracking-widest font-sans pointer-events-auto">
            © {new Date().getFullYear()} UPlearnx Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FloatingElements() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group relative">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        <span className="absolute right-full mr-4 bg-primary text-white text-xs font-anton tracking-wider uppercase px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat on WhatsApp</span>
      </a>
      
      <a href="mailto:expert@uplearnx.com" className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center group relative border border-white/10">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        <span className="absolute right-full mr-4 bg-primary text-white text-xs font-anton tracking-wider uppercase px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Talk to a PMP<sup className='text-[0.6em] align-super'>®</sup> Expert</span>
      </a>
    </div>
  );
}
