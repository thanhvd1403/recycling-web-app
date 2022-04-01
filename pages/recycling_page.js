import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import GoogleMapComponent from "../components/google-maps";
import Image from "next/image";

const containerStyle = {
  width: "90vw",
  height: "80vh",
  display: "block",
  margin: "auto",
  position: "relative",
};

export default function RecyclePage() {
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>Recycling Hub</title>
        </Head>

        <Image
          layout="fill"
          src="/ewaste.gif"
          alt="E-waste recycling"
          objectFit="cover"
          objectPosition="center"
          quality="100"
          height={"150vh"}
        />
        <GoogleMapComponent containerStyle={containerStyle} />
      </Layout>
    </>
  );
}
