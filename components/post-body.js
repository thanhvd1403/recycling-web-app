import markdownStyles from "./markdown-styles.module.css";
import Link from "next/link";

/**
 * Function to get and style post body
 * @param {Object, string} (data, url) post body
 * @returns {React.Node}
 */
export default function PostBody({ content, RegURL }) {
  return (
    <div className="w-full mx-auto p-5 sm:p-10 md:p-16 bg-gray-100">
      <div>
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="text-center">
          <a href={RegURL} target="_blank" rel="noopener noreferrer">
            <button className="m-10 rounded justify-center text-center w-36 hover:bg-orange-600 bg-orange-700 text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
              Register
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
