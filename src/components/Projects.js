import React from "react";
import { projects } from "../data";
import '../App.css'


export default function Projects() {
    return (
      <section id="Projects" className="text-gray-400 bg-gray-900 body-font">
             <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black" id="AppsHeader">
              Apps
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center font-weight-normal" id="AppsInfo">
              These are a few applications I have built in the past.
            </p>
            </h1>

        <div className="container containerProjects px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20" >

          </div>
          <div className="flex flex-wrap -m-4" id='underline'>
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4">
              <div className="projectsBorder">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={process.env.PUBLIC_URL + project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }