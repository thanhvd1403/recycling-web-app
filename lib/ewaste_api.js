import { collection, getDocs, doc, deleteDoc } from "@firebase/firestore";
import db from "../firebase-config";

export async function getAllPlaces() {
  const placesCollectionRef = collection(db, "places");
  const data = await getDocs(placesCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

export async function getPlace(id) {
  const placesCollectionRef = collection(db, "places");
  const data = await getDocs(placesCollectionRef);
  return data.docs
    .map((doc) => ({ ...doc.data(), id: doc.id }))
    .find((place) => place.id === id);
}

export async function deletePlace(id) {
  const targetDoc = doc(db, "places", id);
  await deleteDoc(targetDoc);
}
