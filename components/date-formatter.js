import { parseISO, format } from "date-fns";

/**
 * Function to get a date from a formatted string.
 * @param {string} dateString - date string to be parsed
 * @returns {date-fns.time} - date object
 */
export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
