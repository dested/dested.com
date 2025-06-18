import React from 'react'
import projectData from './data/projects.json'
import blogData from './data/blog.json'
import toyData from './data/toys.json'

export function App() {
  const allSkills = [...new Set(flattenArray(projectData.map((e) => e.tech)))]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/assets/sal-circle.jpg"
                alt="Salvatore Aiello"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Salvatore Aiello
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
              Founder & Fractional CTO
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              With 20 years of professional engineering experience and nearly 10 as CTO or Startup Founder, 
              I transform ideas into scalable products used by hundreds of thousands of users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="./assets/Salvatore Aiello Resume 2023.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a
                href="mailto:sal@dested.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-colors hover:bg-white/10"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Info Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">20+</div>
              <div className="text-gray-600">Years Engineering</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">8+</div>
              <div className="text-gray-600">Years as Founder</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100K+</div>
              <div className="text-gray-600">Users Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">Phoenix</div>
              <div className="text-gray-600">Arizona, USA</div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16 max-w-6xl">
        {/* About Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Story Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology Evolution Witness</h3>
                    <p className="text-gray-700 leading-relaxed">
                      I have witnessed the web transform from jQuery to React, from long-polling to WebSockets, 
                      PhoneGap to React Native, and from monolithic server-rendered websites to lean SPAs and back again.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Scale & Leadership</h3>
                    <p className="text-gray-700 leading-relaxed">
                      I have worked with or managed teams both small and large, built back-office tools for operations, 
                      deployed client-facing applications used by hundreds of thousands, and personally launched and 
                      exited numerous startups.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Hands-on "Wartime" CTO</h3>
                    <p className="text-gray-700 leading-relaxed">
                      I rapidly prototype business needs and bring those prototypes to production-ready, maintainable 
                      applications while ensuring we stay firmly on the path to product-market fit and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar Column */}
            <div className="space-y-8">
              {/* Connect Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:sal@dested.com"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    sal@dested.com
                  </a>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/dested"
                      className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <i className="bx bxl-github text-xl"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/dested"
                      className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <i className="bx bxl-linkedin text-xl"></i>
                    </a>
                    <a
                      href="https://twitter.com/dested"
                      className="flex items-center justify-center w-12 h-12 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                    >
                      <i className="bx bxl-twitter text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Languages</span>
                    <span className="font-semibold text-gray-900">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Projects Shipped</span>
                    <span className="font-semibold text-gray-900">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Startups Founded</span>
                    <span className="font-semibold text-gray-900">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Teams Led</span>
                    <span className="font-semibold text-gray-900">10+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* GitHub Activity Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">GitHub Activity</h3>
                  <p className="text-gray-600 text-sm">Recent contributions and coding activity</p>
                </div>
              </div>
              <a
                href="https://github.com/dested"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Profile
              </a>
            </div>
            
            {/* GitHub Contribution Graph */}
            <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
              <img 
                src="https://ghchart.rshah.org/dested" 
                alt="GitHub Contribution Chart" 
                className="w-full max-w-4xl mx-auto"
                style={{ minWidth: '700px' }}
              />
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Active contributor with consistent coding activity across personal and professional projects
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            {projectData.map((project, index) => (
              <div key={project.url} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          <a href={project.url} className="hover:text-blue-600 transition-colors">
                            {project.name}
                          </a>
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <span className="font-semibold">{project.title}</span>
                          <span className="mx-2">•</span>
                          <span>{project.startDate} – {project.endDate}</span>
                        </div>
                      </div>
                      {project.endNote && (
                        <span className="inline-flex px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                          {project.endNote}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {project.notes.map((note, noteIndex) => (
                        <li key={noteIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{note}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community & Speaking Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community & Speaking</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Phoenix React Meetup Organizer</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Currently leading the Phoenix React meetup community with nearly 3,000 members. 
                    Organizing monthly events, workshops, and networking opportunities for React developers.
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Phoenix, AZ • Current
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">React Conf 2019 Lightning Talk</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "Automagic TypeScript Codegen for GraphQL" - Presented advanced techniques for automatic 
                    TypeScript code generation from GraphQL schemas.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      October 2019
                    </div>
                    <a 
                      href="https://www.youtube.com/watch?v=UpFEtKkHxn4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      Watch Talk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        {/* <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {allSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full hover:bg-blue-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section> */}

        {/* Side Projects Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Side Projects & Experiments</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {toyData.map((project) => (
              <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p 
                    className="text-gray-600 mb-4 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.keywords.slice(0, 4).map((keyword) => (
                      <span
                        key={keyword}
                        className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.url && (
                      <a
                        href={project.url}
                        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Visit
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-700"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        {blogData.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Writing</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {blogData.map((post) => (
                <a
                  key={post.title}
                  href={post.url}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.summary}
                    </p>
                    <div className="text-sm text-gray-500">
                      {post.date}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ready to transform your idea into a scalable product? I'm available for fractional CTO roles, 
              technical consulting, and strategic advisory positions.
            </p>
            <a
              href="mailto:sal@dested.com"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://github.com/dested" className="text-gray-400 hover:text-white transition-colors">
                <i className="bx bxl-github text-2xl"></i>
              </a>
              <a href="https://linkedin.com/in/dested" className="text-gray-400 hover:text-white transition-colors">
                <i className="bx bxl-linkedin text-2xl"></i>
              </a>
              <a href="https://twitter.com/dested" className="text-gray-400 hover:text-white transition-colors">
                <i className="bx bxl-twitter text-2xl"></i>
              </a>
            </div>
            <p className="text-gray-400">
              © 2024 Salvatore Aiello. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function flattenArray<T>(arrays: T[][]): T[] {
  return Array.prototype.concat.apply([], arrays)
}
