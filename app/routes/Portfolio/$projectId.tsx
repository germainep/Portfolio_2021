import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params);
  return json({ id: params.projectId });
};

const $ProjectId = () => {
  const { id } = useLoaderData();
  console.log(id);
  return (
    <div>
      <h1>{id}</h1>
      {/*<img src={project.image} alt={project.title} />*/}
      {/*<p>{project.description}</p>*/}
    </div>
  );
};

export default $ProjectId;
