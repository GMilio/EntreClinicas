import '../Styles/style.css'
import Header from '../src/components/Containers/Header'
import Footer from '../src/components/Containers/Footer/footer'
// This default export is required in a new pages/_app.js file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <div>Fixado</div>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}