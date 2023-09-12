import Image from "next/image";
import Header from "@/components/Header";
import MySkills from "@/components/MySkills";
import MyProjects from "@/components/MyProjects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <div className=" ">
        <section>
          <Header />
        </section>
        <section>
          <MySkills />
        </section>
        <section>
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
