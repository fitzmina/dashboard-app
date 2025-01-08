import React from "react";
import SideBar from "./sidebar";

export default {
  children: "",
  title: "Component/SideBar",
  component: SideBar,
};

const Template = (args: any) => {
  return <SideBar {...args} />;
};

const props = {
  defaultProps: () => ({}),
};

export const SideBarStory: any = Template.bind({});
const defaultProps = props.defaultProps();
SideBarStory.storyName = "SideBar";
SideBarStory.args = {
  ...defaultProps,
};
