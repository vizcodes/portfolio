import React from 'react';

const projects = [
    {
        title: 'Real Estate Price Prediction',
        description: 'A Streamlit app that provides price estimates for real estate properties in Bengaluru.',
        image: 'https://bing.com/th/id/BCO.7ab7ff34-7cce-4357-85ca-cc514840b105.png',
        link: 'https://github.com/vizcodes/-Real-Estate-Price-Prediction',
    },
    {
        title: 'Customer Review Bot using LLMs',
        description: 'An LLM and RAG-powered tool for analyzing customer reviews of Walmart products.',
        image: 'https://bing.com/th/id/BCO.40f1cddc-94cf-42c1-a000-974c99263ac1.png',
        link: 'https://github.com/vizcodes/customer-voice',
    },
    {
        title: 'Goa Neighbourhood Recommender',
        description: 'A tool that suggests Goa neighbourhoods based on user preferences.',
        image: 'https://bing.com/th/id/BCO.2c853a5e-f5d0-41eb-b4ee-e09839c52ae4.png',
        link: 'https://www.linkedin.com/pulse/recommending-neighborhoods-goa-using-k-means-clustering-r-s-/',
    },
    {
        title: 'CS50 : Slot Royale Simulator',
        description: 'A CS50 final project: a web-based slot machine simulator with an admin dashboard for tracking profits and losses.',
        image: 'https://bing.com/th/id/BCO.87f6f9c4-edd3-42a6-9993-a585813d5114.png',
        link: 'https://github.com/vizcodes/Slot-Royale-CS50-Project',
    },
];

const Projects = () => {
  return (
    <section className="py-10 bg-base-200 rounded-selector my-2">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Projects</h2>
        <p className="text-lg text-center text-base-content mb-3 py-2">
            These are projects I have undertaken in the past during my off-hours.</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img src={project.image} alt={project.title} className="rounded-xl object-cover w-full h-72" />
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-lg">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
                <div className="card-actions mt-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
