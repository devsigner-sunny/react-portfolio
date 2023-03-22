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
      className="flex items-end px-10 py-20 mt-10 bg-no-repeat bg-slate-900 section-contact"
      style={{
        backgroundImage: `url(${symbolMoon})`,
      }}
    >
      <div>
        <h4 className="mb-2 font-medium text__light">Wanna know more?</h4>
        <div className="flex items-center">
          <h2 className="inline text__light">Send me a message</h2>
          <img
            src={symbolFingerLight}
            className="inline w-12 ml-6 img-finger animate__animated animate__shakeX animate__infinite"
          />
        </div>
      </div>
      <ul className="flex gap-5 ml-auto mr-32">
        {socialLinkList?.map((link, index) => (
          <li key={index}>
            <a
              className="tracking-wider uppercase text__light"
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
