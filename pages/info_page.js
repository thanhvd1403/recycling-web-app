import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import { Typography, Grid, Card, CardActionArea } from "@mui/material";
import { EwasteInfo } from "../data/data";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Swal from "sweetalert2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InfoPage() {
  const sectionRef = [
    { href: "#DoE", title: "Definition of E-waste" },
    { href: "#CoE", title: "Characteristics of E-waste" },
    { href: "#BoE", title: "Benefits of E-waste recycling" },
    { href: "#ToE", title: "Different types of E-waste" },
  ];
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>E-waste Information</title>
        </Head>
        {/* BODYYYYY */}
        <section>
          <div class="flex">
            {/* <div class="flex-none w-64 text-center pl-5 pr-5 py-20 rounded-full border-3 border-yellow-600"></div> */}
            <div class="flex-initial w-640 border-r-4">
              <div
                id="WoE"
                class="space-x-7 py-10 pl-10 pr-10 text-center font-sans "
              >
                <div class="rounded-3xl bg-emerald-100 border-black py-5 shadow-lg">
                  <p class="text-3xl font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">
                    ♻ Why E-waste? ♻
                  </p>
                  <div class="w-full pl-5 pr-5 text-justify">
                    There are a lot of good reasons to recycle your used
                    electronics. Lithium-ion batteries in e-Waste is one of
                    them. Recycling helps protect our environment, lowers the
                    cost of manufacturing new products, and enables the e-waste
                    recycling industry to create jobs. Low recycling rates for
                    e-waste are a worldwide problem. It requires a global
                    solution. We need to improve our recycling rates for
                    e-waste. But another reason to recycle e-waste is safety.
                    Modern electronics contain circuit boards that smolder
                    together various metals and plastics. Some of these
                    materials are toxic. We want to keep those toxins out of
                    landfills, where they can contaminate the soil and water.
                    But safety is also a concern because the material in used
                    electronics includes used batteries. That can be as
                    problematic as toxins like lead and mercury. Although a rare
                    occurrence, used batteries have been known to explode.
                    Having e-Waste handled by skilled recycling experts is a lot
                    safer than tossing them in landfills – or leaving them in a
                    desk drawer once you stop using them.
                    <div class="text-center pr-30"></div>
                  </div>
                </div>
              </div>
              <div
                id="DoE"
                class="space-x-7 py-10 pl-10 pr-10 text-center font-sans "
              >
                <div class="rounded-3xl bg-emerald-100 border-black py-5 shadow-lg">
                  <p class="text-3xl font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">
                    ♻ Definition of E-waste ♻
                  </p>
                  <div class="w-full pl-5 pr-5 text-justify">
                    Electronic waste or e-waste describes discarded electrical
                    or electronic devices. Used electronics which are destined
                    for refurbishment, reuse, resale, salvage recycling through
                    material recovery, or disposal are also considered e-waste.
                    Informal processing of e-waste in developing countries can
                    lead to adverse human health effects and environmental
                    pollution. Electronic scrap components, such as CPUs,
                    contain potentially harmful materials such as lead, cadmium,
                    beryllium, or brominated flame retardants. Recycling and
                    disposal of e-waste may involve significant risk to health
                    of workers and their communities.
                    <div class="text-center pr-30"></div>
                  </div>
                </div>
              </div>
              <div id="CoE">
                <div class="space-x-7 py-10 pl-10 pr-10 text-center font-sans">
                  <div class="rounded-3xl bg-emerald-100 border-black py-5 shadow-lg">
                    <p class="text-3xl font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">
                      ♻ Characteristics of E-waste ♻
                    </p>
                    <div class="w-full pl-5 pr-5 text-justify">
                      E-waste stream contains diverse materials, which requires
                      special treatment and cannot be dumped in landfill sites,
                      most prominently, hazardous substances such as lead,
                      polychlorinated biphenyls (PCBs), polybrominated biphenyls
                      (PBBs), mercury, polybrominated diphenyl ethers (PBDEs),
                      brominated flame retardants (BFRs)
                    </div>
                  </div>
                </div>
              </div>
              <TypeInformation />

              {/* Start */}
              <p class="pt-10 pb-5 text-3xl font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">
                ♻ Do you know ♻
              </p>

              <div class="flex items-center justify-center">
                <div class="bg-gray-100  grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 min-h-min px-5 py-5 laptop:px-24">
                  <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                    <div class="w-full">
                      <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                        “
                      </div>
                      <p class="text-md text-gray-600 text-center px-5">
                        A large number of what is labeled as "e-waste" is
                        actually not waste at all, but rather whole electronic
                        equipment or parts that are readily marketable for reuse
                        or can be recycled for materials recovery
                      </p>
                      <div class="text-3xl text-indigo-500 text-right leading-tight h-3">
                        ”
                      </div>
                    </div>
                  </div>

                  <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                    <div class="w-full">
                      <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                        “
                      </div>
                      <p class="text-md text-gray-600 text-center px-5">
                        Singapore generates about 60,000 tonnes of e-waste a
                        year. That’s equivalent to discarding about 70 mobile
                        phones per person in Singapore!
                      </p>
                      <div class="text-3xl text-indigo-500 text-right leading-tight h-3">
                        ”
                      </div>
                    </div>
                  </div>

                  <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                    <div class="w-full">
                      <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                        “
                      </div>
                      <p class="text-md text-gray-600 text-center px-5">
                        Singapore is the second-largest generator of e-waste in
                        the region – about 60,000 tonnes of e-waste (equivalent
                        to the weight of 220 Airbus A380 airplanes) was produced
                        each year
                      </p>
                      <div class="text-3xl text-indigo-500 text-right leading-tight h-3">
                        ”
                      </div>
                    </div>
                  </div>

                  <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                    <div class="w-full">
                      <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                        “
                      </div>
                      <p class="text-md text-gray-600 text-center px-5">
                        When e-waste is warmed up, toxic chemicals are released
                        into the air damaging the atmosphere. The damage to the
                        atmosphere is one of the biggest environmental impacts
                        from e-waste.
                      </p>
                      <div class="text-3xl text-indigo-500 text-right leading-tight h-3">
                        ”
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" flex flex-grow justify-center">
                <img
                  src="/assets/home_page/stat1.png"
                  class="w-auto h-auto py-10"
                  alt="..."
                />
              </div>

              <div class="bg-gray-100 py-10 flex flex-grow justify-center">
                <img
                  src="/assets/home_page/stat2.png"
                  class="w-auto h-auto"
                  alt="..."
                />
              </div>

              <div class="py-10 flex flex-grow justify-center">
                <img
                  src="/assets/home_page/stat3.png"
                  class="w-auto h-auto"
                  alt="..."
                />
              </div>

              <div class="py-10 bg-teal-50 flex items-center justify-center">
                <div class="px-10 pt-10 text-2xl font-bold text-teal-700 rounded-full flex items-center text-center justify-center font-mono">
                  CHANNELLING E-WASTE TO REPUTABLE E-WASTE RECYCLERS WILL
                  BENEFIT THE ENVIRONEMNT AND THE PUBLIC, AS THIS
                </div>
                <div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 min-h-min min-w-max px-5 py-5 laptop:px-24">
                  <div class="bg-emerald-100 w-full mx-auto rounded-lg shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                    <p class="text-md text-gray-600 text-center px-5">
                      Keeps valuable resources out of the waste of the stream
                      and converses our planet's finite resources.
                    </p>
                  </div>

                  <div class="bg-emerald-50 w-full mx-auto rounded-lg shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                    <p class="text-md text-gray-600 text-center px-5">
                      Ensures harmful substances are not released into the
                      environment
                    </p>
                  </div>
                  <div class="bg-emerald-50 w-full mx-auto rounded-lg shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                    <p class="text-md text-gray-600 text-center px-5">
                      Reduces strain on Singapore's waste disposal facilities
                      and frees up land for letter quality of life for residents
                    </p>
                  </div>

                  <div class="bg-emerald-100 w-full mx-auto rounded-lg shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                    <p class="text-md text-gray-600 text-center px-5">
                      Helps fight climate change, grow our green economy and
                      local employment opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* End */}
            </div>
            {/* <div id="BoE">
              <div class="space-x-7 py-10 pl-10 pr-10 text-center font-sans">
                <div class="rounded-3xl bg-emerald-100 border-black py-5 shadow-lg">
                  <p class="text-3xl font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">
                    ♻ Benefits of E-waste ♻
                  </p>
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
            </div> */}
            {/* <div class="flex-none w-70 text-left pl-5 pr-5 py- rounded-full">
              <Menu
                as="div"
                className="relative inline-block text-right pl-15 py-10"
              >
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100  bg-emerald-600 hover:bg-emerald-700 text-green-100 hover">
                  On This Page
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 py-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {sectionRef.map((sectionInfo) => {
                      return (
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={sectionInfo.href}
                              className={classNames(
                                active
                                  ? "px-4 py-2 whitespace-pre rounded bg-emerald-600 hover:bg-emerald-600 text-green-100"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {sectionInfo.title}
                            </a>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div> */}
          </div>
        </section>
      </Layout>
    </>
  );
}

function TypeInformation() {
  return (
    <Container>
      <h1 class="text-3xl font-bold text-center text-gray-700 rounded-full justify-center font-mono ">
        ♻ Types of E-Waste ♻
      </h1>
      <Grid container alignItems="stretch" spacing={2} my={2}>
        {Object.entries(EwasteInfo).map(([type, specificInfo]) => {
          return (
            <ItemCard
              title={type}
              imageURL={specificInfo.imageURL}
              data={[type, specificInfo.description, specificInfo.link]}
            />
          );
        })}
      </Grid>
    </Container>
  );
}

function ItemCard(props) {
  const [type, description, link] = props.data;
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
                <a href=${link} target="_blank" class="btn btn-success activate">
                  Learn More
                </a>
              </div>`,
              icon: "info",
              color: "#000",
              background:
                "url(/assets/type_of_ewaste/alert_background.jpg) no-repeat fixed center",
              backdrop: `rgba(153, 241, 118, 0.4)`,
              confirmButtonText: "Gotcha!",
            });
          }}
        >
          <img
            src={props.imageURL}
            title={props.title}
            alt={"Image of " + props.title}
            style={{
              height: "200px",
              width: "100%",
              filter: "brightness(40%)",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h5"
            fontWeight={500}
            sx={{
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
