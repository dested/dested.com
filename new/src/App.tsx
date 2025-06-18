import React from 'react'
import projectData from './data/projects.json'
import blogData from './data/blog.json'
import toyData from './data/toys.json'

export function App() {
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null)
  const [activeSection, setActiveSection] = React.useState('intro')

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'work', 'community', 'experiments', 'writing']
      const scrollPosition = window.scrollY + 200
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      {/* Fixed Side Navigation */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-3">
          {[
            { id: 'intro', label: '00' },
            { id: 'work', label: '01' },
            { id: 'community', label: '02' },
            { id: 'experiments', label: '03' },
            { id: 'writing', label: '04' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-all ${
                activeSection === item.id
                  ? 'border-stone-900 bg-stone-900 text-white'
                  : 'border-stone-300 hover:border-stone-500'
              }`}
            >
              <span className="text-xs font-mono">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section - Minimalist */}
      <header id="intro" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-sm text-stone-500 mb-4">Phoenix, Arizona</p>
              <h1 className="text-6xl md:text-7xl font-light mb-6">
                Salvatore<br />
                <span className="font-semibold">Aiello</span>
              </h1>
              <div className="w-24 h-0.5 bg-stone-900 mb-8"></div>
              <p className="text-xl text-stone-700 mb-2">Founder & Fractional CTO</p>
              <p className="text-stone-600 mb-8 max-w-md">
                Twenty years building products. Ten years leading teams. 
                Currently helping startups find their technical path.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="./assets/Salvatore Aiello Resume 2023.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                >
                  <span className="mr-2">↓</span> Resume
                </a>
                <a
                  href="mailto:sal@dested.com"
                  className="inline-flex items-center px-6 py-3 border border-stone-900 hover:bg-stone-900 hover:text-white transition-all"
                >
                  Let's Talk
                </a>
              </div>
              
              {/* Social links */}
              <div className="flex gap-6 mt-12">
                <a href="https://github.com/dested" className="text-stone-400 hover:text-stone-900 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/dested" className="text-stone-400 hover:text-stone-900 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/dested" className="text-stone-400 hover:text-stone-900 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="/assets/sal.jpg"
                  alt="Salvatore Aiello"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute -bottom-4 -right-4 bg-stone-900 text-white p-6">
                  <p className="font-mono text-sm">20+ years</p>
                  <p className="text-2xl font-light">Building products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-stone-400 rounded-full p-1">
            <div className="w-1 h-2 bg-stone-400 rounded-full mx-auto animate-bounce"></div>
          </div>
        </div>
      </header>

      {/* About Section - Magazine Style */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
              <p className="text-3xl md:text-4xl font-light leading-relaxed mb-12">
                I've spent two decades watching the web evolve—from jQuery spaghetti to React elegance, 
                from FTP deployments to CI/CD pipelines, from "it works on my machine" to containerized everything.
              </p>
              
              <div className="space-y-8 text-lg text-stone-700">
                <p>
                  I've been the solo founder hustling at 3am, the tech lead managing big and small teams, 
                  and the CTO making company changing decisions. I've shipped products that flopped spectacularly 
                  and others that scaled to hundreds of thousands of users.
                </p>
                <p>
                  These days, I work as a fractional CTO—helping startups navigate the chaos of early-stage 
                  product development. I bring the scars of my own failed ventures and the playbooks from the successful ones.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <div className="border-l-2 border-stone-900 pl-6">
                  <h3 className="font-mono text-sm text-stone-500 mb-2">Quick Facts</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Founded 5 startups</li>
                    <li>• Shipped 50+ products</li>
                    <li>• Led teams from 2 to 50+</li>
                    <li>• React Conf 2019 speaker</li>
                    <li>• Phoenix React organizer</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-stone-900 pl-6">
                  <h3 className="font-mono text-sm text-stone-500 mb-2">GitHub Activity</h3>
                  <div className="bg-white p-3 rounded">
                    <img 
                      src="https://ghchart.rshah.org/171717/dested" 
                      alt="GitHub contributions" 
                      className="w-full opacity-75"
                    />
                  </div>
                  <a href="https://github.com/dested" className="text-sm text-stone-600 hover:text-stone-900 mt-2 inline-block">
                    View full profile →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section - Editorial Layout */}
      <section id="work" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-sm text-stone-500 mb-2">01 — Professional Work</p>
            <h2 className="text-5xl md:text-6xl font-light">
              Companies I've <span className="font-semibold italic">Built</span>
            </h2>
          </div>
          
          <div className="space-y-24">
            {projectData.map((project, index) => (
              <article 
                key={project.url} 
                className={`grid lg:grid-cols-12 gap-8 items-start ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.name)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`lg:col-span-5`}>
                  <div className="relative overflow-hidden bg-stone-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className={`w-full h-auto transition-transform duration-700 ${
                        hoveredProject === project.name ? 'scale-105' : ''
                      }`}
                    />
                    {project.endNote && (
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 text-sm font-mono">
                        {project.endNote}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`lg:col-span-7 `}>
                  <div className="mb-4">
                    <p className="font-mono text-sm text-stone-500">
                      {project.startDate} — {project.endDate}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-light mt-2">
                      {project.name}
                    </h3>
                    <p className="text-xl text-stone-600 mt-1">{project.title}</p>
                  </div>
                  
                  <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className={`space-y-3 mb-8 ${index % 2 === 1 ? 'text-right' : ''}`}>
                    {project.notes.map((note, noteIndex) => (
                      <li key={noteIndex} className={`flex items-start ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                        <span className={`text-stone-400 ${index % 2 === 1 ? 'ml-3' : 'mr-3'}`}>—</span>
                        <span className="text-stone-600">{note}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono border border-stone-300 text-stone-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.url && (
                    <a 
                      href={project.url}
                      className={`inline-flex items-center mt-6 text-stone-900 hover:underline ${
                        index % 2 === 1 ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <span className={index % 2 === 1 ? 'ml-2' : 'mr-2'}>Visit site</span>
                      <span>→</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section - Bold Typography */}
      <section id="community" className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-sm text-stone-400 mb-2">02 — Community</p>
            <h2 className="text-5xl md:text-6xl font-light">
              Giving <span className="font-semibold italic">Back</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-light mb-4">Phoenix React Meetup</h3>
                <p className="text-stone-300 text-lg leading-relaxed mb-6">
                  I organize Phoenix's largest React community with nearly 3,000 members. 
                  We meet monthly to share knowledge, network, and push each other to build better products.
                </p>
                <div className="flex items-center space-x-8 text-stone-400">
                  <div>
                    <p className="text-3xl font-light text-white">3,000</p>
                    <p className="text-sm">Members</p>
                  </div>
                  <div>
                    <p className="text-3xl font-light text-white">2017</p>
                    <p className="text-sm">Since</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-light mb-4">Conference Speaking</h3>
                <div className="bg-stone-800 p-8">
                  <p className="font-mono text-sm text-stone-400 mb-2">React Conf 2019</p>
                  <h4 className="text-2xl font-light mb-4">
                    "Automagic TypeScript Codegen for GraphQL"
                  </h4>
                  <p className="text-stone-300 mb-6">
                    Lightning talk on automatic code generation techniques that eliminate 
                    boilerplate and improve developer experience.
                  </p>
                  <a 
                    href="https://www.youtube.com/watch?v=UpFEtKkHxn4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white hover:text-stone-300"
                  >
                    <span className="mr-2">Watch talk</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side Projects - Editorial Cards */}
      <section id="experiments" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="font-mono text-sm text-stone-500 mb-2">03 — Experiments</p>
            <h2 className="text-5xl md:text-6xl font-light">
              Weekend <span className="font-semibold italic">Hacks</span>
            </h2>
            <p className="text-xl text-stone-600 mt-4 max-w-2xl">
              Side projects where I explore new tech, scratch creative itches, 
              and build things just for the hell of it.
            </p>
          </div>
          
          <div className="space-y-16">
            {toyData.map((project, index) => (
              <article 
                key={project.title} 
                className={`grid lg:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden bg-stone-100 aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-light mb-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div 
                    className="text-lg text-stone-700 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  
                  <div className={`flex flex-wrap gap-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-stone-900 hover:bg-stone-900 hover:text-white transition-all"
                      >
                        <span className="mr-2">Live Demo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                      >
                        <span className="mr-2">Source Code</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - Minimal Cards */}
      {blogData.length > 0 && (
        <section id="writing" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <p className="font-mono text-sm text-stone-500 mb-2">04 — Writing</p>
              <h2 className="text-5xl md:text-6xl font-light">
                Thoughts & <span className="font-semibold italic">Musings</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {blogData.map((post) => (
                <a
                  key={post.title}
                  href={post.url}
                  className="group block"
                >
                  <div className="aspect-video overflow-hidden bg-stone-100 mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-stone-500 mb-2">{post.date}</p>
                    <h3 className="text-2xl font-light mb-3 group-hover:underline">
                      {post.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section - Bold CTA */}
      <footer className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-8">
            Let's build something <span className="font-semibold italic">together</span>
          </h2>
          <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto">
            I'm available for fractional CTO roles, technical consulting, 
            and the occasional interesting project.
          </p>
          <a
            href="mailto:sal@dested.com"
            className="inline-flex items-center text-3xl md:text-4xl hover:underline"
          >
            sal@dested.com
          </a>
          
          <div className="mt-16 pt-16 border-t border-stone-800">
            <p className="text-stone-400 text-sm">
              © 2025 Salvatore Aiello. Built with React, TypeScript, and too much coffee.
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
