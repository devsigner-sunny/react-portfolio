import "./SectionTitle.scss";

export default function SectionTitle({ isRight = false, title }) {
  const rightClasses = "right-0 md:origin-bottom-right md:-rotate-90";
  const leftClasses = "md:-left-2 md:origin-bottom-left md:rotate-90";
  return (
    <div
      className={`section-title mb-8 md:mb-0 min-w-fit md:-z-[1] md:absolute ${
        isRight ? rightClasses : leftClasses
      }`}
    >
      <h2 className="text-5xl text-center uppercase opacity-60 break-keep sm:text-8xl">
        {title}
      </h2>
    </div>
  );
}
