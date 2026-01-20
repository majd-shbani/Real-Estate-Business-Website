import type { ValuedClientProps } from '../../interfaces/ValuedClient/ValuedClient'
import BaseCard from '../BaseCard/BaseCard'
import Button from '../Button/Button'

const ValuedClientCard = ({ card }: ValuedClientProps) => {
      return (
            <BaseCard className='p-6! flex flex-col gap-7.5 2xl:gap-10 shadow-[0px_0px_0px_6px_#191919] leading-[150%] sm:max-w-122.5 md:max-w-full'>
                  <div>
                        <div className='flex flex-col xl:flex-row justify-between gap-5'>
                              <div>
                                    <span className='text-[14px] xl:text-[16px] 2xl:text-[18px] font-medium text-gray-60 '>Since {card.date}</span>
                                    <p className='text-[20px] xl:text-[24px] 2xl:text-[30px] font-semibold mt-1.5'>{card.name}</p>
                              </div>
                              <Button text='Visit Website'></Button>
                        </div>
                  </div>

                  <div className='flex justify-between font-medium'>
                        {/* domain */}
                        <div className='w-[50%]'>
                              <div className='flex items-center gap-1.5'>
                                    <img src='assets/icons/DomainIcon.svg' alt='domain_icon'></img>
                                    <span className='text-[12px] xl:text-[14px] 2xl:text-[16px] text-gray-60'>Domain</span>
                              </div>
                              <p className='text-[14px] xl:text-[16px] 2xl:text-[20px]'>{card.domain}</p>
                        </div>
                        
                        {/* category */}
                        <div className='pl-4 xl:pl-5 2xl:pl-7.5 border-l border-gray-15 w-[50%]'>
                              <div className='flex items-center gap-1.5'>
                                    <img src='assets/icons/CategoryIcon.svg' alt='domain_icon'></img>
                                    <span className='text-[12px] xl:text-[14px] 2xl:text-[16px] text-gray-60'>Category</span>
                              </div>
                              <p className='text-[14px] xl:text-[16px] 2xl:text-[20px]'>{card.category}</p>
                        </div>
                  </div>

                  <div className='p-5 xl:p-6 2xl:p-7.5 border border-gray-15 rounded-xl font-medium'>
                        <p className='text-[14px] xl:text-[16px] 2xl:text-[18px] text-gray-60 mb-2 xl:mb-2.5 2xl:mb-3.5'>What They Said 🤗</p>
                        <p>{card.feedback}</p>
                  </div>
            </BaseCard>
      )
}

export default ValuedClientCard
