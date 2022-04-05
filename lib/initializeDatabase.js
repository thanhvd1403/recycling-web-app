import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import db from "../firebase-config";
import fs from "fs";
import { join } from "path";
// NOTE THAT THIS SCRIPT MUST BE RUN LOCALLY OR THROUGH nextjs's getStaticProps()
const dataDirectory = join(process.cwd(), "data/E-waste_data.json");

export async function deleteAllPlaces() {
  data = await getAllPlaces();
  for (let doc of data) {
    await deletePlace(doc.id);
  }
}

export async function initializeDatabase() {
  await deleteAllPlaces();
  const data = JSON.parse(fs.readFileSync(dataDirectory, "utf8"));
  const placesCollectionRef = collection(db, "places");
  for (let item of data) {
    await addDoc(placesCollectionRef, item);
  }
  console.log("Successfully added data to database!");
}

export async function getAllPlaces() {
  const placesCollectionRef = collection(db, "places");
  const data = await getDocs(placesCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

async function deletePlace(id) {
  const refDoc = doc(db, "places", id);
  await deleteDoc(refDoc);
}
