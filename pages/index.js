import Layout from "../components/layout";
import Head from "next/head";
import { Typography, Container, Box, Button, Grid, Link } from "@mui/material";
import { getAllPosts } from "../lib/api";
import { Card, CardActionArea } from "@mui/material";
import DateFormatter from "../components/date-formatter";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>OneStop E-Cycle</title>
        </Head>
        <Welcome />
        <Container maxWidth="lg">
          <Box sx={{ p: 10 }}></Box>
          <To_Recycle />
          <Box sx={{ p: 15 }}></Box>
          <To_Information />
          <Box sx={{ p: 15 }}></Box>
          <To_Event allPosts={allPosts} />
          <Box sx={{ p: 15 }}></Box>
        </Container>
      </Layout>
    </>
  );
}

function Welcome() {
  return (
    <div class="text-center bg-[#ebfff3]">
      <Container className="welcome" maxWidth="lg" fixed>
        <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 20 }}>
          <Typography
            sx={{ fontSize: { xs: 55, sm: 75, md: 90 } }}
            align="center"
          >
            Welcome to E&#8209;Cycle
          </Typography>
          <Box sx={{ my: 5 }} />
          <Typography
            sx={{ fontSize: { xs: 24, sm: 30, md: 36 } }}
            className="welcome-brief"
            align="center"
          >
            The OneStop destination for E&#8209;waste recycling
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

function To_Recycle() {
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={12} md={6}>
        <img
          src="/assets/home_page/Watch_Moment.jpg"
          alt="An E-waste recycling center in Singapore."
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <div class="text-center">
          <Typography sx={{ m: 5 }} variant="h5" align="center">
            114kg of electrical and electronic items are being thrown away every
            minute in Singapore.
          </Typography>
          <Button href="/recycling_page" variant="outlined" size="large">
            Find nearest recycling centers
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

function To_Information() {
  return (
    <div class="text-center">
      <Typography variant="h4" align="center">
        Not sure how to recycle your E-waste?
      </Typography>
      <Grid container alignItems="stretch" spacing={2} my={7}>
        <Waste_Item title="Fluorescent lamp" image="fluorescent.jpg" />
        <Waste_Item title="ICT Equipments" image="ict.jpg" />
        <Waste_Item title="Household appliances" image="household.jpg" />
        <Waste_Item title="Electric vehicles" image="lucid-dream.jpg" />
        <Waste_Item title="Household batteries" image="batteries.jpg" />
        <Waste_Item title="Lithium-Ion batteries" image="lithium.jpg" />
        <Waste_Item
          title="Electric vehicle batteries"
          image="car-battery.jpg"
        />
        <Waste_Item title="Incandescent light bulb" image="lightbulbs.jpg" />
      </Grid>
      <Button href="/info_page" variant="contained" size="large">
        Learn more
      </Button>
    </div>
  );
}

function Waste_Item(props) {
  return (
    <Grid item xs={6} md={3}>
      <Card className="waste_card" elevation={6}>
        <CardActionArea>
          <img
            src={"/assets/home_page/" + props.image}
            title={props.title}
            alt={"Image of " + props.title}
            style={{
              height: "200px",
              width: "100%",
              filter: "brightness(40%)",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              color: "white",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography variant="h5" fontWeight={500}>
              {props.title}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

function To_Event({ allPosts }) {
  const morePosts = allPosts.slice(1);
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography align="left" variant="h4" className="recycle_ref-heading">
          Looking to hang out with the community?
          <Box sx={{ m: 5 }}></Box>
          <Link href="/events_page" underline="always">
            Check out these events happening in Singapore
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Event_Card post={morePosts[0]} />
        <Event_Card post={morePosts[1]} />
        <Event_Card post={morePosts[2]} />
      </Grid>
    </Grid>
  );
}

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
