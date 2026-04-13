import { createElement } from "react";
import Button from "../lib/components/Button";

export default {
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ST4BVXE4ps05DlWCJLE1cP/Untitled?node-id=0%3A1",
    },
  },
  argTypes: {
    theme: { control: { type: "select", options: ["peelGreen", "orange"] } },
  },
};

const Template = (args) => createElement(Button, args);

export const Buttons = Template.bind({});
Buttons.args = {
  theme: "orange",
  label: "CDS Button",
  className: "",
  id: "",
  disabled: false,
  onClick: () => {
    alert("Button Clicked");
  },
};
