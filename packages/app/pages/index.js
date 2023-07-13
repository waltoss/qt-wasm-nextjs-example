import Head from "next/head";
import QtWasmComponent from "../components/QtWasmComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>QT + WASM + NextJS</title>
        <meta name="description" content="Qt WASM App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QtWasmComponent></QtWasmComponent>
    </div>
  );
}
