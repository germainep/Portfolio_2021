import { Link } from "@remix-run/react";
import React from "react";

const Card = (props: React.PropsWithoutRef<any>) => {
  return (
    <div>
      <Link to={props.id}>
        <h1 className="text-secondary text-2xl">{props.title}</h1>
      </Link>
      <img src={props.img} alt="" />
      <p className="text-white">{props.description}</p>
    </div>
  );
};

export default Card;
