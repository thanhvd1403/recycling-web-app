import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import GoogleMapComponent from "../components/google-maps";

export default function RecyclePage() {
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>Recycling Hub</title>
        </Head>
        <Container>
          <GoogleMapComponent />
        </Container>
      </Layout>
    </>
  );
}
