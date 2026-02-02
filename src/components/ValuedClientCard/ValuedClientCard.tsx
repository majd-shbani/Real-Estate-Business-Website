import type { ValuedClientProps } from '../../interfaces/ValuedClient/ValuedClient'
import BaseCard from '../BaseCard/BaseCard'
import Button from '../Button/Button'

const ValuedClientCard = ({ card }: ValuedClientProps) => {
      return (
            <BaseCard className='p-6! xl:p-10! 2xl:p-12.5! flex flex-col gap-7.5 2xl:gap-10 shadow-medium-grey xl:shadow-thick-grey leading-[150%] sm:max-w-122.5 sm:m-auto md:max-w-full h-full'>
                  <div>
                        <div className='flex flex-col xl:flex-row justify-between gap-5'>
                              <div>
                                    <span className='text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[150%] font-medium text-gray-60 '>Since {card.date}</span>
                                    <p className='text-[20px] xl:text-[24px] 2xl:text-[30px] leading-[150%] font-semibold mt-1.5'>{card.name}</p>
                              </div>
                              <Button text='Visit Website'></Button>
                        </div>
                  </div>

                  <div className='flex justify-between font-medium'>
                        {/* domain */}
                        <div className='w-[50%]'>
                              <div className='flex items-center gap-1.5 mb-1 xl:mb-1.5 2xl:mb-2'>
                                    <img src='assets/icons/DomainIcon.svg' alt='domain_icon' className='w-4.5 xl:w-6'></img>
                                    <span className='text-[12px] xl:text-[14px] 2xl:text-[16px] text-gray-60'>Domain</span>
                              </div>
                              <p className='text-[14px] xl:text-[16px] 2xl:text-[20px] leading-[150%]'>{card.domain}</p>
                        </div>

                        {/* category */}
                        <div className='pl-4 xl:pl-5 2xl:pl-7.5 border-l border-gray-15 w-[50%]'>
                              <div className='flex items-center gap-1.5 mb-1 xl:mb-1.5 2xl:mb-2'>
                                    <img src='assets/icons/CategoryIcon.svg' alt='domain_icon' className='w-4.5 xl:w-6'></img>
                                    <span className='text-[12px] xl:text-[14px] 2xl:text-[16px] text-gray-60'>Category</span>
                              </div>
                              <p className='text-[14px] xl:text-[16px] 2xl:text-[20px] leading-[150%]'>{card.category}</p>
                        </div>
                  </div>

                  <div className='p-5 xl:p-6 2xl:p-7.5 border border-gray-15 rounded-xl font-medium flex-1'>
                        <p className='text-[14px] xl:text-[16px] 2xl:text-[18px] text-gray-60 mb-2 xl:mb-2.5 2xl:mb-3.5 leading-[150%]'>What They Said 🤗</p>
                        <p className='text-sm xl:text-base 2xl:text-lg leading-[150%]'>{card.feedback}</p>
                  </div>
            </BaseCard>
      )
}

export default ValuedClientCard
