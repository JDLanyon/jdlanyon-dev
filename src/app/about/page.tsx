import Image from "next/image";
import Link from 'next/link'

import Footer from "@/app/components/footer";
import Nav from "@/app/components/nav";


export default function About() {
  return (
    <section className="min-h-[100vh] flex flex-col">
      <Nav />
      <div id="content" className="px-8 py-12 lg:px-32 grow-1">

        <div className="grid grid-cols-1 md:grid-cols-6 items-start justify-items-center p-8 gap-8">
          <Image
              className="mx-auto w-full col-span-6 md:row-1 md:col-span-3 md:col-start-4 lg:col-span-2 lg:col-start-5"
              src="/Me.jpg"
              // layout="contain"
              width={1000}
              height={1000}
              // sizes="100vw"
              // style={{ width: '100%', height: 'auto' }} // optional
              alt="Photo of me"
            />
            <div className="w-full col-span-6 float-left md:row-1 md:col-start-1 md:col-span-3 md:col-end-4 lg:col-span-4">
              <h1>Thankyou for visiting my portfolio!</h1>
              <p>This site is built with Next.js with responsive minimal design in mind. More details can be found <Link href={`/programming/portfolio`} passHref className="font-bold underline">here!</Link></p>
              <br />
              <p>This site is continuously being developed and as a result there&apos;s still things missing, if there&apos;s any feedback or suggestions your have lease don&apos;t hesitate to contact me at <a href="mailto:jlany9@hotmail.com?subject=Portfolio%20feedback&body=Hi Jackson,<br/><br/>I%20was%20looking%20at%20your%20site," className="font-bold underline">email</a>:&gt;</p>
              <h1>Who I am</h1>
              <p>I&apos;m Jackson Lanyon, a 24 year old with a passion for multimedia, combining several skills to give more immersive interaction.</p>
              <p>Currently I&apos;m in my final year studying a <b>Bachelor of Interactive Environments at QUT</b>. Outside of study my focus is on motion graphics and recreational programming.</p>
              <h1>What I do</h1>
              <p>There&apos;s something truly nice about viewing programming as an artform and I hope to eventually represent that through various means.</p>
              <p>This includes anything from <b>Motion Graphics</b>, <b>Game development</b>, <b>Web Development</b>, <b>Graphic design</b> and hopefully more in the future!</p>
              <h1>Can I find a resume?</h1>
              <p>My resume can curently be found on <a
                  className="hover:underline hover:underline-offset-4 text-[var(--secondary)]"
                  href="https://www.linkedin.com/in/jdlanyon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >LinkedIn</a> but will be available here soon.</p>
            </div>
          </div>

        </div>
      <Footer />
    </section>
  );
}
