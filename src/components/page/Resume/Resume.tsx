import { ReactNode } from 'react'
import { Biography } from 'src/components/domain/Biography'

export const Resume = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 id="resume">履歴書</h1>
      </section>
      <JobHistory />
      <Biography />
    </div>
  )
}

const JobHistory = () => {
  return (
    <section className="space-y-4">
      <h2 className="h2-with-treat">職歴</h2>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left whitespace-nowrap">
            <th className="p-4">期間</th>
            <th className="p-4">詳細</th>
          </tr>
        </thead>
        <tbody>
          {JOBS.map((job, idx) => {
            return (
              <tr key={idx} className="text-left">
                <td className="whitespace-nowrap p-4">{job.period}</td>
                <td className="p-4">{job.detail}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

const JOBS: {
  period: string
  detail: ReactNode
}[] = [
  {
    period: '2020/09~現在',
    detail:
      'くらしとお金の社会課題を解決するシステムとサービスを提供する会社にて、社内のファイナンシャルプランナー向けのCRM・SFAシステムやはたらく世代のお金の診断・相談サービスの開発に携わり、フロントエンド（React, TypeScript, Next.js）からバックエンド（Ruby on Rails）まで幅広く経験しています。また、チームリーダーとして所属チームの開発をリードする経験もしています。',
  },
  {
    period: '2019/08~2020/08',
    detail:
      '企業のIR部門とセルサイド（証券会社）・バイサイド（機関投資家）がつながるプラットフォームを提供する会社にて、メインプロダクトの開発に携わり、フロントエンド（React）からバックエンド（Ruby on Rails）まで幅広く経験しました。',
  },
  {
    period: '2018/04~2019/07',
    detail:
      '大手SIerの会社にて、大手金融機関のシステム子会社に常駐して社内稟議などのペーパーレス化システムの改修・保守に携わり、リリース作業を自動化するBashスクリプトの開発や保守チームのリーダーを経験しました。',
  },
]
