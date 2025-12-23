import React from "react";

const ProjectCard = ({
  title,
  main,
  demoLink,
  sourceLink,
  image,
}) => {
  const isLMS = title.includes("LMS");

  return (
    <div
      className="w-full min-h-[420px]
                 bg-[#0c0e19]
                 rounded-2xl
                 shadow-xl shadow-black/40
                 grid grid-cols-1 md:grid-cols-2
                 overflow-hidden"
    >
      {/* IMAGE SECTION */}
      <div className="w-full h-full bg-black flex items-center justify-center p-6">
        <img
          src={image}
          alt={title}
          className={`w-full h-full rounded-lg ${
            isLMS
              ? "object-contain"   // ✅ LMS logo fully visible
              : "object-cover"     // ✅ Book image nicely cropped
          }`}
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="p-12 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="text-gray-300 mt-6 text-lg leading-relaxed">
          {main}
        </p>

        <div className="mt-10 flex flex-col gap-4 max-w-sm">
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="py-3 text-center
                       bg-[#465697]
                       rounded-full
                       font-semibold text-white
                       hover:bg-[#5a6acb] transition"
          >
            Live Demo
          </a>

          <a
            href={sourceLink}
            target="_blank"
            rel="noreferrer"
            className="py-3 text-center
                       border border-[#465697]
                       rounded-full
                       text-[#9fa8da]
                       hover:bg-[#465697]/10 transition"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
