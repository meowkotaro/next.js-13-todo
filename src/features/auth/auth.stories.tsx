import { Meta } from "@storybook/react";
import Auth from ".";
import StoryWrapper from "../../../.storybook/storyWrapper";
import { useRouter } from "next/navigation";


const meta : Meta<typeof Auth> = {
    component: Auth,
    title: 'Auth',
}

export default meta

export const AuthStories = {}