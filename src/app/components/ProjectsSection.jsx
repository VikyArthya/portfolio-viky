"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "SMK Palapa Semarang",
    description: "A comprehensive school management system for SMK Palapa Semarang, built with Laravel Filament to manage student, teacher, and academic data.",
    image: "/images/projects/palapa.png",
    tag: ["all", "web_apps"],
  },
  {
    id: 2,
    title: "TJ Scraps Metal",
    description: "A scrap metal management system designed for TJ Scraps Metal, developed using Laravel Livewire to streamline operations.",
    image: "/images/projects/tjmetal.png",
    tag: ["all", "web_apps"],
  },
  {
    id: 3,
    title: "PT Mitra Karya Analitika",
    description: "A custom ERP system developed with CodeIgniter 3 to optimize business operations for PT Mitra Karya Analitika.",
    image: "/images/projects/mika.png",
    tag: ["all", "erp_systems"],
  },
  {
    id: 4,
    title: "PT Kota Jati Furniture",
    description: "Develop ERP system using Odoo 14 and customing module accounting, sales, inventory",
    image: "/images/projects/kjati.jpeg",
    tag: ["all", "erp_systems"],
  },
  {
    id: 5,
    title: "Yayasan Lembaga Alkitab Indonesia",
    description: "Develop Lembaga Alkitab Indonesia using odoo17 and custom module sales, inventory, purchase",
    image: "/images/projects/lai.jpeg",
    tag: ["all", "erp_systems"],
  },
  {
    id: 6,
    title: "PT Bangun Era Sejahtera Mandiri",
    description: "Develop BESM using Odoo14 and customing module purchase order, PO buyer, sales, and accounting",
    image: "/images/projects/besm.jpeg",
    tag: ["all", "erp_systems"],
  },
  {
    id: 7,
    title: "Subgrids",
    description: "An interactive web-based game developed for Subgrids, powered by Laravel to deliver a seamless and engaging player experience.",
    image: "/images/projects/subgrids.png",
    tag: ["all", "web_apps"],
  },
  {
    id: 8,
    title: "Jasa Raharja Jawa Tengah",
    description: "A centralized internal monitoring system for Jasa Raharja Central Java, built with Laravel Filament to streamline operations across all branches.",
    image: "/images/projects/jasaraharja.png",
    tag: ["all", "web_apps"],
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("all");
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
        <ProjectTag
          onClick={() => handleTagChange("all")}
          name="All"
          isSelected={tag === "all"}
        />
        <ProjectTag
          onClick={() => handleTagChange("erp_systems")}
          name="ERP"
          isSelected={tag === "erp_systems"}
        />
        <ProjectTag
          onClick={() => handleTagChange("web_apps")}
          name="Web"
          isSelected={tag === "web_apps"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
