import Image from "next/image";
import Header from "@/components/Header";
import MySkills from "@/components/MySkills";
import MyProjects from "@/components/MyProjects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Link from "next/link"; // Import Link from Next.js
import ButtonHeader from "@/components/Shared/ButtonHeader";

export default function Home() {
  return (
    <main>
      <div className=" ">
        <section>
          <Header />
          <Link href="#my-projects-section" passHref>
            <ButtonHeader text="My Projects" />
          </Link>
        </section>
        <section>
          <MySkills />
        </section>

        <section id="my-projects-section">
          <MyProjects />
        </section>

        <section>
          <Testimonials />
        </section>

        <section>
          <Contact />
        </section>
      </div>
    </main>
  );
}
