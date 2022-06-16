import { SharedTypes } from "@shared";

import { Home } from "../../home";
import { About } from "../../about";
import { ContactUs } from "../../contact_us";

export enum Paths {
  HOME = "/",
  ABOUT = "/about",
  CONTACT_US = "/contact-us",
}

export const Routes: Array<SharedTypes.IRoute> = [
  {
    path: Paths.HOME,
    element: <Home />,
  },
  {
    path: Paths.ABOUT,
    element: <About />,
  },
  {
    path: Paths.CONTACT_US,
    element: <ContactUs />,
  },
];
