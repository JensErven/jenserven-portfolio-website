"use client";
import Header from "@/components/Banner-Section/Banner";
import MySkills from "@/components/MySkills-Section/MySkills";
import MyProjects from "@/components/MyProjects-Section/MyProjects";
import Testimonials from "@/components/Testimonials-Section/Testimonials";
import Contact from "@/components/Contact-Section/Contact";
import ButtonHeader from "@/components/Shared/ButtonHeader";
import UnderDevelopment from "@/components/Shared/UnderDevelopment";
import { useState, useEffect } from "react";
import ProjectDetailsOverlay from "@/components/MyProjects-Section/ProjectDetailsOverlay";
import ButtonGoUp from "@/components/Shared/ButtonGoUp";
import { motion, useAnimation } from "framer-motion";
import NavBar from "@/components/Shared/NavBar";
import Banner from "@/components/Banner-Section/Banner";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState();
  const [showGoUpButton, setShowGoUpButton] = useState(false);
  const controls = useAnimation();
  const buttonVariants = {
    hidden: { opacity: 0, y: 100, scale: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust the threshold as needed
      const scrollThreshold = 200;

      if (scrollY > scrollThreshold) {
        controls.start({ opacity: 1 });
        setShowGoUpButton(true);
      } else {
        controls.start({ opacity: 0 });
        setShowGoUpButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);
  const openOverlay = () => {
    setIsOverlayOpen(true);

    // Implement the logic to open the overlay here
    // You can manage the overlay state in this component
  };

  const projectDetailsForOverlay = (project: any) => {
    setProjectDetails(project);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };
  return (
    <>
      {isOverlayOpen && (
        <ProjectDetailsOverlay
          isOverlayOpen={isOverlayOpen}
          onClose={closeOverlay}
          projectDetails={projectDetails}
        />
      )}
      <UnderDevelopment />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        transition={{ duration: 0.2, type: "spring", stiffness: 25 }}
        style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}
      >
        {showGoUpButton && <ButtonGoUp />}
      </motion.div>

      <main
        className={`relative md:mx-[10vw]  lg:mx-[15vw]  xl:mx-[15vw] 2xl:mx-[15w]  3xl:mx-[35vw] mx-4 overflow-hidden `}
      >
        <NavBar />
        <div className=" ">
          <section id="header-section">
            <Banner />
            <div className="flex flex-wrap gap-2">
              {" "}
              <a href="#my-projects-section">
                <ButtonHeader text="My Projects" />
              </a>
              <motion.button
                initial={{ opacity: 0, y: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
                transition={{
                  delay: 0.6,
                  ease: "ease",
                  duration: 0.15,
                  type: "spring",
                }}
                whileTap={{ scale: 0.9, y: 0 }}
                type="button"
                className="btn-cv flex  flex-row justify-center items-center gap-2 border border-1-white"
              >
                <a
                  className="flex flex-wrap gap-2"
                  download
                  href="/Resume-JensErven-EN.pdf"
                >
                  {" "}
                  <FaDownload size={20} fill={"white"} />
                  <p>CV</p>
                </a>
              </motion.button>
            </div>
          </section>
          <section>
            <MySkills />
          </section>
          <section id="my-projects-section">
            <MyProjects
              openOverlay={openOverlay}
              projectDetailsForOverlay={projectDetailsForOverlay}
            />
          </section>
          <section>
            <Testimonials />
          </section>
          <section id="contact-section">
            <Contact />
          </section>
        </div>
      </main>
    </>
  );
}
