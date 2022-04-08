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
        <div className="px-10 py-20 bg-[url('/assets/background.png')] items-center justify-center">
          <div className="mb-8 text-4xl text-center md:text-5xl font-sans font-bold text-gray-800">
            Where to recycle your E-waste?
          </div>
          <GoogleMapComponent containerStyle={containerStyle} />
          <hr className="border-accent-2 mt-14 mb-12 bg-teal-50 " />
          <div className="mb-8 text-4xl text-center md:text-5xl font-sans font-bold text-gray-800">
            Disposal guidelines
          </div>
          <div className="text-xl px-4 laptop:px-36 laptop:text-2xl text-justify">
            <div className="py-3 font-bold text-3xl">
              Reminder before disposing your E-Waste:
            </div>
            <div className="py-1">
              <b>Step 1: </b>
              Make sure you are disposing only regulated E-waste.
            </div>
            <div className="py-1">
              <b>Step 2: </b>
              Remove all packaging items (e.g. boxes, plastic wraps, bags).
              Dispose only the E-waste unless it is damaged.
            </div>
            <div className="py-1">
              <b>Step 3: </b>
              Broken appliances or leaking batteries may be disposed of by
              securing it properly in a container. Please take care note of any
              broken lamps inside the E-Bin, dispose them as general waste, i.e.
              green refuse bins.
            </div>
            <div className="py-1">
              <b>Step 4: </b>
              Drop off your E-waste at designated points. Do note that different
              E-waste has different collection avenues.
            </div>
            <div className="font-bold text-3xl py-3">Special note</div>
            <div className="py-1">
              <b>For ICT Equipment: </b>
              Wipe all data on your devices whenever possible.
            </div>
            <div className="py-1">
              <b>For Light Bulbs: </b>
              Do note that long fluorescent tubes are only collected at
              Collection Drives or our Depot (20 Tuas Loop), kindly do not
              discard them into the E-Bins.
            </div>
            <div className="py-1">
              <b>For Large Household Appliances: </b>
              <div>
                <li>
                  Disconnect cables and ensure appliances, fittings or equipment
                  have been switched off.
                </li>
                <li>
                  Make sure to empty, properly defrost and clean refrigerators
                  or deep freezers.
                </li>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
