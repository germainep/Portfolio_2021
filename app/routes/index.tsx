import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import diamond from "../images/diamond-luxe.png";

export const loader: LoaderFunction = async () => {
  return json([
    {
      id: 1,
      name: "Diamond Luxe Detailing",
      description: "Diamond Luxe Detailing website",
      image: diamond,
    },
  ]);
};
export default function Home() {
  const projects = useLoaderData();
  return (
    <div>
      <div className="container grid md:grid-cols-2  mx-auto">
        <div className="mx-auto px-4 mt-44">
          <h1 className="text-6xl text-primary  mx-auto">Germaine P</h1>
          <h2 className="text-4xl text-secondary font-medium mb-36 mx-auto">
            Full-Stack Software Engineer
          </h2>
          <p className="text-white text-xl md:w-2/3 md:mx-0 mx-auto px-2">
            Hi, Thanks for visiting. I’m Germaine, a 36 year old Full Stack Web
            Developer. I build interfaces using Javascript technology stacks
            (any javascript stack). I currently work freelance but I’m open to
            the right staff position. For more information download my resume
            below.
          </p>
          <button className="bg-primary hover:bg-secondary py-1 px-2 rounded-lg text-lg mt-16 w-32 h-10 drop-shadow-md">
            Resume
          </button>
        </div>
        <div className="container mx-auto mt-24">
          <h2 className="text-center text-primary text-6xl">Recent Projects</h2>
          <div className="grid grid-flow-row">
            {projects.map((project) => (
              <div key={project.id} className="my-10 rounded mx-auto w-64">
                <img src={project.image} alt={project.title} />
                <p className="text-white">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
