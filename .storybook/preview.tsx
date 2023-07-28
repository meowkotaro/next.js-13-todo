import React from "react";
import type { Preview } from "@storybook/react";
import StoryWrapper from './storyWrapper'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        router: {
          refresh: () => {}
        },
        pathname: '/profile',
        query: {
          user: 'santa',
        },
      },
    },
  },

  decorators: [
      (Story: React.FC) => (
          <StoryWrapper>
              <Story/>
          </StoryWrapper>
      )
  ]
};

export default preview;