import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
<<<<<<< HEAD
    <div class='pr-3 m-1 pl-3 m-3 m-2 pb-8 m-2 bg-gradient-to-b from-white via-white to-emerald-200'>
    {/* <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16"> */}
=======
    <div class="pr-8 pl-8 pb-8 m-2 bg-gradient-to-b from-white via-white to-emerald-200">
      {/* <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16"> */}
>>>>>>> 198573cd8aea118026967a6bfcf8686963ef0676
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-3xl mb-3 align='center' leading-snug text-emerald-800 font-bold">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-xl mb-4 font-bold">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-base leading-relaxed mb-4 text-stone-600">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
      {
        <button
          class="px-6 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-green-100"
          onClick={() => (window.location.href = `/posts/${slug}`)}
        >
          Learn more
        </button>
      }
    </div>
  );
}
