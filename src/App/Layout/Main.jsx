import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../Contents/siteContents";
import Home from "../../Section/Home/Home";
import Work from "../../Section/Work";
import About from "../../Section/About/About";
import Contact from "../../Section/Contact/Contact";

export default function Main() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* <main className="px-6 lg:px-16 xl:px-32"> */}
      <main className="py-12 lg:py-20 ">
        <Home />
        <Work />
        <About />
      </main>
      <Contact />
    </HelmetProvider>
  );
}
