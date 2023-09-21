import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
  //Data we will need:
  // -background image : thumb_image_url
  // -logo
  // -description : description
  // -id : id
  const { name, description, thumb_image_url, logo_url } = props.item;
  return (
    <div>
      <img src={thumb_image_url} />
      <img src={logo_url} />
      <div>{description}</div>
      <Link to={`/portfolio/${name}`}>Link</Link>
    </div>
  );
}
