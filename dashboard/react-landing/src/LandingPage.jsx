import React, { useState } from 'react';
import { 
  Blocks, ArrowRight, Menu, X, Hammer, MessageCircle, ShieldAlert, Bot, 
  Zap, Link as LinkIcon, Shield, MessageSquarePlus, BrainCircuit, Filter, 
  Lock, FileText, BarChart2, Plus, LayoutDashboard, ChevronRight, Container, Activity 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './App.css';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen pb-12 bg-[#E0E5EC] text-[#3D4852] font-body overflow-x-hidden">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-40 w-full bg-[#E0E5EC]/85 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 bg-[#E0E5EC] rounded-xl flex items-center justify-center neo-extruded-sm group-hover:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] transition-all duration-300">
              <Blocks className="w-5 h-5 text-[#6C63FF]" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight text-[#3D4852]">SmartBot Suite</span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="font-medium text-sm text-[#6B7280] hover:text-[#3D4852] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 rounded px-2 py-1">How it Works</a>
            <a href="#bricks" className="font-medium text-sm text-[#6B7280] hover:text-[#3D4852] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 rounded px-2 py-1">Brick Library</a>
            <a href="#architecture" className="font-medium text-sm text-[#6B7280] hover:text-[#3D4852] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 rounded px-2 py-1">Architecture</a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            <Link to="/login" className="px-5 py-2.5 rounded-2xl text-sm font-semibold neo-btn-primary focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 flex items-center gap-2">
              <span>Launch Builder</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden w-10 h-10 rounded-xl bg-[#E0E5EC] flex items-center justify-center neo-extruded-sm active:shadow-neo-inset-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-[#3D4852]" /> : <Menu className="w-5 h-5 text-[#3D4852]" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`md:hidden overflow-hidden bg-[#E0E5EC] transition-all duration-300 ease-in-out px-6 ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 mt-4 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-4">
            <a href="#how-it-works" onClick={closeMobileMenu} className="font-medium text-sm text-[#3D4852] py-2 border-b border-gray-300/40">How it Works</a>
            <a href="#bricks" onClick={closeMobileMenu} className="font-medium text-sm text-[#3D4852] py-2 border-b border-gray-300/40">Brick Library</a>
            <a href="#architecture" onClick={closeMobileMenu} className="font-medium text-sm text-[#3D4852] py-2 border-b border-gray-300/40">Architecture</a>
            <Link to="/login" className="w-full text-center px-5 py-3 mt-2 rounded-2xl text-sm font-semibold neo-btn-primary flex items-center justify-center gap-2">
              <span>Launch Builder</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Hero Left */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full neo-inset text-xs font-semibold text-[#6C63FF]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6C63FF] animate-pulse"></span>
            Modular Bot Construction System
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-[#3D4852] leading-tight">
            Build Your Custom Bot with <span className="text-[#6C63FF]">Modular Bricks</span>
          </h1>
          
          <p className="text-[#6B7280] text-base md:text-lg leading-relaxed max-w-2xl font-body">
            Stop relying on rigid, one-size-fits-all bots. Pick the exact features you need from our library of "Bricks", connect your bot token, and deploy an isolated instance tailored perfectly to your community.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-4">
            <Link to="/login" className="px-8 py-4 rounded-2xl font-bold neo-btn-primary flex items-center justify-center gap-2 text-base">
              <span>Start Building</span>
              <Hammer className="w-5 h-5" />
            </Link>
            <a href="#bricks" className="px-8 py-4 rounded-2xl font-bold text-[#3D4852] bg-[#E0E5EC] neo-extruded hover:shadow-neo-lifted active:shadow-neo-inset transition-all flex items-center justify-center gap-2 text-base">
              <span>Explore Bricks</span>
            </a>
          </div>
        </div>

        {/* Hero Right (Interactive Visual Demonstration) */}
        <div className="lg:col-span-5 flex items-center justify-center relative py-8">
          
          {/* Robot Figure Container */}
          <div className="relative flex flex-col items-center animate-float-reverse w-full max-w-sm mx-auto mt-4">
            
            {/* Robot Head Area */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Antenna */}
              <div className="w-3 h-8 rounded-full neo-inset bg-[#E0E5EC]"></div>
              <div className="w-6 h-6 rounded-full neo-extruded bg-[#E0E5EC] -mt-2 mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#6C63FF] animate-ping"></div>
              </div>
              
              {/* Head / Visor */}
              <div className="w-40 h-24 rounded-[2rem] neo-extruded bg-[#E0E5EC] flex items-center justify-center px-4 relative">
                {/* Screen / Eyes */}
                <div className="w-full h-10 rounded-xl neo-inset-deep bg-[#E0E5EC] flex items-center justify-center gap-4 border border-white/20">
                  <div className="w-5 h-1.5 rounded-full bg-[#6C63FF] shadow-[0_0_8px_rgba(108,99,255,0.8)]"></div>
                  <div className="w-5 h-1.5 rounded-full bg-[#6C63FF] shadow-[0_0_8px_rgba(108,99,255,0.8)]"></div>
                </div>
              </div>
              
              {/* Neck Joint */}
              <div className="w-12 h-6 rounded-lg neo-inset bg-[#E0E5EC] -mt-2"></div>
            </div>

            {/* Robot Body (Housing the bricks) */}
            <div className="w-full p-8 rounded-[3rem] neo-inset-deep bg-[#E0E5EC] relative z-20 flex flex-col items-center gap-5 border-4 border-[#E0E5EC] shadow-[-8px_-8px_16px_rgba(255,255,255,0.5),8px_8px_16px_rgba(163,177,198,0.4)]">
              
              {/* Chest LED indicators */}
              <div className="absolute top-4 left-0 w-full flex justify-center gap-2 opacity-50">
                <div className="w-2 h-2 rounded-full neo-inset"></div>
                <div className="w-2 h-2 rounded-full neo-inset"></div>
                <div className="w-2 h-2 rounded-full neo-inset"></div>
              </div>

              {/* Brick 1 */}
              <div className="w-full max-w-[220px] p-4 rounded-2xl neo-extruded bg-[#E0E5EC] flex items-center gap-4 transform transition-all duration-500 hover:-translate-y-1 cursor-pointer group mt-2">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl neo-inset flex items-center justify-center text-[#6C63FF] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#3D4852] leading-tight">Welcome Brick</div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">Greets new users</div>
                </div>
              </div>

              {/* Brick 2 */}
              <div className="w-full max-w-[240px] p-4 rounded-2xl neo-extruded bg-[#E0E5EC] flex items-center gap-4 transform transition-all duration-500 hover:-translate-y-1 cursor-pointer group translate-x-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl neo-inset flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#3D4852] leading-tight">Anti-Spam Brick</div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">Filters malicious links</div>
                </div>
              </div>

              {/* Brick 3 */}
              <div className="w-full max-w-[210px] p-4 rounded-2xl neo-extruded bg-[#E0E5EC] flex items-center gap-4 transform transition-all duration-500 hover:-translate-y-1 cursor-pointer group -translate-x-3 mb-2">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl neo-inset flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-[#3D4852] leading-tight">AI Chat Brick</div>
                  <div className="text-[10px] text-[#6B7280] mt-0.5">GPT-4 integration</div>
                </div>
              </div>

            </div>

            {/* Robot Base / Treads */}
            <div className="relative z-10 flex gap-16 -mt-6">
              <div className="w-16 h-12 rounded-b-2xl neo-extruded bg-[#E0E5EC] flex items-end justify-center pb-2">
                <div className="w-8 h-2 rounded-full neo-inset"></div>
              </div>
              <div className="w-16 h-12 rounded-b-2xl neo-extruded bg-[#E0E5EC] flex items-end justify-center pb-2">
                <div className="w-8 h-2 rounded-full neo-inset"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3 Easy Steps Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-300/30">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full neo-inset-deep text-[#6C63FF] mb-4">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#3D4852]">
            Make Bots in 3 Easy Steps
          </h2>
          <p className="text-[#6B7280] text-base">
            No coding required. Just pick your pieces and launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center space-y-6 group">
            {/* Connector Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gray-300/50 z-0"></div>
            
            <div className="w-24 h-24 rounded-[2rem] neo-extruded bg-[#E0E5EC] flex items-center justify-center relative z-10 group-hover:shadow-neo-lifted transition-all">
              <div className="w-16 h-16 rounded-2xl neo-inset flex items-center justify-center text-[#6C63FF]">
                <LinkIcon className="w-8 h-8" />
              </div>
            </div>
            
            <div className="space-y-2 relative z-10">
              <div className="text-sm font-bold text-[#6C63FF] tracking-wider uppercase">Step 1</div>
              <h3 className="font-display font-bold text-2xl text-[#3D4852]">Connect Bot</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed font-body px-4">
                Create a bot on Telegram via BotFather and paste your secure API token into our dashboard.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center space-y-6 group">
            {/* Connector Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gray-300/50 z-0"></div>
            
            <div className="w-24 h-24 rounded-[2rem] neo-extruded bg-[#E0E5EC] flex items-center justify-center relative z-10 group-hover:shadow-neo-lifted transition-all">
              <div className="w-16 h-16 rounded-2xl neo-inset flex items-center justify-center text-[#6C63FF]">
                <Blocks className="w-8 h-8" />
              </div>
            </div>
            
            <div className="space-y-2 relative z-10">
              <div className="text-sm font-bold text-[#6C63FF] tracking-wider uppercase">Step 2</div>
              <h3 className="font-display font-bold text-2xl text-[#3D4852]">Select Features</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed font-body px-4">
                Browse our library and snap together the modular bricks you want. Anti-spam, logging, AI chat, and more.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center space-y-6 group">
            <div className="w-24 h-24 rounded-[2rem] neo-extruded bg-[#E0E5EC] flex items-center justify-center relative z-10 group-hover:shadow-neo-lifted transition-all">
              <div className="w-16 h-16 rounded-2xl neo-inset flex items-center justify-center text-[#6C63FF]">
                <Activity className="w-8 h-8" />
              </div>
            </div>
            
            <div className="space-y-2 relative z-10">
              <div className="text-sm font-bold text-[#6C63FF] tracking-wider uppercase">Step 3</div>
              <h3 className="font-display font-bold text-2xl text-[#3D4852]">Deploy Instances</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed font-body px-4">
                Click deploy. We instantly compile your selected bricks into an isolated, scalable Docker container.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Bricks Library Section */}
      <section id="bricks" className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-300/30">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#3D4852]">
            The Brick Library
          </h2>
          <p className="text-[#6B7280] text-base">
            Mix and match these highly optimized modules to construct your perfect assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brick Card */}
          <div className="rounded-3xl p-6 neo-extruded bg-[#E0E5EC] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl neo-inset-deep flex items-center justify-center text-[#6C63FF]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#3D4852]">Spam Shield</h4>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                Automatically delete links, forward messages, and restrict suspicious new users.
              </p>
            </div>
          </div>

          {/* Brick Card */}
          <div className="rounded-3xl p-6 neo-extruded bg-[#E0E5EC] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl neo-inset-deep flex items-center justify-center text-indigo-500">
              <MessageSquarePlus className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#3D4852]">Welcome Flow</h4>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                Send customized greeting messages with inline buttons and CAPTCHA verification.
              </p>
            </div>
          </div>

          {/* Brick Card */}
          <div className="rounded-3xl p-6 neo-extruded bg-[#E0E5EC] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl neo-inset-deep flex items-center justify-center text-emerald-500">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#3D4852]">LLM Integrator</h4>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                Connect OpenAI or Gemini to answer questions based on your custom prompt.
              </p>
            </div>
          </div>

          {/* Brick Card */}
          <div className="rounded-3xl p-6 neo-extruded bg-[#E0E5EC] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl neo-inset-deep flex items-center justify-center text-amber-500">
              <Filter className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#3D4852]">Word Filter</h4>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                Maintain a blacklist of words and automatically purge messages containing them.
              </p>
            </div>
          </div>

          {/* Brick Card */}
          <div className="rounded-3xl p-6 neo-extruded bg-[#E0E5EC] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl neo-inset-deep flex items-center justify-center text-rose-500">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#3D4852]">Media Lock</h4>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                Restrict specific media types like stickers, GIFs, or videos to admins only.
              </p>
            </div>
          </div>

          {/* Brick Card */}
          <div className="rounded-3xl p-6 neo-extruded bg-[#E0E5EC] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl neo-inset-deep flex items-center justify-center text-cyan-500">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#3D4852]">RAG Document</h4>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                Upload PDFs to a vector database and allow the bot to query internal knowledge.
              </p>
            </div>
          </div>

          {/* Brick Card */}
          <div className="rounded-3xl p-6 neo-extruded bg-[#E0E5EC] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl neo-inset-deep flex items-center justify-center text-purple-500">
              <BarChart2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-[#3D4852]">Analytics</h4>
              <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
                Track user engagement, message volume, and active hours in a beautiful dashboard.
              </p>
            </div>
          </div>

          {/* Brick Card */}
          <div className="rounded-3xl p-6 neo-extruded bg-[#E0E5EC] flex flex-col gap-4 hover:-translate-y-2 transition-all duration-300 border-2 border-dashed border-gray-400/50 justify-center items-center text-center opacity-70 cursor-not-allowed">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#3D4852]">More Bricks Coming Soon</h4>
            </div>
          </div>

        </div>
      </section>

      {/* Containerized Architecture Section */}
      <section id="architecture" className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-300/30">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#3D4852]">
            Under the Hood
          </h2>
          <p className="text-[#6B7280] text-base">
            How your selected bricks are transformed into a powerful, isolated bot instance.
          </p>
        </div>

        {/* Interactive Diagram Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="architecture-flow">
          {/* Card A */}
          <div className="lg:col-span-3 rounded-[32px] p-6 neo-extruded bg-[#E0E5EC] text-center space-y-4 relative group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E0E5EC] neo-inset-deep flex items-center justify-center text-[#6C63FF]">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-[#3D4852]">1. Configuration</h4>
            <p className="text-xs text-[#6B7280] leading-relaxed font-body">
              The dashboard compiles your chosen modular bricks into a unified configuration manifest.
            </p>
          </div>

          {/* Connector 1 */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-8 h-8 rounded-full bg-[#E0E5EC] neo-inset flex items-center justify-center text-[#6B7280] transform rotate-90 lg:rotate-0">
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card B */}
          <div className="lg:col-span-4 rounded-[32px] p-8 neo-extruded bg-[#E0E5EC] text-center space-y-4 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#E0E5EC] neo-inset-deep flex items-center justify-center text-[#6C63FF] relative">
              <Container className="w-8 h-8" />
              {/* Pulse Dot */}
              <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#E0E5EC] animate-pulse"></span>
            </div>
            <h4 className="font-display font-bold text-xl text-[#3D4852]">2. Docker Assembly</h4>
            <p className="text-xs text-[#6B7280] leading-relaxed font-body">
              Our daemon reads the manifest, installs the required brick dependencies, and spins up a lightweight, sandboxed Docker container specific to your bot.
            </p>
          </div>

          {/* Connector 2 */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-8 h-8 rounded-full bg-[#E0E5EC] neo-inset flex items-center justify-center text-[#6B7280] transform rotate-90 lg:rotate-0">
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card C */}
          <div className="lg:col-span-3 rounded-[32px] p-6 neo-extruded bg-[#E0E5EC] text-center space-y-4 hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#E0E5EC] neo-inset-deep flex items-center justify-center text-[#6C63FF]">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-[#3D4852]">3. Live Execution</h4>
            <p className="text-xs text-[#6B7280] leading-relaxed font-body">
              The container establishes a secure connection with the messaging API and begins processing events instantly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[40px] p-12 md:p-20 text-center bg-[#E0E5EC] neo-extruded relative overflow-hidden">
          {/* Background Concentric Rings Decor */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full neo-inset opacity-25"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full neo-inset opacity-25"></div>
          
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#3D4852] leading-tight">
              Ready to Build Your Bot?
            </h2>
            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed font-body">
              Enter the Builder dashboard, select your bricks, and launch your customized instance in minutes.
            </p>
            
            <div className="pt-4">
              <Link to="/login" className="inline-flex px-10 py-5 rounded-2xl font-bold text-lg neo-btn-primary items-center gap-3">
                <span>Launch Builder</span>
                <Hammer className="w-5 h-5 fill-white text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 pt-16 border-t border-gray-300/30">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#E0E5EC] rounded-lg flex items-center justify-center neo-extruded-sm">
              <Blocks className="w-4 h-4 text-[#6C63FF]" />
            </div>
            <span className="font-display font-extrabold text-sm text-[#3D4852] tracking-tight">SmartBot Suite</span>
          </div>
          <p className="text-xs text-[#6B7280] font-body">
            &copy; 2026 SmartBot Tg. Molded with Neumorphism Soft UI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
