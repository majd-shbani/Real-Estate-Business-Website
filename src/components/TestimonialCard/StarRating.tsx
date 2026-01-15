import type { StarRatingProps } from "../../interfaces/TestimonialCard/TestimonialCard";

const StarRating = ({icon, rating}: StarRatingProps) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className={`border border-gray-15 bg-gray-10 rounded-full p-1.5 xl:p-2 2xl:p-2.5 flex justify-center items-center ${index < rating ? 'opacity-100' : 'opacity-30'}`}
    >
      <img src={icon} alt="star-rating" className="w-4.5 h-4.5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6" />
    </div>
  ));

  return (
    <div className="flex items-center w-fit mb-6 xl:mb-7.5 2xl:mb-10 gap-2 2xl:gap-2.5">
      {stars}
    </div>
  );
}

export default StarRating
