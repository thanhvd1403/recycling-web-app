import "../styles/index.css";

/**
 * The main application component
 * @param {Component} Component to render.
 * @param {pageProps} props to pass to the component. 
 * @returns {React.Component}
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
