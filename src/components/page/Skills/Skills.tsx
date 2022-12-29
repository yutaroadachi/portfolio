import { FiExternalLink } from 'react-icons/fi'
import { Biography } from 'src/components/domain/Biography'

export const Skills = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 id="skills">スキル</h1>
      </section>
      <FrontEnd />
      <BackEnd />
      <Biography />
    </div>
  )
}

const FrontEnd = () => {
  return (
    <section className="space-y-4">
      <h2 className="h2-with-treat">フロントエンド</h2>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left whitespace-nowrap">
            <th className="p-4">技術</th>
            <th className="p-4">経験年数</th>
            <th className="p-4">詳細</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left">
            <td className="whitespace-nowrap p-4">React</td>
            <td className="whitespace-nowrap p-4 ">3.5年</td>
            <td rowSpan={3} className="p-4">
              <div className="space-y-4">
                <div>
                  WebメディアのようなHeadless
                  CMSを使用したJamstackなWebサイトから、複雑なUIやロジックを持ったWebアプリケーションの開発まで対応可能です。また、CI/CDやStorybookの整備などフロントエンド開発基盤の構築も対応可能です。
                </div>
                <div>
                  また、
                  <a
                    href="https://zenn.dev/a_da_chi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-c-link mx-1"
                  >
                    Zenn
                    <FiExternalLink className="inline-block mb-1 ml-1" />
                  </a>
                  にて「
                  <a
                    href="https://zenn.dev/a_da_chi/articles/105dac5573b2f5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-c-link mx-1"
                  >
                    もう迷わないNext.jsのCSR/SSR/SSG/ISR
                    <FiExternalLink className="inline-block mb-1 ml-1" />
                  </a>
                  」などNext.jsに関する記事を複数執筆しており、多数のLikeを頂いています。
                </div>
                <div className="space-y-1">
                  <div>その他周辺ライブラリ</div>
                  <ul className="list-disc list-inside">
                    <li>バンドラー: Webpack / Vite</li>
                    <li>ルーティング: React Router</li>
                    <li>コンポーネント: Chakra UI / MUI</li>
                    <li>
                      CSS: Tailwind CSS / Bootstrap / CSS Modules / styled
                      components / Emotion
                    </li>
                    <li>状態管理: Context API / Jotai</li>
                    <li>データ取得: SWR</li>
                    <li>
                      GraphQL: Apollo Client / urql / GraphQL Code Generator
                    </li>
                    <li>フォーム: Formik / Yup</li>
                    <li>
                      テスト: Jest / Vitest / Testing Library / reg-suit /
                      Chromatic / Cypress
                    </li>
                    <li>
                      コンポーネントカタログ: Storybook / Storyshots / Storycap
                    </li>
                    <li>コードジェネレーター: Scaffdog / Hygen</li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
          <tr className="text-left">
            <td className="whitespace-nowrap p-4">TypeScript</td>
            <td className="whitespace-nowrap p-4 ">2.5年</td>
          </tr>
          <tr className="text-left">
            <td className="whitespace-nowrap p-4">Next.js</td>
            <td className="whitespace-nowrap p-4 ">2.5年</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

const BackEnd = () => {
  return (
    <section className="space-y-4">
      <h2 className="h2-with-treat">バックエンド</h2>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left whitespace-nowrap">
            <th className="p-4">技術</th>
            <th className="p-4">経験年数</th>
            <th className="p-4">詳細</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left">
            <td className="whitespace-nowrap p-4">Ruby on Rails</td>
            <td className="whitespace-nowrap p-4 ">3.5年</td>
            <td rowSpan={1} className="p-4">
              <div className="space-y-4">
                <div>
                  モノリシックなアプリケーションから、API（REST,
                  GraphQL）の開発まで対応可能です。
                </div>
                <div className="space-y-1">
                  <div>その他周辺ライブラリ</div>
                  <ul className="list-disc list-inside">
                    <li>GraphQL: GraphQL Ruby</li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
