import React, { useState, useEffect } from 'react';
import { Layers, AlertCircle, User, Mail, Lock, LogIn, RefreshCw, ArrowLeft } from 'lucide-react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [currentMode, setCurrentMode] = useState('login'); // 'login' or 'signup'
  const [alertText, setAlertText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const msg = searchParams.get('msg');
    if (msg) {
      setAlertText(msg);
      // Remove query param
      searchParams.delete('msg');
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const switchMode = (mode) => {
    setCurrentMode(mode);
    setAlertText('');
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSocialAuth = (provider) => {
    const oauthUrl = window.location.port === '5173' 
      ? `http://localhost:8000/auth/${provider}/` 
      : `/auth/${provider}/`;
    window.location.href = oauthUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertText('');
    setIsLoading(true);

    try {
      const endpoint = currentMode === 'signup' ? '/api/auth/signup' : '/api/auth/login';
      const payload = currentMode === 'signup' ? { name, email, password } : { email, password };

      // Simulating API call for the React demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'http://localhost:8000/dashboard/';
      
    } catch (err) {
      setAlertText(err.message || 'Server connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative p-6 bg-[#E0E5EC] text-[#3D4852] font-body overflow-hidden">
      {/* Ambient concentric circle decoration */}
      <div className="absolute w-96 h-96 rounded-full neo-inset opacity-40 animate-float -top-20 -left-20 pointer-events-none"></div>
      <div className="absolute w-80 h-80 rounded-full neo-extruded opacity-25 -bottom-20 -right-20 pointer-events-none"></div>

      {/* Main Card */}
      <div className="w-full max-w-md rounded-[32px] p-8 md:p-10 neo-extruded bg-[#E0E5EC] space-y-6 z-10 relative">
        
        {/* Logo */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-[#E0E5EC] rounded-2xl flex items-center justify-center neo-inset-deep mx-auto text-[#6C63FF]">
            <Layers className="w-7 h-7" />
          </div>
          <h1 className="text-2xl md:text-3xl font-display font-extrabold text-[#3D4852] tracking-tight">SmartBot Suite</h1>
          <p className="text-xs text-[#6B7280] font-body">
            {currentMode === 'signup' 
              ? "Create a new developer account to access the Control Hub." 
              : "Enter your credentials to unlock the Control Hub."}
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex rounded-2xl p-1 bg-[#E0E5EC] neo-inset">
          <button 
            type="button" 
            onClick={() => switchMode('login')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all focus:outline-none ${currentMode === 'login' ? 'text-[#6C63FF] bg-[#E0E5EC] neo-extruded-sm' : 'text-[#6B7280] hover:text-[#3D4852]'}`}
          >
            Sign In
          </button>
          <button 
            type="button" 
            onClick={() => switchMode('signup')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all focus:outline-none ${currentMode === 'signup' ? 'text-[#6C63FF] bg-[#E0E5EC] neo-extruded-sm' : 'text-[#6B7280] hover:text-[#3D4852]'}`}
          >
            Sign Up
          </button>
        </div>

        {/* Social OAuth Login Buttons */}
        <div className="space-y-3">
          <button 
            type="button"
            onClick={() => handleSocialAuth('google')}
            className="w-full py-3 px-4 rounded-2xl text-xs font-bold bg-[#E0E5EC] neo-extruded hover:shadow-neo-lifted active:shadow-neo-inset text-[#3D4852] flex items-center justify-center gap-3 transition-all cursor-pointer font-body border border-white/40"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          <button 
            type="button"
            onClick={() => handleSocialAuth('github')}
            className="w-full py-3 px-4 rounded-2xl text-xs font-bold bg-[#E0E5EC] neo-extruded hover:shadow-neo-lifted active:shadow-neo-inset text-[#3D4852] flex items-center justify-center gap-3 transition-all cursor-pointer font-body border border-white/40"
          >
            <svg className="w-4 h-4 flex-shrink-0 fill-current text-[#3D4852]" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>Continue with GitHub</span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="w-full border-t border-gray-300/50"></div>
          <span className="absolute bg-[#E0E5EC] px-3 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">OR WITH EMAIL</span>
        </div>

        {/* Alert Area */}
        {alertText && (
          <div className="p-3.5 rounded-xl text-xs font-semibold text-rose-700 bg-rose-100/70 border border-rose-300/40 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
            <span>{alertText}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          {currentMode === 'signup' && (
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">Full Name</label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-[#6B7280]">
                  <User className="w-4 h-4" />
                </span>
                <input 
                  type="text"
                  required={currentMode === 'signup'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-[#E0E5EC] neo-inset rounded-2xl pl-11 pr-4 py-2.5 text-sm text-[#3D4852] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 transition-all font-body"
                />
              </div>
            </div>
          )}

          {/* Email Input */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">Email Address</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-[#6B7280]">
                <Mail className="w-4 h-4" />
              </span>
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@smartbot.tg"
                className="w-full bg-[#E0E5EC] neo-inset rounded-2xl pl-11 pr-4 py-2.5 text-sm text-[#3D4852] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 transition-all font-body"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">Password</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-[#6B7280]">
                <Lock className="w-4 h-4" />
              </span>
              <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#E0E5EC] neo-inset rounded-2xl pl-11 pr-4 py-2.5 text-sm text-[#3D4852] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 transition-all font-body"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-2xl text-sm font-semibold neo-btn-primary flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{currentMode === 'signup' ? 'Creating Account...' : 'Authenticating...'}</span>
                </>
              ) : (
                <>
                  <span>{currentMode === 'signup' ? 'Create Account' : 'Sign In'}</span>
                  <LogIn className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer link to home */}
        <div className="text-center pt-1">
          <Link to="/" className="text-xs font-bold text-[#6B7280] hover:text-[#6C63FF] transition-colors flex items-center justify-center gap-1.5 focus:outline-none">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
