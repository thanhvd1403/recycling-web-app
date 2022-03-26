import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import GoogleMapComponent from "../components/google-maps";
// import { getAllPosts } from "../lib/api";

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

export async function getStaticProps() {
  // await deleteAllPlaces();
  // const allPosts = getAllPosts([
  //   "title",
  //   "date",
  //   "slug",
  //   "author",
  //   "coverImage",
  //   "excerpt",
  // ]);
  return {
    props: { 1: 2 },
  };
}
