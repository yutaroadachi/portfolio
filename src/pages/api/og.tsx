import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title')?.slice(0, 70)

    const [fontRegularData, fontBoldData] = await Promise.all([
      fetch(
        new URL('../../../assets/Montserrat-Regular.ttf', import.meta.url)
      ).then((res) => res.arrayBuffer()),
      fetch(
        new URL('../../../assets/Montserrat-Bold.ttf', import.meta.url)
      ).then((res) => res.arrayBuffer()),
    ])

    return new ImageResponse(
      title ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            backgroundColor: '#5eacc2',
            fontFamily: '"Montserrat"',
            fontSize: '64px',
            color: 'white',
            padding: '32px',
          }}
        >
          <div
            style={{
              width: '100%',
              wordBreak: 'break-all',
              fontWeight: 'normal',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontWeight: 'bold',
              marginLeft: 'auto',
            }}
          >
            adachi
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#5eacc2',
            fontFamily: '"Montserrat"',
            fontWeight: 'bold',
            fontSize: '128px',
            color: 'white',
          }}
        >
          adachi
        </div>
      ),
      {
        fonts: [
          {
            name: 'Montserrat',
            data: fontRegularData,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Montserrat',
            data: fontBoldData,
            weight: 700,
            style: 'normal',
          },
        ],
      }
    )
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message)
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
