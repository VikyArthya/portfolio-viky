"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Sitem Management SMK Palapa Semarang",
    description: "Aplikasi untuk mengelola data siswa, guru, dan pelajaran di SMK Palapa Semarang.",
    image: "/images/projects/palapa.png",
    tag: ["All", "Web"],
    gitUrl: "#projects",
    previewUrl: "https://palapa.obji.dev",
  },
  {
    id: 2,
    title: "TJ Scraps Metal",
    description: "Aplikasi manajemen limbah logam untuk TJ Scraps Metal.",
    image: "/images/projects/tjmetal.png",
    tag: ["All", "Web"],
    gitUrl: "#projects",
    previewUrl: "https://tjsscrapmetal.com/",
  },
  {
    id: 3,
    title: "INKINDO DKI",
    description: "aplikasi untuk mengelola data anggota INKINDO DKI.",
    image: "/images/projects/inkindo.png",
    tag: ["All", "Web"],
    gitUrl: "#projects",
    previewUrl: "https://inkindo-dki.org/",
  },
  {
    id: 4,
    title: "Mitra Karya Analitika",
    description: "Aplikasi ERP untuk Mitra Karya Analitika.",
    image: "/images/projects/mika.png",
    tag: ["All", "Web"],
    gitUrl: "#projects",
    previewUrl: "https://erlenmeyer.co.id",
  },
  {
    id: 5,
    title: "Subgrids",
    description: "Aplikasi web game untuk Subgrids.",
    image: "/images/projects/subgrids.png",
    tag: ["All", "Web"],
    gitUrl: "#projects",
    previewUrl: "https://subgrids.com/",
  },
  {
    id: 6,
    title: "Investor Profile",
    description: "Aplikasi untuk mengelola data investor Property Rumah.",
    image: "/images/projects/investorprofile.png",
    tag: ["All", "Web"],
    gitUrl: "#projects",
    previewUrl: "https://investorprofile.com.au/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
