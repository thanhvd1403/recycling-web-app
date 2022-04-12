import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * Function to render Next/document page
 * @returns {React.ReactHTML}
 */
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
