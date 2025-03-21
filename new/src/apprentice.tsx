import React, { useState, useEffect } from 'react'
import {
  AlertCircle,
  Code,
  Github,
  Laptop,
  Brain,
  Terminal,
  Zap,
  Bot,
  Sparkles,
  Star,
  Monitor,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'

export const ApprenticeJobPosting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    github: '',
    yearsExperience: '',
    whyCoding: '',
    bestProject: '',
    chaosLevel: '5',
    aiExperience: '',
    vibeQuestion: '',
    timezone: '',
    workStyle: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStep, setFormStep] = useState(0); // 0: initial, 1: submitted form, 2: clicked continue button

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStep(1);
  };

  const openGoogleForm = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSemAMCVErG2icWBXkixTo4AoJdUJFVmCyZH3yrj58ib3GCzWg/viewform';
    
    const params = new URLSearchParams({
      'entry.324565557': formData.name,
      'entry.1981737297': formData.email,
      'entry.915528819': formData.phone,
      'entry.1791991058': formData.github,
      'entry.64324642': formData.yearsExperience,
      'entry.401171765': formData.whyCoding,
      'entry.1735843011': formData.bestProject,
      'entry.1209636748': formData.aiExperience,
      'entry.736513296': formData.timezone,
      'entry.720887943': formData.workStyle
    });
    
    window.open(`${googleFormUrl}?usp=pp_url&${params.toString()}`, '_blank');
    
    // Update the step to indicate they've clicked the button
    setFormStep(2);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto py-4 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-indigo-400" />
            <a
              href="https://dested.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xl hover:text-indigo-400 transition"
            >
              Sal Aiello
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#details"
              className="text-gray-400 hover:text-white transition"
            >
              Details
            </a>
            <a
              href="#faq"
              className="text-gray-400 hover:text-white transition"
            >
              FAQ
            </a>
            <a href="#apply" className="text-indigo-400 font-medium">
              Apply Now
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 px-6 bg-gray-900 border-b border-gray-800">
            <div className="flex flex-col space-y-4">
              <a
                href="#details"
                className="text-gray-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Details
              </a>
              <a
                href="#faq"
                className="text-gray-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#apply"
                className="text-indigo-400 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="max-w-6xl mx-auto py-16 px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-900/50 text-indigo-400 font-medium text-sm mb-6">
              Hiring Exactly One Person
            </div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Become My Coding{' '}
              <span className="text-indigo-400">Apprentice</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              After 20 years of building products, running the two biggest
              JavaScript meetups in Phoenix, and exiting multiple startups, I'm
              looking for a protégé who's ready to level up and build shit that
              matters. This is real work with real impact.
            </p>
            <div className="flex items-center mb-6 space-x-4">
              <a
                href="https://dested.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition flex items-center"
              >
                <Monitor className="h-5 w-5 mr-1.5" />
                <span>dested.com</span>
              </a>
              <a
                href="https://github.com/dested"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition flex items-center"
              >
                <Github className="h-5 w-5 mr-1.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/dested"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition flex items-center"
              >
                <Laptop className="h-5 w-5 mr-1.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/dested"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition flex items-center"
              >
                <Zap className="h-5 w-5 mr-1.5" />
                <span>Twitter</span>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#details"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-white font-medium rounded-lg transition"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="absolute -inset-1 bg-indigo-500 opacity-20 blur-xl rounded-lg"></div>
            <div className="relative bg-gray-900 p-5 sm:p-8 rounded-lg border border-gray-700">
              <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center mb-6 md:text-center lg:text-left">
                <div className="text-2xl font-bold text-white mb-2 sm:mb-0 sm:mr-4">
                  Paid Apprenticeship
                </div>
                <div className="flex items-center bg-green-900/60 px-4 py-2 rounded-lg text-green-400 text-sm font-medium self-center">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="font-bold text-base">
                    Salary: $9,000/month
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-900/60 px-4 py-2 rounded-lg text-gray-400 text-sm font-medium mb-6">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>US Only · PST Time Zone Recommended</span>
              </div>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-400 flex items-center">
                      <Terminal className="h-4 w-4 mr-2" />
                      Duration
                    </div>
                    <div className="font-medium text-white">
                      3 Months (1099)
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div className="text-gray-400 flex items-center">
                      <Monitor className="h-4 w-4 mr-2" />
                      Basic Requirements
                    </div>
                    <div className="font-medium text-white flex flex-col items-end">
                      <div className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mr-2"></span>
                        <span>3+ years experience</span>
                      </div>
                      <div className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mr-2"></span>
                        <span>Your own MacBook</span>
                      </div>
                      <div className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mr-2"></span>
                        <span>Thrive in chaos</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-400 flex items-center">
                      <Bot className="h-4 w-4 mr-2" />
                      Tech Stack
                    </div>
                    <div className="font-medium text-white text-right">
                      Backend, Frontend, React, Node,
                      <br />
                      TypeScript, Postgres, MongoDB, AI Tools
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 p-4 rounded-lg border border-gray-700 mb-6">
                <div className="flex">
                  <Zap className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-lg font-medium text-white mb-1">
                      Write More Code Than Ever
                    </div>
                    <p className="text-gray-300">
                      You will work directly with me on real products. You will
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <span className="inline-flex items-center text-sm text-gray-400">
                  <AlertCircle className="h-4 w-4 mr-1.5 text-indigo-400" />
                  Requires a passion for coding and AI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div id="details" className="mb-24">
          {/* What You'll Do */}
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-800">
            What You'll Do
          </h2>

          <div className="grid gap-10 lg:grid-cols-2 mb-16">
            <div>
              <h3 className="text-xl font-medium mb-4 flex items-center text-indigo-400">
                <Code className="h-5 w-5 mr-2" />
                Code at Scale
              </h3>
              <p className="text-gray-300 mb-4">
                This isn't hyperbole. As my apprentice, you'll be cranking out
                features for actual products used by thousands. You'll ship
                code daily and watch real users interact with your work within
                days, not months. I take on too many projects because I can't
                say no to exciting opportunities—now I need your help
                delivering them.{' '}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      AWS Cloud Architecture
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Design and deploy scalable infrastructure using Lambda,
                    S3, DynamoDB, and more
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      React Ecosystem
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Build with Next.js, React Query, Zustand, and other modern
                    React tools
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      Node.js Backend
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Create high-performance APIs with Express, and serverless
                    functions
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">API Design</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Craft intuitive, efficient, and secure REST and TRPC APIs
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      AI Integration
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Implement LLM-powered features using OpenAI, Anthropic,
                    and other AI platforms
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      Database Design
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Model data efficiently with PostgreSQL, MongoDB, and other
                    modern databases
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4 flex items-center text-indigo-400">
                <Bot className="h-5 w-5 mr-2" />
                Master AI-Augmented Development
              </h3>
              <p className="text-gray-300 mb-4">
                Learn to use the right tools at the right time to maximize
                your productivity. The world is a new place, and you need to
                know how to use AI to its fullest extent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                <div className="bg-gray-900/60 p-5 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      AI Prompt Engineering
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Craft precise prompts that generate high-quality,
                    production-ready code
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      AI Code Review
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Effectively evaluate and refine AI-generated solutions
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-medium mb-4 flex items-center text-indigo-400">
                <Monitor className="h-5 w-5 mr-2" />
                Daily Working Relationship
              </h3>
              <p className="text-gray-300 mb-4">
                This is an intensive, hands-on apprenticeship. Here's what to
                expect:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      Daily Pair Programming
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    2-3 hours of direct collaboration daily, solving real
                    problems together
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      Real-Time Code Reviews
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Immediate feedback on your code with detailed explanations
                    and best practices
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Mentorship */}
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-medium mb-4 flex items-center text-indigo-400">
                <Brain className="h-5 w-5 mr-2" />
                Structured Mentorship
              </h3>
              <p className="text-gray-300 mb-4">
                Like traditional apprenticeships, you'll benefit from:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      1:1 Weekly Reviews
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Regular feedback sessions to assess progress and adjust
                    learning path
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      Skill Tracking
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Clear milestones and competency benchmarks throughout the
                    program
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      Project Ownership
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Take full responsibility for features from design to
                    deployment
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-lg border border-gray-800">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-white font-medium">
                      Weekly Deep Dives
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Dedicated sessions exploring advanced topics and
                    architectural decisions
                  </p>
                </div>
              </div>
            </div>

            {/* Is This For You? */}

          </div>
        </div>

        <div  className="mb-24 ">
       
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-800">
                Is This For You?
              </h2>
              <div className="mb-24 grid gap-10 lg:grid-cols-2">


              <div >
                <h3 className="text-xl font-medium mb-4 flex items-center text-indigo-400">
                  <Github className="h-5 w-5 mr-2" />
                  Basic Requirements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-900/60 p-1.5 rounded text-indigo-400 mr-3 mt-0.5 flex-shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300">
                      3+ years of engineering experience
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-900/60 p-1.5 rounded text-indigo-400 mr-3 mt-0.5 flex-shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300">
                      React & TypeScript expertise
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-900/60 p-1.5 rounded text-indigo-400 mr-3 mt-0.5 flex-shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300">
                      Experience with AI tools (ChatGPT, Claude, GitHub Copilot)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-900/60 p-1.5 rounded text-indigo-400 mr-3 mt-0.5 flex-shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300">
                      GitHub full of projects
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-indigo-900/60 p-1.5 rounded text-indigo-400 mr-3 mt-0.5 flex-shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300">Your own MacBook</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-900/60 p-1.5 rounded text-red-400 mr-3 mt-0.5 flex-shrink-0">
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300 font-medium">
                      Must be passionate about coding and AI
                    </span>
                  </div>
                </div>
                

              </div>
              <div>
              
              <h3 className="text-xl font-medium mb-4 flex items-center text-indigo-400">
                    <Brain className="h-5 w-5 mr-2" />
                    About me
                  </h3>
                  <p className="text-gray-300 mb-4">
                    I've built and exited multiple startups, connected with
                    thousands of developers through running Phoenix's largest
                    JavaScript meetups, and reached a world-class level of
                    software engineering that most only dream of.
                  </p>
                  <p className="text-gray-300 mb-4">
                    I have reached the point in my career where I can't do it all.
                    I have a number of projects that I'm working on and I need
                    help.
                  </p></div> </div>
                  <div className="bg-gray-900 p-5 rounded-lg border border-gray-800 mb-8">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">
                        This apprenticeship is not for the faint of heart.
                      </p>
                      <p className="text-gray-300">
                        You will write code daily and ship features for real
                        products. You will have major responsibility and impact.
                      </p>
                    </div>
                  </div>
                </div>
            </div>

        <div id="faq" className="mb-24">
          <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-gray-800 flex items-center">
            <AlertCircle className="h-7 w-7 mr-3 text-indigo-400" />
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-3 text-white">
                Is this a real job?
              </h3>
              <p className="text-gray-300">
                Yes. This is full-time, paid work ($9k/month, 1099) building
                actual products for real customers. You'll be writing code that
                ships, not doing busywork or theoretical exercises.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-3 text-white">
                How many hours will I work?
              </h3>
              <p className="text-gray-300">
                At least 40 hours weekly. Sometimes more when we're in the zone
                or hitting deadlines. We don't count hours—we ship products. But
                I respect work-life balance and don't expect you to burn out.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-3 text-white">
                How many people are you hiring?
              </h3>
              <p className="text-gray-300">
                I'm hiring one person. This is a unique opportunity to be
                mentored by me and build products that are used by thousands of
                people.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-3 text-white">
                What do I get out of this apprenticeship?
              </h3>
              <p className="text-gray-300">
                Beyond the $27k compensation: skills most developers never
                acquire, a portfolio of shipped products, a connection to my
                network of founders and CTOs, and my personal referral for life.
                This is a career accelerator disguised as a job.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-3 text-white">
                Why are you worth working with?
              </h3>
              <p className="text-gray-300">
                I've run the two biggest JavaScript meetups in Phoenix, have
                thousands of industry connections, and operate at a world-class
                engineering level. I've built and exited multiple startups and
                know how to build products people actually want.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-3 text-white">
                What happens after the 3 months?
              </h3>
              <p className="text-gray-300">
                That depends on our mutual fit and business needs. Options
                include extending the contract, transitioning to a full-time
                role, referrals to my network, or even joining one of my startup
                ventures. Nothing is guaranteed beyond 3 months, but top
                performers always have opportunities.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-3 text-white">
                Why do you need an apprentice?
              </h3>
              <p className="text-gray-300">
                I take on too many exciting projects because I can't say no to
                great opportunities. I need someone who can match my energy and
                help me deliver on these commitments while maintaining the
                quality standards my clients and users expect.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-3 text-white">
                Can you provide references?
              </h3>
              <p className="text-gray-300">
                Yes, I'm happy to connect you with past colleagues, mentees, and
                industry leaders who can speak to my expertise and mentorship
                abilities. References will be provided during the interview
                process.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-3 text-white">
                What does a typical day look like?
              </h3>
              <p className="text-gray-300">
                We start with a morning standup to align on priorities. You'll
                spend 2-3 hours pair programming with me on complex problems,
                then work independently on assigned features with real-time
                support available. We end each day with a review of your code
                and learnings. You'll be shipping code to production within your
                first week.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div id="apply" className="relative">
          <div className="absolute -inset-1 bg-indigo-500 opacity-10 blur-xl rounded-lg"></div>
          <div className="relative bg-gray-900 p-8 md:p-10 rounded-lg border border-gray-700 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Sparkles className="h-6 w-6 mr-3 text-indigo-400" />
              Apply Now
            </h2>

            {formStep === 0 ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/40 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/40 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="github"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      GitHub Profile URL
                    </label>
                    <input
                      type="url"
                      id="github"
                      name="github"
                      required
                      value={formData.github}
                      onChange={handleChange}
                      className="w-full bg-black/40 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="yearsExperience"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    id="yearsExperience"
                    name="yearsExperience"
                    min="0"
                    required
                    value={formData.yearsExperience}
                    onChange={handleChange}
                    className="w-full bg-black/40 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="whyCoding"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Why do you love coding? What drives your passion for the
                    craft?
                  </label>
                  <textarea
                    id="whyCoding"
                    name="whyCoding"
                    rows={3}
                    required
                    value={formData.whyCoding}
                    onChange={handleChange}
                    className="w-full bg-black/40 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="bestProject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Describe your best project and why you're proud of it
                  </label>
                  <textarea
                    id="bestProject"
                    name="bestProject"
                    rows={3}
                    required
                    value={formData.bestProject}
                    onChange={handleChange}
                    className="w-full bg-black/40 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="aiExperience"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    How have you used AI in your development workflow? What
                    tools do you use?
                  </label>
                  <textarea
                    id="aiExperience"
                    name="aiExperience"
                    rows={3}
                    required
                    value={formData.aiExperience}
                    onChange={handleChange}
                    placeholder="Tell me about your experience with GitHub Copilot, ChatGPT, Claude, or other AI tools..."
                    className="w-full bg-black/40 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="timezone"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    What timezone are you in? (PST Recommended)
                  </label>
                  <input
                    type="text"
                    id="timezone"
                    name="timezone"
                    required
                    value={formData.timezone}
                    onChange={handleChange}
                    className="w-full bg-black/40 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="workStyle"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    How do you feel about intensive pair programming and daily
                    collaboration?
                  </label>
                  <textarea
                    id="workStyle"
                    name="workStyle"
                    rows={3}
                    required
                    value={formData.workStyle}
                    onChange={handleChange}
                    placeholder="Tell me about your experience with pair programming and your preferred working style..."
                    className="w-full bg-black/40 rounded-lg border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 px-6 rounded-lg transition duration-150 ease-in-out flex items-center justify-center text-lg"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Submit Application
                  </button>
                </div>
              </form>
            ) : formStep === 1 ? (
              <div className="bg-indigo-900/40 p-8 rounded-lg border border-indigo-800/50 text-center">
                <Sparkles className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-indigo-300 text-xl font-medium mb-3">
                  Almost Done!
                </h3>
                <p className="text-gray-300 max-w-lg mx-auto mb-6">
                  Your application information has been received! To complete your submission, 
                  you'll need to confirm it in a Google Form that will open when you click the button below.
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={openGoogleForm}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition flex items-center justify-center"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Continue to Final Step
                  </button>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  This opens a Google Form pre-filled with your information. You'll just need to review and submit.
                </p>
              </div>
            ) : (
              <div className="bg-indigo-900/40 p-8 rounded-lg border border-indigo-800/50 text-center">
                <Sparkles className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-indigo-300 text-xl font-medium mb-3">
                  Application Complete!
                </h3>
                <p className="text-gray-300 max-w-lg mx-auto">
                  Thank you for taking the time to apply. I carefully review every application personally, and if your 
                  experience and passion align with what I'm looking for, I'll reach out to you directly within the next week.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center text-sm text-indigo-300">
                    <Star className="h-4 w-4 text-indigo-400 mr-2" />
                    Looking forward to potentially working together!
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 mt-24">
        <div className="max-w-6xl mx-auto py-8 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-indigo-400" />
              <a
                href="https://dested.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-indigo-400 transition"
              >
                Sal Aiello
              </a>
            </div>
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a
                href="https://dested.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition flex items-center"
              >
                <Monitor className="h-5 w-5 mr-2" />
                <span>Portfolio</span>
              </a>
              <a
                href="https://github.com/dested"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition flex items-center"
              >
                <Github className="h-5 w-5 mr-2" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/dested"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition flex items-center"
              >
                <Laptop className="h-5 w-5 mr-2" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/dested"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition flex items-center"
              >
                <Zap className="h-5 w-5 mr-2" />
                <span>Twitter</span>
              </a>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} · Founder, Fractional CTO · Phoenix,
              USA
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
