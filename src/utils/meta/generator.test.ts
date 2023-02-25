import { generateOpenGraph } from './generator'

describe('generateOpenGraph', () => {
  it('ogImageTitleを渡さない場合、期待通りの形式でOG情報が返されること', () => {
    expect(generateOpenGraph('テスト', 'テストです。')).toStrictEqual({
      title: `テスト | Yutaro Adachi's Portfolio`,
      description: 'テストです。',
      siteName: `Yutaro Adachi's Portfolio`,
      images: [{ url: 'https://portfolio-adachi.vercel.app/api/og' }],
    })
  })

  it('ogImageTitleを渡す場合、期待通りの形式でOG情報が返されること', () => {
    expect(generateOpenGraph('テスト', 'テストです。', 'テスト')).toStrictEqual(
      {
        title: `テスト | Yutaro Adachi's Portfolio`,
        description: 'テストです。',
        siteName: `Yutaro Adachi's Portfolio`,
        images: [
          { url: 'https://portfolio-adachi.vercel.app/api/og?title=テスト' },
        ],
      }
    )
  })
})
