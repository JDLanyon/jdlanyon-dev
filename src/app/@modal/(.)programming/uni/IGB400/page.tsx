import Image from "next/image";
import { Modal } from "@/app/components/modal";
import { Embed, LocalVideo } from "@/app/components/modal_elements";
import Button from "@/app/components/button";
import { SiGithub } from "@icons-pack/react-simple-icons";

// TODO: Props
export default async function Project() {
  return (
    <Modal>
      <div>
        {/* <div className="flex absolute left-4 top-4 transform">
          <Button text="View on GitHub" href="" target_blank><SiGithub /></Button>
        </div> */}
        <h1 className="text-center m-0 mb-8">Slime Arcade</h1>

        <div className="text-center my-2">
          <b><p>*volume warning* - check volume before playing.</p></b>
          <Embed uuid="j9XfWkBNZXA"/>
        </div>
      </div>
    </Modal>
  )
}