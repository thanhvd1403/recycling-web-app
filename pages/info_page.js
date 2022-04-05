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
import styled from "styled-components";

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
                    of workers and their communities
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
              <div id="BoE">
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
              </div>
              <div id="TT font-sans">
                <div id="ToE" class="flex space-x-7 pl-10 pr-10">
                  <Container class="w-1/2">
                    <div className="grid md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                      <div class="rounded-3xl bg-emerald-100 border-black p-5 shadow-lg">
                        <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
                          <Link href="https://en.wikipedia.org/wiki/Electric_vehicle_battery">
                            <a className="hover:underline">
                              Consumer Electric Vehicle Battery
                            </a>
                          </Link>
                        </h3>
                        <p className="text-base leading-relaxed mb-4 text-stone-600"></p>
                        <a
                          href="https://en.wikipedia.org/wiki/Electric_vehicle_battery"
                          class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100"
                        >
                          Learn more
                        </a>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
              <TypeInformation />
            </div>
            <div class="flex-none w-70 text-left pl-5 pr-5 py- rounded-full">
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
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

function TypeInformation() {
  return (
    <Container>
      <h1 class="text-3xl font-bold text-gray-700 rounded-full justify-center font-mono ">
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

// const styledButton = styled.a`
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;

//   ${(props) =>
//     props.primary &&
//     css`
//       background: white;
//       color: black;
//     `}
// `;

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
              // backdrop: `rgba(153, 241, 118, 0.4)`,
              confirmButtonText: "Sure thing!",
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
