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
            <button className="m-10 justify-center text-center w-36 rounded-l-none hover:bg-orange-600 bg-orange-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
              Register
            </button>
          </a>
        </div>
      </div>

      {/* 
     NEW TABLE 
      <h2 className='mb-8 text-4xl md:text-3xl font-sans font-bold text-emerald-900 tracking-tighter leading-tight pt-12 '>
        Timeline of event
      </h2>
      <div class='w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow border-1 border-black-300 bg-white'>
        <div class='w-fixed w-full flex-shrink flex-grow-0 px-4 pb-8'>
          <div class='sticky text-xl w-full font-bold text-center'>Timings</div>
          <div class='sticky w-full h-full nline-block align-bottom text-center pt-4'>
            18 - 20 April 2022
          </div>
        </div>
        <div class='w-fixed w-full flex-shrink flex-grow-0 px-4 pb-8'>
          <div class='sticky text-xl w-full font-bold text-center'>
            Estimated Turnaround
          </div>
          <div class='sticky w-full text-center align-top pt-4'>
            <ul>
              <li>3000 Visitors</li>
              <li>2000 Exhibitors</li>
            </ul>
          </div>
        </div>
        <div class='w-fixed w-full flex-shrink flex-grow-0 px-4 pb-8'>
          <div class='sticky text-xl w-full font-bold text-center'>
            Categories & type
          </div>
          <div class='sticky w-full text-center align-top pt-4'>
            <ul>
              <li>Tradeshow</li>
              <li>Environment & Waste</li>
              <li>Security & Defense</li>
            </ul>
          </div>
        </div>
      </div>

      END */}
    </div>
  );
}
