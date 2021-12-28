import Head from "next/head";
import Main from "../components/main";

export default function Home() {
  return (
    <div className="min-h-screen bg-black-color flex flex-col items-center">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="sorfcut icon" href="/icon.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Einstein - LinkTree</title>
      </Head>
      <Main />
    </div>
  )
}
