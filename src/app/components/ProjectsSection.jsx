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
    tech: ["Laravel", "Filament", "MySQL", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "TJ Scraps Metal",
    description: "A scrap metal management system designed for TJ Scraps Metal, developed using Laravel Livewire to streamline operations.",
    image: "/images/projects/tjmetal.png",
    tag: ["all", "web_apps"],
    tech: ["Laravel", "Livewire", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    id: 3,
    title: "PT Mitra Karya Analitika",
    description: "A custom ERP system developed with CodeIgniter 3 to optimize business operations for PT Mitra Karya Analitika.",
    image: "/images/projects/mika.png",
    tag: ["all", "erp_systems"],
    tech: ["CodeIgniter 3", "MySQL", "jQuery", "Bootstrap"],
  },
  {
    id: 4,
    title: "PT Kota Jati Furniture",
    description: "Develop ERP system using Odoo 14 and customizing modules for accounting, sales, and inventory management.",
    image: "/images/projects/kjati.jpeg",
    tag: ["all", "erp_systems"],
    tech: ["Odoo 14", "Python", "PostgreSQL", "XML", "JavaScript"],
  },
  {
    id: 5,
    title: "Yayasan Lembaga Alkitab Indonesia",
    description: "Develop LAI system using Odoo 17 with custom modules for sales, inventory, and purchase management.",
    image: "/images/projects/lai.jpeg",
    tag: ["all", "erp_systems"],
    tech: ["Odoo 17", "Python", "PostgreSQL", "XML"],
  },
  {
    id: 6,
    title: "PT Bangun Era Sejahtera Mandiri",
    description: "Develop BESM ERP using Odoo 14 with customizing modules for purchase orders, PO buyer, sales, and accounting.",
    image: "/images/projects/besm.jpeg",
    tag: ["all", "erp_systems"],
    tech: ["Odoo 14", "Python", "PostgreSQL", "XML", "JavaScript"],
  },
  {
    id: 7,
    title: "Subgrids",
    description: "An interactive web-based game developed for Subgrids, powered by Laravel to deliver a seamless and engaging player experience.",
    image: "/images/projects/subgrids.png",
    tag: ["all", "web_apps"],
    tech: ["Laravel", "MySQL", "JavaScript", "CSS3", "HTML5"],
  },
  {
    id: 8,
    title: "Jasa Raharja Jawa Tengah",
    description: "A centralized internal monitoring system for Jasa Raharja Central Java, built with Laravel Filament to streamline operations across all branches.",
    image: "/images/projects/jasaraharja.png",
    tag: ["all", "web_apps"],
    tech: ["Laravel", "Filament", "MySQL", "Tailwind CSS", "REST API"],
  },
  {
    id: 9,
    title: "Masyarakat Coach Indonesia",
    description: "Structured and practical coaching class using WordPress",
    image: "/images/projects/mci.png",
    tag: ["all", "web_apps"],
    tech: ["WordPress", "Elementor" ],
  },
  {
    id: 10,
    title: "ProMeat Palembang",
    description: "Ecommerce website for meat products using WordPress WooCommerce",
    image: "/images/projects/promeat.png",
    tag: ["all", "web_apps"],
    tech: ["WordPress", "Elementor", "WooCommerce"],
  },
  {
    id: 11,
    title: "Flow Sublimation",
    description: "Clothing company profile website using WordPress",
    image: "/images/projects/flow.png",
    tag: ["all", "web_apps"],
    tech: ["WordPress", "Elementor" ],
  },
  {
    id: 12,
    title: "Portfolio Viky",
    description: "Personal portfolio website using Next JS and Tailwind CSS",
    image: "/images/projects/resume.png",
    tag: ["all", "web_apps"],
    tech: ["Next JS", "Tailwind CSS", "React JS", "Framer Motion" ],
  },
  {
    id: 13,
    title: "YukNabung",
    description: "Budget management application using Next JS and Tailwind CSS",
    image: "/images/projects/yuknabung.png",
    tag: ["all", "web_apps"],
    tech: ["Next JS", "Supabase", "Tailwind CSS", "Prisma" ],
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
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tech={project.tech}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
