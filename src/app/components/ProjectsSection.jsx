"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Sitem Management SMK Palapa Semarang",
    description: "Aplikasi untuk mengelola data siswa, guru, dan pelajaran di SMK Palapa Semarang.",
    image: "/images/projects/loginpalapa.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "TJ Scraps Metal",
    description: "Aplikasi manajemen limbah logam untuk TJ Scraps Metal.",
    image: "/images/projects/tjmetal.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "INKINDO DKI",
    description: "aplikasi untuk mengelola data anggota INKINDO DKI.",
    image: "/images/projects/inkindo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Mitra Karya Analitika",
    description: "Aplikasi ERP untuk Mitra Karya Analitika.",
    image: "/images/projects/mika.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Subgrids",
    description: "Aplikasi web game untuk Subgrids.",
    image: "/images/projects/subgrids.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) => project.tag.includes(tag));
  console.log(filteredProjects);
  return (
    <>
      <h2>My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
