import { SharedComponents, Paths } from "@shared";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <SharedComponents.Text text={"Home page"} />
      <Link to={Paths.CONTACT_US}>
        <SharedComponents.Text text={"Navigate to contact us"} />
      </Link>
      <Link to={Paths.ABOUT}>
        <SharedComponents.Text text={"Navigate to about"} />
      </Link>
    </div>
  );
};
