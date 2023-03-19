import { Helmet, HelmetProvider } from "react-helmet-async";
import { ParallaxProvider } from "react-scroll-parallax";
import { meta } from "../../Contents/siteContents";
import Home from "../../Section/Home/Home";
import Work from "../../Section/Work";
import About from "../../Section/About/About";

export default function Main() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <main className="px-32 py-20">
        <Home />
        <ParallaxProvider>
          <section className="flex flex-col selected-works">
            <div className="title-wrapper">
              <h4>Selected</h4>
              <h2 className="text-center uppercase text-8xl">Works</h2>
            </div>
            <Work />
          </section>
        </ParallaxProvider>
        <About />
        <div className="mb-32"></div>
        <div className="pb-32"></div>
        <div className="pb-60"></div>
      </main>
    </HelmetProvider>
  );
}
