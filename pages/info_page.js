import Container from "../components/container";
import MoreInfo from "../components/more-info";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Link from "next/link";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function InfoPage({ allPosts }) {
  const heroPost = allPosts[0];
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>E-waste Information</title>
        </Head>{" "}
        {/* BODYYYYY */}{" "}
        <section>
          <div class="flex">
            
            {/* <div class="flex-none w-64 text-center pl-5 pr-5 py-20 rounded-full border-3 border-yellow-600"></div> */}
            
            <div class="flex-initial w-640">
              <div
                id="DoE"
                class="space-x-7 py-10 pl-10 pr-10 text-center font-sans "
              >
                <p class="text-3xl font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">
                  ♻ Definition of E-waste ♻
                </p>
                <br></br>
                <div class="w-full pl-5 pr-5 text-justify">
                  Electronic waste or e-waste describes discarded electrical or
                  electronic devices. Used electronics which are destined for
                  refurbishment, reuse, resale, salvage recycling through
                  material recovery, or disposal are also considered e-waste.
                  Informal processing of e-waste in developing countries can
                  lead to adverse human health effects and environmental
                  pollution. Electronic scrap components, such as CPUs, contain
                  potentially harmful materials such as lead, cadmium,
                  beryllium, or brominated flame retardants. Recycling and
                  disposal of e-waste may involve significant risk to health of
                  workers and their communities{" "}
                  <div class="text-center pr-30"></div>
                </div>
              </div>
              <br></br>
              <div id="CoE">
                <div class="space-x-7 py-10 pl-10 pr-10 text-center font-sans">
                  <p class="text-3xl font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">
                    ♻ Characteristics of E-waste ♻
                  </p>
                  <br></br>
                  <div class="w-full pl-5 pr-5 text-justify">
                    E-waste stream contains diverse materials, which requires
                    special treatment and cannot be dumped in landfill sites,
                    most prominently, hazardous substances such as lead,
                    polychlorinated biphenyls (PCBs), polybrominated biphenyls
                    (PBBs), mercury, polybrominated diphenyl ethers (PBDEs),
                    brominated flame retardants (BFRs){" "}
                  </div>
                </div>
              </div>
              <br></br>
              <div id="BoE">
                <div class="space-x-7 py-10 pl-10 pr-10 text-center font-sans">
                  <p class="text-3xl font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">
                    ♻ Benefits of E-waste ♻
                  </p>
                  <br></br>
                  <div class="w-full text-center pl-5 pr-5">
                    <div class="flex">
                      <div class="w-2/5"></div>
                      <div class="w-4/7 text-left whitespace-pre font-sans">
                        <li> Save Landfill Space</li>
                        <li> Save Natural Resources</li>
                        <li> Increase in Employment</li>
                        <li> Increases Affordability</li>
                        <li> Removes Data Appropriately</li>
                        <li> Saves the Environment</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div id="TT font-sans">
                <p class="text-3xl font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">
                  ♻ Types of E-Waste ♻
                </p>
                <div id="ToE" class="flex space-x-7 pl-10 pr-10">
                  <div class="w-1/2">
                    <Container>
                      <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                        <div class="pr-8 pl-8 pb-8 m-2 bg-gradient-to-b from-white via-[#f4fff5] to-[#d8ffe7]">
                          <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                            <Link href="https://google.com">
                              <a className="hover:underline">
                                Consumer Lamp (fluorescent tube)
                              </a>
                            </Link>
                          </h3>
                          <p className="text-base leading-relaxed mb-4 text-stone-600">
                            A fluorescent lamp, also known as a fluorescent
                            tube, or a fluorescent light is a low-pressure
                            mercury-vapor gas-discharge lamp that uses
                            fluorescence to produce visible light. An electric
                            current in the gas excites mercury vapor, which
                            produces short-wave ultraviolet light that then
                            causes a phosphor coating on the inside of the lamp
                            to glow. A fluorescent lamp converts electrical
                            energy into useful light much more efficiently than
                            an incandescent lamp
                          </p>{" "}
                          {
                            <a
                              href="https://en.wikipedia.org/wiki/Fluorescent_lamp"
                              class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100"
                            >
                              Learn more
                            </a>
                          }
                        </div>
                      </div>
                    </Container>
                  </div>
                  <div class="w-1/2">
                    <Container>
                      {" "}
                      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"> More Stories </h2> */}{" "}
                      <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                        <div class="pr-8 pl-8 pb-8 m-2 bg-gradient-to-b from-white via-[#f4fff5] to-[#d8ffe7]">
                          <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                            <Link href="https://google.com">
                              <a className="hover:underline">ICT equipment</a>
                            </Link>
                          </h3>
                          <p className="text-base leading-relaxed mb-4 text-stone-600">
                            This includes printers, computers and laptops,
                            mobile phones and tablets, network and set-top
                            boxes, TVs and desktop monitors. ICT peripherals
                            such as mouse, keyboard, cables and adaptor can be
                            disposed of together.
                          </p>{" "}
                          {
                            <a
                              href="https://www.lawinsider.com/dictionary/ict-equipment#:~:text=ICT%20Equipment%20means%20any%20radio,reception%20of%20radio%20and%20telecommunications."
                              class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100"
                            >
                              Learn more
                            </a>
                          }
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>
                <div id="ToE" class="flex space-x-7 pl-10 pr-10">
                  <div class="w-1/2">
                    <Container>
                      {" "}
                      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"> More Stories </h2> */}{" "}
                      <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                        <div class="pr-8 pl-8 pb-8 m-2 bg-gradient-to-b from-white via-[#f4fff5] to-[#d8ffe7]">
                          <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                            <Link href="https://google.com">
                              <a className="hover:underline">
                                Large household Appliance{" "}
                              </a>
                            </Link>
                          </h3>
                          <p className="text-base leading-relaxed mb-4 text-stone-600">
                            This includes Consumer Refrigerators (900L),
                            Air-conditioners, Washing Machines, Dryers,
                            Televisions{" "}
                          </p>{" "}
                          {
                            <a
                              href="https://alba-ewaste.sg/types-e-waste/"
                              class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100"
                            >
                              Learn more
                            </a>
                          }
                        </div>
                      </div>
                    </Container>
                  </div>
                  <div class="w-1/2">
                    <Container>
                      {" "}
                      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight"> More Stories </h2> */}{" "}
                      <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                        <div class="pr-8 pl-8 pb-8 m-2 bg-gradient-to-b from-white via-[#f4fff5] to-[#d8ffe7]">
                          <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                            <Link href="https://google.com">
                              <a className="hover:underline">
                                Electric Mobility Device{" "}
                              </a>
                            </Link>
                          </h3>
                          <p className="text-base leading-relaxed mb-4 text-stone-600">
                            An electric vehicle (EV) is a vehicle that uses one
                            or more electric motors for propulsion. It can be
                            powered by a collector system, with electricity from
                            extravehicular sources, or it can be powered
                            autonomously by a battery (sometimes charged by
                            solar panels, or by converting fuel to electricity
                            using fuel cells or a generator). EVs include, but
                            are not limited to, road and rail vehicles, surface
                            and underwater vessels, electric aircraft and
                            electric spacecraft.
                          </p>{" "}
                          {
                            <a
                              href="https://en.wikipedia.org/wiki/Electric_vehicle"
                              class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100"
                            >
                              Learn more
                            </a>
                          }
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>
                <div id="ToE" class="flex space-x-7  pl-10 pr-10">
                  <div class="w-1/2">
                    <Container>
                      <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                        <div class="pr-8 pl-8 pb-8 m-2 bg-gradient-to-b from-white via-[#f4fff5] to-[#d8ffe7]">
                          <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                            <Link href="https://google.com">
                              <a className="hover:underline">
                                Household Battery{" "}
                              </a>
                            </Link>
                          </h3>
                          <p className="text-base leading-relaxed mb-4 text-stone-600">
                            D, C, AA, AAA, AAAA, N, 9-volt, Button cell
                          </p>{" "}
                          {
                            <a
                              href="https://en.wikipedia.org/wiki/AA_battery"
                              class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100"
                            >
                              Learn more
                            </a>
                          }
                        </div>
                      </div>
                    </Container>
                  </div>
                  <div class="w-1/2">
                    <Container>
                      <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                        <div class="pr-8 pl-8 pb-8 m-2 bg-gradient-to-b from-white via-[#f4fff5] to-[#d8ffe7]">
                          <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                            <Link href="https://google.com">
                              <a className="hover:underline">
                                Lithium-Ion Portable Battery{" "}
                              </a>
                            </Link>
                          </h3>
                          <p className="text-base leading-relaxed mb-4 text-stone-600">
                            Powerbank, Mobile Telephone Battery & Laptop Battery
                          </p>{" "}
                          {
                            <a
                              href="https://en.wikipedia.org/wiki/Lithium-ion_battery"
                              class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100"
                            >
                              Learn more
                            </a>
                          }
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>
                <div id="ToE" class="flex space-x-7 pl-10 pr-10">
                  <div class="w-1/2">
                    <Container>
                      <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                        <div class="pr-8 pl-8 pb-8 m-2 bg-gradient-to-b from-white via-[#f4fff5] to-[#d8ffe7]">
                          <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                            <Link href="https://google.com">
                              <a className="hover:underline">
                                Consumer Electric Vehicle Battery{" "}
                              </a>
                            </Link>
                          </h3>
                          <p className="text-base leading-relaxed mb-4 text-stone-600">
                            An electric vehicle battery (EVB, also known as a
                            traction battery) is a rechargeable battery used to
                            power the electric motors of a battery electric
                            vehicle (BEV) or hybrid electric vehicle (HEV).
                            Typically lithium-ion batteries, they are
                            specifically designed for high electric charge (or
                            energy) capacity.
                          </p>{" "}
                          {
                            <a
                              href="https://en.wikipedia.org/wiki/Electric_vehicle_battery"
                              class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100"
                            >
                              Learn more
                            </a>
                          }
                        </div>
                      </div>
                    </Container>
                  </div>
                  <div class="w-1/2">
                    <Container>
                      <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                        <div class="pr-8 pl-8 pb-8 m-2 bg-gradient-to-b from-white via-[#f4fff5] to-[#d8ffe7]">
                          <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                            <Link href="https://google.com">
                              <a className="hover:underline">
                                Consumer Lamp (Bulb){" "}
                              </a>
                            </Link>
                          </h3>
                          <p className="text-base leading-relaxed mb-4 text-stone-600">
                            An incandescent light bulb, incandescent lamp or
                            incandescent light globe is an electric light with a
                            wire filament heated until it glows. The filament is
                            enclosed in a glass bulb with a vacuum or inert gas
                            to protect the filament from oxidation. Current is
                            supplied to the filament by terminals or wires
                            embedded in the glass. A bulb socket provides
                            mechanical support and electrical connections.
                          </p>{" "}
                          {
                            <a
                              href="https://en.wikipedia.org/wiki/Incandescent_light_bulb"
                              class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100"
                            >
                              Learn more
                            </a>
                          }
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>

            </div>


                            
                        
            <div class="flex-none w-70 text-left pl-5 pr-5 py-20 rounded-full border-3 border-yellow-600">


              <Menu as="div" className="relative inline-block text-right pl-20 ">
                  <div>
                    <Menu.Button className=" inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100  bg-emerald-600 hover:bg-emerald-700 text-green-100 hover">
                      On This Page
                      <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#DoE"
                              className={classNames(
                                active ? 'px-4 py-2 whitespace-pre rounded bg-emerald-600 hover:bg-emerald-600 text-green-100' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Definition of E-waste
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#CoE"
                              className={classNames(
                                active ? 'px-4 py-2 whitespace-pre rounded bg-emerald-600 hover:bg-emerald-600 text-green-100' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Characteristics of E-waste
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#BoE"
                              className={classNames(
                                active ? 'px-4 py-2 whitespace-pre rounded bg-emerald-600 hover:bg-emerald-600 text-green-100' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Benefits of E-waste
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                              href="#ToE"
                              className={classNames(
                                active ? 'px-4 py-2 whitespace-pre rounded bg-emerald-600 hover:bg-emerald-600 text-green-100' : 'text-gray-700',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Types of E-waste
                            </a>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>




            </div>
            
          </div>
        </section>{" "}
        {/* BODYYYYY */}
      </Layout>
      undefined undefined
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
  return { props: { allPosts } };
}