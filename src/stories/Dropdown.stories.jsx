import { createElement } from "react";
import Dropdown from "../lib/components/Dropdown";

export default {
  component: Dropdown,
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/ST4BVXE4ps05DlWCJLE1cP/Untitled?node-id=0%3A1'
    }
 },
};

const componentTemplate = (args) => createElement(Dropdown, args);

export const Template = componentTemplate.bind({});
Template.args = {
  options: [{title: "option 1", value: 1}, {title: "option 2", value: 2}],
  label: 'CDS Dropdown',
  className: "",
  id: "",
  selectedValue: 0,
  onSelect: (id) => { alert(`Dropdown value selected ${id}`) }
};
