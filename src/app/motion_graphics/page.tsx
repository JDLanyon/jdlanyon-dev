import { PanelsFromData } from "@/app/components/panel";
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
            <Button text="Full Projects" href="#full-projects" />
          </div>

        {/* <Panels heading="Snippets" category={MG_SNIPPETS} />
        <Panels heading="Full Projects" category={MG_FULL_PROJECTS} /> */}

        {/* TODO: Replace the project_data.tsx with dynamically searching in /public/ */}

        <PanelsFromData id="snippets" category="motion_graphics" sub_category="snippets" heading="Snippets" thumbnails_path="/motion_graphics/snippets/" data={MOTION_GRAPHICS.SNIPPETS} />
        <PanelsFromData id="full-projects" category="motion_graphics" sub_category="full_projects" heading="Full Projects" thumbnails_path="/motion_graphics/full_projects/" data={MOTION_GRAPHICS.FULL_PROJECTS} />
        
      </div>
      <Footer />
    </section>
  );
}
