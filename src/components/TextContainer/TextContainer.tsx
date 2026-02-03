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
        p-4
        bg-gray-10
        rounded-lg
        border
      border-gray-15
        text-center sm:text-left
        ${fullWidth ? "col-span-2 sm:col-span-1" : ""}
      `}
    >
      <h3 className="mb-0.5 text-2xl xl:text-3xl 2xl:text-[40px] font-bold leading-[150%]">
        {heading}
      </h3>
      <span className="text-gray-60 text-sm xl:text-[16px] 2xl:text-[18px] font-medium leading-[150%]">
        {Paragraph}
      </span>
    </div>
  );
};

export default TextContainer;
