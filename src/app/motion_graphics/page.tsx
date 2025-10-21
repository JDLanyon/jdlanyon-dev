import GeneratePanels from "@/app/components/panel";
import { MOTION_GRAPHICS } from "@/app/project_data"
import Button from "@/app/components/button";
import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";



export default function MotionGraphics() {
  return (
    <section className="min-h-[100vh] flex flex-col">
      <Nav />
      <div id="content" className="px-32 py-8 mt-16">
        <div className="flex gap-4 w-full mx-auto items-center justify-center">
          <Button text="Snippets" href="#snippets" />
          <Button text="Full Projects" href="#full_projects" />
        </div>
        <h2 id="snippets">Snippets</h2>
        <GeneratePanels category="motion_graphics" sub_category="snippets" panel_data={MOTION_GRAPHICS.SNIPPETS} />
        <h2 id="full_projects">Full Projects</h2>
        <GeneratePanels category="motion_graphics" sub_category="full_projects" panel_data={MOTION_GRAPHICS.FULL_PROJECTS} />
      </div>
      <Footer />
    </section>
  );
}
