import { items } from "../../data/HeroData/HeroData";
import TextContainer from "../TextContainer/TextContainer";

const StatisticeSection = () => {
  

  const isOdd = items.length % 2 !== 0;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <TextContainer
            key={index}
            heading={item.heading}
            Paragraph={item.Paragraph}
            fullWidth={isLast && isOdd}
            isLast={isLast}
          />
        );
      })}
    </div>
  );
};

export default StatisticeSection;
