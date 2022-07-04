import { Link } from "@remix-run/react";
import React from "react";

type Props = {
  name: string;
  url: string;
};

const Navlink = (props: Props) => {
  return (
    <Link
      to={props.url}
      className="text-2xl text-primary ml-4 font-medium hover:text-secondary active:underline"
    >
      {props.name}
    </Link>
  );
};
export default Navlink;
