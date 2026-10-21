'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Star,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  FileText,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiveDemo from '@/components/LiveDemo';
import DualToggleButtons from '@/components/ui/DualButtons';
import BlueButton from '@/components/ui/BlueButton';
import ArrowButton from '@/components/ui/ArrowButton';
import ClientOnly from '@/components/ui/ClientOnly';
import { GenericSlider } from '@/components/ui/GenericSlider';

import {
  personalInfo,
  heroStats,
  servicesData,
  experiences,
  projectsData,
  certificationsData,
  additionalCertifications,
  skillsMarquee,
  trustHighlights,
  reviewsData,
  ProjectItem,
} from '@/data/data';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'hardware' | 'nlp'>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem>(projectsData[0]);

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setFormMessage('Please fill in all fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('error');
      setFormMessage('Please enter a valid email address.');
      return;
    }

    setFormStatus('submitting');
    setFormMessage('');

    try {
      const res = await fetch('https://formsubmit.co/ajax/grahithraoaj@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok || data.success === 'true' || data.success === true) {
        setFormStatus('success');
        setFormMessage('✓ Thank you! Your message has been sent successfully. I will get back to you within 24 hours.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setFormStatus('error');
      setFormMessage('Submission encountered an issue. You can email me directly at grahithraoaj@gmail.com.');
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F7FBFF] py-6 sm:py-8 flex flex-col items-center justify-start overflow-x-hidden">
      {/* Top Floating Pill Navigation */}
      <Navbar />

      {/* =========================================================================
          HERO SECTION — PRIMARY REFERENCE COMPOSITION (ADAPTED TO LIGHT BLUE)
      ========================================================================= */}
      <section
        id="home"
        className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 flex flex-col items-center"
      >
        <div className="group flex flex-col lg:flex-row w-full min-h-[620px] sm:min-h-[720px] xl:h-[820px] gap-8 lg:gap-12 items-center justify-center">
          {/* Left Quote Card */}
          <div className="hidden lg:flex flex-col w-[310px] xl:w-[330px] p-6 rounded-[28px] bg-white/90 backdrop-blur-md border border-[#DCEBFA] shadow-[0_10px_30px_rgba(59,130,246,0.06)] transition-all duration-300 ease-in-out group-hover:-translate-y-6">
            <div className="text-[#3B82F6] text-[44px] font-serif leading-none mb-1">&ldquo;</div>
            <p className="text-[#102A43] text-[15px] xl:text-[16px] font-medium leading-relaxed">
              Building intelligent solutions, crafting meaningful digital experiences, and transforming innovative ideas into real-world applications.
            </p>
            <div className="mt-4 pt-3 border-t border-[#DCEBFA] flex items-center justify-between text-xs text-[#64748B]">
              <span>Grahith Rao</span>
              <span className="text-[#3B82F6] font-semibold">AI/ML Engineer</span>
            </div>
          </div>

          {/* Center Main Composition */}
          <div className="relative w-full max-w-[952px] flex flex-col items-center justify-center">
            {/* Typography Header */}
            <div className="flex w-full flex-col items-center justify-center transition-all duration-300 ease-in-out group-hover:translate-y-4 px-4 sm:px-6">
              {/* Hello Pill Badge */}
              <div className="inline-flex items-center gap-2 h-[42px] px-6 rounded-full border border-[#BFDBFE] bg-white text-xs sm:text-sm font-semibold text-[#102A43] shadow-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for AI/ML Roles &amp; Projects
              </div>

              {/* Headline */}
              <div className="flex flex-col sm:flex-row sm:gap-3 items-center sm:items-end mb-1">
                <h1 className="leading-tight text-[#102A43] font-bold text-4xl sm:text-5xl md:text-7xl xl:text-[84px] tracking-tight">
                  I&apos;m
                </h1>
                <div className="flex items-end">
                  <span className="leading-tight text-[#3B82F6] font-extrabold text-4xl sm:text-5xl md:text-7xl xl:text-[84px] tracking-tight">
                    Grahith Rao
                  </span>
                  <span className="leading-tight text-[#102A43] font-bold text-4xl sm:text-5xl md:text-7xl xl:text-[84px]">
                    ,
                  </span>
                </div>
              </div>

              <h2 className="leading-tight text-[#102A43] font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[54px] text-center tracking-tight mt-1">
                AI &amp; Machine Learning Engineer
              </h2>
            </div>

            {/* Visual Arch Container With Photo */}
            <div className="relative w-full max-w-[952px] aspect-[3/2] flex flex-col items-center justify-center -translate-y-[8%] sm:-translate-y-[12%] md:-translate-y-[16%] mx-auto px-4 mt-6">
              {/* Light Blue Arch Background */}
              <div className="absolute bottom-0 z-0 w-[92%] max-w-[780px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
                <div className="absolute w-full h-full bg-gradient-to-t from-[#60A5FA] via-[#BFDBFE] to-[#EFF7FF] rounded-t-full border-t-2 border-x-2 border-white/60 shadow-[0_-15px_40px_rgba(59,130,246,0.18)]" />
              </div>

              {/* Decorative Frame Overlay */}
              <div className="absolute z-10 transition-all duration-500 ease-in-out opacity-40 group-hover:opacity-80 scale-100 group-hover:scale-105 pointer-events-none">
                <Image
                  src="/Frame 68.svg"
                  alt="Decorative Geometric Framing"
                  width={960}
                  height={620}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>

              {/* Grahith's Real Profile Photograph (Transparent Cutout) */}
              <div className="relative z-20 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] flex items-end justify-center pointer-events-none">
                <Image
                  src="/profile.png"
                  alt="Grahith G Rao"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(16,42,67,0.2)] transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Dual Toggle Capsule Buttons (Signature Reference Feature) */}
              <div className="absolute bottom-[-10px] sm:bottom-[0%] z-30 w-full flex justify-center">
                <DualToggleButtons />
              </div>
            </div>
          </div>

          {/* Right Experience Rating Card */}
          <div className="hidden lg:flex w-[200px] xl:w-[220px] p-6 rounded-[28px] bg-white/90 backdrop-blur-md border border-[#DCEBFA] shadow-[0_10px_30px_rgba(59,130,246,0.06)] flex-col items-center text-center gap-2 transition-all duration-300 ease-in-out group-hover:-translate-y-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="text-[#3B82F6] fill-[#3B82F6]" />
              ))}
            </div>
            <h3 className="text-[32px] font-extrabold text-[#102A43] leading-none mt-1">
              3+ Years
            </h3>
            <p className="text-sm font-semibold text-[#64748B]">
              AI/ML &amp; Dev Experience
            </p>
            <div className="w-full pt-3 mt-2 border-t border-[#DCEBFA] text-xs text-[#3B82F6] font-bold">
              15 Verified Certifications
            </div>
          </div>
        </div>

        {/* Hero Quick Socials & Actions Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2 sm:mt-6 z-30">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#DCEBFA] text-sm font-semibold text-[#102A43] hover:text-[#3B82F6] hover:border-[#60A5FA] shadow-sm hover:shadow-md transition-all"
          >
            <Github size={16} /> GitHub Profile
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#DCEBFA] text-sm font-semibold text-[#102A43] hover:text-[#3B82F6] hover:border-[#60A5FA] shadow-sm hover:shadow-md transition-all"
          >
            <Linkedin size={16} /> LinkedIn Profile
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#DCEBFA] text-sm font-semibold text-[#102A43] hover:text-[#3B82F6] hover:border-[#60A5FA] shadow-sm hover:shadow-md transition-all"
          >
            <Mail size={16} /> Send Email
          </a>
          <a
            href="/resume.pdf"
            download="Grahith_G_Rao_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EFF7FF] border border-[#BFDBFE] text-sm font-bold text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white shadow-sm transition-all"
          >
            <FileText size={16} /> Download Resume
          </a>
        </div>

        {/* 4-Column Hero Stats Bar */}
        <div className="w-full max-w-[1298px] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 p-6 sm:p-8 rounded-[30px] bg-white border border-[#DCEBFA] shadow-[0_10px_35px_rgba(59,130,246,0.06)]">
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center p-2 ${
                i !== heroStats.length - 1 ? 'md:border-r border-[#DCEBFA]' : ''
              }`}
            >
              <span className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#3B82F6] leading-none">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#475569] mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          ABOUT ME SECTION
      ========================================================================= */}
      <section id="about" className="w-full max-w-[1298px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full p-8 sm:p-12 lg:p-16 rounded-[36px] bg-gradient-to-br from-[#EFF7FF] via-white to-[#E0F2FE] border border-[#DCEBFA] shadow-[0_15px_45px_rgba(59,130,246,0.08)] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Visual Badge */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-20 h-20 rounded-3xl bg-[#3B82F6] flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30">
              <Sparkles size={38} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-1">
              About Grahith Rao
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] leading-tight">
              Engineering with AI, from <span className="text-[#3B82F6]">Concept to Code</span>
            </h2>
            <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-[#64748B]">
              <MapPin size={15} className="text-[#3B82F6]" />
              <span>Mangaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="w-full lg:w-2/3 flex flex-col gap-5 text-[#475569] text-base sm:text-lg leading-relaxed">
            <p>
              I am an Artificial Intelligence &amp; Machine Learning Engineer pursuing my B.E. at{' '}
              <strong className="text-[#102A43]">AJ Institute of Engineering &amp; Technology</strong>. My focus is on turning deep mathematical models and signal processing into usable, responsive software products.
            </p>
            <p>
              My flagship project, <strong className="text-[#102A43]">SignSpeak Gloves</strong>, demonstrated full-cycle engineering — transforming raw flex-sensor microvoltages through an Arduino pipeline and CNN-RNN model into a native Android app that articulates spoken sign language in real time with over 92% accuracy.
            </p>
            <p>
              Whether deploying transformer NLP models, training computer vision classifiers, or developing high-performance modern web apps, I build software that is clean, verifiable, and engineered for real-world impact.
            </p>

            {/* Quick Expertise Tags */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-[#DCEBFA]">
              {[
                'Computer Vision',
                'Embedded IoT Intelligence',
                'Deep Learning (TensorFlow/PyTorch)',
                'Full-Stack Web (Next.js/React)',
                'FastAPI / Microservices',
                'Data Science & NLP',
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#102A43] border border-[#BFDBFE] shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES SECTION — ADAPTED REFERENCE COMPOSITION
      ========================================================================= */}
      <section
        id="services"
        className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="relative flex flex-col w-full min-h-[780px] gap-12 sm:gap-16 items-center px-6 sm:px-10 lg:px-16 py-16 sm:py-20 bg-gradient-to-br from-[#EFF7FF] via-white to-[#E0F2FE] border border-[#DCEBFA] rounded-[36px] sm:rounded-[50px] shadow-[0_20px_60px_rgba(59,130,246,0.08)] overflow-hidden">
          {/* Header Row */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 relative z-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] bg-white px-3 py-1 rounded-full border border-[#BFDBFE] inline-block mb-3">
                Capabilities
              </span>
              <h2 className="leading-tight font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#102A43]">
                My <span className="text-[#3B82F6]">Services</span>
              </h2>
            </div>
            <p className="w-full lg:w-[540px] font-medium text-base sm:text-lg text-[#475569] leading-relaxed">
              From marketing sites to end-to-end hardware-integrated AI solutions — I engineer complete software directly with founders, teams, and academic research collaborators.
            </p>
          </div>

          {/* Service Cards Slider / Grid */}
          <div className="relative w-full max-w-[1299px] flex items-start justify-center z-10">
            <GenericSlider
              data={servicesData}
              slidesPerView={3}
              heightClass="h-auto"
              cardType="service"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          WORK EXPERIENCE & EDUCATION — TIMELINE
      ========================================================================= */}
      <section
        id="journey"
        className="w-full max-w-[1298px] px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-start"
      >
        {/* Section Heading */}
        <div className="w-full flex flex-col items-center sm:items-start mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] bg-[#EFF7FF] px-3.5 py-1 rounded-full border border-[#BFDBFE] mb-2">
            Career Timeline
          </span>
          <div className="flex flex-wrap gap-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#102A43]">
            <span>My</span>
            <span className="text-[#3B82F6]">Education &amp; Experience</span>
          </div>
          <p className="text-[#475569] text-base sm:text-lg mt-3 max-w-xl">
            Verified academic milestones, technical bootcamps, and virtual internships that built my engineering foundation.
          </p>
        </div>

        {/* Mobile View */}
        <div className="w-full lg:hidden flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#DCEBFA] shadow-sm"
            >
              <div className="relative flex-shrink-0 mt-1">
                <div className="w-7 h-7 rounded-full border-2 border-dashed border-[#3B82F6] bg-white flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ${exp.dotColor}`} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-[#102A43] text-lg sm:text-xl">
                    {exp.company}
                  </h3>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#EFF7FF] text-[#3B82F6]">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="font-semibold text-[#3B82F6] text-sm sm:text-base mb-2">
                  {exp.role}
                </h4>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline View (Matching Reference Layout) */}
        <div className="w-full hidden lg:flex justify-between items-stretch py-4">
          {/* Left Column: Company & Duration */}
          <div className="flex flex-col justify-between w-[460px] gap-12 text-right">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-1.5 p-4 rounded-2xl bg-white/70 border border-[#DCEBFA]/60 shadow-sm">
                <h3 className="font-extrabold text-[#102A43] text-2xl">
                  {exp.company}
                </h3>
                <span className="text-sm font-bold text-[#3B82F6]">
                  {exp.duration}
                </span>
                <span className="text-xs font-semibold text-[#64748B]">
                  {exp.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Center Column: Dashed Line & Dots */}
          <div className="relative flex flex-col items-center justify-between px-8">
            <div className="absolute top-4 bottom-4 w-[2px] border-l-2 border-dashed border-[#BFDBFE]" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-center w-12 h-12 z-10">
                <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-[#60A5FA] bg-white shadow-sm" />
                <div className={`w-8 h-8 rounded-full ${exp.dotColor} shadow-md`} />
              </div>
            ))}
          </div>

          {/* Right Column: Role & Description */}
          <div className="flex flex-col justify-between w-[460px] gap-12 text-left">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-2 p-4 rounded-2xl bg-white/70 border border-[#DCEBFA]/60 shadow-sm">
                <h3 className="font-extrabold text-[#102A43] text-2xl">
                  {exp.role}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY HIRE ME? SECTION — ADAPTED REFERENCE COMPOSITION
      ========================================================================= */}
      <section className="w-full max-w-[1298px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#EFF7FF] via-white to-[#E0F2FE] border border-[#DCEBFA] rounded-[36px] lg:rounded-[50px] gap-12 lg:gap-16 shadow-[0_20px_50px_rgba(59,130,246,0.08)]">
          {/* Left Graphic Element */}
          <div className="relative w-full max-w-[420px] h-[420px] sm:h-[460px] group mx-auto lg:mx-0 flex items-center justify-center">
            {/* Elegant Blue Gradient Pill Accent */}
            <div className="absolute w-[240px] sm:w-[270px] h-[340px] sm:h-[380px] rounded-[48px] bg-gradient-to-tr from-[#3B82F6] via-[#60A5FA] to-[#BAE6FD] opacity-90 shadow-[0_20px_40px_rgba(59,130,246,0.2)] transition-transform duration-500 group-hover:scale-105" />

            <Image
              src="/grahith-pointing.png"
              alt="Grahith Rao — AI/ML Engineer"
              fill
              className="object-contain z-10 drop-shadow-[0_20px_35px_rgba(16,42,67,0.25)] transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:-translate-y-2"
              priority
            />
          </div>

          {/* Right Information & Metrics */}
          <div className="w-full max-w-xl flex flex-col items-start gap-6">
            <div className="flex flex-wrap text-4xl sm:text-5xl lg:text-6xl font-extrabold gap-2">
              <span className="text-[#102A43]">Why</span>
              <span className="text-[#3B82F6]">Hire Me</span>
              <span className="text-[#102A43]">?</span>
            </div>

            <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
              SignSpeak Gloves went from raw flex-sensor microvoltages to a fully deployed Android app with live speech output. Every system I build ships with a measurable outcome — verified by data, not just theoretical claims.
            </p>

            <div className="grid grid-cols-2 gap-6 w-full pt-2">
              <div className="flex flex-col p-4 rounded-2xl bg-white border border-[#DCEBFA] shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#3B82F6] leading-tight">
                  92%+
                </span>
                <span className="text-sm font-semibold text-[#64748B] mt-1">
                  Peak Model Accuracy
                </span>
              </div>
              <div className="flex flex-col p-4 rounded-2xl bg-white border border-[#DCEBFA] shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#3B82F6] leading-tight">
                  15
                </span>
                <span className="text-sm font-semibold text-[#64748B] mt-1">
                  Verified Certifications
                </span>
              </div>
              <div className="flex flex-col p-4 rounded-2xl bg-white border border-[#DCEBFA] shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#3B82F6] leading-tight">
                  3+
                </span>
                <span className="text-sm font-semibold text-[#64748B] mt-1">
                  Years Building AI
                </span>
              </div>
              <div className="flex flex-col p-4 rounded-2xl bg-white border border-[#DCEBFA] shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#3B82F6] leading-tight">
                  100%
                </span>
                <span className="text-sm font-semibold text-[#64748B] mt-1">
                  Shipped Code &amp; APIs
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-2 px-8 py-4 rounded-[20px] bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROJECTS SECTION — ADAPTED REFERENCE COMPOSITION
      ========================================================================= */}
      <section
        id="projects"
        className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center"
      >
        <div className="w-full max-w-[1298px] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] bg-[#EFF7FF] px-3.5 py-1 rounded-full border border-[#BFDBFE] mb-2 inline-block">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#102A43] leading-tight">
              Let&apos;s Have a Look at <span className="text-[#3B82F6]">My Portfolio</span>
            </h2>
          </div>

          <a
            href="https://github.com/grahithrao"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <BlueButton title="See All on GitHub" />
          </a>
        </div>

        {/* Filter Buttons */}
        <div className="w-full max-w-[1298px] flex flex-wrap justify-center sm:justify-start gap-2.5 mb-10">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'hardware', label: 'Hardware & IoT' },
            { id: 'ai', label: 'AI & Machine Learning' },
            { id: 'nlp', label: 'NLP & APIs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#3B82F6] text-white shadow-md shadow-blue-500/25'
                  : 'bg-white text-[#475569] border border-[#DCEBFA] hover:border-[#BFDBFE] hover:text-[#102A43]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Swiper Slider of Real Projects */}
        <div className="w-full max-w-[1298px]">
          <GenericSlider
            data={filteredProjects}
            slidesPerView={2}
            heightClass="h-auto"
            cardType="portfolio"
          />
        </div>

        {/* Active Project Spotlight Card */}
        <div className="w-full max-w-[1298px] mt-6 p-8 rounded-[32px] bg-white border border-[#DCEBFA] shadow-[0_12px_40px_rgba(59,130,246,0.06)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider">
              Spotlight System
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
              {activeProject.title} — {activeProject.subtitle}
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              {activeProject.desc}
            </p>
          </div>
          <a
            href={activeProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-sm shadow-md transition-all"
          >
            <Github size={18} />
            View Repository &amp; Code
          </a>
        </div>
      </section>

      {/* =========================================================================
          LIVE COMPUTER VISION DEMO (MEDIAPIPE IN BROWSER)
      ========================================================================= */}
      <section id="demo" className="w-full">
        <LiveDemo />
      </section>

      {/* =========================================================================
          CERTIFICATIONS SECTION — 15 VERIFIED CREDENTIALS
      ========================================================================= */}
      <section
        id="certifications"
        className="w-full max-w-[1298px] px-4 sm:px-6 lg:px-8 py-16 flex flex-col"
      >
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] bg-[#EFF7FF] px-3.5 py-1 rounded-full border border-[#BFDBFE] mb-2 inline-block">
              Verified Credentials
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#102A43] leading-tight">
              Certifications &amp; <span className="text-[#3B82F6]">Coursework</span>
            </h2>
          </div>
          <p className="text-[#475569] text-base max-w-md">
            15 verified credentials from Deloitte, AWS, IBM, and IIT Kharagpur — each viewable as a direct PDF.
          </p>
        </div>

        {/* 6 Primary Verified Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-7 rounded-[28px] bg-white border border-[#DCEBFA] shadow-[0_10px_30px_rgba(59,130,246,0.06)] hover:shadow-[0_20px_45px_rgba(59,130,246,0.12)] hover:border-[#60A5FA] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckCircle2 size={13} /> Verified
                  </span>
                  <span className="text-xs font-semibold text-[#94A3B8]">
                    {cert.date}
                  </span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-[#102A43] group-hover:text-[#3B82F6] transition-colors leading-snug mb-1">
                  {cert.title}
                </h3>
                <span className="text-xs sm:text-sm font-medium text-[#64748B] block mb-4">
                  {cert.issuer}
                </span>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#EFF7FF] text-[#3B82F6] border border-[#BFDBFE]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-4 border-t border-[#DCEBFA] flex items-center justify-between text-sm font-bold text-[#3B82F6] group-hover:text-[#2563EB] transition-colors"
              >
                <span>View Certificate PDF</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* 9 Additional Coursework Chips (Infosys Springboard) */}
        <div className="w-full p-8 rounded-[32px] bg-white border border-[#DCEBFA] shadow-sm">
          <h3 className="text-base font-bold text-[#102A43] uppercase tracking-wider mb-4">
            Additional Industry Coursework — Infosys Springboard
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {additionalCertifications.map((item, idx) => (
              <a
                key={idx}
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#EFF7FF] hover:bg-[#3B82F6] text-[#102A43] hover:text-white border border-[#BFDBFE] transition-all flex items-center gap-1.5 shadow-sm hover:scale-105"
              >
                <span>{item.title}</span>
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SKILLS MARQUEE RIBBON — SIGNATURE REFERENCE FEATURE
      ========================================================================= */}
      <section className="relative w-full my-12 overflow-hidden py-6">
        <div className="relative w-full h-[140px] bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] rounded-tl-[40px] rounded-br-[40px] overflow-hidden shadow-lg shadow-blue-500/20">
          <div className="absolute w-[5000px] h-[64px] bg-white -rotate-2 -mt-2 md:mt-1 md:-rotate-[1.8deg] z-10 -ml-2 flex items-center shadow-md">
            <div className="marquee flex gap-10 w-max items-center">
              {[...skillsMarquee, ...skillsMarquee].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-[#102A43] text-[36px] sm:text-[44px] font-extrabold whitespace-nowrap tracking-tight"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4828 0.257982L21.715 12.3411L34.2082 16.5003L22.1251 21.7324L17.9659 34.2256L12.7337 22.1425L0.240553 17.9833L12.3237 12.7512L16.4828 0.257982Z"
                      fill="#3B82F6"
                    />
                  </svg>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TESTIMONIALS SECTION — ADAPTED REFERENCE COMPOSITION
      ========================================================================= */}
      <section className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative flex flex-col w-full min-h-[720px] items-center px-6 sm:px-10 lg:px-16 py-16 sm:py-20 bg-gradient-to-br from-[#EFF7FF] via-white to-[#E0F2FE] border border-[#DCEBFA] rounded-[36px] sm:rounded-[50px] shadow-[0_20px_60px_rgba(59,130,246,0.08)] overflow-hidden">
          <div className="flex flex-col w-full max-w-[1299px] items-center gap-4 z-10 px-2 text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] bg-white px-3.5 py-1 rounded-full border border-[#BFDBFE]">
              Recommendations &amp; Peer Reviews
            </span>
            <h2 className="leading-tight font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#102A43]">
              Testimonials That Speak to <span className="text-[#3B82F6]">My Results</span>
            </h2>
            <p className="w-full max-w-[680px] text-base sm:text-lg text-[#475569] leading-relaxed">
              Perspectives from university mentors, hackathon collaborators, and project reviewers on my problem solving and development discipline.
            </p>
          </div>

          <div className="w-full z-10">
            <GenericSlider
              data={reviewsData}
              slidesPerView={3}
              heightClass=""
              cardType="review"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT SECTION — "HAVE AN AWESOME PROJECT IDEA? LET'S DISCUSS"
      ========================================================================= */}
      <section
        id="contact"
        className="w-full max-w-[1298px] px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center gap-12"
      >
        {/* Top Call to Action Heading */}
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3B82F6] bg-[#EFF7FF] px-3.5 py-1 rounded-full border border-[#BFDBFE]">
            Get In Touch
          </span>
          <h2 className="font-extrabold text-3xl sm:text-5xl lg:text-[60px] text-[#102A43] leading-tight">
            Have an Awesome Project Idea?
          </h2>
          <span className="font-extrabold text-3xl sm:text-5xl lg:text-[60px] text-[#3B82F6] leading-tight">
            Let&apos;s Discuss
          </span>
        </div>

        {/* Quick Email Capsule Input (From Reference Design) */}
        <div className="w-full max-w-3xl flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-full border border-[#DCEBFA] bg-white shadow-[0_12px_36px_rgba(59,130,246,0.1)]">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#EFF7FF] text-[#3B82F6] shrink-0 border border-[#BFDBFE]">
            <Mail size={20} />
          </div>

          <input
            type="email"
            placeholder="Enter Your Email Address to Connect"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full flex-1 px-3 text-sm sm:text-base outline-none bg-transparent text-[#102A43] placeholder:text-[#94A3B8]"
          />

          <a
            href={`mailto:${personalInfo.email}?subject=Project%20Inquiry`}
            className="px-6 sm:px-10 py-2.5 sm:py-3 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm sm:text-base font-bold transition-all duration-300 shadow-md shadow-blue-500/25 shrink-0"
          >
            Send Email
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-sm sm:text-base font-semibold text-[#102A43]">
          {trustHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon size={20} className="text-[#3B82F6]" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>

        {/* Full Contact Information & Async Form Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 mt-4 p-8 sm:p-12 rounded-[36px] bg-white border border-[#DCEBFA] shadow-[0_15px_45px_rgba(59,130,246,0.06)]">
          {/* Left Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mb-3">
                Let&apos;s Build Something Intelligent
              </h3>
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-6">
                Whether you need a bespoke computer vision model, a responsive web app, or an embedded AI prototype — reach out directly. I respond within 24 hours.
              </p>

              <div className="flex flex-col gap-4 text-sm sm:text-base">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#EFF7FF] border border-[#BFDBFE] text-[#102A43] hover:text-[#3B82F6] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3B82F6] shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] block">Email</span>
                    <span className="font-bold">{personalInfo.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#EFF7FF] border border-[#BFDBFE] text-[#102A43] hover:text-[#3B82F6] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3B82F6] shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] block">Phone</span>
                    <span className="font-bold">{personalInfo.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#EFF7FF] border border-[#BFDBFE] text-[#102A43]">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3B82F6] shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-[#64748B] block">Location</span>
                    <span className="font-bold">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl border border-[#DCEBFA] bg-white hover:bg-[#3B82F6] hover:text-white text-[#102A43] text-center font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl border border-[#DCEBFA] bg-white hover:bg-[#3B82F6] hover:text-white text-[#102A43] text-center font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-[28px] bg-[#EFF7FF] border border-[#DCEBFA]">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-xl bg-white border border-[#DCEBFA] text-[#102A43] text-sm focus:border-[#3B82F6] outline-none shadow-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-[52px] px-4 rounded-xl bg-white border border-[#DCEBFA] text-[#102A43] text-sm focus:border-[#3B82F6] outline-none shadow-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102A43] mb-1.5">
                  Project Scope or Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your product requirements, role opportunity, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white border border-[#DCEBFA] text-[#102A43] text-sm focus:border-[#3B82F6] outline-none shadow-sm transition-all resize-y"
                />
              </div>

              {formMessage && (
                <div
                  className={`p-4 rounded-xl text-xs sm:text-sm font-semibold ${
                    formStatus === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {formMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full h-[56px] rounded-xl bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold text-base transition-all duration-300 shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
