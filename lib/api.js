import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { collection, addDoc } from "@firebase/firestore";
import db from "../firebase-config";

const postsDirectory = join(process.cwd(), "_posts");

/**
 * Get slugs (Url) from all posts
 * @returns {Array} strings of posts URL
 */
export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

/**
 * Function to get data from a single post.
 * @param {*} slug string of post URL
 * @param {*} fields to get posts data from
 * @returns {Object} post data
 */
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

/**
 * Function to get static posts from "_posts" directory
 * @returns {Array} of posts
 */
export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

const DATA_DIR = join(process.cwd(), "data/E-waste_data.json");
/**
 * Function to populate places data from E-waste_data.json
 */
export async function initializeDatabase() {
  const data = JSON.parse(fs.readFileSync(DATA_DIR, "utf8"));
  const placesCollectionRef = collection(db, "places");
  let index = 0;
  for (let item of data) {
    await addDoc(placesCollectionRef, { ...item, id: index });
    index++;
  }
  console.log("Successfully added data to database");
}
