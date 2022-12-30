import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const Colors = () => {
  return (
    <div className="h-stack space-x-4">
      <div className="v-stack space-y-1">
        <div className="w-[50px] h-[50px] bg-c-primary rounded-full" />
        <div>c-primary</div>
      </div>
      <div className="v-stack space-y-1">
        <div className="w-[50px] h-[50px] bg-c-bg border border-black rounded-full" />
        <div>c-bg</div>
      </div>
      <div className="v-stack space-y-1">
        <div className="w-[50px] h-[50px] bg-c-link rounded-full" />
        <div>c-link</div>
      </div>
    </div>
  )
}

export default {
  title: 'theme/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>

type StoryObj = ComponentStoryObj<typeof Colors>

export const Default: StoryObj = {}
