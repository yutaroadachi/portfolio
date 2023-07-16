import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title")?.slice(0, 70);

    const [fontRegularData, fontSemiBoldData] = await Promise.all([
      fetch(
        new URL("../../../../assets/Montserrat-Regular.ttf", import.meta.url),
      ).then((res) => res.arrayBuffer()),
      fetch(
        new URL("../../../../assets/Montserrat-SemiBold.ttf", import.meta.url),
      ).then((res) => res.arrayBuffer()),
    ]);

    return new ImageResponse(
      title ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            backgroundColor: "#5eacc2",
            padding: "32px",
          }}
        >
          <div
            style={{
              width: "100%",
              fontFamily: '"Montserrat"',
              fontWeight: 400,
              fontSize: "64px",
              color: "#fff",
              wordBreak: "break-all",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80px",
              height: "80px",
              backgroundColor: "#fff",
              fontFamily: '"Montserrat"',
              fontWeight: 600,
              fontSize: "64px",
              color: "#5eacc2",
              paddingBottom: "16px",
              marginLeft: "auto",
            }}
          >
            y
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#5eacc2",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "160px",
              height: "160px",
              backgroundColor: "#fff",
              color: "#5eacc2",
              fontFamily: '"Montserrat"',
              fontWeight: 600,
              fontSize: "128px",
              paddingBottom: "32px",
            }}
          >
            y
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: "Montserrat",
            data: fontRegularData,
            weight: 400,
            style: "normal",
          },
          {
            name: "Montserrat",
            data: fontSemiBoldData,
            weight: 600,
            style: "normal",
          },
        ],
      },
    );
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }

    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};
