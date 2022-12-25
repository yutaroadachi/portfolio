import { clsx } from 'clsx'
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export type LayoutProps = ComponentPropsWithoutRef<'div'>

export const Layout = ({
  children,
  ...props
}: PropsWithChildren<LayoutProps>) => {
  const { className, ...rest } = props

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div
          className={clsx(
            'max-w-full lg:max-w-screen-md xl:max-w-screen-lg px-4 lg:px-0 py-8 mx-auto',
            className
          )}
          {...rest}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
export const createGetLayout = (
  layoutProps?: LayoutProps
): ((page: ReactElement) => ReactNode) => {
  return function getLayout(page) {
    return <Layout {...layoutProps}>{page}</Layout>
  }
}
