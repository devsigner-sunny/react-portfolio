import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Typewriter from 'typewriter-effect';
import { introData, meta } from '../content';

function Home() {
  return (

    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <p>Start/`&gt;</p>
                <h2 className="mb-1x">{introData.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introData.animated.first,
                        introData.animated.second,
                        introData.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introData.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/work" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      Work
                      <div className="ring one" />
                      <div className="ring two" />
                      <div className="ring three" />
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one" />
                      <div className="ring two" />
                      <div className="ring three" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default Home;
