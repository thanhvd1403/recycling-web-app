import Layout from '../components/layout';
import Head from 'next/head';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { getAllPosts } from '../lib/api';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';

export default function Index({ allPosts }) {
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>OneStop E-Cycle</title>
        </Head>
        <Container maxWidth='lg'>
          <Box sx={{ p: 10 }}></Box>
          <Welcome />
          <Box sx={{ p: 15 }}></Box>
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
    <Container className='welcome' fixed>
      <Box sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Typography
          sx={{ fontSize: { xs: 55, sm: 75, md: 90 } }}
          className='welcome-heading'
          align='center'
        >
          Welcome to E&#8209;Cycle
        </Typography>
        <Box sx={{ my: 5 }} />
        <Typography
          sx={{ fontSize: { xs: 24, sm: 30, md: 36 } }}
          className='welcome-brief'
          align='center'
        >
          The OneStop destination for E&#8209;waste recycling
        </Typography>
      </Box>
    </Container>
  );
}

function To_Recycle() {
  return (
    <Grid container alignItems='center' spacing={2}>
      <Grid item xs={12} md={6}>
        <Box>
          <img
            src='/assets/home_page/Watch_Moment.jpg'
            alt='An E-waste recycling center in Singapore.'
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ p: 5 }}>
          <div class='text-center'>
            <Typography variant='h5' align='center'>
              114kg of electrical and electronic items are being thrown away
              every minute in Singapore.
            </Typography>
            <Box sx={{ my: 5 }}></Box>
            <Button href='/reclycling_page' variant='outlined' size='large'>
              Find nearest recycling centers
            </Button>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

function To_Information() {
  return (
    <div class='text-center'>
      <Typography variant='h4' align='center'>
        Not sure how to recycle your E-waste?
        <Box sx={{ m: 5 }}></Box>
      </Typography>
      <Grid container alignItems='stretch' spacing={2}>
        <Grid item xs={6} md={3}>
          <Waste_Card
            title='Electrical'
            image='/Electrical.jpg'
            description='Electrical items are items that are used to power the
            electrical equipment in your home. These items can be recycled or
            disposed of at a local recycling center.'
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Waste_Card
            title='Plastic'
            image='/Plastic.jpg'
            description='Plastic items are items that are used to make plastic
            products. These items can be recycled or disposed of at a local
            recycling center.'
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Waste_Card
            title='Paper'
            image='/Paper.jpg'
            description='Paper items are items that are used to make paper
            products. These items can be recycled or disposed of at a local
            recycling center.'
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <Waste_Card
            title='Glass'
            image='/Glass.jpg'
            description='Glass items are items that are used to make glass
            products. These items can be recycled or disposed of at a local
            recycling center.'
          />
        </Grid>
      </Grid>
      <Box sx={{ p: 5 }}></Box>
      <Button href='/info_page' variant='contained' size='large'>
        Learn more
      </Button>
    </div>
  );
}

function Waste_Card(props) {
  return (
    <Card className='waste_card' elevation={6}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={props.image}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.title}
          </Typography>
          <Typography
            noWrap
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function To_Event({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Grid container alignItems='center' spacing={2}>
      <Grid item xs={12} lg={6}>
        <Typography variant='h4' className='recycle_ref-heading' align='left'>
          Looking to hang out with the community?
          <Box sx={{ m: 5 }}></Box>
          <Link href='/event_page'>
            Check out these events happening in Singapore
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <body>TODO: event posts goes here</body>
        {/* <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container> */}
      </Grid>
    </Grid>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'RegURL',
  ]);

  return {
    props: { allPosts },
  };
}
