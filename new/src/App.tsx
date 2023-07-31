import React, { ReactElement, useState } from 'react'
import projectData from './data/projects.json'
import resumeData from './data/resume.json'
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
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="space-y-5">
        <div className="shadow rounded-xl overflow-hidden">
          <div
            className="h-32 bg-cover"
            style={{ backgroundImage: "url('/assets/sal.jpg')" }}
          ></div>
          <div className="pt-14 p-7 bg-white relative">
            {/*<span className="status-badge bg-gray-400">Busy</span>*/}
            <a href="/">
              <img src="/assets/sal.jpg" alt="Avatar" className="user-photo" />
            </a>
            <div className="text-lg font-semibold mb-1.5">Salvatore Aiello</div>
            <div className="text-sm text-gray-400 mb-7">
              Founder, Fractional CTO
            </div>
            <div className="flex group">
              <button className="download-btn">Download CV</button>
              <button className="download-btn-icon">
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
              </button>
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
                17 years
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
                <span className="skill-tag">{skill}</span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="space-y-5 lg:col-span-2">
        <div className="p-7 pb-0 block-section">
          <h2 className="block-title">About me</h2>
          <p className="text-gray-600 mb-5">
            With 17 years of professional engineering experience and nearly 10
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
          <div className="p-7 block-section gap-5 flex flex-col">
            <h2 className="block-title">Recent Experience</h2>
            {projectData.map((project, index) => (
              <div className="item-section">
                <div className="w-full space-y-5 border-b-2">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className={'flex flex-row items-center gap-2'}>
                        <a
                          href={project.url}
                          className="block text-2xl font-medium"
                        >
                          {project.name}, {project.title}
                        </a>
                        {project.endNote && (
                          <div className="job-item-badge">
                            {project.endNote}
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="item-header-info">
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
                  <p className="font-medium sm:mx-4 md:mx-8 text-center text-gray-600">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside">
                    {project.notes.map((note) => (
                      <li>{note}</li>
                    ))}
                  </ul>
                  <div className="my-4 italic text-right">
                    {project.tech.join(' ')}{' '}
                  </div>

                  <a
                    href={project.url}
                    className="block w-full pb-4 rounded-md overflow-hidden"
                  >
                    <img src={project.image} className={''} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedTab === 'toys' && (
          <div className="p-7 block-section gap-5 flex flex-col">
            <h2 className="block-title">Experience</h2>
            {toyData.map((project) => (
              <div className="item-section" key={project.title}>
                <div className="company-logo">
                  <img src={project.image} />
                </div>

                <div className="w-full space-y-5">
                  <div className="item-header">
                    <div className="space-y-1.5">
                      <div className="font-medium">{project.title}</div>
                      <div className="flex space-x-5">
                        {/*<div className="item-header-info">
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
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Blogger</span>
                        </div>*/}
                        {/*<div className="item-header-info">
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
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>London</span>
                        </div>*/}
                      </div>
                    </div>
                    <div className="space-y-2 sm:text-right">
                      {/*<div className="job-item-badge">Full time</div>*/}
                      <div className="item-header-info">
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
                        <span>December 2017 – March 2018</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedTab === 'blog' && (
          <div className="p-7 block-section">
            <h2 className="block-title">Experience</h2>
            <div className="mb-5 item-section">
              <div
                className="company-logo"
                style={{ backgroundColor: '#1DA1F2' }}
              >
                <i className="bx bxl-twitter text-3xl"></i>
              </div>

              <div className="w-full space-y-5">
                <div className="item-header">
                  <div className="space-y-1.5">
                    <div className="font-medium">Senior Developer</div>
                    <div className="flex space-x-5">
                      <div className="item-header-info">
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
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span>Twitter</span>
                      </div>
                      <div className="item-header-info">
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>London</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:text-right">
                    <div className="job-item-badge">Full time</div>
                    <div className="item-header-info">
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
                      <span>June 2019 – Present</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat
                  voluptatem voluptatibus enim voluptas necessitatibus. Aut
                  quasi sunt dolor. Commodi dolores saepe asperiores beatae
                  voluptate corporis est ea voluptatem. Enim quo sed et sint
                  aspernatur distinctio qui quam.
                </p>
                <div className="border-b border-gray-200"></div>
              </div>
            </div>

            <div className="mb-5 item-section">
              <div
                className="company-logo"
                style={{ backgroundColor: '#0061FF' }}
              >
                <i className="bx bxl-dropbox text-3xl"></i>
              </div>

              <div className="w-full space-y-5">
                <div className="item-header">
                  <div className="space-y-1.5">
                    <div className="font-medium">Middle Developer</div>
                    <div className="flex space-x-5">
                      <div className="item-header-info">
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
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span>Dropbox</span>
                      </div>
                      <div className="item-header-info">
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>London</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:text-right">
                    <div className="job-item-badge">Full time</div>
                    <div className="item-header-info">
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
                      <span>April 2018 – June 2019</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat
                  voluptatem voluptatibus enim voluptas necessitatibus. Aut
                  quasi sunt dolor. Commodi dolores saepe asperiores beatae
                  voluptate corporis est ea voluptatem. Enim quo sed et sint
                  aspernatur distinctio qui quam.
                </p>
                <div className="border-b border-gray-200"></div>
              </div>
            </div>

            <div className="item-section">
              <div
                className="company-logo"
                style={{ backgroundColor: '#FC4F08' }}
              >
                <i className="bx bxl-blogger text-3xl"></i>
              </div>

              <div className="w-full space-y-5">
                <div className="item-header">
                  <div className="space-y-1.5">
                    <div className="font-medium">Junior Developer</div>
                    <div className="flex space-x-5">
                      <div className="item-header-info">
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
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span>Blogger</span>
                      </div>
                      <div className="item-header-info">
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>London</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 sm:text-right">
                    <div className="job-item-badge">Full time</div>
                    <div className="item-header-info">
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
                      <span>December 2017 – March 2018</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat
                  voluptatem voluptatibus enim voluptas necessitatibus. Aut
                  quasi sunt dolor. Commodi dolores saepe asperiores beatae
                  voluptate corporis est ea voluptatem. Enim quo sed et sint
                  aspernatur distinctio qui quam.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function flattenArray<T>(arrays: T[][]): T[] {
  return Array.prototype.concat.apply([], arrays)
}
