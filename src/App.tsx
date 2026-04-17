/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search,
  Globe,
  ChevronDown,
  Menu, 
  X, 
  BookOpen, 
  Users, 
  Home, 
  Phone, 
  Heart, 
  GraduationCap, 
  Bell, 
  MapPin, 
  Facebook, 
  Youtube, 
  Mail,
  ChevronRight,
  Star,
  Music,
  Trophy,
  Shield,
  ClipboardList,
  FileText,
  BarChart3,
  Calendar,
  MessageSquare,
  Download,
  Eye,
  EyeOff,
  Camera,
  Printer
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const Logo = ({ className = "w-12 h-12", scrolled = false }: { className?: string, scrolled?: boolean }) => (
  <div className="flex items-center space-x-2">
    <div className={`${className} relative flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="#064e3b" strokeWidth="2" className="fill-white dark:fill-[#1a1a1a]"/>
        <path d="M20 60C20 60 35 45 50 45C65 45 80 60 80 60V75C80 75 65 60 50 60C35 60 20 75 20 75V60Z" className="fill-madrasa-green dark:fill-emerald-400"/>
        <path d="M50 15L30 40H70L50 15Z" className="fill-madrasa-green dark:fill-emerald-400"/>
        <rect x="45" y="35" width="10" height="15" className="fill-madrasa-green dark:fill-emerald-400"/>
        <path d="M30 80 A 25 25 0 0 0 70 80" className="stroke-madrasa-green dark:stroke-emerald-400" strokeWidth="2" fill="none"/>
      </svg>
    </div>
    <div className="flex flex-col">
      <span className={`font-bold text-lg sm:text-xl leading-none ${scrolled ? 'text-white' : 'text-madrasa-green dark:text-emerald-400'}`}>
        আস-সিদ্দিক
      </span>
      <span className={`text-[10px] font-medium text-madrasa-gold`}>
        ইন্টারন্যাশনাল হিফজ মাদরাসা
      </span>
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showNooraniPage, setShowNooraniPage] = useState(false);
  const [showNazeraPage, setShowNazeraPage] = useState(false);
  const [showHifzPage, setShowHifzPage] = useState(false);
  const [showStudentCorner, setShowStudentCorner] = useState(false);
  const [showExamPage, setShowExamPage] = useState(false);
  const [showNoticePage, setShowNoticePage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  const toBengaliNumerals = (str: string) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return str.replace(/[0-9]/g, (digit) => bengaliDigits[parseInt(digit)]);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [studentIdentitySearch, setStudentIdentitySearch] = useState('');
  const [foundStudent, setFoundStudent] = useState<any>(null);
  const [studentType, setStudentType] = useState<'new' | 'old'>('new');
  const [admissionPhoto, setAdmissionPhoto] = useState<string | null>(null);
  const [resultSearch, setResultSearch] = useState('');
  const [foundResult, setFoundResult] = useState<any>(null);
  const [searchError, setSearchError] = useState('');
  const [selectedDept, setSelectedDept] = useState('');

  const heroImages = [
    "https://img.freepik.com/free-vector/hand-drawn-muslim-teacher-teaching-students_23-2148521746.jpg",
    "https://img.freepik.com/free-vector/muslim-man-reading-holy-quran_23-2148521747.jpg",
    "https://img.freepik.com/free-vector/muslim-children-reading-holy-quran_23-2148521745.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [showAdmissionForm, showAboutPage, showNooraniPage, showNazeraPage, showHifzPage, showStudentCorner, showLoginPage, showNoticePage]);

  const navLinks = [
    { name: 'হোম', href: '#home', icon: <Home className="w-4 h-4" /> },
    { name: 'শ্রেণি সমূহ', href: '#departments', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'ভর্তি কার্যক্রম', href: '#admission', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'পরীক্ষা ও রেজাল্ট সংক্রান্ত', href: '#exam', icon: <ClipboardList className="w-4 h-4" /> },
    { name: 'শিক্ষার্থী কর্ণার', href: '#notice', icon: <Users className="w-4 h-4" /> },
    { name: 'শিক্ষকবৃন্দ', href: '#teachers', icon: <Users className="w-4 h-4" /> },
    { name: 'আমাদের সম্পর্কে', href: '#about', icon: <Star className="w-4 h-4" /> },
  ];

  const scrollToSection = (id: string) => {
    if (!id || id === 'home') {
      resetPages();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
      return;
    }

    if (id === 'about') {
      navigateToPage('about');
      return;
    }

    if (id === 'notice') {
      navigateToPage('studentCorner');
      return;
    }

    if (id === 'exam') {
      navigateToPage('exam');
      return;
    }

    if (showAdmissionForm || showAboutPage || showNooraniPage || showNazeraPage || showHifzPage || showStudentCorner || showExamPage) {
      resetPages();
      // Wait for re-render then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const resetPages = () => {
    setShowAdmissionForm(false);
    setShowAboutPage(false);
    setShowNooraniPage(false);
    setShowNazeraPage(false);
    setShowHifzPage(false);
    setShowStudentCorner(false);
    setShowExamPage(false);
    setShowNoticePage(false);
    setShowLoginPage(false);
    setFoundStudent(null);
    setStudentIdentitySearch('');
    setResultSearch('');
    setFoundResult(null);
    setSearchError('');
    setAdmissionPhoto(null);
  };

  const navigateToPage = (page: string) => {
    resetPages();
    if (page === 'admission') setShowAdmissionForm(true);
    if (page === 'about') setShowAboutPage(true);
    if (page === 'noorani') setShowNooraniPage(true);
    if (page === 'nazera') setShowNazeraPage(true);
    if (page === 'hifz') setShowHifzPage(true);
    if (page === 'studentCorner') setShowStudentCorner(true);
    if (page === 'exam') setShowExamPage(true);
    if (page === 'login') setShowLoginPage(true);
    if (page === 'notices') setShowNoticePage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      alert(`'${searchQuery}' এর জন্য কোনো ফলাফল পাওয়া যায়নি। অনুগ্রহ করে অন্য কিছু লিখে চেষ্টা করুন।`);
    }, 1000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginPhone && loginPassword) {
      setIsLoggedIn(true);
      setShowLoginPage(false);
      alert('লগইন সফল হয়েছে!');
    } else {
      alert('অনুগ্রহ করে সঠিক মোবাইল নম্বর ও পাসওয়ার্ড দিন।');
    }
  };

  const handleStudentSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentIdentitySearch.trim()) return;

    // Mock student data with photos and mobile numbers
    const mockStudents = [
      { 
        name: 'আব্দুল্লাহ আল মামুন', 
        roll: '১০৫', 
        class: 'হিফজ', 
        father: 'মোঃ আব্দুর রহমান', 
        phone: '০১৭০০০০০০০০',
        photo: 'https://picsum.photos/seed/student1/200/200',
        academicHistory: [
          { year: '২০২৩', class: 'নাজেরা', result: 'মুমতাজ (GPA 5.00)' },
          { year: '২০২২', class: 'নূরানী', result: 'মুমতাজ (GPA 5.00)' }
        ],
        attendance: 95,
        attendanceTrend: [
          { month: 'জানু', attendance: 90 },
          { month: 'ফেব্রু', attendance: 92 },
          { month: 'মার্চ', attendance: 95 },
          { month: 'এপ্রিল', attendance: 95 }
        ],
        achievementTrend: [
          { month: 'জানু', score: 85 },
          { month: 'ফেব্রু', score: 88 },
          { month: 'মার্চ', score: 92 },
          { month: 'এপ্রিল', score: 98 }
        ],
        achievements: ['জাতীয় হিফজ প্রতিযোগিতা ২০২৩ - ১ম স্থান', 'সেরা ছাত্র পুরস্কার ২০২২']
      },
      { 
        name: 'মোহাম্মদ আলী', 
        roll: '১০৬', 
        class: 'নাজেরা', 
        father: 'মোঃ ওসমান আলী', 
        phone: '০১৮০০০০০০০০',
        photo: 'https://picsum.photos/seed/student2/200/200',
        academicHistory: [
          { year: '২০২৩', class: 'নূরানী', result: 'জায়্যিদ জিদ্দান (GPA 4.85)' }
        ],
        attendance: 88,
        attendanceTrend: [
          { month: 'জানু', attendance: 80 },
          { month: 'ফেব্রু', attendance: 85 },
          { month: 'মার্চ', attendance: 88 },
          { month: 'এপ্রিল', attendance: 88 }
        ],
        achievementTrend: [
          { month: 'জানু', score: 75 },
          { month: 'ফেব্রু', score: 80 },
          { month: 'মার্চ', score: 85 },
          { month: 'এপ্রিল', score: 85 }
        ],
        achievements: ['হিফজ প্রতিযোগিতা ২০২৪ - ৩য় স্থান']
      }
    ];

    const searchLower = studentIdentitySearch.trim();
    const searchBengali = toBengaliNumerals(searchLower);
    
    const student = mockStudents.find(s => 
      s.name.includes(searchLower) || 
      s.roll === searchLower || 
      s.roll === searchBengali ||
      s.phone === searchLower ||
      s.phone === searchBengali
    );
    
    if (student) {
      setFoundStudent(student);
    } else {
      setFoundStudent(null);
      alert('এই নামে বা রোলে কোনো শিক্ষার্থী পাওয়া যায়নি।');
    }
  };

  const handleResultSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');
    if (!resultSearch.trim()) return;

    // Mock result data with photos and mobile numbers
    const mockResults = [
      { 
        roll: '১০৫', 
        name: 'আব্দুল্লাহ আল মামুন', 
        class: 'হিফজ', 
        exam: 'বার্ষিক পরীক্ষা ২০২৪', 
        gpa: '৫.০০', 
        status: 'উত্তীর্ণ',
        phone: '০১৭০০০০০০০০',
        photo: 'https://picsum.photos/seed/student1/200/200',
        subjects: [
          { name: 'কুরআন তিলাওয়াত (তাজবীদ)', total: 100, obtained: 95, grade: 'A+' },
          { name: 'হিফজুল কুরআন (সবক)', total: 100, obtained: 92, grade: 'A+' },
          { name: 'আদব ও আখলাক', total: 100, obtained: 98, grade: 'A+' },
          { name: 'মাসয়ালা-মাসায়েল', total: 100, obtained: 90, grade: 'A+' },
          { name: 'আরবী ভাষা', total: 100, obtained: 88, grade: 'A' },
          { name: 'বাংলা', total: 100, obtained: 85, grade: 'A' },
          { name: 'ইংরেজি', total: 100, obtained: 82, grade: 'A-' }
        ]
      },
      { 
        roll: '১০৬', 
        name: 'মোহাম্মদ আলী', 
        class: 'নাজেরা', 
        exam: 'বার্ষিক পরীক্ষা ২০২৪', 
        gpa: '৪.৮৫', 
        status: 'উত্তীর্ণ',
        phone: '০১৮০০০০০০০০',
        photo: 'https://picsum.photos/seed/student2/200/200',
        subjects: [
          { name: 'কুরআন তিলাওয়াত (তাজবীদ)', total: 100, obtained: 88, grade: 'A' },
          { name: 'নাজেরা (সবক)', total: 100, obtained: 90, grade: 'A+' },
          { name: 'আদব ও আখলাক', total: 100, obtained: 95, grade: 'A+' },
          { name: 'আরবী ভাষা', total: 100, obtained: 85, grade: 'A' },
          { name: 'বাংলা', total: 100, obtained: 82, grade: 'A-' },
          { name: 'ইংরেজি', total: 100, obtained: 80, grade: 'B+' },
          { name: 'গণিত', total: 100, obtained: 85, grade: 'A' }
        ]
      },
      { 
        roll: '১০৭', 
        name: 'আহমেদ কবির', 
        class: 'নূরানি', 
        exam: 'বার্ষিক পরীক্ষা ২০২৪', 
        gpa: '৪.৫০', 
        status: 'উত্তীর্ণ',
        phone: '০১৯০০০০০০০০',
        photo: 'https://picsum.photos/seed/student3/200/200',
        subjects: [
          { name: 'নূরানি কায়দা', total: 100, obtained: 85, grade: 'A' },
          { name: 'আমপারা', total: 100, obtained: 82, grade: 'A-' },
          { name: 'আদব ও আখলাক', total: 100, obtained: 90, grade: 'A+' },
          { name: 'দোয়া ও মাসনুন আমল', total: 100, obtained: 88, grade: 'A' },
          { name: 'বাংলা', total: 100, obtained: 80, grade: 'B+' },
          { name: 'ইংরেজি', total: 100, obtained: 75, grade: 'B' },
          { name: 'গণিত', total: 100, obtained: 82, grade: 'A-' }
        ]
      }
    ];

    const searchLower = resultSearch.trim();
    const searchBengali = toBengaliNumerals(searchLower);

    const result = mockResults.find(r => 
      r.roll === searchLower || 
      r.roll === searchBengali ||
      r.name.includes(searchLower) || 
      r.phone === searchLower ||
      r.phone === searchBengali
    );
    
    if (result) {
      setFoundResult(result);
      setSearchError('');
    } else {
      setFoundResult(null);
      setSearchError('দুঃখিত, এই তথ্য দিয়ে কোনো ফলাফল পাওয়া যায়নি। অনুগ্রহ করে সঠিক রোল (যেমন: ১০৫) বা নাম লিখে আবার চেষ্টা করুন।');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert('মার্কশিট ডাউনলোড শুরু হচ্ছে...');
    // In a real app, we would generate a PDF here
    setTimeout(() => {
      window.print(); // Using print as a fallback for "Save as PDF"
    }, 500);
  };

  if (isLoggedIn) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#f8fdfb] dark:bg-[#0a0a0a] font-sans transition-colors"
      >
        {/* Dashboard Header */}
        <header className="bg-madrasa-green py-4 shadow-lg sticky top-0 z-50 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => setIsLoggedIn(false)}>
              <Logo className="w-10 h-10 bg-white rounded-full p-1" scrolled={true} />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="text-white hover:text-red-300 flex items-center gap-2 font-medium transition-colors text-sm"
              >
                লগ আউট
              </button>
            </div>
          </div>
        </header>

        <main className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-madrasa-green dark:text-emerald-400">ড্যাশবোর্ড (Dashboard)</h2>
                <p className="text-gray-600 dark:text-gray-400">আস-সালামু আলাইকুম, আব্দুল্লাহ আল মামুন</p>
              </div>
              <div className="bg-white dark:bg-[#1a1a1a] px-6 py-3 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-3 transition-colors">
                <div className="w-10 h-10 bg-madrasa-gold/20 rounded-full flex items-center justify-center text-madrasa-gold">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold">আজকের তারিখ</p>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300">১৪ এপ্রিল, ২০২৬</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Profile Section */}
              <div className="md:col-span-1 space-y-8">
                <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-[32px] shadow-xl shadow-green-900/5 border border-gray-50 dark:border-gray-800 flex flex-col items-center text-center transition-colors">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 bg-gray-100 dark:bg-[#0a0a0a] rounded-full overflow-hidden border-4 border-madrasa-gold/30">
                      <img src="https://picsum.photos/seed/student/200/200" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="absolute bottom-1 right-1 w-8 h-8 bg-madrasa-green text-white rounded-full flex items-center justify-center border-2 border-white dark:border-[#1a1a1a]">
                      <Star className="w-4 h-4 fill-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-1">আব্দুল্লাহ আল মামুন</h3>
                  <p className="text-madrasa-gold font-medium mb-6">রোল: ১০৫ | শ্রেণি: হিফজ</p>
                  
                  <div className="w-full space-y-4 text-left">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl transition-colors">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">+৮৮০১৭০০-০০০০০০</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl transition-colors">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">student@madrasa.com</span>
                    </div>
                  </div>
                </div>

                <div className="bg-madrasa-green dark:bg-[#064e3b] p-8 rounded-[32px] text-white shadow-xl shadow-green-900/20 transition-colors">
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-madrasa-gold" /> নোটিশ বোর্ড
                  </h4>
                  <div className="space-y-4">
                    <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                      <p className="text-xs text-white/60 mb-1">১২ এপ্রিল, ২০২৬</p>
                      <p className="text-sm font-medium">আসন্ন ঈদুল ফিতরের ছুটি সংক্রান্ত বিজ্ঞপ্তি।</p>
                    </div>
                    <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                      <p className="text-xs text-white/60 mb-1">১০ এপ্রিল, ২০২৬</p>
                      <p className="text-sm font-medium">আগামী সপ্তাহের মাসিক পরীক্ষার রুটিন প্রকাশিত হয়েছে।</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress & Stats Section */}
              <div className="md:col-span-2 space-y-8">
                {/* Progress Bar */}
                <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-[32px] shadow-xl shadow-green-900/5 border border-gray-50 dark:border-gray-800 transition-colors">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-madrasa-green dark:text-emerald-400 mb-1">হিফজ/শিক্ষা অগ্রগতি</h4>
                      <p className="text-sm text-gray-400 dark:text-gray-500">আপনার বর্তমান শিক্ষাবর্ষের অগ্রগতি</p>
                    </div>
                    <span className="text-3xl font-black text-madrasa-green dark:text-emerald-400">৬৫%</span>
                  </div>
                  <div className="w-full h-6 bg-gray-100 dark:bg-[#0a0a0a] rounded-full overflow-hidden mb-4 p-1 transition-colors">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-madrasa-green to-emerald-400 rounded-full relative"
                    >
                      <div className="absolute top-0 right-0 w-4 h-full bg-white/20 skew-x-12"></div>
                    </motion.div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl transition-colors">
                      <p className="text-[10px] text-blue-400 font-bold uppercase mb-1">মোট পারা</p>
                      <p className="text-xl font-bold text-blue-700 dark:text-blue-400">৩০</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 dark:bg-green-900/10 rounded-2xl transition-colors">
                      <p className="text-[10px] text-green-400 font-bold uppercase mb-1">মুখস্থ</p>
                      <p className="text-xl font-bold text-green-700 dark:text-green-400">২০</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl transition-colors">
                      <p className="text-[10px] text-orange-400 font-bold uppercase mb-1">বাকি</p>
                      <p className="text-xl font-bold text-orange-700 dark:text-orange-400">১০</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/10 rounded-2xl transition-colors">
                      <p className="text-[10px] text-purple-400 font-bold uppercase mb-1">গ্রেড</p>
                      <p className="text-xl font-bold text-purple-700 dark:text-purple-400">A+</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Exam Results */}
                  <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-[32px] shadow-xl shadow-green-900/5 border border-gray-50 dark:border-gray-800 transition-colors">
                    <h4 className="text-lg font-bold text-madrasa-green dark:text-emerald-400 mb-6 flex items-center gap-2">
                      <ClipboardList className="w-5 h-5 text-madrasa-gold" /> পরীক্ষার ফলাফল
                    </h4>
                    <div className="space-y-4">
                      {[
                        { name: 'প্রথম সাময়িক', mark: '৯৮', grade: 'মুমতাজ' },
                        { name: 'দ্বিতীয় সাময়িক', mark: '৯৫', grade: 'মুমতাজ' },
                        { name: 'মাসিক টেস্ট', mark: '৯০', grade: 'জায়্যিদ জিদ্দান' },
                      ].map((exam, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-[#0a0a0a] rounded-xl transition-colors">
                          <div>
                            <p className="font-bold text-gray-700 dark:text-gray-300">{exam.name}</p>
                            <p className="text-xs text-gray-400">প্রাপ্ত নম্বর: {exam.mark}</p>
                          </div>
                          <span className="px-3 py-1 bg-madrasa-green/10 text-madrasa-green dark:text-emerald-400 text-xs font-bold rounded-full">
                            {exam.grade}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-6 py-3 border border-dashed border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-500 text-sm font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-[#0a0a0a] transition-all">
                      বিস্তারিত রিপোর্ট দেখুন
                    </button>
                  </div>

                  {/* Payment Status */}
                  <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-[32px] shadow-xl shadow-green-900/5 border border-gray-50 dark:border-gray-800 transition-colors">
                    <h4 className="text-lg font-bold text-madrasa-green dark:text-emerald-400 mb-6 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-madrasa-gold" /> বেতন/ফি স্ট্যাটাস
                    </h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/20 transition-colors">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm font-bold text-red-700 dark:text-red-400">এপ্রিল মাসের বেতন</p>
                          <span className="text-xs font-bold text-red-500">বকেয়া</span>
                        </div>
                        <p className="text-2xl font-black text-red-700 dark:text-red-400">৳ ২,৫০০</p>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-2xl border border-green-100 dark:border-green-900/20 transition-colors">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-sm font-bold text-green-700 dark:text-green-400">মার্চ মাসের বেতন</p>
                          <span className="text-xs font-bold text-green-500">পরিশোধিত</span>
                        </div>
                        <p className="text-2xl font-black text-green-700 dark:text-green-400">৳ ২,৫০০</p>
                      </div>
                    </div>
                    <button className="w-full mt-6 py-3 bg-madrasa-green text-white font-bold rounded-xl hover:bg-madrasa-gold transition-all shadow-lg shadow-green-100 dark:shadow-none">
                      অনলাইনে ফি জমা দিন
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="py-8 text-center text-gray-400 dark:text-gray-600 text-sm">
          <p>&copy; ২০২৬ আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা।</p>
        </footer>
      </motion.div>
    );
  }

  if (showLoginPage) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#f0f9f6] dark:bg-[#0a0a0a] flex flex-col items-center justify-center p-4 font-sans transition-colors"
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-md bg-white dark:bg-[#1a1a1a] rounded-[40px] shadow-2xl shadow-green-900/10 dark:shadow-none p-8 md:p-12 border border-white dark:border-gray-800 transition-colors"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <div className="cursor-pointer mb-6" onClick={() => setShowLoginPage(false)}>
              <Logo className="w-20 h-20" scrolled={false} />
            </div>
            <h2 className="text-3xl font-black text-madrasa-green dark:text-emerald-400 mb-2">লগইন করুন</h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400 ml-1">মোবাইল নম্বর</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 font-bold border-r border-gray-200 dark:border-gray-800 pr-3">
                  +৮৮০
                </div>
                <input 
                  required 
                  type="tel" 
                  value={loginPhone}
                  onChange={(e) => setLoginPhone(e.target.value)}
                  placeholder="১XXXXXXXXX" 
                  className="w-full py-4 pl-20 pr-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:bg-white dark:focus:bg-[#0a0a0a] focus:border-madrasa-gold focus:ring-4 focus:ring-madrasa-gold/10 outline-none transition-all font-mono" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">পাসওয়ার্ড</label>
                <button type="button" className="text-xs font-bold text-madrasa-gold hover:underline">পাসওয়ার্ড ভুলে গেছেন?</button>
              </div>
              <div className="relative">
                <input 
                  required 
                  type={showPassword ? "text" : "password"} 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full py-4 px-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:bg-white dark:focus:bg-[#0a0a0a] focus:border-madrasa-gold focus:ring-4 focus:ring-madrasa-gold/10 outline-none transition-all" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-madrasa-green dark:hover:text-emerald-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-emerald-500 text-white font-black rounded-2xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 dark:shadow-none text-lg mt-4"
            >
              লগইন করুন
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 dark:border-gray-800 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">নতুন ছাত্র?</p>
            <button 
              onClick={() => navigateToPage('admission')}
              className="text-madrasa-green dark:text-emerald-400 font-bold hover:text-madrasa-gold transition-colors"
            >
              অনলাইনে ভর্তির আবেদন করুন
            </button>
          </div>
        </motion.div>
        
        <div className="flex flex-col items-center gap-4 mt-8">
          <button 
            onClick={() => setShowLoginPage(false)}
            className="text-gray-400 dark:text-gray-500 hover:text-madrasa-green dark:hover:text-emerald-400 flex items-center gap-2 font-medium transition-colors"
          >
            <Home className="w-4 h-4" /> হোমে ফিরুন
          </button>
        </div>
      </motion.div>
    );
  }

  if (showNoticePage) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#f8fdfb] dark:bg-[#0a0a0a] font-sans transition-colors"
      >
        {/* Header */}
        <header className="bg-madrasa-green dark:bg-[#064e3b] py-4 shadow-lg sticky top-0 z-50 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => resetPages()}>
              <Logo className="w-10 h-10 bg-white dark:bg-[#1a1a1a] rounded-full p-1" scrolled={true} />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => resetPages()}
                className="text-white hover:text-madrasa-gold flex items-center gap-2 font-medium transition-colors"
              >
                <Home className="w-5 h-5" /> হোমে ফিরুন
              </button>
            </div>
          </div>
        </header>

        <main className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">সকল নোটিশ (All Notices)</h2>
              <div className="w-24 h-1 bg-madrasa-gold mx-auto"></div>
            </div>

            <div className="space-y-6">
              {[
                { date: '১৫ এপ্রিল, ২০২৪', title: 'ভর্তি কার্যক্রম শুরু', text: 'আগামী ২০ এপ্রিল থেকে নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু হবে। আগ্রহী অভিভাবকগণ দ্রুত যোগাযোগ করুন।' },
                { date: '১০ এপ্রিল, ২০২৪', title: 'ঈদুল ফিতরের ছুটি', text: 'পবিত্র ঈদুল ফিতর উপলক্ষে মাদরাসা ১০ দিন বন্ধ থাকবে। ছুটি শুরু হবে ১২ এপ্রিল থেকে।' },
                { date: '০৫ এপ্রিল, ২০২৪', title: 'বার্ষিক পরীক্ষার ফলাফল', text: 'বার্ষিক পরীক্ষার ফলাফল প্রকাশিত হয়েছে। অফিস থেকে মার্কশিট সংগ্রহ করা যাবে।' },
                { date: '০১ এপ্রিল, ২০২৪', title: 'রমজান মাসের সময়সূচী', text: 'রমজান মাসে মাদরাসার ক্লাস সকাল ৮টা থেকে দুপুর ১টা পর্যন্ত চলবে।' },
                { date: '২৫ মার্চ, ২০২৪', title: 'অভিভাবক সম্মেলন', text: 'আগামী শুক্রবার বাদে আসর মাদরাসা মিলনায়তনে অভিভাবক সম্মেলন অনুষ্ঠিত হবে।' },
                { date: '২০ মার্চ, ২০২৪', title: 'নতুন ড্রেস কোড', text: 'আগামী মাস থেকে সকল শিক্ষার্থীদের জন্য নতুন ড্রেস কোড বাধ্যতামূলক করা হয়েছে।' },
              ].map((notice, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white dark:bg-[#1a1a1a] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-madrasa-green dark:text-emerald-400">{notice.title}</h3>
                    <span className="px-4 py-1 bg-madrasa-gold/10 text-madrasa-green dark:text-emerald-400 text-sm font-bold rounded-full border border-madrasa-gold/20">
                      {notice.date}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{notice.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        <footer className="py-8 text-center text-gray-400 dark:text-gray-600 text-sm">
          <p>&copy; ২০২৬ আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা। সর্বস্বত্ব সংরক্ষিত।</p>
        </footer>
      </motion.div>
    );
  }

  if (showStudentCorner) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-madrasa-white dark:bg-[#0a0a0a] font-sans transition-colors"
      >
        {/* Simplified Header for Student Corner */}
        <header className="bg-madrasa-green dark:bg-[#064e3b] py-4 shadow-lg sticky top-0 z-50 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => resetPages()}>
              <Logo className="w-10 h-10 bg-white dark:bg-[#1a1a1a] rounded-full p-1" scrolled={true} />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => resetPages()}
                className="text-white hover:text-madrasa-gold flex items-center gap-2 font-medium transition-colors"
              >
                <Home className="w-5 h-5" /> হোমে ফিরুন
              </button>
            </div>
          </div>
        </header>

        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">শিক্ষার্থী কর্ণার (Student Corner)</h2>
              <p className="text-xl text-madrasa-gold font-medium">আপনার শিক্ষা জীবনের সকল তথ্য এক জায়গায়</p>
              <div className="w-24 h-1 bg-madrasa-gold mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Student Identity Card */}
              <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-colors">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">শিক্ষার্থীর পরিচয়</h3>
                <form onSubmit={handleStudentSearch} className="w-full space-y-4">
                  <input 
                    type="text" 
                    value={studentIdentitySearch}
                    onChange={(e) => setStudentIdentitySearch(e.target.value)}
                    placeholder="নাম বা রোল নম্বর লিখুন" 
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold outline-none transition-all" 
                  />
                  <button type="submit" className="w-full py-3 bg-madrasa-green text-white font-bold rounded-xl hover:bg-madrasa-gold transition-all">পরিচয় খুঁজুন</button>
                </form>
                
                <AnimatePresence>
                  {foundStudent && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 w-full p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/20 text-left transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                        <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-madrasa-green/20 shrink-0 bg-white dark:bg-[#0a0a0a]">
                          <img src={foundStudent.photo} alt={foundStudent.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <p className="text-sm font-bold text-madrasa-green dark:text-emerald-400">নাম: <span className="text-gray-700 dark:text-gray-300">{foundStudent.name}</span></p>
                          <p className="text-sm font-bold text-madrasa-green dark:text-emerald-400">রোল: <span className="text-gray-700 dark:text-gray-300">{foundStudent.roll}</span></p>
                          <p className="text-sm font-bold text-madrasa-green dark:text-emerald-400">শ্রেণি: <span className="text-gray-700 dark:text-gray-300">{foundStudent.class}</span></p>
                          <p className="text-sm font-bold text-madrasa-green dark:text-emerald-400">পিতার নাম: <span className="text-gray-700 dark:text-gray-300">{foundStudent.father}</span></p>
                          <p className="text-sm font-bold text-madrasa-green dark:text-emerald-400">মোবাইল: <span className="text-gray-700 dark:text-gray-300">{foundStudent.phone}</span></p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Syllabus & Routine Card */}
              <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-colors">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">সিলেবাস ও রুটিন</h3>
                <div className="w-full space-y-3">
                  {['বার্ষিক সিলেবাস ২০২৪', 'ক্লাস রুটিন (নূরানী)', 'ক্লাস রুটিন (হিফজ)'].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl border border-gray-100 dark:border-gray-800 transition-colors">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                      <Download className="w-5 h-5 text-madrasa-green dark:text-emerald-400 cursor-pointer hover:text-madrasa-gold" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hifz Tracker Card */}
              <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-colors">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">হিফজ ট্র্যাকার</h3>
                <div className="w-full space-y-4">
                  <div className="flex justify-between text-sm font-bold text-gray-600 dark:text-gray-400">
                    <span>হিফজ অগ্রগতি</span>
                    <span>৬৫%</span>
                  </div>
                  <div className="w-full h-4 bg-gray-100 dark:bg-[#0a0a0a] rounded-full overflow-hidden">
                    <div className="h-full bg-madrasa-green w-[65%]"></div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">আপনার বর্তমান হিফজ ইয়াদ এর একটি ডেমো চিত্র</p>
                </div>
              </motion.div>

              {/* Holiday Calendar Card */}
              <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center transition-colors">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">ছুটির ক্যালেন্ডার</h3>
                <div className="w-full p-4 bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl border border-gray-100 dark:border-gray-800 transition-colors">
                  <div className="grid grid-cols-7 gap-1 text-[10px] font-bold text-gray-400 dark:text-gray-600 mb-2">
                    {['শনি', 'রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহ', 'শুক্র'].map(d => <div key={d}>{d}</div>)}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 31 }).map((_, i) => (
                      <div key={i} className={`h-6 flex items-center justify-center rounded-md text-xs ${[5, 12, 19, 26].includes(i) ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">আসন্ন ছুটি: ঈদুল ফিতর (১০ দিন)</p>
              </motion.div>

              {/* Suggestion Box Card */}
              <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center lg:col-span-2 transition-colors">
                <div className="w-16 h-16 bg-madrasa-green/10 dark:bg-emerald-900/20 text-madrasa-green dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">পরামর্শ বক্স</h3>
                <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert('আপনার পরামর্শ গ্রহণ করা হয়েছে। জাযাকাল্লাহ!'); }}>
                  <input type="text" placeholder="আপনার নাম" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 outline-none focus:border-madrasa-gold transition-all" />
                  <input type="tel" placeholder="মোবাইল নাম্বার" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 outline-none focus:border-madrasa-gold transition-all" />
                  <input type="email" placeholder="ইমেইল (ঐচ্ছিক)" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 outline-none focus:border-madrasa-gold transition-all md:col-span-2" />
                  <textarea placeholder="আপনার পরামর্শ বা অভিযোগ লিখুন..." rows={3} className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 outline-none focus:border-madrasa-gold transition-all md:col-span-2"></textarea>
                  <button className="w-full py-3 bg-madrasa-green text-white font-bold rounded-xl hover:bg-madrasa-gold transition-all md:col-span-2">পাঠিয়ে দিন</button>
                </form>
              </motion.div>
            </div>

            {/* Download Center Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">ডাউনলোড সেন্টার (Download Center)</h3>
                <p className="text-xl text-madrasa-gold font-medium">আপনার প্রয়োজনীয় সিলেবাস ও রুটিন এখান থেকে ডাউনলোড করুন</p>
                <div className="w-24 h-1 bg-madrasa-gold mx-auto mt-4"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    name: 'নূরানী বিভাগ', 
                    icon: <BookOpen className="w-6 h-6" />, 
                    color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
                    items: ['নূরানী সিলেবাস ২০২৪', 'ক্লাস রুটিন (প্লে-নার্সারি)', 'পরীক্ষার রুটিন']
                  },
                  { 
                    name: 'নাজেরা বিভাগ', 
                    icon: <FileText className="w-6 h-6" />, 
                    color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
                    items: ['নাজেরা সিলেবাস ২০২৪', 'ক্লাস রুটিন (নাজেরা)', 'হিফজ প্রস্তুতি গাইড']
                  },
                  { 
                    name: 'হিফজ বিভাগ', 
                    icon: <Heart className="w-6 h-6" />, 
                    color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
                    items: ['হিফজ সিলেবাস', 'দৈনিক রুটিন (হিফজ)', 'সবক ট্র্যাকার শিট']
                  }
                ].map((dept, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-[#1a1a1a] p-8 rounded-[32px] shadow-xl border border-gray-100 dark:border-gray-800 transition-colors"
                  >
                    <div className={`w-12 h-12 ${dept.color} rounded-2xl flex items-center justify-center mb-6`}>
                      {dept.icon}
                    </div>
                    <h4 className="text-xl font-bold text-madrasa-green dark:text-emerald-400 mb-6">{dept.name}</h4>
                    <ul className="space-y-4">
                      {dept.items.map((item, i) => (
                        <li key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl group hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-all border border-transparent hover:border-madrasa-green/20">
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{item}</span>
                          <button 
                            onClick={() => alert(`${item} ডাউনলোড শুরু হচ্ছে...`)}
                            className="p-2 bg-white dark:bg-[#1a1a1a] text-madrasa-green dark:text-emerald-400 rounded-lg shadow-sm hover:bg-madrasa-green hover:text-white transition-all"
                            title="Download PDF"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Detailed Student Profile Section (Visible when student is found) */}
            <AnimatePresence>
              {foundStudent && (
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  className="mt-24 bg-white dark:bg-[#1a1a1a] rounded-[40px] shadow-2xl border border-emerald-100 dark:border-emerald-900/20 overflow-hidden transition-colors"
                >
                  <div className="bg-madrasa-green dark:bg-[#064e3b] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 transition-colors">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl shrink-0">
                      <img src={foundStudent.photo} alt={foundStudent.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">{foundStudent.name}</h3>
                      <p className="text-madrasa-gold font-bold text-lg mb-4">রোল: {foundStudent.roll} | শ্রেণি: {foundStudent.class}</p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10">পিতা: {foundStudent.father}</div>
                        <div className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10">মোবাইল: {foundStudent.phone}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Academic History */}
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <h4 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-6 flex items-center gap-3">
                          <ClipboardList className="w-6 h-6 text-madrasa-gold" /> একাডেমিক ইতিহাস (Academic History)
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="border-b border-gray-100 dark:border-gray-800">
                                <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">বছর</th>
                                <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">শ্রেণি</th>
                                <th className="py-4 px-4 text-sm font-bold text-gray-400 uppercase tracking-wider">ফলাফল</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                              {foundStudent.academicHistory?.map((history: any, i: number) => (
                                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-[#0a0a0a] transition-colors">
                                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300 font-bold">{history.year}</td>
                                  <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{history.class}</td>
                                  <td className="py-4 px-4">
                                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full">
                                      {history.result}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-6 flex items-center gap-3">
                          <Trophy className="w-6 h-6 text-madrasa-gold" /> অর্জনসমূহ (Achievements)
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {foundStudent.achievements?.map((achievement: string, i: number) => (
                            <div key={i} className="p-4 bg-madrasa-gold/5 dark:bg-madrasa-gold/10 rounded-2xl border border-madrasa-gold/20 flex items-center gap-4 transition-colors">
                              <div className="w-10 h-10 bg-madrasa-gold text-white rounded-xl flex items-center justify-center shrink-0">
                                <Star className="w-5 h-5 fill-white" />
                              </div>
                              <span className="text-gray-700 dark:text-gray-300 font-bold text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Attendance & Stats */}
                    <div className="space-y-8">
                      <div className="p-8 bg-gray-50 dark:bg-[#0a0a0a] rounded-[32px] border border-gray-100 dark:border-gray-800 transition-colors">
                        <h4 className="text-xl font-bold text-madrasa-green dark:text-emerald-400 mb-8 text-center">উপস্থিতি (Attendance)</h4>
                        <div className="relative w-40 h-40 mx-auto">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle className="text-gray-200 dark:text-gray-800 stroke-current" strokeWidth="8" fill="transparent" r="40" cx="50" cy="50" />
                            <motion.circle 
                              className="text-madrasa-green dark:text-emerald-400 stroke-current" 
                              strokeWidth="8" 
                              strokeLinecap="round" 
                              fill="transparent" 
                              r="40" 
                              cx="50" 
                              cy="50" 
                              initial={{ strokeDasharray: "0 251.2" }}
                              animate={{ strokeDasharray: `${(foundStudent.attendance / 100) * 251.2} 251.2` }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-black text-madrasa-green dark:text-emerald-400">{foundStudent.attendance}%</span>
                            <span className="text-[10px] text-gray-400 uppercase font-bold">বর্তমান মাস</span>
                          </div>
                        </div>
                        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 font-medium">
                          আপনার উপস্থিতি সন্তোষজনক। নিয়মিত মাদরাসায় আসার জন্য ধন্যবাদ।
                        </p>
                      </div>

                      <div className="p-8 bg-madrasa-gold/10 rounded-[32px] border border-madrasa-gold/20 transition-colors">
                        <h4 className="text-lg font-bold text-madrasa-green dark:text-emerald-400 mb-4">শিক্ষকের মন্তব্য</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic">
                          "আব্দুল্লাহ একজন অত্যন্ত মেধাবী এবং মনোযোগী ছাত্র। তার হিফজ ইয়াদ করার গতি প্রশংসনীয়। ইনশাআল্লাহ সে ভবিষ্যতে অনেক বড় হাফেজ হবে।"
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                          <div className="w-8 h-8 bg-madrasa-green rounded-full"></div>
                          <span className="text-xs font-bold text-madrasa-green dark:text-emerald-400">মাওলানা আব্দুল হাই (হিফজ শিক্ষক)</span>
                        </div>
                      </div>
                    </div>

                    {/* Visual Trends Section */}
                    <div className="lg:col-span-3 mt-12 pt-12 border-t border-gray-100 dark:border-gray-800">
                      <h4 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-10 text-center">পারফরম্যান্স ট্রেন্ড (Performance Trends)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Attendance Trend Chart */}
                        <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                          <h5 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-6 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-500" /> উপস্থিতির হার (%)
                          </h5>
                          <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={foundStudent.attendanceTrend}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                <XAxis 
                                  dataKey="month" 
                                  axisLine={false} 
                                  tickLine={false} 
                                  tick={{ fill: '#666', fontSize: 12 }} 
                                />
                                <YAxis 
                                  domain={[0, 100]} 
                                  axisLine={false} 
                                  tickLine={false} 
                                  tick={{ fill: '#666', fontSize: 12 }} 
                                />
                                <Tooltip 
                                  contentStyle={{ 
                                    backgroundColor: '#fff', 
                                    borderColor: '#eee',
                                    borderRadius: '12px',
                                    color: '#000'
                                  }} 
                                />
                                <Line 
                                  type="monotone" 
                                  dataKey="attendance" 
                                  stroke="#3b82f6" 
                                  strokeWidth={4} 
                                  dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
                                  activeDot={{ r: 8 }} 
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* Achievement Trend Chart */}
                        <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                          <h5 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-6 flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-madrasa-gold" /> পরীক্ষার স্কোর ট্রেন্ড
                          </h5>
                          <div className="h-[250px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={foundStudent.achievementTrend}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                                <XAxis 
                                  dataKey="month" 
                                  axisLine={false} 
                                  tickLine={false} 
                                  tick={{ fill: '#666', fontSize: 12 }} 
                                />
                                <YAxis 
                                  domain={[0, 100]} 
                                  axisLine={false} 
                                  tickLine={false} 
                                  tick={{ fill: '#666', fontSize: 12 }} 
                                />
                                <Tooltip 
                                  cursor={{ fill: '#f9fafb' }}
                                  contentStyle={{ 
                                    backgroundColor: '#fff', 
                                    borderColor: '#eee',
                                    borderRadius: '12px',
                                    color: '#000'
                                  }} 
                                />
                                <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                                  {foundStudent.achievementTrend.map((entry: any, index: number) => (
                                    <Cell key={`cell-${index}`} fill={index === foundStudent.achievementTrend.length - 1 ? '#10b981' : '#fbbf24'} />
                                  ))}
                                </Bar>
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <footer className="py-8 text-center text-gray-400 dark:text-gray-600 text-sm">
          <p>&copy; ২০২৬ আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা। সর্বস্বত্ব সংরক্ষিত।</p>
        </footer>
      </motion.div>
    );
  }

  if (showExamPage) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-madrasa-white dark:bg-[#0a0a0a] font-sans transition-colors"
      >
        <header className="bg-madrasa-green dark:bg-[#064e3b] py-4 shadow-lg sticky top-0 z-50 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => resetPages()}>
              <Logo className="w-10 h-10 bg-white dark:bg-[#1a1a1a] rounded-full p-1" scrolled={true} />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => resetPages()}
                className="text-white hover:text-madrasa-gold flex items-center gap-2 font-medium transition-colors"
              >
                <Home className="w-5 h-5" /> হোমে ফিরুন
              </button>
            </div>
          </div>
        </header>

        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">পরীক্ষা ও রেজাল্ট</h2>
              <p className="text-xl text-madrasa-gold font-medium">আপনার পরীক্ষার ফলাফল ও সময়সূচী এখানে দেখুন</p>
              <div className="w-24 h-1 bg-madrasa-gold mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {/* Result Search Section */}
              <div className="bg-white dark:bg-[#1a1a1a] p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400">ফলাফল অনুসন্ধান</h3>
                </div>

                <form onSubmit={handleResultSearch} className="flex flex-col md:flex-row gap-4 mb-6">
                  <input 
                    type="text" 
                    value={resultSearch}
                    onChange={(e) => setResultSearch(e.target.value)}
                    placeholder="নাম, রোল বা মোবাইল নম্বর লিখুন" 
                    className="flex-1 p-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold outline-none transition-all text-lg"
                  />
                  <button type="submit" className="px-10 py-4 bg-madrasa-green text-white font-bold rounded-2xl hover:bg-madrasa-gold transition-all shadow-lg shadow-green-100 dark:shadow-none flex items-center justify-center gap-2">
                    <Search className="w-5 h-5" /> ফলাফল দেখুন
                  </button>
                </form>

                <div className="flex justify-center mb-10">
                  <button 
                    onClick={() => {
                      setResultSearch('১০৫');
                      // Trigger search manually
                      const mockResult = { 
                        roll: '১০৫', 
                        name: 'আব্দুল্লাহ আল মামুন', 
                        class: 'হিফজ', 
                        exam: 'বার্ষিক পরীক্ষা ২০২৪', 
                        gpa: '৫.০০', 
                        status: 'উত্তীর্ণ',
                        phone: '০১৭০০০০০০০০',
                        photo: 'https://picsum.photos/seed/student1/200/200'
                      };
                      setFoundResult(mockResult);
                      setSearchError('');
                    }}
                    className="text-sm text-madrasa-green hover:text-madrasa-gold font-bold underline transition-colors"
                  >
                    নমুনা রেজাল্ট দেখতে এখানে ক্লিক করুন (রোল: ১০৫)
                  </button>
                </div>

                <AnimatePresence>
                  {searchError && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-center font-medium border border-red-100"
                    >
                      {searchError}
                    </motion.div>
                  )}
                  {foundResult && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="bg-emerald-50 dark:bg-emerald-900/10 rounded-[32px] p-8 border-2 border-emerald-100 dark:border-emerald-900/20"
                    >
                      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg shrink-0 bg-white dark:bg-[#0a0a0a]">
                          <img src={foundResult.photo} alt={foundResult.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-1 w-full">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            <div className="space-y-4">
                              <div className="flex justify-between border-b border-emerald-200 dark:border-emerald-900/30 pb-2">
                                <span className="text-gray-500 dark:text-gray-400 font-medium">শিক্ষার্থীর নাম:</span>
                                <span className="text-madrasa-green dark:text-emerald-400 font-bold">{foundResult.name}</span>
                              </div>
                              <div className="flex justify-between border-b border-emerald-200 dark:border-emerald-900/30 pb-2">
                                <span className="text-gray-500 dark:text-gray-400 font-medium">রোল নম্বর:</span>
                                <span className="text-madrasa-green dark:text-emerald-400 font-bold">{foundResult.roll}</span>
                              </div>
                              <div className="flex justify-between border-b border-emerald-200 dark:border-emerald-900/30 pb-2">
                                <span className="text-gray-500 dark:text-gray-400 font-medium">শ্রেণি:</span>
                                <span className="text-madrasa-green dark:text-emerald-400 font-bold">{foundResult.class}</span>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="flex justify-between border-b border-emerald-200 dark:border-emerald-900/30 pb-2">
                                <span className="text-gray-500 dark:text-gray-400 font-medium">পরীক্ষার নাম:</span>
                                <span className="text-madrasa-green dark:text-emerald-400 font-bold">{foundResult.exam}</span>
                              </div>
                              <div className="flex justify-between border-b border-emerald-200 dark:border-emerald-900/30 pb-2">
                                <span className="text-gray-500 dark:text-gray-400 font-medium tracking-tight">GPA:</span>
                                <span className="text-madrasa-gold font-black text-xl">{foundResult.gpa}</span>
                              </div>
                              <div className="flex justify-between border-b border-emerald-200 dark:border-emerald-900/30 pb-2">
                                <span className="text-gray-500 dark:text-gray-400 font-medium">মোট প্রাপ্ত নম্বর:</span>
                                <span className="text-madrasa-green dark:text-emerald-400 font-bold">
                                  {toBengaliNumerals(foundResult.subjects.reduce((acc: number, s: any) => acc + s.obtained, 0).toString())} 
                                  <span className="text-xs text-gray-400 font-normal ml-1">
                                    / {toBengaliNumerals(foundResult.subjects.reduce((acc: number, s: any) => acc + s.total, 0).toString())}
                                  </span>
                                </span>
                              </div>
                              <div className="flex justify-between border-b border-emerald-200 dark:border-emerald-900/30 pb-2">
                                <span className="text-gray-500 dark:text-gray-400 font-medium">ফলাফল:</span>
                                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">{foundResult.status}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Subject Marks Table (On-screen) */}
                      <div className="mt-8 overflow-hidden rounded-2xl border border-emerald-100 dark:border-emerald-900/30 bg-white dark:bg-[#0a0a0a]">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-emerald-100/50 dark:bg-emerald-900/20 text-madrasa-green dark:text-emerald-400 font-bold">
                            <tr>
                              <th className="px-4 py-3">বিষয়</th>
                              <th className="px-4 py-3 text-center">পূর্ণমান</th>
                              <th className="px-4 py-3 text-center">প্রাপ্ত নম্বর</th>
                              <th className="px-4 py-3 text-center">গ্রেড</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-emerald-50 dark:divide-emerald-900/10">
                            {foundResult.subjects && foundResult.subjects.map((subject: any, sIdx: number) => (
                              <tr key={sIdx} className="text-gray-700 dark:text-gray-300">
                                <td className="px-4 py-3 font-medium">{subject.name}</td>
                                <td className="px-4 py-3 text-center">{toBengaliNumerals(subject.total.toString())}</td>
                                <td className="px-4 py-3 text-center font-bold text-madrasa-green dark:text-emerald-400">{toBengaliNumerals(subject.obtained.toString())}</td>
                                <td className="px-4 py-3 text-center">
                                  <span className="px-2 py-0.5 bg-madrasa-gold/10 text-madrasa-gold text-[10px] font-bold rounded">
                                    {subject.grade}
                                  </span>
                                </td>
                              </tr>
                            ))}
                            {/* Total Row */}
                            <tr className="bg-emerald-50/50 dark:bg-emerald-900/10 font-bold border-t-2 border-emerald-100 dark:border-emerald-900/30">
                              <td className="px-4 py-4 text-madrasa-green dark:text-emerald-400">সর্বমোট (Total)</td>
                              <td className="px-4 py-4 text-center">{toBengaliNumerals(foundResult.subjects.reduce((acc: number, s: any) => acc + s.total, 0).toString())}</td>
                              <td className="px-4 py-4 text-center text-madrasa-gold">
                                {toBengaliNumerals(foundResult.subjects.reduce((acc: number, s: any) => acc + s.obtained, 0).toString())}
                              </td>
                              <td className="px-4 py-4 text-center">GPA: {foundResult.gpa}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button 
                          onClick={handleDownload}
                          className="flex items-center gap-2 px-6 py-3 bg-madrasa-green text-white font-bold rounded-xl hover:bg-madrasa-gold transition-all shadow-md"
                        >
                          <Download className="w-5 h-5" /> মার্কশিট ডাউনলোড
                        </button>
                        <button 
                          onClick={handlePrint}
                          className="flex items-center gap-2 px-6 py-3 border-2 border-madrasa-green text-madrasa-green dark:text-emerald-400 dark:border-emerald-400 font-bold rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all"
                        >
                          <Printer className="w-5 h-5" /> প্রিন্ট করুন
                        </button>
                      </div>

                      {/* Hidden Marksheet for Printing */}
                      <div id="printable-marksheet" className="hidden print:block fixed inset-0 bg-white p-12 z-[9999]">
                        <div className="border-4 border-madrasa-green p-8 h-full flex flex-col">
                          <div className="text-center border-b-2 border-madrasa-gold pb-6 mb-8">
                            <h1 className="text-3xl font-bold text-madrasa-green mb-2">আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা</h1>
                            <p className="text-gray-600">তাজবীদভিত্তিক হিফজ ও সুন্নাহর অনুসরণে জীবন গড়ার অঙ্গীকার</p>
                            <h2 className="text-2xl font-bold mt-4 bg-madrasa-green text-white inline-block px-6 py-1 rounded-full">একাডেমিক ট্রান্সক্রিপ্ট (মার্কশিট)</h2>
                          </div>

                          <div className="flex justify-between mb-10">
                            <div className="space-y-2">
                              <p><strong>শিক্ষার্থীর নাম:</strong> {foundResult.name}</p>
                              <p><strong>রোল নম্বর:</strong> {foundResult.roll}</p>
                              <p><strong>শ্রেণি:</strong> {foundResult.class}</p>
                              <p><strong>পরীক্ষার নাম:</strong> {foundResult.exam}</p>
                            </div>
                            <div className="w-32 h-32 border-2 border-gray-200 rounded-lg overflow-hidden">
                              <img src={foundResult.photo} alt="Student" className="w-full h-full object-cover" />
                            </div>
                          </div>

                          <table className="w-full border-collapse border border-gray-300 mb-10">
                            <thead>
                              <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-3 text-left">বিষয়</th>
                                <th className="border border-gray-300 p-3 text-center">পূর্ণমান</th>
                                <th className="border border-gray-300 p-3 text-center">প্রাপ্ত নম্বর</th>
                                <th className="border border-gray-300 p-3 text-center">গ্রেড</th>
                              </tr>
                            </thead>
                            <tbody>
                              {foundResult.subjects && foundResult.subjects.map((subject: any, sIdx: number) => (
                                <tr key={sIdx}>
                                  <td className="border border-gray-300 p-3">{subject.name}</td>
                                  <td className="border border-gray-300 p-3 text-center">{toBengaliNumerals(subject.total.toString())}</td>
                                  <td className="border border-gray-300 p-3 text-center">{toBengaliNumerals(subject.obtained.toString())}</td>
                                  <td className="border border-gray-300 p-3 text-center">{subject.grade}</td>
                                </tr>
                              ))}
                              {/* Total Row for Printing */}
                              <tr className="font-bold bg-gray-50">
                                <td className="border border-gray-300 p-3">সর্বমোট (Total)</td>
                                <td className="border border-gray-300 p-3 text-center">
                                  {toBengaliNumerals(foundResult.subjects.reduce((acc: number, s: any) => acc + s.total, 0).toString())}
                                </td>
                                <td className="border border-gray-300 p-3 text-center">
                                  {toBengaliNumerals(foundResult.subjects.reduce((acc: number, s: any) => acc + s.obtained, 0).toString())}
                                </td>
                                <td className="border border-gray-300 p-3 text-center">GPA: {foundResult.gpa}</td>
                              </tr>
                            </tbody>
                          </table>

                          <div className="flex justify-between items-end mt-auto pt-10">
                            <div className="text-center">
                              <div className="w-32 border-t border-black mb-1"></div>
                              <p className="text-sm font-bold">অভিভাবকের স্বাক্ষর</p>
                            </div>
                            <div className="text-center">
                              <div className="text-xl font-bold text-madrasa-gold mb-1">GPA: {foundResult.gpa}</div>
                              <div className="text-sm font-bold text-madrasa-green mb-3">
                                মোট প্রাপ্ত নম্বর: {toBengaliNumerals(foundResult.subjects.reduce((acc: number, s: any) => acc + s.obtained, 0).toString())} 
                                ({toBengaliNumerals(foundResult.subjects.reduce((acc: number, s: any) => acc + s.total, 0).toString())} এর মধ্যে)
                              </div>
                              <div className="inline-block px-6 py-1 bg-green-600 text-white font-bold rounded-full">{foundResult.status}</div>
                            </div>
                            <div className="text-center">
                              <div className="w-32 border-t border-black mb-1"></div>
                              <p className="text-sm font-bold">অধ্যক্ষের স্বাক্ষর</p>
                            </div>
                          </div>
                          
                          <div className="text-center mt-10 text-[10px] text-gray-400">
                            <p>এটি একটি কম্পিউটার জেনারেটেড মার্কশিট। কোনো প্রকার ঘষামাজা গ্রহণযোগ্য নয়।</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Upcoming Exams Section */}
              <div className="bg-white dark:bg-[#1a1a1a] p-8 md:p-12 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400">আসন্ন পরীক্ষা</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: 'অর্ধ-বার্ষিক পরীক্ষা ২০২৪', date: '১৫ জুন, ২০২৪', status: 'সময়সূচী প্রকাশিত' },
                    { title: 'মাসিক মূল্যায়ন (মে)', date: '২৫ মে, ২০২৪', status: 'চলমান' }
                  ].map((exam, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl border border-gray-100 dark:border-gray-800 transition-colors">
                      <div>
                        <h4 className="font-bold text-madrasa-green dark:text-emerald-400 text-lg">{exam.title}</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{exam.date}</p>
                      </div>
                      <span className="px-4 py-2 bg-madrasa-gold/10 text-madrasa-green dark:text-emerald-400 text-xs font-bold rounded-full border border-madrasa-gold/20">
                        {exam.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="py-8 text-center text-gray-400 dark:text-gray-600 text-sm">
          <p>&copy; ২০২৬ আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা। সর্বস্বত্ব সংরক্ষিত।</p>
        </footer>
      </motion.div>
    );
  }

  if (showHifzPage) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-madrasa-white dark:bg-[#0a0a0a] font-sans transition-colors"
      >
        {/* Simplified Header for Hifz Page */}
        <header className="bg-madrasa-green dark:bg-[#064e3b] py-4 shadow-lg sticky top-0 z-50 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => resetPages()}>
              <Logo className="w-10 h-10 bg-white dark:bg-[#1a1a1a] rounded-full p-1" scrolled={true} />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => resetPages()}
                className="text-white hover:text-madrasa-gold flex items-center gap-2 font-medium transition-colors"
              >
                <Home className="w-5 h-5" /> হোমে ফিরুন
              </button>
            </div>
          </div>
        </header>

        <main>
          {/* Hifz Department Section */}
          <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-madrasa-gold/20 rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-madrasa-gold fill-madrasa-gold" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">হিফজ বিভাগ (Hifz Department)</h2>
                <p className="text-xl text-madrasa-gold font-medium italic">তাজবীদভিত্তিক হিফজ ও সুন্নাহর অনুসরণে জীবন গড়ার অঙ্গীকার।</p>
                <div className="w-24 h-1 bg-madrasa-gold mx-auto mt-4"></div>
              </div>

              {/* Class/Stage Structure */}
              <div className="mb-24">
                <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-12 text-center">১. আমাদের হিফজ কার্যক্রমের স্তরসমূহ (Class/Stage Structure)</h3>
                <div className="relative max-w-5xl mx-auto">
                  {/* Progress Line */}
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-madrasa-gold/20 -translate-y-1/2 hidden md:block"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {[
                      { title: 'ইফতেতাহ (শুরু)', desc: 'নাজেরা শেষ করে হিফজ শুরু করার প্রাথমিক স্তর, যেখানে আমপারা ও ছোট ছোট সূরাগুলোর মাধ্যমে হিফজের যাত্রা শুরু হয়।' },
                      { title: 'হিফজুল কুরআন (মূল হিফজ)', desc: 'অভিজ্ঞ উস্তাদগণের তত্ত্বাবধানে তাজবীদের সাথে সম্পূর্ণ কুরআন মুখস্থ করার মূল পর্যায়।' },
                      { title: 'দাওর (পুনরাবৃত্তি)', desc: 'সম্পূর্ণ কুরআন মুখস্থ শেষে পঠিত অংশগুলো বার বার রিভিশনের মাধ্যমে ইয়াদকে (স্মৃতি) মজবুত ও স্থায়ী করার পর্যায়।' },
                    ].map((stage, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 text-center relative z-10 transition-colors"
                      >
                        <div className="w-12 h-12 bg-madrasa-green dark:bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg border-4 border-white dark:border-[#1a1a1a]">
                          {idx + 1}
                        </div>
                        <h4 className="text-xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">{stage.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{stage.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Special Features */}
              <div className="bg-madrasa-green dark:bg-[#064e3b] p-12 md:p-20 rounded-[60px] shadow-2xl relative overflow-hidden transition-colors">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-madrasa-gold/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                
                <h3 className="text-3xl font-bold text-white mb-16 text-center relative z-10">২. হিফজ বিভাগের বিশেষ বৈশিষ্ট্যসমূহ</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                  {[
                    { icon: <Music className="w-8 h-8" />, title: 'তাজবীদ ও লাহজ (সুর)', desc: 'আন্তর্জাতিক মান অনুসরণ করে তাজবীদের নিখুঁত প্রয়োগ এবং সুন্দর ও দরদী কণ্ঠে তিলাওয়াতের বিশেষ প্রশিক্ষণ।' },
                    { icon: <BookOpen className="w-8 h-8" />, title: 'দৈনিক সবক ও ইয়াদ', desc: 'প্রতিটি ছাত্রের সবক প্রতিদিন আদায় করা এবং নিয়মিত পেছনের পড়া (ইয়াদ) শোনানোর মাধ্যমে কুরআনকে স্থায়ীভাবে হৃদয়ে গেঁথে দেওয়া।' },
                    { icon: <Heart className="w-8 h-8" />, title: 'মানসিক স্বাস্থ্য ও মোটিভেশন', desc: 'মুখস্থ করার চাপ কাটিয়ে ওঠার জন্য ছাত্রদের নিয়মিত কাউন্সেলিং ও উৎসাহমূলক বয়ানের ব্যবস্থা।' },
                    { icon: <Trophy className="w-8 h-8" />, title: 'প্রতিযোগিতামূলক প্রস্তুতি', desc: 'অভ্যন্তরীণ প্রতিযোগিতার মাধ্যমে ছাত্রদের আত্মবিশ্বাস বাড়ানো, যাতে তারা জাতীয় ও আন্তর্জাতিক হিফজ প্রতিযোগিতায় অংশ নিতে পারে।' },
                    { icon: <Shield className="w-8 h-8" />, title: 'আমলি জিন্দেগী', desc: 'হিফজের পাশাপাশি ফরয ইবাদত, সুন্নাত ও আদব-আখলাকের নিয়মিত অনুশীলনের মাধ্যমে একজন প্রকৃত হাফেজ হিসেবে গড়ে তোলা।' },
                  ].map((feature, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all">
                      <div className="w-14 h-14 bg-madrasa-gold text-madrasa-green rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        {feature.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                      <p className="text-white/80 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-8 text-center text-gray-400 dark:text-gray-600 text-sm">
          <p>&copy; ২০২৬ আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা।</p>
        </footer>
      </motion.div>
    );
  }

  if (showNazeraPage) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-madrasa-white dark:bg-[#0a0a0a] font-sans transition-colors"
      >
        {/* Simplified Header for Nazera Page */}
        <header className="bg-madrasa-green dark:bg-[#064e3b] py-4 shadow-lg sticky top-0 z-50 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => resetPages()}>
              <Logo className="w-10 h-10 bg-white dark:bg-[#1a1a1a] rounded-full p-1" scrolled={true} />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => resetPages()}
                className="text-white hover:text-madrasa-gold flex items-center gap-2 font-medium transition-colors"
              >
                <Home className="w-5 h-5" /> হোমে ফিরুন
              </button>
            </div>
          </div>
        </header>

        <main>
          {/* Nazera Department Section */}
          <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">নাজেরা বিভাগ (Nazera Department)</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-4">নাজেরা বিভাগ: তিলাওয়াতকে নিখুঁত করার শৈল্পিক যাত্রা</h3>
                <p className="text-xl text-madrasa-gold font-medium italic">সহীহ উচ্চারণ ও তাজবীদের সাথে পূর্ণ কুরআন পাঠের প্রস্তুতি।</p>
                <div className="w-24 h-1 bg-madrasa-gold mx-auto mt-4"></div>
              </div>

              {/* Class Structure */}
              <div className="mb-24">
                <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-10 text-center">১. আমাদের শ্রেণি বিন্যাস (Class Structure)</h3>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">নাজেরা শাখায় বর্তমানে নিচের শ্রেণিগুলো অত্যন্ত নিবিড় তত্ত্বাবধানে পরিচালিত হচ্ছে:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                  {[
                    { id: '১', title: 'চতুর্থ শ্রেণি', desc: 'নূরানী বিভাগ শেষ করে আসা শিক্ষার্থীদের কুরআনের বড় সূরার মাধ্যমে তিলাওয়াতের গতি বৃদ্ধির প্রাথমিক পর্যায়। (Fluency building)' },
                    { id: '২', title: 'পঞ্চম শ্রেণি', desc: 'সম্পূর্ণ কুরআন দেখে দেখে দ্রুততার সাথে পড়ার যোগ্যতা অর্জন এবং তাজবীদের চূড়ান্ত অনুশীলনের মাধ্যমে হিফজের জন্য পূর্ণ প্রস্তুতি। (Final Hifz preparation)' },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="relative p-10 bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 border-b-4 border-b-madrasa-gold transition-colors"
                    >
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-madrasa-green dark:bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                        {item.id}
                      </div>
                      <h4 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-4 mt-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Core Features */}
              <div className="bg-madrasa-green/5 dark:bg-emerald-900/10 p-12 rounded-[40px] border border-madrasa-green/10 dark:border-emerald-900/20 transition-colors">
                <h3 className="text-3xl font-bold text-madrasa-green dark:text-emerald-400 mb-12 text-center">২. মূল বৈশিষ্ট্যসমূহ (Core Features)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    { icon: <BookOpen className="w-10 h-10" />, title: 'তাজবীদের বাস্তব প্রয়োগ', desc: 'পড়ার সময় গুন্নাহ, মদ ও মাখরাজসহ তাজবীদের প্রতিটি নিয়ম হাতে-কলমে সংশোধন।' },
                    { icon: <Star className="w-10 h-10" />, title: 'তিলাওয়াতের সাবলীলতা (Fluency)', desc: 'দেখে দেখে পড়ার গতি এমনভাবে বৃদ্ধি করা, যাতে হিফজ শুরুর সময় শিক্ষার্থী কোনো জড়তা অনুভব না করে।' },
                    { icon: <Heart className="w-10 h-10" />, title: 'আমলি তারবিয়ত', desc: 'তিলাওয়াতের পাশাপাশি দৈনন্দিন সুন্নাত, শিষ্টাচার এবং প্রয়োজনীয় মাসআলা শিক্ষা প্রদান।' },
                    { icon: <Users className="w-10 h-10" />, title: 'ব্যক্তিগত পর্যবেক্ষণ', desc: 'প্রতিটি ছাত্রের পড়ার মান প্রতিদিন আলাদাভাবে মূল্যায়ন এবং দুর্বলতার ভিত্তিতে বিশেষ যত্ন।' },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-6 bg-white dark:bg-[#1a1a1a] p-6 rounded-2xl shadow-sm transition-colors">
                      <div className="shrink-0 w-16 h-16 bg-madrasa-green/10 dark:bg-emerald-900/20 text-madrasa-green dark:text-emerald-400 rounded-2xl flex items-center justify-center shadow-sm">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-madrasa-green dark:text-emerald-400 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-8 text-center text-gray-400 dark:text-gray-600 text-sm">
          <p>&copy; ২০২৬ আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা।</p>
        </footer>
      </motion.div>
    );
  }

  if (showNooraniPage) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-madrasa-white dark:bg-[#0a0a0a] font-sans transition-colors"
      >
        {/* Simplified Header for Noorani Page */}
        <header className="bg-madrasa-green dark:bg-[#064e3b] py-4 shadow-lg sticky top-0 z-50 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => resetPages()}>
              <Logo className="w-10 h-10 bg-white dark:bg-[#1a1a1a] rounded-full p-1" scrolled={true} />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => resetPages()}
                className="text-white hover:text-madrasa-gold flex items-center gap-2 font-medium transition-colors"
              >
                <Home className="w-5 h-5" /> হোমে ফিরুন
              </button>
            </div>
          </div>
        </header>

        <main>
          {/* Noorani & Pre-Primary Section */}
          <section className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">নূরানী ও প্রাক-প্রাথমিক বিভাগ (প্লে-নার্সারি)</h2>
                <p className="text-xl text-madrasa-gold font-medium italic">আদব ও আমলের সাথে শুরু হোক শিশুর প্রথম পাঠ।</p>
                <div className="w-24 h-1 bg-madrasa-gold mx-auto mt-4"></div>
              </div>

              {/* Class Structure */}
              <div className="mb-24">
                <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-10 text-center">শ্রেণি বিন্যাস (Class Structure)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { id: '১', title: 'প্লে (Play)', desc: 'শিশুদের মাদরাসার সাথে পরিচিত করা এবং আরবী ও বাংলা বর্ণের সাথে হাতেখড়ি।' },
                    { id: '২', title: 'নার্সারী (Nursery)', desc: 'আরবী কায়দা ও প্রাথমিক বুনিয়াদী শিক্ষা।' },
                    { id: '৩', title: 'প্রথম শ্রেণি', desc: 'কুরআন তিলাওয়াতের প্রাথমিক ধাপ ও সাধারণ শিক্ষার সমন্বয়।' },
                    { id: '৪', title: 'দ্বিতীয় শ্রেণি', desc: 'তাজবিদসহ সহীহ তিলাওয়াত ও প্রয়োজনীয় দুআ শিক্ষা।' },
                    { id: '৫', title: 'তৃতীয় শ্রেণি', desc: 'সুন্দর তিলাওয়াত নিশ্চিতকরণ এবং পরবর্তী ধাপে (হিফজ বা নাজেরা) যাওয়ার প্রস্তুতি।' },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="relative p-8 bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 border-b-4 border-b-madrasa-gold transition-colors"
                    >
                      <div className="absolute -top-4 -left-4 w-10 h-10 bg-madrasa-green dark:bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg">
                        {item.id}
                      </div>
                      <h4 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400 mb-4 mt-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-madrasa-green/5 dark:bg-emerald-900/10 p-12 rounded-[40px] border border-madrasa-green/10 dark:border-emerald-900/20 transition-colors">
                <h3 className="text-3xl font-bold text-madrasa-green dark:text-emerald-400 mb-12 text-center">আমাদের বিশেষত্বসমূহ (Key Features)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {[
                    { icon: <BookOpen className="w-10 h-10" />, title: 'সমন্বিত শিক্ষা ব্যবস্থা', desc: 'আরবী কায়দার পাশাপাশি বাংলা, ইংরেজি ও গণিতের প্রাথমিক বর্ণপরিচয় ও সংখ্যা শিক্ষা।' },
                    { icon: <Heart className="w-10 h-10" />, title: 'খেলার ছলে শিক্ষা', desc: 'ছোট শিশুদের জন্য আনন্দদায়ক পরিবেশে পাঠদান।' },
                    { icon: <Star className="w-10 h-10" />, title: 'ছড়া ও দুআ মুখস্থ', desc: 'আরবী ও বাংলা ছড়ার পাশাপাশি মাসনুন দুআ ও কালিমা শিক্ষা।' },
                    { icon: <Bell className="w-10 h-10" />, title: 'অডিও-ভিজ্যুয়াল লার্নিং', desc: 'ডিজিটাল স্ক্রিন বা অডিওর মাধ্যমে শুদ্ধ উচ্চারণ শিক্ষা।' },
                    { icon: <GraduationCap className="w-10 h-10" />, title: 'হাতের লেখা ও চিত্রাঙ্কন', desc: 'সৃজনশীলতা বৃদ্ধিতে বর্ণ লেখা এবং ক্যালিগ্রাফি বা রঙের কাজ।' },
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="shrink-0 w-16 h-16 bg-white dark:bg-[#1a1a1a] text-madrasa-gold rounded-2xl flex items-center justify-center shadow-md border border-gray-50 dark:border-gray-800 transition-colors">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-madrasa-green dark:text-emerald-400 mb-2">{feature.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-8 text-center text-gray-400 dark:text-gray-600 text-sm">
          <p>&copy; ২০২৬ আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা।</p>
        </footer>
      </motion.div>
    );
  }

  if (showAboutPage) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-[#fdfbf7] dark:bg-[#0a0a0a] font-sans transition-colors"
      >
        {/* Simplified Header for About Page */}
        <header className="bg-madrasa-green dark:bg-[#064e3b] py-4 shadow-lg sticky top-0 z-50 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => resetPages()}>
              <Logo className="w-10 h-10 bg-white dark:bg-[#1a1a1a] rounded-full p-1" scrolled={true} />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => resetPages()}
                className="text-white hover:text-madrasa-gold flex items-center gap-2 font-medium transition-colors"
              >
                <Home className="w-5 h-5" /> হোমে ফিরুন
              </button>
            </div>
          </div>
        </header>

        <main className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-20">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1 bg-madrasa-gold/10 text-madrasa-gold text-sm font-bold rounded-full mb-4"
              >
                আমাদের সম্পর্কে (About Us)
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-6xl font-black text-madrasa-green dark:text-emerald-400 mb-6 leading-tight"
              >
                একটি আলোকোজ্জ্বল পথচলা: <br className="hidden md:block" />
                <span className="text-madrasa-gold">আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা</span>
              </motion.h2>
              <div className="w-24 h-1.5 bg-madrasa-gold mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              {/* Left Column: Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-10"
              >
                <div className="relative">
                  <div className="absolute -left-6 top-0 w-1 h-full bg-madrasa-gold rounded-full"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">সূচনা ও প্রতিষ্ঠা:</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    <span className="font-black text-madrasa-green dark:text-emerald-400 text-xl">২০১৭</span> সালের এক শুভক্ষণে পবিত্র কুরআনের নূর ছড়িয়ে দেওয়ার মহান লক্ষ্য নিয়ে যাত্রা শুরু করে আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা। একদল নিষ্ঠাবান উলামায়ে কেরাম এবং দ্বীনদার শিক্ষানুরাগীদের অক্লান্ত পরিশ্রমে প্রতিষ্ঠিত এই প্রতিষ্ঠানটি আজ অত্র অঞ্চলের অন্যতম সেরা দ্বীনি বিদ্যাপীঠ হিসেবে আত্মপ্রকাশ করেছে।
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">আমাদের ভিশন ও মিশন:</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    আমাদের মূল লক্ষ্য হলো একজন শিক্ষার্থীকে শুধুমাত্র হাফেজে কুরআন হিসেবে গড়ে তোলা নয়, বরং তাকে কুরআনের প্রকৃত আদর্শে আদর্শবান একজন সুনাগরিক এবং যুগের চ্যালেঞ্জ মোকাবিলায় সক্ষম একজন যোগ্য মানুষ হিসেবে গড়ে তোলা। আমরা বিশ্বাস করি, সঠিক দ্বীনি বুনিয়াদের পাশাপাশি আধুনিক শিক্ষার সমন্বয়ই পারে একটি শিশুর উজ্জ্বল ভবিষ্যৎ নিশ্চিত করতে।
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -top-6 -right-6 w-full h-full border-4 border-madrasa-gold rounded-[40px] -z-10"></div>
                <img 
                  src="https://img.freepik.com/free-photo/group-muslim-boys-reading-quran-mosque_53876-146631.jpg" 
                  alt="Madrasa Classroom" 
                  className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 -left-8 bg-white dark:bg-[#1a1a1a] p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-madrasa-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                      ৭+
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">সাফল্যের বছর</p>
                      <p className="text-madrasa-green dark:text-emerald-400 font-bold text-sm">২০১৭ - ২০২৪</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Highlights Section */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-[50px] p-10 md:p-20 shadow-sm border border-gray-100 dark:border-gray-800 mb-24 relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-madrasa-green/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-madrasa-green dark:text-emerald-400 text-center mb-16">
                  কেন আস-সিদ্দিক ইন্টারন্যাশনাল <span className="text-madrasa-gold">হিফজ মাদরাসা শ্রেষ্ঠ?</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {[
                    { 
                      title: 'দক্ষ ও অভিজ্ঞ শিক্ষকমণ্ডলী', 
                      desc: 'আমাদের এখানে নিয়োজিত আছেন আন্তর্জাতিক মানসম্পন্ন ক্বারী ও হাফেজ উস্তাদগণ, যারা অত্যন্ত ধৈর্য ও মায়া-মমতার সাথে শিক্ষার্থীদের তিলাওয়াত সংশোধন ও হিফজ সম্পন্ন করান।' 
                    },
                    { 
                      title: 'আধুনিক ও সমন্বিত শিক্ষা পদ্ধতি', 
                      desc: 'নূরানী বিভাগে প্লে থেকে তৃতীয় শ্রেণি এবং নাজেরা বিভাগে চতুর্থ ও পঞ্চম শ্রেণিতে আমরা আরবী শিক্ষার পাশাপাশি বাংলা, ইংরেজি ও গণিত শিক্ষা প্রদান করি। এতে শিক্ষার্থী মূলধারার শিক্ষা থেকে পিছিয়ে পড়ে না।' 
                    },
                    { 
                      title: 'হিফজুল কুরআনের বিশেষ যত্ন', 
                      desc: "প্রতিটি ছাত্রের জন্য আলাদা 'ইনডিভিজুয়াল প্রোগ্রেস চার্ট' রাখা হয়। তাজবীদ ও লাহজ (সুর)-এর ওপর বিশেষ গুরুত্ব দিয়ে আন্তর্জাতিক প্রতিযোগিতার উপযোগী করে হাফেজ তৈরি করা হয়।" 
                    },
                    { 
                      title: 'আধ্যাত্মিক ও নৈতিক পরিবেশ', 
                      desc: 'মাদরাসার পুরো পরিবেশ সুন্নাহর আলোকে সাজানো। নিয়মিত আদব-আখলাক ও মাসআলা-মাসায়েল শিক্ষার মাধ্যমে শিক্ষার্থীদের চরিত্রে আমূল পরিবর্তন আনা হয়।' 
                    },
                    { 
                      title: 'ডিজিটাল ও নিরাপদ ক্যাম্পাস', 
                      desc: 'আমরাই প্রথম মোবাইল নম্বর ভিত্তিক লগইন সিস্টেম এবং ডিজিটাল শিক্ষার্থী কর্ণার চালু করেছি, যার মাধ্যমে অভিভাবকরা ঘরে বসেই সন্তানের অগ্রগতি পর্যবেক্ষণ করতে পারেন।' 
                    }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-5"
                    >
                      <div className="shrink-0 w-8 h-8 bg-madrasa-green text-white rounded-full flex items-center justify-center mt-1">
                        <Star className="w-4 h-4 fill-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-madrasa-green dark:text-emerald-400 mb-2">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Departments Section */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold text-madrasa-green dark:text-emerald-400 text-center mb-12">আমাদের বিভাগসমূহ একনজরে:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { id: '১', title: 'নূরানী ও প্রাক-প্রাথমিক', range: 'প্লে - ৩য় শ্রেণি', desc: 'খেলার ছলে দ্বীনি ও আধুনিক শিক্ষার হাতেখড়ি।' },
                  { id: '২', title: 'নাজেরা বিভাগ', range: '৪র্থ ও ৫ম শ্রেণি', desc: 'তিলাওয়াতের গতি ও তাজবীদের চূড়ান্ত শাণিত পর্যায়।' },
                  { id: '৩', title: 'হিফজ বিভাগ', range: 'ইফতেতাহ - দাওর', desc: 'ইফতেতাহ থেকে দাওর পর্যন্ত পূর্ণাঙ্গ ও মজবুত হিফজ কার্যক্রম।' }
                ].map((dept, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl border-b-4 border-madrasa-gold shadow-sm hover:shadow-xl transition-all">
                    <div className="text-4xl font-black text-madrasa-gold/20 mb-4">{dept.id}</div>
                    <h4 className="text-xl font-bold text-madrasa-green dark:text-emerald-400 mb-1">{dept.title}</h4>
                    <p className="text-madrasa-gold text-sm font-bold mb-4">{dept.range}</p>
                    <p className="text-gray-600 dark:text-gray-400">{dept.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Conclusion */}
            <div className="bg-madrasa-green dark:bg-[#064e3b] rounded-[50px] p-10 md:p-20 text-white text-center relative overflow-hidden transition-colors">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] opacity-10"></div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <Trophy className="w-16 h-16 text-madrasa-gold mx-auto mb-8" />
                <h3 className="text-3xl md:text-4xl font-bold mb-6">২০১৭ থেকে আজ পর্যন্ত আমাদের অর্জন:</h3>
                <p className="text-lg text-white/80 leading-relaxed mb-10">
                  বিগত বছরগুলোতে আমাদের প্রতিষ্ঠান থেকে অসংখ্য হাফেজ বের হয়ে দেশ ও বিদেশের বিভিন্ন প্রতিযোগিতায় সফলতার স্বাক্ষর রেখেছে। আমাদের রয়েছে উন্নত আবাসন ব্যবস্থা, স্বাস্থ্যসম্মত খাবার এবং নিরবচ্ছিন্ন নিরাপত্তা।
                </p>
                <div className="h-px w-full bg-white/20 mb-10"></div>
                <h4 className="text-2xl font-bold text-madrasa-gold mb-6">উপসংহার:</h4>
                <p className="text-xl leading-relaxed mb-12">
                  আপনার সন্তানের সুন্দর ভবিষ্যৎ এবং তাকে একজন আদর্শ মানুষ ও হাফেজে কুরআন হিসেবে দেখতে চাইলে আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা হতে পারে আপনার শ্রেষ্ঠ পছন্দ। কুরআনের পতাকাতলে আমরা আপনাকে ও আপনার সন্তানকে জানাই স্বাগতম।
                </p>
                <button 
                  onClick={() => navigateToPage('admission')}
                  className="px-12 py-5 bg-madrasa-gold text-madrasa-green font-black text-xl rounded-full hover:bg-white transition-all shadow-2xl"
                >
                  ভর্তি ফরম পূরণ করুন
                </button>
              </div>
            </div>
          </div>
        </main>

        <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 dark:border-gray-800">
          <p>&copy; ২০২৬ আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা। সর্বস্বত্ব সংরক্ষিত।</p>
        </footer>
      </motion.div>
    );
  }

  if (showAdmissionForm) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-madrasa-white dark:bg-[#0a0a0a] font-sans transition-colors"
      >
        {/* Simplified Header for Form Page */}
        <header className="bg-madrasa-green dark:bg-[#064e3b] py-4 shadow-lg sticky top-0 z-50 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => resetPages()}>
              <Logo className="w-10 h-10 bg-white dark:bg-[#1a1a1a] rounded-full p-1" scrolled={true} />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => resetPages()}
                className="text-white hover:text-madrasa-gold flex items-center gap-2 font-medium transition-colors"
              >
                <Home className="w-5 h-5" /> হোমে ফিরুন
              </button>
            </div>
          </div>
        </header>

        <main className="py-12 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-2xl border border-madrasa-gold/20 dark:border-emerald-900/50 overflow-hidden transition-colors"
          >
            <div className="bg-madrasa-green dark:bg-[#064e3b] p-8 text-center text-white transition-colors">
              <GraduationCap className="w-12 h-12 text-madrasa-gold mx-auto mb-4" />
              <h1 className="text-3xl font-bold">ভর্তি আবেদন ফরম</h1>
              <p className="text-white/70 mt-2">অনুগ্রহ করে নিচের তথ্যগুলো সঠিকভাবে পূরণ করুন</p>
            </div>

            <form className="p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); alert('আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসায় ভর্তি করায় আপনাকে ধন্যবাদ।'); setShowAdmissionForm(false); }}>
              {/* Student Type Toggle */}
              <div className="flex flex-col items-center mb-8">
                <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400 mb-4">পাসপোর্ট সাইজের ছবি আপলোড করুন *</label>
                <div className="relative group">
                  <div className="w-32 h-40 bg-gray-50 dark:bg-[#0a0a0a] border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl flex flex-col items-center justify-center overflow-hidden transition-all group-hover:border-madrasa-gold">
                    {admissionPhoto ? (
                      <img src={admissionPhoto} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <>
                        <Camera className="w-8 h-8 text-gray-300 dark:text-gray-700 mb-2" />
                        <span className="text-[10px] text-gray-400 dark:text-gray-600 font-medium">ছবি নির্বাচন করুন</span>
                      </>
                    )}
                  </div>
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => setAdmissionPhoto(reader.result as string);
                        reader.readAsDataURL(file);
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer" 
                    required
                  />
                  {admissionPhoto && (
                    <button 
                      type="button"
                      onClick={() => setAdmissionPhoto(null)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <p className="text-[10px] text-gray-400 dark:text-gray-600 mt-2">সর্বোচ্চ ২ মেগাবাইট (JPG, PNG)</p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 dark:bg-[#0a0a0a] p-1 rounded-2xl flex w-full max-w-[300px]">
                  <button
                    type="button"
                    onClick={() => setStudentType('new')}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${studentType === 'new' ? 'bg-madrasa-green text-white shadow-md' : 'text-gray-500 hover:text-madrasa-green dark:text-gray-400'}`}
                  >
                    নতুন
                  </button>
                  <button
                    type="button"
                    onClick={() => setStudentType('old')}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all ${studentType === 'old' ? 'bg-madrasa-green text-white shadow-md' : 'text-gray-500 hover:text-madrasa-green dark:text-gray-400'}`}
                  >
                    পুরাতন
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">শিক্ষার্থীর নাম *</label>
                  <input required type="text" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all" placeholder="নাম লিখুন" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">শিক্ষাবর্ষ *</label>
                  <select required className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all">
                    <option value="">নির্বাচন করুন</option>
                    {Array.from({ length: 2050 - 2024 + 1 }, (_, i) => {
                      const year = 2024 + i;
                      const nextYear = year + 1;
                      const bengaliYear = year.toLocaleString('bn-BD', { useGrouping: false });
                      const bengaliNextYear = nextYear.toLocaleString('bn-BD', { useGrouping: false });
                      return (
                        <option key={year} value={`${year}-${nextYear}`}>
                          {bengaliYear}-{bengaliNextYear}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">পিতার নাম *</label>
                  <input required type="text" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all" placeholder="পিতার নাম লিখুন" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">বিভাগ নির্বাচন করুন *</label>
                  <select 
                    required 
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all"
                  >
                    <option value="">নির্বাচন করুন</option>
                    <option value="nurnai">নূরানি বিভাগ</option>
                    <option value="nazera">নাজেরা বিভাগ</option>
                    <option value="hifz">হিফজ বিভাগ</option>
                  </select>
                </div>
              </div>

              <AnimatePresence>
                {selectedDept === 'nurnai' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 overflow-hidden"
                  >
                    <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">শ্রেণি নির্বাচন করুন (নূরানী বিভাগ) *</label>
                    <select required className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all">
                      <option value="">শ্রেণি নির্বাচন করুন</option>
                      <option value="play">প্লে</option>
                      <option value="nursery">নার্সারী</option>
                      <option value="class1">প্রথম শ্রেণি</option>
                      <option value="class2">দ্বিতীয় শ্রেণি</option>
                      <option value="class3">তৃতীয় শ্রেণি</option>
                    </select>
                  </motion.div>
                )}

                {selectedDept === 'nazera' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 overflow-hidden"
                  >
                    <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">শ্রেণি নির্বাচন করুন (নাজেরা বিভাগ) *</label>
                    <select required className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all">
                      <option value="">শ্রেণি নির্বাচন করুন</option>
                      <option value="class4">চতুর্থ শ্রেণি</option>
                      <option value="class5">পঞ্চম শ্রেণি</option>
                    </select>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">মাতার নাম *</label>
                  <input required type="text" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all" placeholder="মাতার নাম লিখুন" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">জন্ম তারিখ *</label>
                  <input required type="date" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">মোবাইল নম্বর *</label>
                <input required type="tel" className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all" placeholder="০১৭XXXXXXXX" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-madrasa-green dark:text-emerald-400">বর্তমান ঠিকানা *</label>
                <textarea required rows={3} className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] text-gray-700 dark:text-gray-300 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all" placeholder="পূর্ণ ঠিকানা লিখুন"></textarea>
              </div>

              {/* Conditional Fields Based on Student Type */}
              <motion.div 
                key={studentType}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-6 pt-4 border-t border-gray-100 dark:border-gray-800"
              >
                {studentType === 'new' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-madrasa-green">পূর্বে যে প্রতিষ্ঠানে পড়েছে *</label>
                      <input required type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all" placeholder="প্রতিষ্ঠানের নাম" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-madrasa-green">পূর্বে যে পরীক্ষার প্রাপ্ত নম্বর *</label>
                      <input required type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all" placeholder="প্রাপ্ত নম্বর" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-madrasa-green">বার্ষিক/বোর্ড পরীক্ষায় প্রাপ্ত নম্বর *</label>
                    <input required type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:border-madrasa-gold focus:ring-2 focus:ring-madrasa-gold/20 outline-none transition-all" placeholder="প্রাপ্ত নম্বর" />
                  </div>
                )}
              </motion.div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button type="submit" className="flex-1 py-4 bg-madrasa-green text-white font-bold rounded-xl hover:bg-madrasa-gold transition-all shadow-lg">
                  আবেদন জমা দিন
                </button>
                <button type="button" onClick={() => setShowAdmissionForm(false)} className="flex-1 py-4 border-2 border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all">
                  বাতিল করুন
                </button>
              </div>
            </form>
          </motion.div>
        </main>

        <footer className="py-8 text-center text-gray-400 text-sm">
          <p>&copy; ২০২৬ আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা।</p>
        </footer>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-[#f0f9f6]">
      {/* Top Bar */}
      <div className="bg-[#f8fdfb] dark:bg-[#121212] border-b border-gray-100 dark:border-gray-800 py-2 hidden md:block transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-6">
            <a href="tel:+8801948643520" className="flex items-center gap-1 hover:text-madrasa-green transition-colors">
              <Phone className="w-3 h-3 text-madrasa-green" /> +৮৮০১৯৪৮-৬৪ ৩৫ ২০
            </a>
            <a href="mailto:info@as-siddiq.com" className="flex items-center gap-1 hover:text-madrasa-green transition-colors">
              <Mail className="w-3 h-3 text-madrasa-green" /> info@as-siddiq.com
            </a>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-madrasa-green transition-colors">
            <Globe className="w-3 h-3" /> English
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-[#121212] shadow-md py-2' : 'bg-white dark:bg-[#121212] py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
              <Logo className="w-12 h-12" scrolled={false} />
            </div>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center space-x-4">
              <nav className="flex space-x-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="flex items-center gap-2 px-3 py-2 text-[13px] font-medium text-gray-700 dark:text-gray-300 hover:text-madrasa-green hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-all"
                  >
                    <span className="text-madrasa-green/50">{link.icon}</span>
                    {link.name}
                  </button>
                ))}
              </nav>
              
              <div className="flex items-center gap-3">
              </div>
            </div>

            {/* Mobile Menu Button & Hamburger */}
            <div className="flex items-center space-x-2 md:space-x-4 xl:hidden">
              <button 
                onClick={() => navigateToPage('login')}
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-madrasa-green text-white text-sm font-bold rounded-lg hover:bg-madrasa-gold transition-all"
                aria-label="লগইন"
              >
                <Users className="w-4 h-4" /> লগইন
              </button>
              <button 
                className="p-2 bg-madrasa-green text-white rounded-md hover:bg-opacity-90 transition-all focus:ring-2 focus:ring-madrasa-gold outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 xl:hidden"
                aria-hidden="true"
              />
              
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white dark:bg-[#1a1a1a] z-50 xl:hidden shadow-2xl flex flex-col"
              >
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-madrasa-green text-white">
                  <div className="flex items-center gap-2">
                    <Logo className="w-8 h-8 bg-white rounded-full p-1" scrolled={true} />
                    <span className="font-bold text-sm">মেনু নেভিগেশন</span>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors focus:ring-2 focus:ring-white outline-none"
                    aria-label="মেনু বন্ধ করুন"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-4">
                  <div className="px-4 space-y-1">
                    {navLinks.map((link, idx) => (
                      <motion.button
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                        className="flex items-center gap-4 w-full text-left px-4 py-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-madrasa-green rounded-xl transition-all border-b border-gray-50 dark:border-gray-800 last:border-0 active:scale-[0.98]"
                      >
                        <span className="text-madrasa-green/60">{link.icon}</span>
                        {link.name}
                      </motion.button>
                    ))}
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.05 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 w-full text-left px-4 py-4 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl transition-all active:scale-[0.98]"
                    >
                      <X className="w-5 h-5" /> মেনু বন্ধ করুন
                    </motion.button>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100 space-y-4">
                  <button 
                    onClick={() => navigateToPage('login')}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-madrasa-green text-white font-bold rounded-xl shadow-lg shadow-green-100"
                  >
                    <Users className="w-5 h-5" /> লগইন করুন
                  </button>
                  <button 
                    onClick={() => navigateToPage('admission')}
                    className="flex items-center justify-center gap-2 w-full py-4 border-2 border-madrasa-green text-madrasa-green font-bold rounded-xl"
                  >
                    <GraduationCap className="w-5 h-5" /> ভর্তি ফরম
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[600px] flex items-center bg-[#f0f9f6] dark:bg-[#0a0a0a] overflow-hidden pt-10 pb-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-300 mb-2">কুরআনের নূর ছড়িয়ে দেওয়ার এক অনন্য পথচলা,</h2>
              <h1 className="text-4xl md:text-6xl font-black text-[#064e3b] dark:text-emerald-400 mb-6 leading-tight">
                আস-সিদ্দিক ইন্টারন্যাশনাল <br /> হিফজ মাদরাসা
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                দ্বীনি শিক্ষার আলো ঘরে ঘরে পৌঁছে দেওয়ার লক্ষ্যে ২০১৭ সালে প্রতিষ্ঠিত হয় আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা। একদল নিষ্ঠাবান ও অভিজ্ঞ উলামায়ে কেরামের তত্ত্বাবধানে একটি আধুনিক ও আদর্শ শিক্ষা প্রতিষ্ঠান হিসেবে আমাদের এই যাত্রা শুরু। বিগত কয়েক বছর ধরে আমরা অত্যন্ত সফলতার সাথে শিক্ষার্থীদের মানসম্মত হিফজ ও আমলি তারবিয়ত প্রদান করে আসছি।
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <button 
                  onClick={() => navigateToPage('admission')}
                  className="px-10 py-3 bg-[#22c55e] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-lg shadow-green-100"
                >
                  ভর্তি ফরম
                </button>
              </div>

            </motion.div>

            {/* Right Illustration Slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block h-[320px]"
            >
              <div className="relative z-10 flex justify-center h-full items-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentHeroImage}
                    src={heroImages[currentHeroImage]} 
                    alt="Islamic Illustration" 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-sm drop-shadow-2xl opacity-90 rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>
              {/* Slider Dots */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentHeroImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${currentHeroImage === idx ? 'bg-madrasa-green w-6' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-100/50 dark:bg-emerald-900/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section (Brief) */}
      <section className="py-20 bg-madrasa-white dark:bg-[#0a0a0a] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">আমাদের বৈশিষ্ট্যসমূহ</h2>
            <div className="w-24 h-1 bg-madrasa-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, title: 'অভিজ্ঞ উস্তাদ', desc: 'দেশ-বিদেশের স্বনামধন্য হাফেজ ও আলেমদের তত্ত্বাবধানে পাঠদান।' },
              { icon: <Home className="w-8 h-8" />, title: 'আধুনিক ছাত্রাবাস', desc: 'ছাত্রদের জন্য উন্নত আবাসন ও স্বাস্থ্যসম্মত খাবারের সুব্যবস্থা।' },
              { icon: <Star className="w-8 h-8" />, title: 'মনোরম পরিবেশ', desc: 'কোলাহলমুক্ত ও পড়াশোনার জন্য অত্যন্ত উপযোগী সুন্দর ক্যাম্পাস।' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center"
              >
                <div className="w-16 h-16 bg-madrasa-green/10 dark:bg-emerald-900/20 text-madrasa-green dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-madrasa-green dark:text-emerald-400 mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => navigateToPage('about')}
              className="px-8 py-3 border-2 border-madrasa-green text-madrasa-green font-bold rounded-xl hover:bg-madrasa-green hover:text-white transition-all"
            >
              আমাদের সম্পর্কে আরও জানুন
            </button>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 bg-gray-50 dark:bg-[#121212] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">শিক্ষা বিভাগসমূহ</h2>
            <div className="w-24 h-1 bg-madrasa-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'নূরানি বিভাগ', desc: 'সহজ পদ্ধতিতে কুরআন শিক্ষার প্রাথমিক ধাপ।', onClick: () => navigateToPage('noorani') },
              { title: 'নাজেরা বিভাগ', desc: 'কুরআন শুদ্ধভাবে দেখে পড়ার নিবিড় প্রশিক্ষণ।', onClick: () => navigateToPage('nazera') },
              { title: 'হিফজ বিভাগ', desc: 'তাজবীদ সহকারে সম্পূর্ণ কুরআন মুখস্থ করার বিশেষ কোর্স।', onClick: () => navigateToPage('hifz') },
            ].map((dept, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-md border-b-4 border-madrasa-gold">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-madrasa-green dark:text-emerald-400">{dept.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{dept.desc}</p>
                  <button 
                    onClick={dept.onClick}
                    className="flex items-center text-madrasa-green dark:text-emerald-400 font-bold group-hover:text-madrasa-gold transition-colors"
                  >
                    বিস্তারিত দেখুন <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <section id="notice" className="py-20 bg-white dark:bg-[#0a0a0a] transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-madrasa-green dark:bg-[#064e3b]/90 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-madrasa-gold p-8 flex flex-col justify-center items-center text-madrasa-green">
              <Bell className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold text-center">নোটিশ বোর্ড</h2>
            </div>
            <div className="md:w-2/3 p-8">
              <div className="space-y-6">
                {[
                  { date: '১৫ এপ্রিল, ২০২৪', text: 'আগামী ২০ এপ্রিল থেকে নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু হবে।' },
                  { date: '১০ এপ্রিল, ২০২৪', text: 'পবিত্র ঈদুল ফিতর উপলক্ষে মাদরাসা ১০ দিন বন্ধ থাকবে।' },
                  { date: '০৫ এপ্রিল, ২০২৪', text: 'বার্ষিক পরীক্ষার ফলাফল প্রকাশিত হয়েছে।' },
                ].map((notice, idx) => (
                  <div key={idx} className="flex gap-4 items-start border-b border-white/10 pb-4 last:border-0">
                    <div className="min-w-[100px] text-sm font-bold text-madrasa-gold">{notice.date}</div>
                    <p className="text-white/90">{notice.text}</p>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => navigateToPage('notices')}
                className="mt-8 text-madrasa-gold font-bold hover:underline"
              >
                সকল নোটিশ দেখুন
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Section (Added for functionality) */}
      <section id="admission" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-madrasa-gold/20">
            <GraduationCap className="w-16 h-16 text-madrasa-gold mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-madrasa-green mb-4">ভর্তি চলছে!</h2>
            <p className="text-gray-600 mb-8">
              আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসায় নতুন শিক্ষাবর্ষে ভর্তি কার্যক্রম শুরু হয়েছে। 
              ভর্তি ফরম সংগ্রহ করতে বা বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।
            </p>
            <button 
              onClick={() => navigateToPage('admission')}
              className="px-10 py-4 bg-madrasa-green text-white font-bold rounded-full hover:bg-madrasa-gold transition-all shadow-lg"
            >
              ভর্তি ফরম পূরণ করুন
            </button>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-24 bg-white dark:bg-[#121212] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-madrasa-green dark:text-emerald-400 mb-4">আমাদের শিক্ষকবৃন্দ</h2>
            <p className="text-xl text-madrasa-gold font-medium">একদল নিষ্ঠাবান ও অভিজ্ঞ উলামায়ে কেরামের তত্ত্বাবধানে আমাদের পথচলা</p>
            <div className="w-24 h-1 bg-madrasa-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: 'মাওলানা আব্দুল হাই', 
                designation: 'প্রধান শিক্ষক', 
                education: 'কামিল (হাদীস), ঢাকা আলিয়া মাদরাসা',
                subjects: ['তাজবীদ', 'কিরাত', 'আখলাক'],
                bio: 'হিফজ ও তাজবীদ শাস্ত্রে দীর্ঘ ১৫ বছরের অভিজ্ঞতা সম্পন্ন। তিনি অসংখ্য হাফেজ তৈরির কারিগর।',
                photo: 'https://picsum.photos/seed/teacher1/300/300',
                social: { facebook: '#', youtube: '#', mail: 'mailto:abdulhai@example.com' }
              },
              { 
                name: 'হাফেজ মাওলানা ইব্রাহিম', 
                designation: 'সিনিয়র শিক্ষক (হিফজ)', 
                education: 'দাওরায়ে হাদীস, বেফাকুল মাদারিসিল আরাবিয়া',
                subjects: ['হিফজুল কুরআন', 'তাজবীদ'],
                bio: 'আন্তর্জাতিক হিফজ প্রতিযোগিতায় বিচারক হিসেবে দায়িত্ব পালন করেছেন এবং সুললিত কণ্ঠের অধিকারী।',
                photo: 'https://picsum.photos/seed/teacher2/300/300',
                social: { facebook: '#', youtube: '#' }
              },
              { 
                name: 'মাওলানা ইউসুফ আলী', 
                designation: 'সিনিয়র শিক্ষক (নূরানি)', 
                education: 'বি.এ (অনার্স), আরবী বিভাগ, ঢাকা বিশ্ববিদ্যালয়',
                subjects: ['নূরানি কায়দা', 'মাসয়ালা-মাসায়েল'],
                bio: 'শিশুদের মনস্তত্ত্ব ও নূরানি পদ্ধতিতে পাঠদানে বিশেষ পারদর্শী। তিনি দীর্ঘ ১০ বছর যাবৎ শিশুদের পাঠদান করছেন।',
                photo: 'https://picsum.photos/seed/teacher3/300/300',
                social: { facebook: '#', mail: 'mailto:yousuf@example.com' }
              },
              { 
                name: 'হাফেজ উসমান গণি', 
                designation: 'সহকারী শিক্ষক (নাজেরা)', 
                education: 'হিফজুল কুরআন ও তাজবীদ ডিপ্লোমা',
                subjects: ['নাজেরা', 'তাজবীদ'],
                bio: 'বিশুদ্ধ তিলাওয়াত ও ছাত্রদের নিবিড় তত্ত্বাবধানে নিবেদিতপ্রাণ। তিনি ছাত্রদের পাঠোন্নতিতে বিশেষ যত্নশীল।',
                photo: 'https://picsum.photos/seed/teacher4/300/300',
                social: { facebook: '#', youtube: '#' }
              }
            ].map((teacher, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full"
              >
                <div className="aspect-[4/5] overflow-hidden relative shrink-0">
                  <img 
                    src={teacher.photo} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-madrasa-green/90 via-madrasa-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="flex justify-center gap-4 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {teacher.social.facebook && (
                        <a href={teacher.social.facebook} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-madrasa-green transition-all">
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {teacher.social.youtube && (
                        <a href={teacher.social.youtube} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-600 transition-all">
                          <Youtube className="w-5 h-5" />
                        </a>
                      )}
                      {teacher.social.mail && (
                        <a href={teacher.social.mail} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-madrasa-gold transition-all">
                          <Mail className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-madrasa-green mb-1">{teacher.name}</h3>
                  <p className="text-madrasa-gold font-bold text-xs mb-2">{teacher.designation}</p>
                  <p className="text-gray-500 text-[11px] font-medium mb-4 leading-tight">{teacher.education}</p>
                  
                  <p className="text-gray-600 text-xs leading-relaxed mb-6 line-clamp-3">
                    {teacher.bio}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <p className="text-[9px] uppercase tracking-widest text-gray-400 font-black mb-3">বিশেষজ্ঞ (Expertise)</p>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {teacher.subjects.map((subject, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 bg-emerald-50 text-madrasa-green text-[10px] font-bold rounded-full border border-emerald-100 shadow-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-madrasa-green dark:bg-[#042f24] text-white pt-20 pb-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* About */}
            <div>
              <div className="mb-6">
                <Logo className="w-12 h-12 shadow-md rounded-full" scrolled={true} />
              </div>
              <p className="text-white/70 leading-relaxed">
                একটি আধুনিক ও মানসম্মত দ্বীনি শিক্ষা প্রতিষ্ঠান। আমরা ছাত্রদের নৈতিক ও আধ্যাত্মিক বিকাশে প্রতিশ্রুতিবদ্ধ।
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-madrasa-gold">লিঙ্কসমূহ</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className="text-white/70 hover:text-madrasa-gold transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-madrasa-gold">যোগাযোগ</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-madrasa-gold shrink-0" />
                  <span className="text-white/70">স্প্রিং ট্রেড মিলের পশ্চিমপার্শ্বে (৫ম তলা ভবন) কলেজ রোড, জিরানী বাজার, বিকেএসপি আশুলিয়া, সাভার, ঢাকা-১৩৪৫।</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-madrasa-gold shrink-0" />
                  <span className="text-white/70">+৮৮০১৯৪৮-৬৪ ৩৫ ২০</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-madrasa-gold shrink-0" />
                  <span className="text-white/70">info@as-siddiq.com</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-madrasa-gold">আমাদের সাথে থাকুন</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-madrasa-gold hover:text-madrasa-green transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-madrasa-gold hover:text-madrasa-green transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>&copy; ২০২৬ আস-সিদ্দিক ইন্টারন্যাশনাল হিফজ মাদরাসা। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
