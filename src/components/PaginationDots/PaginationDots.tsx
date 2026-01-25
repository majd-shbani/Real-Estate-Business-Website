import type { PaginationDotsProps } from "../../interfaces/PaginationDots/PaginationDots";

const PaginationDots = ({ total, activeIndex }: PaginationDotsProps) => {
      const maxVisible = 6;

      let start = Math.max(0, activeIndex - 2);
      if (start + maxVisible > total) {
            start = Math.max(0, total - maxVisible);
      }

      const visibleIndices = Array.from(
            { length: Math.min(total, maxVisible) },
            (_, i) => start + i
      );

      return (
            <div className="flex gap-1">
                  {visibleIndices.map((actualIndex) => (
                        <div
                              key={actualIndex}
                              className={`h-1.25 transition-all duration-300 rounded-[60px] 
                              ${actualIndex === activeIndex
                                          ? 'bg-purple-500 w-6 xl:w-8'
                                          : 'bg-gray-700 w-3 xl:w-5'
                                    }`}
                        />
                  ))}
            </div>
      )
}

export default PaginationDots
