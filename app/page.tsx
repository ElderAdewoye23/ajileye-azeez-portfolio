import Conversation from "@/components/Conversation";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import ProjectsOverview from "@/components/ProjectsOverview";
import Testimonials from "@/components/Testimonials";
import Tools from "@/components/Tools";


export default function Home() {
  return (
    <div>
<Navbar />
<div>
  <Hero />
  <Testimonials />
  <Portfolio />
  <Experience/>
  <ProjectsOverview />
  <Tools/>
  <Conversation />
</div>
    </div>
  );
}
