import React from 'react';
import '../App.css';

const icons = [
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        alt: "Python",
        label: "Python",
        group: "Languages",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        alt: "C++",
        label: "C++",
        group: "Languages",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        alt: "React",
        label: "React",
        group: "Frameworks",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-plain.svg",
        alt: "Streamlit",
        label: "Streamlit",
        group: "Frameworks",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
        alt: "PostgreSQL",
        label: "PostgreSQL",
        group: "Databases",
    },
    {
        src: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/refs/heads/main/PNG/Icon-Obsolete2020Black.png",
        alt: "Power BI",
        label: "Power BI",
        group: "BI Tools",
    },
    {
        src: "https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000",
        alt: "Tableau",
        label: "Tableau",
        group: "BI Tools",
    },
];

const cloudIcons = [
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        alt: "AWS",
        label: "AWS",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        alt: "GCP",
        label: "GCP",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        alt: "Docker",
        label: "Docker",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        alt: "Linux",
        label: "WSL",
    },
    {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        alt: "GitHub",
        label: "GitHub",
    },
];

const mlBadges = [
    { label: "Predictive Modelling", className: "badge-success" },
    { label: "Forecasting", className: "badge-info" },
    { label: "Regression", className: "badge-warning" },
    { label: "Classification", className: "badge-accent" },
    { label: "LLM Fine tuning", className: "badge-primary" },
    { label: "Deep Learning", className: "badge-secondary" },
    { label: "RAG", className: "badge-error" },
    { label: "Prompt Engineering", className: "badge-neutral" },
    { label: "Vector databases", className: "badge-success" },
];

const About = () => (
    <div className="about-container py-8 px-4 bg-base-300 rounded-selector flex flex-col items-center justify-center">
        <div className="badge badge-primary my-3">
            <p>About Me! 🙋</p>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-2 text-center">
            Bridging Business & Data for Enterprise Growth
        </h2>
        <p className="text-lg text-center text-base-content mb-2">
            4+ years delivering data-driven solutions, ML, and analytics for enterprise clients.
        </p>
        <div className="w-full max-w-5xl flex flex-col gap-6 mt-8">
            {/* Row 1: Background & Programming Stack */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Background */}
                <div className="md:w-1/2 w-full">
                    <div className="card bg-black text-primary-content h-full">
                        <div className="card-body p-6">
                            <h2 className="card-title">Background</h2>
                            <p className="text-md">
                                Results-driven Data Scientist with 4+ years of consulting experience in leveraging advanced analytics, machine learning, and data engineering to deliver actionable insights and drive business value. Proven track record of leading and working across cross-functional teams, managing ML projects, and presenting technical findings to non-technical stakeholders.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Programming Stack */}
                <div className="md:w-1/2 w-full flex flex-col gap-6">
                    <div className="card bg-black text-primary-content h-full">
                        <div className="card-body p-6">
                            <h2 className="card-title">Programming Stack</h2>
                            <div className="flex flex-wrap gap-4 justify-center items-center mt-2">
                                {icons.map((icon, idx) => (
                                    <div key={icon.alt} className="flex flex-col items-center">
                                        <img src={icon.src} alt={icon.alt} className="w-10 h-10" />
                                        <span className="text-xs mt-1">{icon.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row 2: Cloud & ML */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Cloud Expertise & Tools */}
                <div className="md:w-1/2 w-full">
                    <div className="card bg-black text-primary-content h-full">
                        <div className="card-body p-6">
                            <h2 className="card-title">Cloud Expertise & Tools</h2>
                            <div className="grid grid-cols-4 gap-4 justify-center items-center mt-2">
                                {cloudIcons.map((icon) => (
                                    <div key={icon.alt} className="flex flex-col items-center">
                                        <img src={icon.src} alt={icon.alt} className="w-10 h-10" />
                                        <span className="text-xs mt-1">{icon.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* AI & Machine Learning */}
                <div className="md:w-1/2 w-full">
                    <div className="card bg-black text-primary-content h-full">
                        <div className="card-body p-6">
                            <h2 className="card-title">AI & Machine Learning</h2>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {mlBadges.map((badge) => (
                                    <span key={badge.label} className={`badge ${badge.className}`}>
                                        {badge.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <a
                    href="https://docs.google.com/document/d/14s7zxNZJKSjhxfcnbfWP9keBzsocHMrI/edit?usp=sharing&ouid=106899048833205989625&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-soft btn-warning  "
                >
                    Learn More About Me!
                </a>
            </div>
        </div>
    </div>
);

export default About;