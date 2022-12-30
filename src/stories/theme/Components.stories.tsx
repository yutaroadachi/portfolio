import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

const Components = () => {
  return (
    <div className="space-y-4">
      <div className="logo">logo</div>
      <h2 className="with-treat">with-treat</h2>
      <div className="card p-8">card</div>
    </div>
  )
}

export default {
  title: 'theme/Components',
  component: Components,
} as ComponentMeta<typeof Components>

type StoryObj = ComponentStoryObj<typeof Components>

export const Default: StoryObj = {}
