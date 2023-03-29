import symbolMoon from "../../Assets/svg/moon.svg";
import symbolFingerLight from "../../Assets/svg/finger-light.svg";
import { socialLinks } from "../../Contents/siteContents";
import { useNav } from "../../Hooks/useNav";
import "./Contact.scss";

export default function Contact() {
  const socialLinkList = Object.entries(socialLinks);
  const contactRef = useNav("Contact");

  return (
    <section
      ref={contactRef}
      id="contact"
      className="relative flex flex-col px-6 py-20 mt-10 overflow-hidden bg-no-repeat lg:items-end lg:px-10 gap-y-12 lg:flex-row bg-slate-900 section-contact"
    >
      <img
        className="absolute right-0 scale-150 opacity-60 sm:opacity-100 md:scale-200 top-48 sm:top-20 md:right-10"
        src={symbolMoon}
      />
      <div>
        <h4 className="mb-2 font-medium text__light">Wanna know more?</h4>
        <div className="flex items-center">
          <h2 className="inline text-3xl sm:text-5xl text__light">
            Send me a message
          </h2>
          <img
            src={symbolFingerLight}
            className="hidden w-12 ml-6 lg:inline img-finger animate__animated animate__shakeX animate__infinite"
          />
        </div>
      </div>
      <ul className="flex gap-2 lg:ml-auto lg:mr-32">
        {socialLinkList?.map((link, index) => (
          <li key={index}>
            <a
              className="inline-block p-3 tracking-wider uppercase text__light hover:scale-110"
              href={link[1]}
              target="_blank"
              rel="noopenner noreferrer"
            >
              {link[0]}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
