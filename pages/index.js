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
} from "@mui/material";
import { getAllPosts } from "../lib/api";
import { Card, CardActionArea } from "@mui/material";
import DateFormatter from "../components/date-formatter";
import Link from "next/link";
import Swal from "sweetalert2";
import { EwasteInfo } from "../data/data";

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
        <div className="bg-[url('/assets/background.png')]">
          <Container maxWidth="lg">
            <div className="py-[15vh]">
              <To_Information />
            </div>
            <hr className="border-accent-2 mb-[12vh] bg-teal-50 " />
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
      <img
        src="/assets/home_page/banner.png"
        className="w-full h-auto"
        alt="..."
      />
    </div>
  );
}

/**
 * Function to render Recycle page introduction
 * @returns {React.Node}
 */
function To_Recycle() {
  return (
    // <Grid container alignItems="center" spacing={2}>
    //   <Grid item xs={12} md={6}>
    //     <img
    //       src="/assets/home_page/Watch_Moment.jpg"
    //       alt="An E-waste recycling center in Singapore."
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={6}>
    //     <div class="text-center">
    //       <Typography sx={{ m: 5 }} variant="h5" align="center">
    //         114kg of electrical and electronic items are being thrown away every
    //         minute in Singapore.
    //       </Typography>
    //       <Button href="/recycling_page" variant="outlined" size="large">
    //         Find nearest recycling centers
    //       </Button>
    //     </div>
    //   </Grid>
    // </Grid>
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
        src="/assets/home_page/map_preview.png"
        alt="Preview of the map of E-waste recycling centers in Singapore."
        style={{
          height: "80vh",
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
      <Grid container alignItems="stretch" spacing={2} my={{ md: 7, xs: 3 }}>
        {Object.entries(EwasteInfo).map(([type, specificInfo]) => {
          return (
            <ItemCard
              key={type}
              title={type}
              imageURL={specificInfo.imageURL}
              data={[type, specificInfo.description, specificInfo.link]}
            />
          );
        })}
      </Grid>
      <Link href="/info_page" passHref>
        <Button variant="contained" size="large" color="success">
          Learn more
        </Button>
      </Link>
    </div>
  );
}

/**
 * Item card to display information about specific type
 * @param {*} props
 * @returns {React.Node} of MUI Grid item
 */
function ItemCard(props) {
  const [type, description] = props.data;
  return (
    <Grid item xs={6} md={3}>
      <Card className="cardItem" elevation={6}>
        <CardActionArea
          onClick={() => {
            Swal.fire({
              title: `${type}`,
              html: `<div>
                <p style="text-align: justify; margin-bottom:2rem">
                  ${description}
                </p>
                <link href="/button.css" rel="stylesheet">
                <style>
                </style>
              </div>`,
              icon: "info",
              color: "#000",
              background: "#ECEFDA",
              backdrop: `rgba(153, 241, 118, 0.4)`,
              confirmButtonText: "Gotcha!",
              confirmButtonColor: "green",
            });
          }}
        >
          <img
            src={props.imageURL}
            title={props.title}
            alt={"Image of " + props.title}
            style={{
              height: "15vh",
              width: "100%",
              filter: "brightness(40%)",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h5"
            fontWeight={500}
            sx={{
              fontSize: { md: 22, xs: 15 },
              textAlign: "center",
              position: "absolute",
              color: "white",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {props.title}
          </Typography>
        </CardActionArea>
      </Card>
    </Grid>
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
    <Card sx={{ my: 4, maxWidth: 550 }} className="event_card" elevation={6}>
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
        <Link href={`/posts/${props.post.slug}`} passHref>
          <Grid item maxWidth={310}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" className="event_card-title">
                {props.post.title}
              </Typography>
              <DateFormatter dateString={props.post.date} />
            </Box>
          </Grid>
        </Link>
      </Grid>
    </Card>
  );
}

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
