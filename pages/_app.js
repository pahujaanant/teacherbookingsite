import '../styles/globals.css'

// here it renders all the 6 components in the app

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
