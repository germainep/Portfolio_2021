import diamond from "public/images/diamond-luxe.png";

export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
};

export async function getProjects(): Promise<Array<Project>> {
  return [
    {
      id: "1",
      title: "Diamond Luxe Detailing",
      description: "Diamond Luxe Detailing website",
      image: diamond,
    },
    {
      id: "2",
      title: "Sarcastic G Clothing",
      description: "Model site and ecommerce case study",
    },
  ];
}
