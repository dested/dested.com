import React, { ReactElement, useState } from 'react'
import projectData from './data/projects.json'
import blogData from './data/blog.json'
import toyData from './data/toys.json'

export function App() {
  const [selectedTab, setSelectedTab] = useState<'resume' | 'toys' | 'blog'>(
    'resume'
  )

  const tabs = [
    { name: 'resume', label: 'Resume' },
    { name: 'toys', label: 'Toys' },
    { name: 'blog', label: 'Blog' }
  ] as const
  return (
    <div className="grid gap-5 lg:grid-cols-3 main-container">
      <div className="space-y-5">
        <div className="shadow rounded-xl overflow-hidden">
          <div
            className="h-32 bg-cover"
            style={{ backgroundImage: "url('/assets/sal.jpg')" }}
          ></div>
          <div className="pt-14 p-7 bg-white relative">
            {/*<span className="status-badge bg-gray-400">Busy</span>*/}
            <a href="/">
              <img
                src="/assets/sal-circle.jpg"
                alt="Avatar"
                className="user-photo"
              />
            </a>
            <div className="text-lg font-semibold mb-1.5">Salvatore Aiello</div>
            <div className="text-sm text-gray-400 mb-7">
              Founder, Fractional CTO
            </div>
            <div className="flex group">
              <a
                href={'./assets/Salvatore Aiello Resume 2023.pdf'}
                download
                className="text-center block download-btn"
              >
                Download CV
              </a>
              <a
                href={'./assets/Salvatore Aiello Resume 2023.pdf'}
                download
                className="block download-btn-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="p-7 block-section">
          <h2 className="block-title">Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="text-gray-400">Location</div>
              <div className="font-medium text-right text-gray-600">
                Phoenix, USA
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-400">Engineer</div>
              <div className="font-medium text-right text-gray-600">
                20 years
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-400">Founder</div>
              <div className="font-medium text-right text-gray-600">
                8 years
              </div>
            </div>
          </div>
        </div>

        <div className="p-7 block-section flow-root">
          <h2 className="block-title">Skills</h2>
          <div className="-m-2 flex flex-wrap">
            {[...new Set(flattenArray(projectData.map((e) => e.tech)))].map(
              (skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="space-y-5 lg:col-span-2">
        <div className="p-7 pb-0 block-section">
          <h2 className="block-title">About me</h2>
          <p className="text-gray-600 mb-5">
            With 20 years of professional engineering experience and nearly 10
            as CTO or Startup Founder, I have seen it all. I watched the web
            transform from jQuery to React, from long-polling to web sockets,
            PhoneGap to React Native, and from monolithic server rendered
            websites to lean SPAs (and back!).
          </p>
          <p className="text-gray-600 mb-5">
            I have worked with or managed teams small and large, built
            back-office tools for operations, deployed client facing
            applications used by hundreds of thousands, and personally launched
            and exited numerous startups.
          </p>
          <p className="text-gray-600 mb-5">
            In my product and founder roles, I am the sole stakeholder making
            product decisions assuring that we are firmly on a path to product
            market fit and beyond. In my CTO roles I strive to be a hands on
            “wartime” CTO, rapid prototyping business needs and bringing those
            prototypes to production ready maintainable applications.
          </p>

          <div className="flex flex-col space-y-4">
            <a
              href="mailto:sal@dested.com"
              className="mail-link social-link-hover"
            >
              <i className="bx bx-at text-xl"></i>
              <span>sal@dested.com</span>
            </a>

            <ul className="flex space-x-5">
              <li>
                <a
                  href="https://github.com/dested"
                  className="social-link-hover"
                >
                  <i className="bx bxl-github text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/twitter"
                  className="social-link-hover"
                >
                  <i className="bx bxl-twitter text-2xl"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/dested"
                  className="social-link-hover"
                >
                  <i className="bx bxl-linkedin text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-200 my-5"></div>

          <ul className="flex space-x-8 font-medium">
            {tabs.map((tab, index) => (
              <li key={tab.name}>
                <button
                  onClick={() => setSelectedTab(tab.name)}
                  className={
                    selectedTab === tab.name
                      ? 'menu-link-active menu-link-hover'
                      : 'menu-link menu-link-hover'
                  }
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {selectedTab === 'resume' && (
          <div className="pt-3 gap-5 flex flex-col">
            {projectData.map((project, index) => (
              <div key={project.url} className="article-section">
                <div className="w-full space-y-5">
                  <div className="p-4">
                    <div className="item-header">
                      <div className="space-y-1.5">
                        <div className={'flex flex-row items-center gap-2'}>
                          <a
                            href={project.url}
                            className="block text-2xl font-medium"
                          >
                            {project.name}
                          </a>
                          {project.endNote && (
                            <div className="job-item-badge">
                              {project.endNote}
                            </div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="item-header-info">
                            <span className={'pr-2 text-gray-900'}>
                              {project.title}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>
                              {project.startDate} – {project.endDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div
                        className={
                          'font-medium sm:mx-4 w-2/3  md:mx-8 my-6 flex text-center text-gray-600'
                        }
                      >
                        {project.description}
                      </div>
                    </div>
                    <ul className="list-disc pl-4">
                      {project.notes.map((note) => (
                        <li className={'pl-4'} key={note}>
                          {note}
                        </li>
                      ))}
                    </ul>
                    <div className="my-4 italic text-right">
                      {project.tech.join(' ')}{' '}
                    </div>
                  </div>

                  <a href={project.url} className="article-img">
                    <img src={project.image} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'toys' && (
          <div className="gap-5 flex flex-col">
            {toyData.map((project) => (
              <div className="article-section " key={project.title}>
                <div className="space-y-3 mb-5 p-7 pb-0">
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <div className="flex space-x-5">
                    {project.url && (
                      <a href={project.url} className="item-header-info">
                        Website
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} className="item-header-info">
                        Github
                      </a>
                    )}
                  </div>
                  <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  ></p>

                  <p>
                    <div className="text-sm text-gray-400">
                      {project.keywords.join(' ')}
                    </div>
                  </p>
                </div>

                <div className="article-img">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedTab === 'blog' &&
          blogData.map((post) => (
            <a
              key={post.title}
              href={post.url}
              className="article-title-hover block"
            >
              <article className="article-section">
                <div className="space-y-3 mb-5 p-7 pb-0">
                  <h2 className="text-lg font-semibold">{post.title}</h2>

                  <p className="text-gray-600">{post.summary}</p>

                  <p>
                    <time className="text-sm text-gray-400">{post.date}</time>
                  </p>
                </div>

                <div className="article-img">
                  <img src={post.image} alt="" />
                </div>
              </article>
            </a>
          ))}
      </div>
    </div>
  )
}

function flattenArray<T>(arrays: T[][]): T[] {
  return Array.prototype.concat.apply([], arrays)
}
