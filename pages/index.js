/* eslint-disable @next/next/no-img-element */
import Layout from "../components/layout";
import Head from "next/head";
import {
  Typography,
  Container,
  Box,
  Button,
  Grid,
  Link as MUILink,
  CardActionArea,
} from "@mui/material";
import { getAllPosts } from "../lib/api";
import { Card } from "@mui/material";
import DateFormatter from "../components/date-formatter";
import Link from "next/link";
import EWasteItems from "../components/ewaste-items";

/**
 * Function to render index page
 * @param {*} allPosts List of posts to render
 * @returns {React.Node}
 */
export default function Index({ allPosts }) {
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>OneStop E-Cycle</title>
        </Head>
        <Welcome />
        <To_Recycle />
        <div className="bg-[url('/assets/background.jpg')]">
          <Container maxWidth="lg">
            <div className="py-[15vh] mb-[12vh]">
              <To_Information />
            </div>
            <div className="pb-[15vh]">
              <To_Event allPosts={allPosts} />
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}

/**
 * Function to render Welcome section
 * @returns {React.Node}
 */
function Welcome() {
  return (
    <div className="flex flex-wrap flex-grow justify-center">
      <picture className="w-screen h-auto">
        <source
          media="(min-width: 767px)"
          srcSet="/assets/home_page/banner.jpg"
        />
        <img
          src="/assets/home_page/banner_mobile.jpg"
          className="w-screen h-auto"
          alt="Banner image"
          role="img"
        />
      </picture>
    </div>
  );
}

/**
 * Function to render Recycle page introduction
 * @returns {React.Node}
 */
function To_Recycle() {
  return (
    <Container
      maxWidth="false"
      disableGutters="true"
      sx={{
        position: "relative",
        textAlign: "center",
        width: "100vw",

        padding: 0,
      }}
    >
      <img
        className="w-screen sm:h-[80vh] sx:h-[50vh]"
        src="/assets/home_page/map_preview2.jpg"
        alt="Preview of the map of E-waste recycling centers in Singapore."
        style={{
          width: "100vw",
          filter: "brightness(50%) blur(4px)",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          width: "100vw",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          color="white"
          mb="7vh"
          sx={{
            fontSize: { md: "2.5rem", xs: "1.5rem" },
            fontWeight: "bold",
            color: "#DFE8FB",
            textShadow: "1px 1px 2px blue",
          }}
        >
          Do your part to help the community!
        </Typography>
        <Link href="/recycling_page" passHref>
          <Button
            variant="contained"
            color="success"
            sx={{
              borderRadius: 30,
              fontSize: { md: "1.75rem", xs: "1rem" },
              padding: { md: "10px 30px", xs: "5px 10px" },
              // color: "#DFE8FB",
              fontWeight: "bold",
              // textShadow: "1px 1px 1px pink",
            }}
          >
            Find nearest recycling centers
          </Button>
        </Link>
      </div>
    </Container>
  );
}

/**
 * Function to render Information page introduction
 * @returns {React.Node}
 */
function To_Information() {
  return (
    <div className="text-center">
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "#1D1D1D",
          fontWeight: "bold",
          textShadow: "0.5px 0.5px 1px gray",
          fontSize: { md: 30, xs: 22 },
        }}
      >
        Not sure what is E-cycle?
      </Typography>
      <EWasteItems />
      <Link href="/info_page" passHref>
        <Button
          variant="contained"
          size="large"
          color="success"
          aria-label="Go to information page"
        >
          More about E-waste
        </Button>
      </Link>
    </div>
  );
}

/**
 * Function to render Event page introduction
 * @returns {React.Node}
 */
function To_Event({ allPosts }) {
  const morePosts = allPosts.slice(1);
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography
          align="left"
          variant="h4"
          className="recycle_ref-heading"
          sx={{
            color: "#1D1D1D",
            fontWeight: "bold",
            textShadow: "0.5px 0.5px 1px gray",
            fontSize: { md: 30, xs: 24 },
          }}
        >
          Looking to hang out with our community?
        </Typography>
        <Link href="/events_page" passHref>
          <MUILink
            underline="always"
            variant="h4"
            aria-label="Go to events page"
            sx={{
              fontSize: { md: 30, xs: 24 },
              color: "#3572F5",
            }}
          >
            Check these out!
          </MUILink>
        </Link>
      </Grid>
      <Grid item xs={12} md={6}>
        <Event_Card post={morePosts[0]} />
        <Event_Card post={morePosts[1]} />
        <Event_Card post={morePosts[2]} />
      </Grid>
    </Grid>
  );
}

/**
 * Item card to display information about recycling events
 * @param {*} props
 * @returns {React.Node} of MUI Grid item
 */
function Event_Card(props) {
  return (
    <CardActionArea>
      <Link href={`/posts/${props.post.slug}`} passHref>
        <Card
          sx={{ my: 4, maxWidth: 550 }}
          className="event_card"
          elevation={6}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <img
                src={props.post.coverImage}
                alt="Event cover image."
                style={{
                  height: "120px",
                  width: "240px",
                  objectFit: "fill",
                }}
              />
            </Grid>

            <Grid item maxWidth={310}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" className="event_card-title">
                  {props.post.title}
                </Typography>
                <DateFormatter dateString={props.post.date} />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Link>
    </CardActionArea>
  );
}

/**
 * Get static props for main component
 * @returns {props} static props needed before rendering
 */
export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "RegURL",
  ]);

  return {
    props: { allPosts },
  };
}
