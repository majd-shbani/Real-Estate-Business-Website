import type { TextContainerProps } from "../../interfaces/HeroHome/HeroHome";


const TextContainer = ({
  heading,
  Paragraph,
  fullWidth,
}: TextContainerProps) => {
  return (
    <div
      className={`
        w-full
        bg-gray-10
        p-4
        rounded-lg
        border
      border-gray-15
        text-center sm:text-left
        ${fullWidth ? "col-span-2 sm:col-span-1" : ""}
      `}
    >
      <h3 className="mb-0.5 text-white text-2xl font-bold">
        {heading}
      </h3>
      <span className="text-gray-60 text-sm font-medium">
        {Paragraph}
      </span>
    </div>
  );
};

export default TextContainer;
