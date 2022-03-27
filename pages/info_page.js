import Container from "../components/container";
import MoreInfo from "../components/more-info";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Link from 'next/link'

export default function InfoPage({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(0,3);
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>E-waste Information</title>
        </Head>
        
{/*    BODYYYYY      */}
<section>
<div class="flex">
    
<div class="flex-none w-72 text-left pl-10 pr-5 py-20 rounded-full border-3 border-yellow-600 fixed">
    <div class="pr-20 text-center">
      On this page
    </div>


<br></br>
<a href="#DoE">▶ Definition of E-waste</a>
<br></br>
<a href="#CoE">▶ Characteristics of E-waste</a>
<br></br>
<a href="#BoE">▶ Benefits of E-waste</a>
<br></br>
<a href="#ToE">▶ Types of E-waste</a>
<br></br>

</div>

<div class="flex-none w-64 text-center pl-5 pr-5 py-20 rounded-full border-3 border-yellow-600">

</div>
<div class="flex-initial w-640">
  <div id="DoE" class="space-x-7 py-10 pl-10 pr-10 text-center">Definition of E-waste
    <div class="w-full text-center pl-5 pr-5 py-20 rounded-full border-3 border-yellow-600 bg-green-300">Electronic waste or e-waste describes discarded electrical or electronic devices. Used electronics which are destined for refurbishment, reuse, resale, salvage recycling through material recovery, or disposal are also considered e-waste. Informal processing of e-waste in developing countries can lead to adverse human health effects and environmental pollution.
Electronic scrap components, such as CPUs, contain potentially harmful materials such as lead, cadmium, beryllium, or brominated flame retardants. Recycling and disposal of e-waste may involve significant risk to health of workers and their communities
      <div class="text-center pr-30"><br></br>Wikipedia
      </div>
    </div>
  </div>

  <div id="CoE" class="space-x-7 py-10 pl-10 pr-10">
    <div class="w-full text-center pl-5 pr-5 py-20 rounded-full border-3 border-yellow-600 bg-green-300">Characteristics of E-waste</div>
  </div>

  <div id="BoE" class="space-x-7 py-10 pl-10 pr-10">
    <div class="w-full text-center pl-5 pr-5 py-20 rounded-full border-3 border-red-500 bg-green-300">Benefits of E-waste</div>
  </div>


  <div id="ToE" class="flex space-x-7 py-10 pl-10 pr-10">
          <div class="w-1/2">
                <Container>
                  <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                  More Stories
                  </h2>
                  <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    <div class='pr-8 m-1 pl-8 m-3 m-2 pb-8 m-2 bg-gradient-to-b from-white via-white to-emerald-200'>
                      <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                        <Link  href="https://google.com">
                          <a className="hover:underline">SHIT</a>
                        </Link>
                      </h3>
                      <p className="text-base leading-relaxed mb-4 text-stone-600">HEHE</p>
                      {
                      <button class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100">Learn more</button>
                      }
                    </div>
                  </div>
                </Container>
          </div>
          <div class="w-1/2">
                <Container>
                  <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                  More Stories
                  </h2>
                  <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    <div class='pr-8 m-1 pl-8 m-3 m-2 pb-8 m-2 bg-gradient-to-b from-white via-white to-emerald-200'>
                      <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                        <Link  href="https://google.com">
                          <a className="hover:underline">SHIT</a>
                        </Link>
                      </h3>
                      <p className="text-base leading-relaxed mb-4 text-stone-600">HEHE</p>
                      {
                      <button class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100">Learn more</button>
                      }
                    </div>
                  </div>
                </Container>
          </div>
  </div>

  <div id="ToE" class="flex space-x-7 py-10 pl-10 pr-10">
          <div class="w-1/2">
                <Container>
                  <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                  More Stories
                  </h2>
                  <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    <div class='pr-8 m-1 pl-8 m-3 m-2 pb-8 m-2 bg-gradient-to-b from-white via-white to-emerald-200'>
                      <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                        <Link  href="https://google.com">
                          <a className="hover:underline">SHIT</a>
                        </Link>
                      </h3>
                      <p className="text-base leading-relaxed mb-4 text-stone-600">HEHE</p>
                      {
                      <button class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100">Learn more</button>
                      }
                    </div>
                  </div>
                </Container>
          </div>
          <div class="w-1/2">
                <Container>
                  <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                  More Stories
                  </h2>
                  <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    <div class='pr-8 m-1 pl-8 m-3 m-2 pb-8 m-2 bg-gradient-to-b from-white via-white to-emerald-200'>
                      <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                        <Link  href="https://google.com">
                          <a className="hover:underline">SHIT</a>
                        </Link>
                      </h3>
                      <p className="text-base leading-relaxed mb-4 text-stone-600">HEHE</p>
                      {
                      <button class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100">Learn more</button>
                      }
                    </div>
                  </div>
                </Container>
          </div>
  </div>

  <div id="ToE" class="flex space-x-7 py-10 pl-10 pr-10">
          <div class="w-1/2">
                <Container>
                  <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                  More Stories
                  </h2>
                  <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    <div class='pr-8 m-1 pl-8 m-3 m-2 pb-8 m-2 bg-gradient-to-b from-white via-white to-emerald-200'>
                      <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                        <Link  href="https://google.com">
                          <a className="hover:underline">SHIT</a>
                        </Link>
                      </h3>
                      <p className="text-base leading-relaxed mb-4 text-stone-600">HEHE</p>
                      {
                      <button class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100">Learn more</button>
                      }
                    </div>
                  </div>
                </Container>
          </div>
          <div class="w-1/2">
                <Container>
                  <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                  More Stories
                  </h2>
                  <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    <div class='pr-8 m-1 pl-8 m-3 m-2 pb-8 m-2 bg-gradient-to-b from-white via-white to-emerald-200'>
                      <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                        <Link  href="https://google.com">
                          <a className="hover:underline">SHIT</a>
                        </Link>
                      </h3>
                      <p className="text-base leading-relaxed mb-4 text-stone-600">HEHE</p>
                      {
                      <button class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100">Learn more</button>
                      }
                    </div>
                  </div>
                </Container>
          </div>
  </div>

  <div id="ToE" class="flex space-x-7 py-10 pl-10 pr-10">
          <div class="w-1/2">
                <Container>
                  <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                  More Stories
                  </h2>
                  <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    <div class='pr-8 m-1 pl-8 m-3 m-2 pb-8 m-2 bg-gradient-to-b from-white via-white to-emerald-200'>
                      <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                        <Link  href="https://google.com">
                          <a className="hover:underline">SHIT</a>
                        </Link>
                      </h3>
                      <p className="text-base leading-relaxed mb-4 text-stone-600">HEHE</p>
                      {
                      <button class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100">Learn more</button>
                      }
                    </div>
                  </div>
                </Container>
          </div>
          <div class="w-1/2">
                <Container>
                  <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                  More Stories
                  </h2>
                  <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                    <div class='pr-8 m-1 pl-8 m-3 m-2 pb-8 m-2 bg-gradient-to-b from-white via-white to-emerald-200'>
                      <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                        <Link  href="https://google.com">
                          <a className="hover:underline">SHIT</a>
                        </Link>
                      </h3>
                      <p className="text-base leading-relaxed mb-4 text-stone-600">HEHE</p>
                      {
                      <button class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100">Learn more</button>
                      }
                    </div>
                  </div>
                </Container>
          </div>
  </div>

</div>
</div>
</section>
{/*    BODYYYYY      */}



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
