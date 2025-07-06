import { Github, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="bg-black p-8 flex justify-between">
        <h3 className="text-white font-bold">Z-Geek©2025</h3>
        <div className="flex flex-row gap-2">
          <Instagram
            color="white"
            size={23}
            className="hover:scale-105 transition cursor-pointer"
          />
          <Github
            color="white"
            size={23}
            className="hover:scale-105 transition cursor-pointer"
          />
          <Linkedin
            color="white"
            size={23}
            className="hover:scale-105 transition cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
