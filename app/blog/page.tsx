import {
  getPersonalBlogList,
  getTechBlogList,
  PersonalBlogList,
  TechBlogList,
} from '@/features/blog/blog-list'
import { ProfileCard } from '@/features/profile/profile-card'
import { Suspense } from 'react'

export const revalidate = 300

export default async function BlogListPage() {
  const techBlogListData = getTechBlogList()
  const personalBlogListData = getPersonalBlogList()

  const techBlogList = await techBlogListData

  return (
    <div className="space-y-8">
      <section>
        <h1 id="blog-list">ブログ</h1>
      </section>
      <TechBlogList techBlogList={techBlogList} />
      <Suspense fallback={<h2>Loading…</h2>}>
        {/* @ts-expect-error Server Component */}
        <PersonalBlogListData personalBlogListData={personalBlogListData} />
      </Suspense>
      <ProfileCard />
    </div>
  )
}

const PersonalBlogListData = async ({
  personalBlogListData,
}: {
  personalBlogListData: ReturnType<typeof getPersonalBlogList>
}) => {
  const personalBlogList = await personalBlogListData

  return <PersonalBlogList personalBlogList={personalBlogList} />
}
