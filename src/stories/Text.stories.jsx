import { createElement } from "react";
import Text from "../lib/components/Text";

export default {
  component: Text,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ST4BVXE4ps05DlWCJLE1cP/Untitled?node-id=0%3A1",
    },
  },
  argTypes: {
    transform: {
      control: { type: "select", options: ["upper", "lower", "capital"] },
    },
    size: { control: { type: "select", options: ["s", "m", "l"] } },
    style: {
      control: { type: "select", options: ["normal", "medium", "bold"] },
    },
    color: { control: "color" },
    children: { control: "text" }
  },
};

 const componentTemplate = (args) => createElement(Text, args);

export const Template = componentTemplate.bind({});
Template.args = {
  transform: "",
  size: "m",
  style: "normal",
  color: "black",
  className: "",
  id: "",
  children: "Sample Text",
};
