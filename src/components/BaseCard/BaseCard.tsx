import type { BaseCardProps } from "../../interfaces/BaseCard/BaseCard"

const BaseCard = ({children, className}:  BaseCardProps) => {
  return (
    <div className={`p-7.5 xl:p-10 2xl:p-12.5 border dark:border-gray-15 border-Silver rounded-[10px] 2xl:rounded-xl ${className || ''}`}>
      {children}
    </div>
  )
}

export default BaseCard
