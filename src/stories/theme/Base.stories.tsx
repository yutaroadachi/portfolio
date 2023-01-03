import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import NextImage from 'next/image'

const Base = () => {
  return (
    <div className="space-y-4">
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <div className="blog-detail space-y-4">
        <div className="font-bold">ブログ詳細</div>
        <div>
          <code>code</code>
        </div>
        <div>
          <pre>
            <code>pre &gt; code</code>
          </pre>
        </div>
        <div>
          <ol>
            <li>ol</li>
            <li>ol</li>
          </ol>
        </div>
        <div>
          <ul>
            <li>ul</li>
            <li>ul</li>
          </ul>
        </div>
        <div>
          <a
            href="http://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            a
          </a>
        </div>
        <div>
          <NextImage
            src="/assets/profile.png"
            width={256}
            height={256}
            alt="Yutaro Adachiのプロフィール画像"
            className="max-w-[128px] h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default {
  title: 'theme/Base',
  component: Base,
} as ComponentMeta<typeof Base>

type StoryObj = ComponentStoryObj<typeof Base>

export const Default: StoryObj = {}
