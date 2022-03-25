import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { collection, addDoc } from "@firebase/firestore";
import db from "../firebase-config";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

const DATA_DIR = join(process.cwd(), "data/E-waste_data.json");

export async function initializeDatabase() {
  const data = JSON.parse(fs.readFileSync(DATA_DIR, "utf8"));
  const placesCollectionRef = collection(db, "places");
  for (let item of data) {
    await addDoc(placesCollectionRef, item);
  }
  console.log("Successfully added data to database");
}
