import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import GoogleMapComponent from "../components/google-maps";
import Image from "next/image";
import SectionSeparator from "../components/section-separator";

const containerStyle = {
  width: "90vw",
  height: "80vh",
  display: "block",
  margin: "auto",
  position: "relative",
};

export default function RecyclePage() {
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>Recycling Hub</title>
        </Head>

        <Image
          layout="fill"
          src="/assets/recycle_background.webp"
          alt="E-waste recycling"
          objectFit="cover"
          objectPosition="center"
          quality="100"
          height={"150vh"}
        />
        <GoogleMapComponent containerStyle={containerStyle} />




        <SectionSeparator></SectionSeparator>
        <div class="mb-10 py-10 bg-teal-50 items-center justify-center">
          <div className='mb-8 text-4xl text-center md:text-5xl font-sans font-bold text-gray-800'>
            Disposal guidelines
          </div>
          <div className = 'text-xl px-4 laptop:px-36 laptop:text-2xl'>
            <b>
              Before you dispose your E-Waste, there are some things you should take note of:
            </b>
            <br></br>
            <br></br>
            <b>Step 1: </b>
            Only you are disposing only Regulated E-waste.
            <br></br>
            <br></br>
            <b>Step 2: </b>
            Remove all packaging (e.g. boxes, plastic wraps, bags). Dispose only the E-Waste unless it is damaged.
            <br></br>
            <br></br>
            <b>Step 3: </b>
            (for damaged E-Waste only): Broken appliances or leaking batteries may be disposed of by Securing it properly in a container. Please take care note to dispose of any broken lamps inside the E-Bin. Please dispose them of as general waste, i.e. green refuse bins
            <br></br>
            <br></br>
            <b>Step 4: </b>
            Drop off your E-Waste at designated points. Do note that different E-Waste has different collection avenues.

            <br></br>
            
            <br></br>
            <br></br>
            <b>For ICT Equipment: </b>
            <br></br>
            Wipe all data on your devices whenever possible

            <br></br>
            <br></br>
            <b>For Light Bulbs: </b>
            <br></br>
            Do note that long fluorescent tubes are only collected at Collection Drives or our Depot (20 Tuas Loop), kindly do not discard them into the E-Bins

            <br></br>
            <br></br>
            <b>For Large Household Appliances: </b>
            <ol>
              <li>1. Disconnect any cables / connections and ensure appliances, fittings or equipment have been switched off</li>
              <li>2. Empty, properly defrost and clean refrigerators and deep freezers</li>
            </ol>
          </div>
        </div>

      </Layout>
    </>
  );
}
