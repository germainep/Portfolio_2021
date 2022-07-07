import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Card from "~/components/Card";

import type { Project } from "~/models/project.server";
import { getProjects } from "~/models/project.server";

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjects>>;
};

export const loader = async () => {
  return json<LoaderData>({ projects: await getProjects() });
};
const Portfolio = () => {
  const { projects } = useLoaderData();
  return (
    <div className="grid grid-cols-3">
      {projects.map((project: Project) => (
        <Card
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          img={project.image}
        />
      ))}
    </div>
  );
};

export default Portfolio;
