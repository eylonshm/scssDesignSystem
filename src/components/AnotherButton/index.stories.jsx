import Button from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "components/AnotherButton",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    text: "Button",
  },
};
