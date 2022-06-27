import diamond from "../images/diamond-luxe.png";

export default function Index() {
  return (
    <div>
      <div className="container grid md:grid-cols-2  mx-auto mt-32">
        <div className="mx-auto px-4">
          <h1 className="text-5xl text-primary font-bold mb-1.5 mx-auto">
            Germaine P
          </h1>
          <h2 className="text-3xl text-secondary font-medium mb-5 mx-auto">
            Full-Stack Software Engineer
          </h2>
          <p className="text-text md:w-2/3 md:mx-0 mx-auto px-2">
            Hi, Thanks for visiting. I’m Germaine, a 36 year old Full Stack Web
            Developer. I build interfaces using Javascript technology stacks
            (any javascript stack). I currently work freelance but I’m open to
            the right staff position. For more information download my resume
            below.
          </p>
          <button className="bg-primary hover:bg-secondary py-1 px-2 rounded-lg text-lg mt-32 w-32 h-10">
            Resume
          </button>
        </div>
        <div className="container mx-auto md:mt-0 m-36">
          <h2 className="text-center text-primary text-5xl">Recent Projects</h2>
          <div className="grid grid-flow-row">
            <div className="my-10 rounded mx-auto w-8/12">
              <img src={diamond} alt="Diamond Luxe detailing project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
