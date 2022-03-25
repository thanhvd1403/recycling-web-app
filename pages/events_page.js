import Container from "../components/container";
// import MoreStories from "../components/more-stories";
import EventPosts from "../components/event-posts";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function EventPage({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(0);
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>Events </title>
        </Head>
        
          <div class="flex flex-wrap flex-grow justify-center">
          <img
            src="https://scontent.fsin9-2.fna.fbcdn.net/v/t1.15752-9/275168196_1095862037930135_1117652634515530813_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=fbGHm1Aely4AX9lRobV&tn=1I6dDrAIwYpq9ilm&_nc_ht=scontent.fsin9-2.fna&oh=03_AVJnA9l3x_xsOK63Y92UBwf0ogrsN_iM7Ary7ff8_94WiQ&oe=625998A1"
            class="w-full h-auto" alt="..."
          />
        </div>
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}

          <Container class='bg-conic-to-tl from-white via-sky-500 to-sky-500'> 
          {morePosts.length > 0 && <EventPosts posts={morePosts} />}
          </Container>


            <div class="pt-6 pb-12 pl-24 pr-24  md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row bg-gradient-to-r from-yellow-100 via-indigo-200 to-teal-500">
                <div class="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                    <img src="https://scontent.fsin9-2.fna.fbcdn.net/v/t1.15752-9/275902695_987680598526632_2060188881909165562_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=rryT1bAp0tUAX8-37mH&_nc_ht=scontent.fsin9-2.fna&oh=03_AVIsAMFi-Gbioxg6Z8dlviSk4ZvEpOy9kQjzmX6497xNzg&oe=625CF7CE" alt="Envelope with a newsletter" role="img" class="w-auto h-auto  xl:w-full lg:w-1/2 w-full" />
                </div>
                <div class="w-full xl:w-1/2 xl:pl-10 xl:py-28">
                    <h1 class="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-teal-800 dark:text-white mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                    <p class="text-base leading-normal text-teal-800 dark:text-teal-200 text-center xl:text-left">Subscribe to our mailing list to be the first one receiving e-newsletter and events about E-recycling.</p>
                    <div class="flex items-stretch mt-12">
                        <input class="bg-gray-100 rounded-lg rounded-r-none dark:bg-teal-800 text-base leading-none text-gray-800 dark:text-white p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                        <button class="w-32 rounded-l-none hover:bg-emerald-600 bg-emerald-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                    </div>
                </div>
            </div>

      </Layout>
    </>
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
  ]);

  return {
    props: { allPosts },
  };
}
