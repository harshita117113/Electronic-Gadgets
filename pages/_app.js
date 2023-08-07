import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    document.documentElement.lang='en'
    return (
    <>
    <div className="container mx-auto min-h-screen">
        <Component {...pageProps }/>
    </div>
    </>
    )
}