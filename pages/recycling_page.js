import Layout from "../components/layout";
import Head from "next/head";
import GoogleMapComponent from "../components/google-maps";

const containerStyle = {
  width: "80vw",
  height: "80vh",
  display: "block",
  paddingRight: "5vw",
  margin: "auto",
  position: "relative",
};

export default function RecyclePage() {
  return (
    <>
      <Layout preview={false}>
        <Head>
          <title>Recycling Hub</title>
        </Head>
        {/* <Image
          layout="fill"
          alt="E-waste recycling"
          objectFit="cover"
          objectPosition="center"
          quality="100"
          height={"500vh"}
        /> */}
        <div className="p-10 bg-teal-50 items-center justify-center">
          <div className="mb-8 text-4xl text-center md:text-5xl font-sans font-bold text-gray-800">
            Where to recycle your E-waste?
          </div>
          <GoogleMapComponent containerStyle={containerStyle} />
          <hr className="border-accent-2 mt-14 mb-12 bg-teal-50 " />
          <div className="mb-8 text-4xl text-center md:text-5xl font-sans font-bold text-gray-800">
            Disposal guidelines
          </div>
          <div className="text-xl px-4 laptop:px-36 laptop:text-2xl text-justify">
            <strong>
              Before you dispose your E-Waste, there are some things you should
              take note of:
            </strong>
            <br />
            <br />
            <b>Step 1: </b>
            Make sure you are disposing only regulated E-waste.
            <br />
            <br />
            <b>Step 2: </b>
            Remove all packaging items (e.g. boxes, plastic wraps, bags).
            Dispose only the E-waste unless it is damaged.
            <br />
            <br />
            <b>Step 3: </b>
            Broken appliances or leaking batteries may be disposed of by
            Securing it properly in a container. Please take care note to
            dispose of any broken lamps inside the E-Bin. Please dispose them of
            as general waste, i.e. green refuse bins.
            <br />
            <br />
            <b>Step 4: </b>
            Drop off your E-waste at designated points. Do note that different
            E-waste has different collection avenues.
            <br />
            <br />
            <div class="font-bold text-3xl pb-5">Special note</div>
            <b>For ICT Equipment: </b>
            Wipe all data on your devices whenever possible.
            <br />
            <b>For Light Bulbs: </b>
            Do note that long fluorescent tubes are only collected at Collection
            Drives or our Depot (20 Tuas Loop), kindly do not discard them into
            the E-Bins.
            <br />
            <b>For Large Household Appliances: </b>
            <div>
              <li>
                Disconnect any cables/connections and ensure appliances,
                fittings or equipment have been switched off.
              </li>
              <li>
                Empty, properly defrost and clean refrigerators and deep
                freezers.
              </li>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
