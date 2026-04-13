import { createElement } from "react";
import Loader from "../lib/components/Loader";

export default {
  component: Loader,
};

 const componentTemplate = (args) => createElement(Loader, args);

export const Template = componentTemplate.bind({});
Template.args = {
  closeLoader: () => alert("Loader Closed"),
  
};
