/* eslint-disable @next/next/no-img-element */
import Container from "../components/container";
import EventPosts from "../components/event-posts";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { doc, getDoc, setDoc, Timestamp } from "@firebase/firestore";
import db from "../firebase-config";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function EventPage({ allPosts }) {
  const morePosts = allPosts.slice(0);

  const [inputEmail, setInputEmail] = useState("");
  const handleChange = (event) => {
    setInputEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputEmail != "") {
      const emailRef = doc(db, "emails", inputEmail);
      getDoc(emailRef).then((emailSnap) => {
        if (emailSnap.exists()) {
          Swal.fire({
            title: "Welcome back!",
            html: `<p>Email
                <strong>${inputEmail}</strong> 
                already exists!
                </p>`,
            icon: "info",
            color: "#000",
            // background: "url(/assets/recycle_alert.jpg) no-repeat fixed center",
            background: "#ECEFDA",
            showConfirmButton: false,
            backdrop: `rgba(153, 241, 118, 0.4)`,
            timer: 3000,
          });
        } else {
          setDoc(emailRef, {
            subscriptionDate: Timestamp.now(),
          });
          Swal.fire({
            title: "Welcome on board!",
            html: `<p>Email
                <strong>${inputEmail}</strong> 
                added successfully!
                </p>`,
            icon: "success",
            color: "#000",
            // background: "url(/assets/recycle_alert.jpg) no-repeat fixed center",
            background: "#ECEFDA",
            showConfirmButton: false,
            backdrop: `rgba(153, 241, 118, 0.4)`,
            timer: 3000,
          });
        }
      });
    }
    setInputEmail("");
  };
  return (
    <>
      <Layout preview={true}>
        <Head>
          <title>Events</title>
        </Head>

        <div className="flex flex-wrap flex-grow justify-center">
          <img
            src="/assets/background_event_page2.png"
            className="w-screen h-auto"
            alt="..."
          />
        </div>
        <Container>
          {morePosts.length > 0 && <EventPosts posts={morePosts} />}
        </Container>
        <div className="pt-6 pb-12 px-4 tablet:px-24 md:flex xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row bg-gradient-to-b from-white via-yellow-100 to-emerald-300">
          <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
            <img
              src="/assets/background_event_page.png"
              alt="Envelope with a newsletter"
              role="img"
              className="w-auto h-auto  xl:w-full lg:w-1/2"
            />
          </div>

          <div className="w-full xl:w-1/2 xl:pl-10 xl:py-28">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-teal-800 mb-4 text-center xl:text-left md:mt-0 mt-4">
              Subscribe
            </h1>
            <p className="text-base leading-normal text-teal-800 text-center xl:text-left">
              Subscribe to our mailing list to be the first one receiving
              e-newsletter and events about E-recycling.
            </p>
            <form
              className="grid grid-cols-1 gap-4 justify-center md:grid-cols-80/20 items-stretch mt-12"
              onSubmit={handleSubmit}
            >
              <input
                className="bg-gray-100 rounded text-base leading-none text-gray-800 p-5  border border-transparent focus:outline-none focus:border-gray-500"
                type="email"
                placeholder="Your Email"
                value={inputEmail}
                onChange={handleChange}
              />
              <input
                className="flex-auto text-center justify-items-center md:w-32 hover:bg-emerald-600 bg-emerald-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out"
                type="submit"
                value="Subscribe"
              />
            </form>
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
    "RegURL",
    "ogImage",
  ]);

  return {
    props: { allPosts },
  };
}
