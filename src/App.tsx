import React, { useState, useEffect } from 'react';
import { 
  Terminal, BookOpen, User, Briefcase, Code, Database, Smartphone, 
  Layers, Github, Linkedin, Mail, MapPin, ExternalLink, Calendar, 
  Award, Trophy, Phone, Send, CheckCircle, ChevronRight, X, 
  ArrowUpRight, Search, FileText, Filter, GraduationCap, Copy, Check, Sparkles, Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalData, coursesData, projectsData, organizationData, skillsData } from './data';
import { Project, Organization, Skill } from './types';

export default function App() {
  // Navigation & UI States
  const [activeSection, setActiveSection] = useState<'home' | 'projects' | 'organizations' | 'academic' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Interactive Custom Toast State
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const [emailCopied, setEmailCopied] = useState<boolean>(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Filter Projects by state
  const categories = ['Semua', 'Web Dev', 'Mobile Dev', 'Data Science', 'UI/UX & SysDev'];
  
  const filteredProjects = selectedCategory === 'Semua' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  // Action: Copy Email to Clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  // Action: Mimic form submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1200);
  };

  // Scroll spy to highlight current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'organizations', 'academic', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section as any);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-950 bg-grid-pattern font-sans relative selection:bg-purple-100 selection:text-purple-900 border-t-8 border-purple-600">
      
      {/* GEOMETRIC NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Rotating square from design */}
            <a href="#home" className="flex items-center gap-3.5 group">
              <div className="w-8 h-8 bg-purple-600 rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-out flex-shrink-0" />
              <div>
                <span className="font-bold text-lg tracking-tight uppercase text-slate-900 block leading-none">
                  {personalData.name}
                </span>
                <span className="text-[10px] font-mono text-purple-600 uppercase tracking-widest font-bold">
                  IF SEMESTER 6
                </span>
              </div>
            </a>

            {/* Desktop Nav - Uppercase and tracked letter spacings */}
            <nav className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-500">
              {[
                { id: 'home', label: 'Ringkasan' },
                { id: 'projects', label: 'Proyek Kuliah' },
                { id: 'organizations', label: 'Organisasi' },
                { id: 'academic', label: 'Akademik & Skill' },
                { id: 'contact', label: 'Hubungi' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative py-2 transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'text-purple-600 underline underline-offset-8 decoration-2 decoration-purple-600' 
                      : 'text-slate-500 hover:text-purple-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Action - Clean solid outline button */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleCopyEmail}
                className="relative inline-flex items-center space-x-2 px-4 py-2 border border-slate-950 bg-slate-950 text-white hover:bg-purple-600 hover:border-purple-600 rounded-none text-xs font-bold uppercase tracking-widest transition-all duration-200 active:scale-95"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Salin Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION - GEOMETRICALLY POLISHED */}
      <section id="home" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Background Grid Pattern Vector */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-pattern-svg" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#7c3aed" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-svg)"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Main Hero Metadata */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 px-3 py-1 text-slate-700 text-[10px] font-mono font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-none bg-purple-600 rotate-45 inline-block animate-pulse"></span>
              <span>Semester 6 • Aktif Kuliah</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-950 leading-none tracking-tight uppercase">
              Informatics Engineering<br/>
              <span className="text-purple-600 italic font-serif normal-case font-bold">{personalData.name}</span>
            </h1>
            
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-slate-400">
              {personalData.title} & Developer Sistem
            </p>

            {/* Side Accent Pl-6 line for Bio as described in layout instructions */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed border-l-4 border-purple-600 pl-6">
              {personalData.bio}
            </p>

            {/* Solid Geometric Stats block */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 border border-slate-200 bg-white hover:border-purple-600 transition-colors">
                <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">IPK Kumulatif</span>
                <span className="block text-slate-950 font-black text-2xl mt-1">{personalData.gpa}</span>
              </div>
              <div className="p-5 border border-slate-200 bg-white hover:border-purple-600 transition-colors">
                <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Total Proyek</span>
                <span className="block text-slate-950 font-black text-2xl mt-1">4+ Matakuliah</span>
              </div>
              <div className="p-5 border border-slate-200 bg-white hover:border-purple-600 transition-colors col-span-2 sm:col-span-1">
                <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Asisten Lab</span>
                <span className="block text-slate-950 font-black text-lg mt-1 truncate">Basis Data</span>
              </div>
            </div>

            {/* Current Focus with Geometric touch */}
            <div className="bg-slate-50 border border-slate-200 p-4 flex items-start space-x-3 text-slate-700">
              <div className="p-2 bg-purple-600 text-white flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-purple-700 uppercase tracking-wider block">Fokus Saat Ini:</span>
                <span className="text-sm font-semibold mt-0.5 block text-slate-800">{personalData.currentFocus}</span>
              </div>
            </div>

            {/* Call to Actions - Sharp edges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-slate-950 text-white hover:bg-purple-600 rounded-none font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center space-x-2"
              >
                <span>Lihat Proyek Kuliah</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white border border-slate-300 text-slate-700 rounded-none font-bold text-xs uppercase tracking-widest hover:border-purple-600 hover:text-purple-700 transition-all duration-300"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Interactive IDE mock screen (Right Side) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Box-outline accent typical of Geometric Balance layout */}
            <div className="absolute inset-0 border border-purple-300 translate-x-3 translate-y-3 pointer-events-none"></div>
            
            <div className="relative bg-slate-950 rounded-none shadow-xl overflow-hidden border border-slate-800">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 bg-slate-800 border border-slate-700 inline-block"></span>
                  <span className="w-2.5 h-2.5 bg-slate-800 border border-slate-700 inline-block"></span>
                  <span className="w-2.5 h-2.5 bg-slate-800 border border-slate-700 inline-block"></span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">nadia-workspace.py</div>
                <div className="w-12"></div>
              </div>
              
              {/* Code Panel */}
              <div className="p-6 font-mono text-xs sm:text-xs text-slate-300 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-purple-400">class</span> <span className="text-amber-300">InformatikaSemester6</span>:
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):
                </div>
                <div className="pl-8">
                  self.nama = <span className="text-emerald-300">"{personalData.name}"</span>
                </div>
                <div className="pl-8">
                  self.ipk = <span className="text-amber-300">3.82</span>
                </div>
                <div className="pl-8">
                  self.proyek_utama = [
                </div>
                <div className="pl-12 text-slate-500">
                  <span className="text-purple-300">"SIMTA (Kanban Web)"</span>,
                </div>
                <div className="pl-12 text-slate-500">
                  <span className="text-purple-300">"MedisCAN (Mobile Machine Learning)"</span>
                </div>
                <div className="pl-8">]</div>
                <div className="pl-8 text-slate-400">self.keahlian = <span className="text-purple-300">["React", "Express", "Database", "Go"]</span></div>
                
                <div className="mt-6 border-t border-slate-800 pt-4 text-slate-500">
                  <span className="text-purple-400"># Konsol Output:</span>
                  <div className="text-emerald-400 mt-1 flex items-center space-x-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>System online and ready for internship projects.</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Absolute badge detail */}
            <div className="absolute -bottom-4 -left-3 bg-white border border-slate-950 px-3.5 py-2 rounded-none shadow-md flex items-center space-x-3">
              <span className="h-2 w-2 rounded-none bg-emerald-500 animate-pulse"></span>
              <div>
                <p className="text-slate-400 text-[9px] uppercase font-bold tracking-wider leading-none">STATUS</p>
                <p className="text-slate-950 font-extrabold text-xs mt-1">OPEN FOR INTERNSHIP</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DETAILED COLLEGE PROJECTS SECTION - GEOMETRICALLY RESTRUCTURED */}
      <section id="projects" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-purple-600 uppercase tracking-widest font-bold">STU. PROJECTS</span>
                <span className="text-xs bg-slate-950 text-white px-2 py-0.5 font-mono">01 / 03</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
                Katalog <span className="text-purple-600 italic">Proyek Kuliah</span>
              </h2>
              <p className="text-slate-500 text-sm">
                Aplikasi dan sistem nyata yang didevelop secara tuntas untuk memenuhi praktikum, tugas perkuliahan, dan evaluasi penguasaan kompetensi.
              </p>
            </div>

            {/* Category Filter Tabs - Minimal, sharp borders */}
            <div className="flex flex-wrap gap-1.5 self-start md:self-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 border font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-slate-950 text-white border-slate-950'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-purple-600 hover:text-purple-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid - Symmetrical geometric border cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 mt-12 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  key={project.id}
                  className="bg-white p-8 hover:bg-slate-50 transition-all duration-300 flex flex-col justify-between group h-full relative"
                >
                  {/* Subtle code indexing */}
                  <span className="absolute top-8 right-8 text-[11px] font-mono text-slate-300 group-hover:text-purple-500 font-bold transition-colors">
                    PROJ // 0{idx + 1}
                  </span>

                  <div className="space-y-4">
                    {/* Header: Category Badge & Semester */}
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-0.5 border border-purple-200 bg-purple-50/50 text-purple-700 text-[10px] font-mono font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        SEM. {project.semester}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 tracking-tight group-hover:text-purple-600 transition-colors uppercase">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech stacks represented in clean monospace details */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-mono uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlighted Results */}
                    {project.metrics && (
                      <div className="p-3 bg-purple-50/50 border-l-2 border-purple-600 flex items-center space-x-2 text-[11px] font-bold text-purple-800">
                        <Award className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                        <span>{project.metrics}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      Peran: <strong className="text-slate-800 font-bold uppercase">{project.role}</strong>
                    </span>
                    
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 border border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200"
                    >
                      Detail Teknis
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* EXPERIENCES & ORGANIZATIONS SECTION - LINEAR TIMELINE LAYOUT */}
      <section id="organizations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="max-w-3xl space-y-2 mb-16 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-purple-600 uppercase tracking-widest font-bold">ORG. EXPERIENCE</span>
              <span className="text-xs bg-slate-950 text-white px-2 py-0.5 font-mono">02 / 03</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
              Riwayat <span className="text-purple-600 italic">Pengalaman Organisasi</span>
            </h2>
            <p className="text-slate-500 text-sm">
              Membangun komunikasi tim, jiwa kepemimpinan, digitalisasi internal, serta keterlibatan aktif dalam komunitas teknologi dan kepengurusan jurusan.
            </p>
          </div>

          {/* Symmetrical layouts alignment */}
          <div className="space-y-12 max-w-5xl">
            {organizationData.map((org) => (
              <div 
                key={org.id}
                className="flex flex-col md:flex-row gap-6 md:gap-12 pb-10 border-b border-slate-200 last:border-b-0 group"
              >
                {/* Period Left Sidebar - w-32 constant from design theme */}
                <div className="md:w-48 flex-shrink-0">
                  <div className="bg-slate-100 px-3 py-1 text-slate-600 text-xs font-mono font-bold tracking-wider uppercase inline-block md:block md:text-center">
                    {org.period}
                  </div>
                  {org.isActive && (
                    <div className="mt-2 text-[10px] bg-purple-600 text-white px-2.5 py-0.5 font-bold uppercase tracking-wider text-center inline-block md:block">
                      Aktif Mengabdi
                    </div>
                  )}
                </div>

                {/* Organization Details Right Column */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 uppercase tracking-tight group-hover:text-purple-600 transition-colors">
                      {org.role}
                    </h3>
                    <p className="text-sm font-bold text-slate-500">
                      {org.organizationName}
                    </p>
                  </div>

                  {/* left border style indicator */}
                  <div className="text-slate-600 text-sm leading-relaxed border-l-2 border-purple-500 pl-4 py-0.5">
                    {org.description}
                  </div>

                  {/* Key achievements */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Pencapaian Utama:
                    </span>
                    <ul className="grid grid-cols-1 gap-3">
                      {org.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-slate-600 space-x-2.5">
                          <Check className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ACADEMICS & TECHNICAL SKILLS SECTION */}
      <section id="academic" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="max-w-3xl space-y-2 mb-16 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-purple-600 uppercase tracking-widest font-bold">ACAD. METRICS</span>
              <span className="text-xs bg-slate-950 text-white px-2 py-0.5 font-mono">03 / 03</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">
              Matriks <span className="text-purple-600 italic">Skill & Akademik</span>
            </h2>
            <p className="text-slate-500 text-sm">
              Transkrip mata kuliah pemrograman inti berskala industri dan pemetaan tingkat kecakapan instrumen rekayasa perangkat lunak.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Academic Courses Column (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 border border-slate-200">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
                  <GraduationCap className="w-5 h-5 text-purple-600" />
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-900">Mata Kuliah Utama & Nilai</h3>
                </div>
                
                <p className="text-[11px] text-slate-400 font-medium mb-4">Nilai transkrip kelulusan terbaik dari SIAKAD resmi:</p>
                
                <div className="space-y-2.5">
                  {coursesData.map((course) => (
                    <div 
                      key={course.code}
                      className="p-3 bg-slate-50 border border-slate-200 flex items-center justify-between text-xs hover:border-purple-600 transition-colors"
                    >
                      <div>
                        <span className="text-[9px] text-purple-600 font-mono font-bold uppercase block">{course.code}</span>
                        <span className="font-bold text-slate-800">{course.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-[10px] text-slate-400 font-mono">SEM. {course.semester}</span>
                        <span className="w-6.5 h-6.5 bg-slate-950 text-white font-mono font-bold text-xs flex items-center justify-center">
                          {course.grade}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lab Honor card with Geometric style */}
              <div className="bg-slate-950 p-6 text-white text-sm relative overflow-hidden border border-slate-900">
                <div className="absolute top-0 right-0 opacity-10 translate-x-3 -translate-y-2">
                  <Trophy className="w-32 h-32" />
                </div>
                <div className="relative z-10 space-y-2">
                  <div className="inline-block px-2 py-0.5 bg-purple-600 text-[9px] font-mono font-bold uppercase tracking-wider">
                    RECOGNITIONS
                  </div>
                  <h4 className="font-bold text-base uppercase tracking-tight">Asisten Terfavorit Basis Data</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Terpilih lewat kuesioner mahasiswa praktikan departemen berdasarkan asisten paling solutif dalam pemecahan optimisasi query sintaks relasional.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skill Level Column (Col 7) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-6 border border-slate-200 h-full">
                <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-slate-100">
                  <Code className="w-5 h-5 text-purple-600" />
                  <div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-800">Matrik Kompetensi</h3>
                    <p className="text-[11px] text-slate-500 font-medium">Estimasi penguasaan perkuliahan & kecakapan teknis</p>
                  </div>
                </div>

                {/* Subdiscipline Sections */}
                <div className="space-y-6">
                  {(['Frontend', 'Backend', 'Mobile & DevOps', 'Data Science'] as const).map((categoryName) => {
                    const categorySkills = skillsData.filter((s) => s.category === categoryName);
                    return (
                      <div key={categoryName} className="space-y-3">
                        <h4 className="text-[9px] font-mono font-bold text-purple-600 uppercase tracking-widest block border-b border-slate-100 pb-1">
                          {categoryName}
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {categorySkills.map((skill) => (
                            <div key={skill.name} className="bg-slate-50 p-3.5 border border-slate-200 relative overflow-hidden transition-all hover:border-purple-300">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="font-bold text-xs uppercase text-slate-800">{skill.name}</span>
                                <span className="text-[10px] font-mono font-bold text-purple-600">{skill.percentage}%</span>
                              </div>
                              
                              {/* Tailored Skill Bar */}
                              <div className="w-full h-1 bg-slate-200">
                                <div 
                                  className="h-full bg-purple-600 transition-all duration-1000"
                                  style={{ width: `${skill.percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER & CONNECTED PROFESSIONAL CONTACT */}
      <section id="contact" className="py-20 bg-slate-950 text-white relative overflow-hidden border-t-4 border-purple-600">
        
        {/* Abstract pattern design */}
        <div className="absolute top-0 left-12 w-64 h-64 bg-slate-900/40 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-12 w-80 h-80 bg-purple-950/20 rounded-full filter blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Connect info (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 bg-slate-900 border border-slate-800 text-purple-450 text-[9px] font-mono font-bold uppercase tracking-widest">
                AJUKAN KOLABORASI
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase leading-none">
                Hubungi Secara <span className="text-purple-500 italic">Profesional</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Saya sangat terbuka terhadap saran riset skripsi, peluang program magang industri (Internship), proyek kolaboratif pengembangan web asisten, serta kegiatan talkshow mahasiswa.
              </p>

              {/* Direct channels List */}
              <div className="space-y-4 pt-4">
                
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-800 text-purple-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider">Kirim Email</span>
                    <button 
                      onClick={handleCopyEmail}
                      className="text-sm font-bold hover:text-purple-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>{personalData.email}</span>
                      <Copy className="w-3.5 h-3.5 text-slate-500 hover:text-purple-400 cursor-pointer" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-800 text-purple-400 flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider">LinkedIn Professional</span>
                    <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-sm font-bold hover:text-purple-400 hover:underline transition-all">
                      linkedin.com/in/Nadia-Anatashiva
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-800 text-purple-400 flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider">Portofolio Git</span>
                    <a href={personalData.github} target="_blank" rel="noreferrer" className="text-sm font-bold hover:text-purple-400 hover:underline transition-all">
                      github.com/itsmenattt
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-800 text-purple-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider">Lokasi Base</span>
                    <span className="text-sm font-semibold text-slate-300">
                      {personalData.city}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right message board (Col 7) */}
            <div className="lg:col-span-7 bg-slate-900 p-6 sm:p-8 border border-slate-800">
              
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center py-10 text-center space-y-4"
                  >
                    <div className="w-14 h-14 bg-purple-600 flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold uppercase tracking-wide">Pesan Berhasil Dikirim!</h3>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Terima kasih {formData.name}, saran diskusi mengenai <strong className="text-purple-400">"{formData.subject || 'Kolaborasi'}"</strong> telah disimpan. Konfirmasi balasan akan dilayangkan via {formData.email}.
                      </p>
                    </div>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-widest transition-colors"
                    >
                      Kirim Pesan Lain
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-1.5 border-b border-slate-800 pb-3">
                      <h4 className="font-bold text-base uppercase tracking-wider">Kirim Pesan Langsung</h4>
                      <p className="text-xs text-slate-400">Silakan lengkapi formulir pendaftaran kolaborasi / pertukaran ide di bawah ini.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Nama Anda</label>
                        <input 
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Fulan Al-Farabi"
                          className="w-full bg-slate-950 border border-slate-800 rounded-none px-4 py-2.5 text-xs outline-none focus:border-purple-650 text-slate-150 transition-all font-mono"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Email Aktif</label>
                        <input 
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="fulan@email.com"
                          className="w-full bg-slate-950 border border-slate-800 rounded-none px-4 py-2.5 text-xs outline-none focus:border-purple-650 text-slate-150 transition-all font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Subjek / Perihal</label>
                      <input 
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Tawaran Kerja / Diskusi Teknis"
                        className="w-full bg-slate-950 border border-slate-800 rounded-none px-4 py-2.5 text-xs outline-none focus:border-purple-650 text-slate-150 transition-all font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Isi Pesan</label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Masukkan deskripsi perihal dengan jelas..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-none px-4 py-2.5 text-xs outline-none focus:border-purple-650 text-slate-150 transition-all resize-none font-mono"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Memproses...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kirim Proposal</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>

          </div>

          {/* Sincere Signature Footer Line as specified by Geometric Balance design */}
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-500 font-mono">
            <p>© 2026 {personalData.name}. All Rights Reserved. Portofolio Akademik Semester 6 Teknik Informatika.</p>
            <div className="flex gap-4 items-center mt-2 md:mt-0">
              <span className="w-1.5 h-1.5 rounded-none bg-emerald-500 animate-pulse"></span>
              <span className="uppercase tracking-widest font-bold">BANDUNG, INDONESIA</span>
            </div>
          </div>

        </div>
      </section>

      {/* DETAILED PROJECT MODAL DIALOG - GEOMETRIC */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
              id="modal-backdrop"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative bg-white w-full max-w-2xl rounded-none shadow-2xl overflow-hidden border-2 border-slate-950 z-10 max-h-[90vh] flex flex-col"
              id="project-dialog-card"
            >
              
              {/* Modal header */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between">
                <div>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-200 text-[10px] font-mono font-bold uppercase block w-max mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-slate-950">{selectedProject.title}</h3>
                  <p className="text-[11px] text-slate-500 font-mono font-bold mt-1">PROYEK PERKULIAHAN • SEMESTER {selectedProject.semester}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 bg-white border border-slate-200 text-slate-400 hover:text-slate-800 transition-all rounded-none"
                  aria-label="Tutup Detail"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="p-6 overflow-y-auto space-y-6 text-sm flex-1">
                
                {/* Long description */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono font-extrabold text-purple-700 uppercase tracking-widest flex items-center space-x-1.5">
                    <FileText className="w-4 h-4" />
                    <span>Latar Belakang & Detail Kelas</span>
                  </h4>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 border border-slate-200 font-sans text-xs sm:text-sm">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Specific Roles */}
                <div className="space-y-1 bg-slate-50 p-4 border border-slate-200">
                  <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Tugas & Tanggung Jawab Utama:</span>
                  <span className="font-extrabold text-slate-900 text-base">{selectedProject.role}</span>
                </div>

                {/* Features list */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono font-extrabold text-purple-700 uppercase tracking-widest flex items-center space-x-1.5">
                    <CheckCircle className="w-4 h-4" />
                    <span>Fitur & Keunggulan Program</span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start bg-white p-3 border border-slate-200 text-slate-600 space-x-2 text-xs sm:text-sm">
                        <span className="w-5 h-5 bg-slate-950 text-white font-mono font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used chips */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono font-extrabold text-purple-700 uppercase tracking-widest block">Tech Stack Terapan</h4>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-slate-100 text-slate-700 border border-slate-200 font-bold uppercase text-[10px] font-mono flex items-center gap-1">
                        <Cpu className="w-3 h-3 text-purple-600" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics inside details */}
                {selectedProject.metrics && (
                  <div className="p-4 bg-purple-50 border-l-4 border-purple-600 text-purple-950">
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono font-extrabold uppercase tracking-wide">
                      <Trophy className="w-4.5 h-4.5 text-purple-600" />
                      <span>Hasil & Dampak Teruji</span>
                    </div>
                    <p className="text-sm font-bold mt-1 text-slate-900">{selectedProject.metrics}</p>
                  </div>
                )}

              </div>

              {/* Footer action links */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between font-mono text-[10px]">
                <span className="text-slate-400">UNIV. PEMBANGUNAN NASIONAL</span>
                <div className="flex items-center space-x-3">
                  <a 
                    href={selectedProject.githubUrl || 'https://github.com'} 
                    target="_blank"  
                    rel="noreferrer"
                    className="p-2 border border-slate-200 bg-white text-slate-600 hover:border-purple-600 hover:text-purple-700 transition-colors flex items-center space-x-1.5 font-bold uppercase tracking-wider text-[10px]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Pustaka Kode</span>
                  </a>
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="p-2 bg-slate-950 text-white hover:bg-purple-600 transition-all flex items-center space-x-1.5 font-bold uppercase tracking-wider text-[10px]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo Sistem</span>
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
