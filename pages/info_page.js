/* eslint-disable @next/next/no-img-element */
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import EWasteItems from "../components/ewaste-items";

/**
 * Funtion to render Info page at "/info_page"
 * @returns {React.Node}
 */
export default function InfoPage() {
  return (
    <>
      <Layout>
        <Head>
          <title>E-waste Information</title>
        </Head>

        {/* BODY */}
        <div className="w-full bg-[url('/assets/background.jpg')]">
          <div
            id="General information"
            className="space-x-7 py-20 px-5 text-center font-sans "
          >
            {/* BEGIN E-waste introduction */}
            <div className="rounded-3xl  bg-emerald-50 border-black py-5 shadow-sm">
              <div
                id="Definition"
                className="w-full py-6 text-justify sm:px-10 sx:px-3"
              >
                <p className="text-3xl font-bold text-gray-700 rounded-full text-center font-mono">
                  ♻ What is???? ♻
                </p>
                <span className="font-medium">
                  Electronic waste or e-waste{" "}
                </span>
                describes discarded electrical or electronic devices. Used
                electronics which are destined for refurbishment, reuse, resale,
                salvage recycling through material recovery, or disposal are
                also considered e-waste. Informal processing of e-waste in
                developing countries can lead to{" "}
                <span className="font-medium italic">adverse</span> human health
                effects and environmental pollution. Electronic scrap
                components, such as CPUs, contain potentially harmful materials
                such as lead, cadmium, beryllium, or brominated flame
                retardants. Recycling and disposal of e-waste may involve{" "}
                <span className="font-medium italic">significant risk </span>
                to health of workers and their communities.
              </div>
              {/* END E-waste introduction */}

              {/* BEGIN Characteristic of E-waste */}
              <div
                id="Characteristic"
                className="w-full py-6 text-justify sm:px-10 sx:px-3"
              >
                <p className="text-3xl font-bold text-gray-700 rounded-full text-center font-mono">
                  ♻ Characteristics of E-waste ♻
                </p>
                <span className=" font-medium">E-waste stream </span>
                contains diverse materials, which{" "}
                <span className="font-medium italic">
                  requires special treatment and cannot
                </span>{" "}
                be dumped in landfill sites, most prominently, hazardous
                substances such as lead, polychlorinated biphenyls (PCBs),
                polybrominated biphenyls (PBBs), mercury, polybrominated
                diphenyl ethers (PBDEs), brominated flame retardants (BFRs), and
                valuable substances such as iron, steel, copper, aluminium,
                gold, silver, platinum, palladium, and plastics.{" "}
                <span className="font-medium italic">
                  During the last decade, large amounts of diverse e-waste
                  discarded by developing and transition countries, as well as a
                  sizeable portion of the e-waste generated from developed
                  countries and exported to developing and transition countries,
                  has been rapidly piling up in developing countries impacting
                  their emerging economies.
                </span>
                The management of e-waste in developing and transition countries
                is exacerbated by several factors, including illegal trafficking
                and unlicensed recycling of e-waste; lack of technological,
                financial, and technically skilled human resources; inadequate
                organizational structure required; and an inadequate description
                of the roles and responsibilities of stakeholders and
                institutions involved in e-waste management.
              </div>
              {/* END Characteristic of E-waste */}

              {/* BEGIN IMpact of E-waste */}
              <div
                id="Impact"
                className="w-full py-6 text-justify sm:px-10 sx:px-3"
              >
                <p className="text-3xl font-bold text-gray-700 rounded-full text-center font-mono">
                  ♻ Impact of E-waste ♻
                </p>
                <div className="md:px-[10vw] sx:px-3">
                  <img
                    src="/assets/ewaste_effect.jpg"
                    className="w-full  h-auto py-6 justify-center "
                    alt="..."
                  />
                </div>
              </div>
              {/* END IMpact of E-waste */}

              {/* BEGIN E-waste Management */}
              <div
                id="Benefit"
                className="w-full py-6 text-justify sm:px-10 sx:px-3"
              >
                <p className="text-3xl font-bold text-gray-700 rounded-full text-center font-mono">
                  ♻ Benefits of E-waste recycling ♻
                </p>
                <div>
                  <ul className="py-2">
                    <span className="font-semibold text-xl">
                      1. Save Landfill Space:{" "}
                    </span>
                    Electronic waste is being thrown into landfills at an
                    increasing rate each year. This problem is prevalent not
                    only in the USA, but is quickly spreading around the world.
                    Throwing e-waste into landfills creates many environmental
                    issues.{" "}
                    <span className="font-medium italic">
                      When e-waste is recycled it is not disposed of in a
                      landfill, instead the components of electronic gadgets are
                      separated. Experts determine whether they are reusable or
                      not.{" "}
                    </span>
                    Non-recyclable components are disposed of properly so their
                    harmful impact on the environment is reduced and recoverable
                    e-waste components are used to create new products. Keeping
                    e-waste out of landfills reduces the space a landfill
                    occupies, it also means fewer microorganisms and plants are
                    disturbed.
                  </ul>
                  <ul className="py-2">
                    <span className="font-semibold text-xl">
                      2. Save Natural Resources:{" "}
                    </span>
                    As per studies, 98% of components in an electronic device
                    are recyclable. Metals extracted through mining require much
                    difficulty and effort. Apart from mining, the cost to refine
                    metals and transform them to a usable form is also very
                    high. Through the extraction and reuse of metal from old
                    electronic gadgets, the need to manufacture and refine raw
                    metals decreases. Wires and other components of electronic
                    devices made of aluminum and copper can be reused multiple
                    times. Reutilizing them in other electronic devices means
                    little to no material goes to waste.{" "}
                    <span className="font-medium italic">
                      Recycling e-waste means that natural resources such as
                      metals aren’t wasted and the energy and cost required to
                      manufacture and mine them are also saved.{" "}
                    </span>
                  </ul>
                  <ul className="py-2">
                    <span className="font-semibold text-xl">
                      3. Increase in Employment:{" "}
                    </span>
                    There are a lot of jobs in the field of recycling. There are
                    many experts out there that have professional degrees
                    regarding the recycling of electronic waste. Increased
                    education about electronics recycling means more people
                    recycle and more jobs are created.{" "}
                    <span className="font-medium italic">
                      Therefore e-waste recycling industry create more jobs,
                      which mean increase financial stability for our
                      communities.{" "}
                    </span>
                  </ul>
                  <ul className="py-2">
                    <span className="font-semibold text-xl">
                      4. Increases Affordability:{" "}
                    </span>
                    In many cases, people want to get rid of an electronic
                    device not because it has stopped working, but because they
                    want to buy one with the latest technology. If they give
                    their old gadgets to charity or sell them in a
                    second-hand-shop, other people who cannot afford to buy new
                    electronic devices can easily buy them.{" "}
                    <span className="font-medium italic">
                      Always remember, you may not need an electronic gadget,
                      but it could be of the utmost importance to someone else!
                    </span>
                  </ul>
                  <ul className="py-2">
                    <span className="font-semibold text-xl">
                      5. Removes Data Appropriately:{" "}
                    </span>
                    Keeping data safe is becoming an increasingly important
                    issue throughout the world. In most cases, people assume
                    because they have deleted files from their computer, they no
                    longer exist on the computer. But that is not always the
                    case.{" "}
                    <span className="font-medium italic">
                      Permanently removing data from a mobile phone and computer
                      requires special software and proper strategy.{" "}
                    </span>
                    Ensuring the appropriate removal of data is mandatory before
                    getting rid of the electronic device. People caught breaking
                    recycling laws or data security regulations face legal
                    implications.
                  </ul>
                  <ul className="py-2">
                    <span className="font-semibold text-xl">
                      6. Saves the Environment:{" "}
                    </span>
                    Toxic and harmful poisons are reduced because green gas
                    emissions are decreased and plastic is not thrown into the
                    sea thereby improving marine life. Do not forget, we are a
                    part of the environment, and all the toxic material coming
                    out of the e-waste is harmful to us as well. These toxins
                    from e-waste are partially responsible for diseases such as
                    cancer in human beings as well as animals.
                    <span className="font-medium italic">
                      {" "}
                      Consumers must be responsible and protect the environment
                      by recycling e-waste. To save our future generations from
                      an unhealthy environment or before completely losing
                      natural habitats.
                    </span>
                  </ul>
                </div>
              </div>
              {/* END E-waste Management */}

              {/* BEGIN E-waste Type information */}
              <div id="Type" className="w-full text-center px-5 py-6">
                <Container>
                  <h1 className="text-3xl font-bold text-center text-gray-700 rounded-full justify-center font-mono ">
                    ♻ Types of E-Waste ♻
                  </h1>
                  <EWasteItems isLink={true} />
                </Container>
              </div>
              {/* END E-waste Type information */}
            </div>
          </div>

          {/* BEGIN Do you know? */}
          <div id="More information">
            <p className="pt-10 pb-5 text-3xl font-bold text-gray-700 rounded-full flex items-center justify-center font-mono">
              ♻ Do you know ♻
            </p>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 mobile:grid-cols-2 laptop:grid-cols-4 min-h-min px-5 py-5 laptop:px-24">
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                  <div className="w-full">
                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                      “
                    </div>
                    <p className="text-md text-gray-600 text-center px-5  text-lg">
                      {`A large number of what is labeled as "e-waste" is
                      actually not waste at all, but rather whole electronic
                      equipment or parts that are readily marketable for reuse
                      or can be recycled for materials recovery`}
                    </p>
                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3">
                      ”
                    </div>
                  </div>
                </div>

                <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                  <div className="w-full">
                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                      “
                    </div>
                    <p className="text-md text-gray-600 text-center px-5  text-lg">
                      Singapore generates about 60,000 tonnes of e-waste a year.
                      That’s equivalent to discarding about 70 mobile phones per
                      person in Singapore!
                    </p>
                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3">
                      ”
                    </div>
                  </div>
                </div>

                <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                  <div className="w-full">
                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                      “
                    </div>
                    <p className="text-md text-gray-600 text-center px-5 text-lg">
                      Singapore is the second-largest generator of e-waste in
                      the region – about 60,000 tonnes of e-waste (equivalent to
                      the weight of 220 Airbus A380 airplanes) was produced each
                      year
                    </p>
                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3">
                      ”
                    </div>
                  </div>
                </div>

                <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                  <div className="w-full">
                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                      “
                    </div>
                    <p className="text-md text-gray-600 text-center px-5  text-lg">
                      When e-waste is warmed up, toxic chemicals are released
                      into the air damaging the atmosphere. The damage to the
                      atmosphere is one of the biggest environmental impacts
                      from e-waste.
                    </p>
                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3">
                      ”
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:flex flex-grow justify-center sm:block">
              <img
                src="/assets/home_page/stat4.jpg"
                className="lg:w-1/2 h-auto py-10 px-5 sm:w-full"
                alt="..."
              />
              <img
                src="/assets/home_page/stat1.jpg"
                className="lg:w-2/5 h-auto py-10 px-5 sm:w-full"
                alt="..."
              />
            </div>

            <div className="bg-gray-100 py-10 flex flex-grow justify-center">
              <img
                src="/assets/home_page/stat2.jpg"
                className="w-auto h-auto"
                alt="..."
              />
            </div>

            <div className="flex flex-wrap flex-grow justify-center">
              <picture className="w-screen h-auto">
                <source
                  media="(min-width: 767px)"
                  srcSet="/assets/home_page/stat3.jpg"
                />
                <img
                  src="/assets/home_page/stat3_mobile.jpg"
                  className="w-screen h-auto"
                  alt="Stats image"
                  role="img"
                />
              </picture>
            </div>

            <div className=" bg-[url('/assets/background.jpg')] items-center justify-center lg:flex md:py-10 sx:py-3">
              <div className="px-10 pt-10 text-2xl font-bold text-teal-900 rounded-full flex items-center text-center justify-center font-mono">
                CHANNELLING E-WASTE TO REPUTABLE E-WASTE RECYCLERS WILL BENEFIT
                THE ENVIRONEMNT AND THE PUBLIC, AS THIS
              </div>
              <div className="text-lg grid grid-cols-1 mobile:grid-cols-2 laptop:grid-cols-2 min-h-min min-w-max px-5 py-5 laptop:px-24">
                <div className="bg-emerald-100 w-screen mx-auto rounded-lg shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                  <p className="text-md text-gray-600 text-center px-5">
                    {`Keeps valuable resources out of the waste of the stream and
                    converses our planet's finite resources.`}
                  </p>
                </div>

                <div className="bg-emerald-50 w-screen mx-auto rounded-lg shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs">
                  <p className="text-md text-gray-600 text-center px-5">
                    Ensures harmful substances are not released into the
                    environment
                  </p>
                </div>
                <div className="w-screen mx-auto rounded-lg shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs sm:bg-emerald-50 sx:bg-emerald-100">
                  <p className="text-md text-gray-600 text-center px-5">
                    {`Reduces strain on Singapore's waste disposal facilities and
                    frees up land for letter quality of life for residents`}
                  </p>
                </div>

                <div className="w-screen mx-auto rounded-lg shadow-lg px-5 pt-5 pb-5 text-gray-800 max-w-xs sm:bg-emerald-100 sx:bg-emerald-50">
                  <p className="text-md text-gray-600 text-center px-5">
                    Helps fight climate change, grow our green economy and local
                    employment opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* END Do you know? */}
        </div>
        {/* END Body */}
      </Layout>
    </>
  );
}
