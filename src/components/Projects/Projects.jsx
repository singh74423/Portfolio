import React from "react";
import ProjectCard from "./ProjectCard";

import LmsLogo from "../../../public/logo (1).png";
import Bookimage from "../../../public/abundant-collection-antique-books-wooden-shelves-generated-by-ai.jpg";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="px-6 md:px-24 py-16 flex flex-col items-center"
    >
      {/* CENTER HEADING */}
      <h1 className="text-2xl md:text-4xl font-bold mb-12 text-white text-center">
        Projects
      </h1>

      {/* CENTER GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
        <ProjectCard
          title="Learning Management System (LMS)"
          main="A full-stack LMS with admin panel, authentication using Clerk, and Stripe payment integration."
          demoLink="https://lms-frontend-nu-ten.vercel.app/"
          sourceLink="https://github.com/singh74423/LMS-Frontend"
          image={LmsLogo}
        />

        <ProjectCard
          title="Book Store Website"
          main="Authentication-based book store where only logged-in users can access all books."
          demoLink="https://rainbow-horse-e4fdb9.netlify.app/"
          sourceLink="https://github.com/singh74423/BookStoreAp"
          image={Bookimage}
        />
      </div>
    </section>
  );
};

export default Projects;
