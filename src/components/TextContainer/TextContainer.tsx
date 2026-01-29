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
        rounded-lg xl:rounded-[10px] 2xl:reounded-xl
        border
      border-gray-15
        text-center sm:text-left
        ${fullWidth ? "col-span-2 sm:col-span-1" : ""}
      `}
    >
      <h3 className="mb-0.5 text-2xl xl:text-3xl 2xl:text-[40px] font-bold">
        {heading}
      </h3>
      <span className="text-gray-60 text-sm xl:text-[16px] 2xl:text-[18px] font-medium">
        {Paragraph}
      </span>
    </div>
  );
};

export default TextContainer;
