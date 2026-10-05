"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { WebsiteShaderCanvas } from "@/components/ui/shader-aurora-veil";
import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller";
import { ArrowRight, Phone, MessageCircle, ExternalLink, FileCheck, GraduationCap, BadgePercent, Headset, BookOpen, Users, ArrowUpRight, Sparkles, X } from "lucide-react";
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
      <LeadMentorSection />
      <TheUplearnxEdgeSection />
      <TestimonialSection />
      <EligibilitySection />
      <FaqSection />
      <Footer />
      <FloatingElements />
    </>
  );
}

function TestimonialSection() {
  const testimonials = [
    { name: "Rahul S.", role: "IT Project Manager", text: "The Pay After Pass model gave me the confidence to start. The mentors were incredible and I cleared my PMP on the first try with Above Target in all domains!", rating: 5 },
    { name: "Priya M.", role: "Senior Analyst", text: "I was worried about the application audit. The team handled everything flawlessly. The support is truly end-to-end as promised.", rating: 5 },
    { name: "Amit K.", role: "Delivery Head", text: "Best decision for my career. The 24/7 WhatsApp support meant I could clear my doubts while studying late at night. Worth every penny.", rating: 5 },
    { name: "Neha Patel", role: "Scrum Master", text: "Their structured approach is exactly what a working professional needs. Saved me months of confusion and anxiety.", rating: 5 },
    { name: "Vikram R.", role: "Operations Director", text: "I highly recommend UPlearnx to anyone serious about their PMP. The 100% risk-free guarantee is real, and the mentors are top-notch.", rating: 5 }
  ];

  return (
    <div id="testimonials" className="bg-cream py-16 md:py-24 px-0 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <p className="font-sans font-bold text-secondary tracking-wider text-xs uppercase">SUCCESS STORIES</p>
        <h2 className="uppercase text-4xl md:text-5xl font-anton text-primary mt-4">Don't Just Take Our Word For It</h2>
      </div>
      
      <div className="relative flex flex-col gap-8 w-full max-w-[100vw] mx-auto overflow-hidden">
        {/* Left and Right Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[var(--color-cream-light)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[var(--color-cream-light)] to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-left gap-6 px-4">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[300px] md:w-[400px] shrink-0 bg-white border border-primary/5 rounded-2xl p-6 md:p-8 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-secondary/20 transition-all duration-300">
              <div className="flex text-secondary mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-tertiary font-sans text-sm md:text-[15px] italic mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center font-bold text-primary border border-primary/10 shadow-sm">{t.name.charAt(0)}</div>
                <div>
                  <p className="font-anton uppercase tracking-wide text-primary text-base md:text-lg leading-none">{t.name}</p>
                  <p className="text-[10px] md:text-[11px] font-sans font-bold text-secondary uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 32 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div 
            initial={{ y: 0 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 inset-x-0 z-[100] bg-secondary text-primary text-[10px] md:text-xs font-bold py-2.5 px-4 text-center flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 shadow-md border-b border-primary/10 pr-10 md:pr-4"
          >
            <div className="flex items-center gap-2 w-full max-w-[280px] sm:max-w-[400px] md:max-w-md mx-auto md:mx-0 overflow-hidden relative">
              <span className="bg-primary text-white px-2 py-0.5 rounded-sm font-black uppercase tracking-wider animate-pulse shrink-0 relative z-10 shadow-md">LIMITED OFFER</span>
              <div className="marquee-left gap-4 pl-2" style={{ animationDuration: '12s' }}>
                <span className="whitespace-nowrap">🎉 Claim <span className="font-extrabold underline decoration-primary/50 underline-offset-2">FLAT ₹5,000 OFF</span> on your Official PMP® Exam Fee!</span>
                <span className="whitespace-nowrap">🎉 Claim <span className="font-extrabold underline decoration-primary/50 underline-offset-2">FLAT ₹5,000 OFF</span> on your Official PMP® Exam Fee!</span>
                <span className="whitespace-nowrap">🎉 Claim <span className="font-extrabold underline decoration-primary/50 underline-offset-2">FLAT ₹5,000 OFF</span> on your Official PMP® Exam Fee!</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-mono flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Ends in: <strong className="text-[11px] md:text-[13px]">{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</strong></span>
              </div>
              <a href="#eligibility" className="bg-primary hover:bg-tertiary text-white px-4 py-1.5 rounded-lg text-[10px] uppercase font-black tracking-wider transition-all shadow-[0_0_15px_rgba(11,20,40,0.3)] border border-primary/20 hover:-translate-y-0.5 flex items-center gap-1 group">
                REGISTER NOW <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-primary/70 hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`fixed inset-x-0 px-4 md:px-20 py-2 md:py-6 z-50 transition-all duration-300 ${showBanner ? 'top-[96px] md:top-[56px]' : 'top-4 md:top-6'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full bg-white/90 backdrop-blur-md md:bg-transparent md:backdrop-blur-none py-2 px-4 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-black/5 md:border-none">
          <div className="flex items-center">
            <Link href="/">
              <div className="font-anton text-2xl text-primary tracking-wider flex items-center gap-2">
                 <svg className="w-7 h-7 text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                 UPLEARNX
              </div>
            </Link>
            <ul className="font-anton hidden md:flex items-center gap-6 text-tertiary text-sm ml-16 bg-white px-8 py-3 rounded-full shadow-sm border border-black/5">
              <li><Link className="hover:text-primary transition-colors" href="/">HOME</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#how-it-works">HOW IT WORKS</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#services">SERVICES</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#why-uplearnx">WHY UPLEARNX</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="#faqs">FAQS</Link></li>
            </ul>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-primary shadow-md text-white hover:bg-secondary transition-colors focus:outline-none z-[60] cursor-pointer relative" aria-label="Open menu">
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
    <>
      
      <div className="h-svh relative w-full overflow-x-hidden bg-cream">
        {images.map((src, index) => (
          <img 
            key={src}
            src={src} 
            className={`absolute right-0 h-full w-full md:w-[70%] object-cover transition-opacity duration-1000 z-0 ${index === currentSlide ? 'opacity-20 md:opacity-100' : 'opacity-0'}`} 
            alt="" 
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-cream-light)] via-[var(--color-cream-light)]/90 to-transparent z-0"></div>
        
        {/* Animated Aurora Shader Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80" style={{ maskImage: 'linear-gradient(to right, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 50%, transparent 100%)' }}>
          <WebsiteShaderCanvas preset="aurora-veil" tone="light" className="w-full h-full" />
        </div>
        
        <div className="absolute top-0 h-full w-full inset-x-0 flex flex-col px-6 md:px-20 pt-[22vh] md:pt-[24vh] z-10">
          <div className="opacity-0 animate-fade-in-up flex flex-wrap gap-2">
            <p className="font-sans font-bold text-secondary tracking-wider text-[9px] sm:text-xs md:text-sm uppercase bg-secondary/10 inline-block w-fit max-w-full px-4 py-2 rounded-full leading-relaxed border border-secondary/20 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              OFFICIAL PMP® EXAM SUPPORT
            </p>
            <p className="font-sans font-black text-primary tracking-wider text-[9px] sm:text-xs uppercase bg-secondary inline-block w-fit px-3 py-2 rounded-full leading-relaxed flex items-center gap-1.5 shadow-md animate-pulse">
              🔥 HIGH DEMAND
            </p>
          </div>
          <h1 className="uppercase text-[12vw] sm:text-[9vw] md:text-[6.5vw] font-anton leading-[1] md:leading-[0.9] text-primary mt-6 opacity-0 animate-fade-in-up delay-100 max-w-4xl">
            Get Expert Support<br /> For Your <span className="text-secondary">PMP<sup className="text-[0.4em] align-super">®</sup></span><br /> Certification.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-8 opacity-0 animate-fade-in-up delay-200 w-full sm:w-max relative z-20">
            <a href="#eligibility" className="bg-secondary hover:brightness-95 text-primary transition-all font-anton h-14 px-8 text-sm md:text-base flex items-center justify-center w-full sm:w-auto shadow-md hover:-translate-y-1 group rounded-lg">
              CHECK ELIGIBILITY & SAVE ₹5,000 TODAY <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/" className="bg-[#25D366] hover:bg-[#20b858] text-white transition-all font-anton h-14 px-8 text-sm md:text-base flex items-center justify-center w-full sm:w-auto shadow-sm gap-2 hover:-translate-y-1 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 21.144c-1.493 0-2.955-.386-4.237-1.116l-4.71 1.238 1.261-4.595c-.803-1.319-1.226-2.836-1.226-4.4 0-5.068 4.126-9.194 9.195-9.194 5.068 0 9.194 4.125 9.194 9.194 0 5.069-4.126 9.193-9.194 9.193l.283-.32z"/></svg>
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
            <div className="order-1 md:order-2 md:ml-auto">
              <p className="text-sm md:text-sm text-primary/95 md:font-medium max-w-md leading-relaxed mb-3">
                End-to-end guidance, application drafting, and exam support to help you achieve your PMP® certification with 100% confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                {/* Gold Pill */}
                <div className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-xl shadow-sm border border-transparent hover:border-white transition-all cursor-default">
                  <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px] font-black text-black leading-[1.1] font-sans tracking-wide">
                      PAY AFTER YOU<br />PASS
                    </p>
                    <p className="text-[9px] text-black/90 font-bold mt-0.5 leading-[1.2]">
                      100% Risk-Free<br />Guarantee
                    </p>
                  </div>
                </div>
                
                {/* Navy/Orange Glowing Pill */}
                <div className="flex items-center gap-3 px-4 py-3 bg-tertiary rounded-xl shadow-sm border border-tertiary hover:border-gold-border transition-all cursor-default">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 6h-4.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H2v2h2v12h16V8h2V6zM15 4c.55 0 1 .45 1 1s-.45 1-1 1h-2l2-2zm-6 0c.55 0 1 .45 1 1l-2 2H6c0-.55.45-1 1-1zm1 16H6V8h4v12zm6 0h-4V8h4v12z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px] font-black text-white leading-[1.1] font-sans tracking-wide flex items-start gap-1">
                      <svg className="w-3 h-3 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.52 2.54l2.25 2.25c.81-1.35 1.27-2.99 1.27-4.79 0-5.5-4.5-10-10-10zm-6.66 2.1L4.93 5.56C3.12 7.15 2 9.45 2 12c0 5.5 4.5 10 10 10 2.55 0 4.85-1.12 6.44-2.93l1.41 1.41 1.41-1.41L7.75 2.74 6.34 4.15zM12 20c-4.41 0-8-3.59-8-8 0-1.74.56-3.35 1.5-4.66l11.16 11.16C15.35 19.44 13.74 20 12 20zm5.28-7.39l-2.02-2.02c.07-.38.11-.77.11-1.17 0-1.57-.61-2.99-1.6-4.04l2.02-2.02C17.15 4.7 18 6.26 18 8.02c0 1.63-.58 3.12-1.54 4.29z"/></svg>
                      <span>FLAT ₹5,000<br />DISCOUNT</span>
                    </p>
                    <p className="text-[9px] text-secondary font-bold mt-0.5 leading-[1.2]">
                      Instant PMI Exam Fee Voucher
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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
          <p className="leading-relaxed font-semibold text-primary/60 tracking-widest mt-2 text-[10px] md:text-xs">CANDIDATES CERTIFIED</p>
        </div>
        <div className="hidden sm:block w-px h-12 bg-primary/10"></div>
        <div className="text-sm">
          <h3 className="text-3xl md:text-4xl text-primary uppercase font-anton">10+ YEARS</h3>
          <p className="leading-relaxed font-semibold text-primary/60 tracking-widest mt-2 text-[10px] md:text-xs">INDUSTRY EXPERIENCE</p>
        </div>
        <div className="hidden sm:block w-px h-12 bg-primary/10"></div>
        <div className="text-sm">
          <h3 className="text-3xl md:text-4xl text-secondary uppercase font-anton">100%</h3>
          <p className="leading-relaxed font-semibold text-primary/60 tracking-widest mt-2 text-[10px] md:text-xs">AUDIT CLEARANCE</p>
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
                DISCOVER THE UPLEARNX EDGE ΓÇó DISCOVER THE UPLEARNX EDGE ΓÇó 
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
    { name: 'MICROSOFT', gradient: { from: '#091128', via: '#1E3A8A', to: 'var(--color-secondary)' } },
    { name: 'AMAZON', gradient: { from: 'var(--color-secondary)', via: '#EA580C', to: '#9A3412' } },
    { name: 'GOOGLE', gradient: { from: '#091128', via: 'var(--color-secondary)', to: '#091128' } },
    { name: 'DELOITTE', gradient: { from: 'var(--color-tertiary)', via: '#091128', to: '#020617' } },
    { name: 'IBM', gradient: { from: '#2563EB', via: '#1D4ED8', to: '#1E3A8A' } },
    { name: 'ACCENTURE', gradient: { from: 'var(--color-secondary)', via: '#091128', to: 'var(--color-secondary)' } },
  ];

  return (
    <MarqueeLogoScroller
      title="4.9 / 5 Overall Rating • 40,000+ Candidates Guided Globally"
      description="Trusted by Professionals at:"
      logos={partners}
      speed="normal"
    />
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Submit Details", desc: "Provide your work history for quick eligibility verification.", micro: "Tell us where you are. We'll help you understand what's next." },
    { num: "02", title: "Application Support", desc: "Our experts format your experience into PMI-compliant narratives.", micro: "Prepare your application with expert guidance." },
    { num: "03", title: "PMI Approval", desc: "Guaranteed smooth application approval without audit risks.", micro: "Move forward with confidence." },
    { num: "04", title: "Schedule Exam", desc: "Choose your preferred exam slot online or at Pearson VUE.", micro: "Choose your target date and get ready." },
    { num: "05", title: "Exam Support", desc: "Pass on your first attempt and pay service fees only after passing!", micro: "Prepare smarter. Stay focused." }
  ];

  return (
    <div id="how-it-works" className="relative pt-16 md:pt-24 px-6 md:px-20 pb-16 md:pb-24 overflow-hidden">
      <img src="/team_collaboration.jpg" className="absolute left-0 top-0 h-full w-full object-cover z-0 opacity-5" alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cream-light)] via-[var(--color-cream-light)]/60 to-[var(--color-cream-light)] z-0"></div>
      
      {/* Animated Aurora Shader for Glassmorphism Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100 mix-blend-multiply" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}>
        <WebsiteShaderCanvas preset="aurora-veil" tone="light" className="w-full h-full" />
      </div>
      
      <div className="relative z-10">
        <p className="font-sans font-medium text-primary tracking-wider text-xs uppercase opacity-0 animate-fade-in-up">5-Step Pathway</p>
        <h2 className="uppercase text-4xl md:text-[4vw] font-anton leading-none text-primary mt-4 opacity-0 animate-fade-in-up delay-100">How It Works</h2>
        <p className="text-sm md:text-base leading-relaxed mt-5 font-sans text-tertiary max-w-2xl opacity-0 animate-fade-in-up delay-200">
          Your seamless route to PMP<sup className='text-[0.6em] align-super'>®</sup> certification success.
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
    { label: "APPLICATION", title: "Application Support", desc: "Professional drafting of project experience narratives compliant with PMI requirements.", highlight: "Expert Application Guidance", icon: FileCheck, colSpan: "md:col-span-2", bg: "bg-white text-primary shadow-sm border-gold-border", text: "text-primary", labelColor: "text-secondary", highlightColor: "text-primary/40", border: "border-gold-border" },
    { label: "EDUCATION", title: "35-Hour PDUs Support", desc: "Seamless fulfillment of mandatory 35 contact hours training prerequisites.", highlight: "Structured Learning Support", icon: GraduationCap, colSpan: "md:col-span-1", bg: "bg-white text-primary shadow-sm border-gold-border", text: "text-primary", labelColor: "text-secondary", highlightColor: "text-primary/40", border: "border-gold-border" },
    { label: "SAVINGS", title: "Exam Fee Guidance", desc: "Receive flat ₹5,000 discount voucher codes directly on official PMI exam fees.", highlight: "Save ₹5,000 Today", icon: BadgePercent, colSpan: "md:col-span-1", bg: "bg-white text-primary shadow-sm border-gold-border", text: "text-primary", labelColor: "text-secondary", highlightColor: "text-primary/40", border: "border-gold-border" },
    { label: "EXAM", title: "Exam Day Support", desc: "Proven test-day strategies for Predictive, Agile, and Hybrid domain questions.", highlight: "Dedicated Assistance", icon: Headset, colSpan: "md:col-span-2", bg: "bg-tertiary text-white shadow-md border-transparent", text: "text-white", labelColor: "text-secondary", highlightColor: "text-white/40", border: "border-white/10" },
    { label: "PREPARATION", title: "Study Material", desc: "High-yield PMBOK 7th edition notes, Agile cheat sheets, and realistic question banks.", highlight: "Resources At Your Fingertips", icon: BookOpen, colSpan: "md:col-span-2", bg: "bg-white text-primary shadow-sm border-gold-border", text: "text-primary", labelColor: "text-secondary", highlightColor: "text-primary/40", border: "border-gold-border" },
    { label: "PROTECTION", title: "PMI Audit Support", desc: "Dedicated 1-on-1 advisor backing to handle any PMI application audit inquiries safely.", highlight: "1-on-1 Support", icon: Users, colSpan: "md:col-span-1", bg: "bg-white text-primary shadow-sm border-gold-border", text: "text-primary", labelColor: "text-secondary", highlightColor: "text-primary/40", border: "border-gold-border" }
  ];

  return (
    <div id="services" className="relative pt-24 md:pt-32 px-6 md:px-20 pb-24 bg-cream overflow-hidden">
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
                <text className="font-anton text-[10.5px] uppercase tracking-[0.15em] fill-current">
                  <textPath href="#circlePathServices" startOffset="0%">
                    FULL SUPPORT PACKAGE ΓÇó FULL SUPPORT PACKAGE ΓÇó 
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
            What You Get
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed mt-6 font-sans text-tertiary max-w-3xl mx-auto relative z-10"
          >
            End-to-end guidance designed specifically for working project leaders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-16">
          {services.map((svc, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-primary/5 p-6 rounded-2xl flex flex-col hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-secondary/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cream text-primary flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-secondary group-hover:text-black shadow-sm transition-all duration-300 border border-primary/5">
                  <svc.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-anton text-secondary/70 text-[10px] tracking-widest uppercase">{svc.label}</div>
                  <h3 className="text-[17px] font-black font-sans uppercase text-primary leading-tight mt-0.5">{svc.title}</h3>
                </div>
              </div>
              <p className="text-[13px] text-tertiary font-sans leading-relaxed flex-grow">{svc.desc}</p>
              <div className="mt-5 pt-4 border-t border-primary/5 flex items-center justify-between">
                <span className="text-[11px] font-bold text-primary/40 uppercase tracking-widest group-hover:text-secondary transition-colors">{svc.highlight}</span>
                <ArrowRight className="w-4 h-4 text-primary/20 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
}

function LeadMentorSection() {
  return (
    <div id="lead-mentor" className="bg-white py-16 md:py-24 px-6 md:px-20 border-t border-primary/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/3 relative">
          <div className="aspect-[4/5] bg-primary/5 rounded-3xl overflow-hidden relative border border-primary/10">
            <img src="/hero.jpg" alt="PMP Lead Mentor" className="w-full h-full object-cover object-center mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-anton text-2xl uppercase tracking-wide">PMP® Lead Mentor</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-[10px] font-sans font-bold bg-secondary/80 px-2 py-1 rounded backdrop-blur-sm uppercase">PMP® Certified</span>
                <span className="text-[10px] font-sans font-bold bg-white/20 px-2 py-1 rounded backdrop-blur-sm uppercase">PMI-ACP® Certified</span>
                <span className="text-[10px] font-sans font-bold bg-white/20 px-2 py-1 rounded backdrop-blur-sm uppercase">15+ Yrs Industry Exp.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="font-sans font-bold text-secondary tracking-wider text-xs uppercase flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4" /> VERIFIED MENTOR
          </p>
          <h2 className="uppercase text-4xl md:text-5xl font-anton leading-tight text-primary mb-8">
            Guided by Senior PMI<sup className="text-[0.4em] align-super">®</sup> <br className="hidden md:block"/>Certified Experts
          </h2>
          <blockquote className="border-l-4 border-secondary pl-6 text-lg md:text-xl text-tertiary font-sans italic leading-relaxed">
            "Our mission is simple: eliminate uncertainty from your PMP® exam journey. With 15+ years of real-world project experience, we provide a structured pathway that guarantees application approval and first-attempt clearance."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function TheUplearnxEdgeSection() {
  const edges = [
    { title: "Pay After Pass", desc: "No upfront service fee required. You pay only after successfully passing your PMP® exam.", short: "100% Risk Free" },
    { title: "End-to-End Support", desc: "From initial experience drafting to test day clearance and certification.", short: "All-Inclusive Guidance" },
    { title: "Experienced Team", desc: "Guided by seasoned mentors with over 15+ years of leadership expertise.", short: "Senior Professionals" },
    { title: "24/7 Dedicated Assistance", desc: "Direct WhatsApp mentor access for quick resolution of your doubts.", short: "Always Available" }
  ];

  return (
    <div id="why-uplearnx" className="relative pt-16 md:pt-24 px-6 md:px-20 pb-16 md:pb-24 bg-primary text-white">
      <p className="font-sans font-medium text-secondary tracking-wider text-xs uppercase">The UPlearnx Advantage</p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-4 mb-12 md:mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="uppercase text-4xl md:text-[4vw] font-anton leading-none text-white">Your Success Is Our Priority</h2>
          <p className="text-lg md:text-xl font-medium text-white/90 mt-6 font-sans">Built on candidate trust, complete transparency, and guaranteed results.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {edges.map((edge, i) => (
          <div key={i} className="border border-white/10 hover:border-secondary flex flex-col justify-between p-8 transition-all duration-300 group rounded-xl bg-white/5 hover:bg-white/10">
            <div>
              <h3 className="text-xl md:text-2xl font-anton tracking-wide uppercase group-hover:text-secondary transition-colors duration-300 text-white">{edge.title}</h3>
              <p className="text-sm text-white/70 font-sans leading-relaxed mt-4">{edge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EligibilitySection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div id="eligibility" className="relative pt-16 md:pt-24 px-6 md:px-20 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <p className="font-sans font-bold text-secondary tracking-wider text-xs uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> FREE QUALIFICATION CHECK
          </p>
          <h2 className="uppercase text-4xl sm:text-5xl lg:text-[4vw] font-anton leading-[1.1] text-primary mt-4 break-words">Check Eligibility <br className="md:hidden" />& Claim <span className="text-secondary">₹5,000 Off</span></h2>
          <p className="text-sm sm:text-base leading-relaxed mt-6 font-sans text-tertiary">
            Get an instant review from a senior PMP<sup className='text-[0.6em] align-super'>®</sup> advisor. Locks in your ₹5,000 PMP<sup className='text-[0.6em] align-super'>®</sup> exam fee discount voucher!
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 p-6 bg-primary border-l-4 border-secondary rounded-r-xl shadow-xl"
          >
            <h4 className="font-anton text-xl uppercase text-white mb-2">READY WHEN YOU ARE</h4>
            <p className="font-sans text-sm text-white/80">Don't let application complexity, preparation confusion, or unanswered questions slow you down. Get a structured path, experienced guidance, and dedicated support from start to finish.</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="text-[10px] sm:text-xs font-sans font-semibold text-primary uppercase bg-white px-3 py-1.5 rounded-full shadow-sm text-center whitespace-nowrap">Expert Guidance</span>
              <span className="text-[10px] sm:text-xs font-sans font-semibold text-primary uppercase bg-white px-3 py-1.5 rounded-full shadow-sm text-center whitespace-nowrap">Dedicated Support</span>
              <span className="text-[10px] sm:text-xs font-sans font-semibold text-primary uppercase bg-white px-3 py-1.5 rounded-full shadow-sm text-center whitespace-nowrap">Pay After Pass</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-primary/5 relative overflow-hidden">
             {/* decorative blob */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-0 pointer-events-none"></div>
             
            <h3 className="text-2xl font-anton text-primary uppercase mb-6 relative z-10">Let's Check Your Eligibility</h3>
            <form className="space-y-4 relative z-10">
              <div>
                <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full bg-cream border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" placeholder="Enter your email address" className="w-full bg-cream border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                  <input type="tel" placeholder="Enter your WhatsApp number" className="w-full bg-cream border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Highest Qualification</label>
                  <select defaultValue="" className="w-full bg-cream border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm text-tertiary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none">
                    <option value="" disabled>Select your qualification</option>
                    <option>Diploma</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">Experience</label>
                  <select defaultValue="" className="w-full bg-cream border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm text-tertiary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none">
                    <option value="" disabled>Select experience</option>
                    <option>1-3 Years</option>
                    <option>3-5 Years</option>
                    <option>5-8 Years</option>
                    <option>8+ Years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans font-semibold text-primary uppercase tracking-wider mb-2">PMI Status</label>
                  <select defaultValue="" className="w-full bg-cream border border-primary/10 rounded-lg px-4 py-3 font-sans text-sm text-tertiary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none">
                    <option value="" disabled>Select status</option>
                    <option>Not Applied</option>
                    <option>Drafting</option>
                    <option>Approved</option>
                  </select>
                </div>
              </div>
              <button type="button" className="w-full bg-secondary hover:brightness-95 text-primary font-anton uppercase tracking-wider py-4 rounded-xl shadow-md transition-colors mt-6 text-sm sm:text-lg flex flex-col items-center justify-center gap-1 relative overflow-hidden group">
                <span className="flex items-center gap-2">Get Free Eligibility Check & Claim ₹5,000 Off &rarr;</span>
                <span className="text-[10px] text-white font-sans tracking-widest bg-primary/90 px-3 rounded-full mt-1 animate-pulse shadow-sm">ONLY 4 DISCOUNT VOUCHERS LEFT TODAY</span>
              </button>
              <div className="flex justify-center items-center gap-4 mt-4 text-[10px] text-tertiary font-sans font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1"><svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 100% Confidential</span>
                <span className="flex items-center gap-1"><svg className="w-3 h-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> Immediate Response</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FaqSection() {
  const faqs = [
    { q: 'How does Pay After Pass work?', a: "Under our Pay After Pass model, you pay no service fee upfront. Our mentors handle your application filing, study plans, and exam support. You pay our service fee only after you clear your PMP® exam." },
    { q: "How do I claim the ₹5,000 exam fee discount?", a: "When you fill out the eligibility check form or connect with an advisor, we issue an official discount voucher code that saves flat ₹5,000 on your PMI exam registration fee." },
    { q: "What support is included?", a: "We provide full end-to-end support including PMI experience narrative drafting, 35 PDU completion, exam fee discount voucher, practice questions, and exam day strategy." },
    { q: "Do I need an approved PMI application first?", a: "No! We help draft and format your project experience narrative from scratch to ensure instant approval without audit risks." },
    { q: "How do I get started right now?", a: "Simply fill out our free eligibility checker form above or tap \"Chat on WhatsApp\" to connect directly with a senior PMP mentor today!" }
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
          <p className="font-sans font-medium text-secondary tracking-wider text-xs uppercase">Got Questions?</p>
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
              <details className="group bg-cream border border-primary/10 rounded-xl overflow-hidden cursor-pointer">
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


      <footer className="relative bg-primary overflow-hidden text-white pt-40 md:pt-48 pb-10 font-sans border-t border-primary/20">
        
        {/* Massive Background Text Watermark */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none overflow-hidden translate-y-1/4 opacity-[0.03] z-0">
          <h1 className="text-[30vw] font-anton leading-none text-white whitespace-nowrap">UPLEARNX</h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="font-anton text-4xl text-white tracking-wider block mb-2 group pointer-events-auto w-max">
                UP<span className="text-secondary transition-colors group-hover:text-white">LEARNX</span>
              </Link>
              <p className="text-sm text-white/60 leading-relaxed font-sans mb-8 pr-4">
                International EdTech platform delivering professional PMP<sup className='text-[0.6em] align-super'>®</sup> certification exam support with guaranteed clearance assistance.
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
                {['Home', 'How It Works', 'Services', 'Lead Mentor', 'FAQs'].map((item) => (
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
                {['Application Support', '35 PDU Training', 'Exam Fee Discount', 'Exam Clearance Support'].map((item) => (
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
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-xs text-white/40 font-sans pointer-events-auto">
            <p className="leading-relaxed font-bold">
              Legal Disclaimer
            </p>
            <p className="leading-relaxed md:col-span-2">
              PMP<sup className='text-[0.6em] align-super'>®</sup> and PMI<sup className='text-[0.6em] align-super'>®</sup> are registered trademarks of the Project Management Institute, Inc. UPlearnx is an independent professional certification guidance platform.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-widest font-sans pointer-events-auto">
            <span>© {new Date().getFullYear()} UPlearnx Inc. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FloatingElements() {
  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 items-start animate-fade-in-up delay-700 pointer-events-none hidden sm:flex">
        <div className="bg-white border border-gold-border p-3 rounded-2xl shadow-xl flex items-center gap-3 pointer-events-auto hover:-translate-y-1 transition-transform group cursor-pointer max-w-[280px]">
          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform relative">
             <span className="text-xl">🔥</span>
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-ping"></span>
             <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border border-white"></span>
          </div>
          <div className="flex flex-col">
             <span className="text-primary font-anton uppercase text-[11px] tracking-wider leading-tight">Very High Demand</span>
             <span className="text-tertiary font-sans text-[10px] font-medium leading-snug">Only <strong className="text-secondary font-black">3 spots left</strong> for this week's PMP batch.</span>
          </div>
          <a href="#eligibility" className="absolute inset-0 z-10" aria-label="Check Eligibility"></a>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group relative">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        <span className="absolute right-full mr-4 bg-primary text-white text-xs font-anton tracking-wider uppercase px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat on WhatsApp</span>
      </a>
      
      <a href="mailto:expert@uplearnx.com" className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center group relative border border-white/10">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        <span className="absolute right-full mr-4 bg-primary text-white text-xs font-anton tracking-wider uppercase px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Talk to a PMP<sup className='text-[0.6em] align-super'>®</sup> Expert</span>
      </a>
    </div>
    </>
  );
}
