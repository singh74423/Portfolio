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
      className="
        w-full max-w-[780px] mx-auto
        min-h-[320px] md:min-h-[300px]
        bg-[#0c0e19]
        rounded-2xl
        shadow-xl shadow-black/40
        grid grid-cols-1 md:grid-cols-2
        overflow-hidden
      "
    >
      {/* IMAGE SECTION */}
      <div className="w-full h-full bg-black flex items-center justify-center p-4">
        <img
          src={image}
          alt={title}
          className={`w-full h-full rounded-lg ${
            isLMS ? "object-contain" : "object-cover"
          }`}
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6 md:p-8 flex flex-col justify-between">
        <div>
          {/* TITLE */}
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </h3>

          {/* DESCRIPTION – moved slightly DOWN */}
          <p className="text-gray-300 mt-6 text-base leading-relaxed">
            {main}
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col gap-3 max-w-xs">
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="
              py-2.5 text-center
              bg-[#465697]
              rounded-full
              font-semibold text-white
              hover:bg-[#5a6acb]
              transition
            "
          >
            Live Demo
          </a>

          <a
            href={sourceLink}
            target="_blank"
            rel="noreferrer"
            className="
              py-2.5 text-center
              border border-[#465697]
              rounded-full
              text-[#9fa8da]
              hover:bg-[#465697]/10
              transition
            "
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
