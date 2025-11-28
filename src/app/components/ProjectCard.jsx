import React, { useState } from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="group cursor-pointer" onClick={openModal}>
        <div className="h-52 md:h-54 rounded-t-xl relative overflow-hidden" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
          <div className="absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
          <div className="absolute inset-0 transform scale-100 group-hover:scale-105 transition-transform duration-300 ease-out" style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}></div>
        </div>
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 group">
          <h5 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-3xl font-bold"
            >
              ×
            </button>
            <img
              src={imgUrl}
              alt={title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{title}</h3>
              <p className="text-gray-300 mt-2">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
