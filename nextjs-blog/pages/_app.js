import '../Styles/style.css'

if (typeof document === 'undefined') { // @ts-ignore global.document = { querySelector: function () {}, }; }
// This default export is required in a new pages/_app.js file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}