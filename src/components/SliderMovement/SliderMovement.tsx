import { useRef, useState, useMemo, useCallback, useEffect } from "react"
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react"
import { IoMdArrowForward } from "react-icons/io"
import { IoArrowBackOutline } from "react-icons/io5"
import { Navigation } from "swiper/modules"
import type { SliderMovementProps } from "../../interfaces/Slider/Slider"

const SliderMovement = <T extends { id?: string | number }>({ 
    data, 
    renderItem, 
    spaceBetween = 30, 
    slidesPerView = 1, 
    breakpoints 
}: SliderMovementProps<T>) => {
    const swiperRef = useRef<SwiperClass | null>(null)
    const [currentIndex, setCurrentIndex] = useState(1)
    const [isAtEnd, setIsAtEnd] = useState(false)
    const [isAtStart, setIsAtStart] = useState(true)
    
    const defaultBreakpoints = useMemo(() => ({
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1536: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }), [])
    const updateNavigationState = useCallback((swiper: SwiperClass) => {
        setCurrentIndex(swiper.activeIndex + 1)
        setIsAtStart(swiper.isBeginning)
        setIsAtEnd(swiper.isEnd)
    }, [])
    const handlePrevSlide = useCallback(() => {
        swiperRef.current?.slidePrev()
    }, [])
    const handleNextSlide = useCallback(() => {
        swiperRef.current?.slideNext()
    }, [])
    const handleSlideChange = useCallback((swiper: SwiperClass) => {
        updateNavigationState(swiper)
    }, [updateNavigationState])
    useEffect(() => {
        if (swiperRef.current) {
            updateNavigationState(swiperRef.current)
        }
    }, [data, updateNavigationState])
    if (!data || data.length === 0) {
        return (
           <p className="text-gray-60 text-center py-10">No featured properties found.</p>
        )
    }

    const SlideCounter = () => (
        <span className="font-medium text-base 2xl:text-xl dark:text-white text-Jet-Gray">
            {String(currentIndex).padStart(2, '0')} 
            <span className="text-gray-60">
                {' '}of {String(data.length).padStart(2, '0')}
            </span>
        </span>
    )

    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView} 
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                    updateNavigationState(swiper)
                }}
                onSlideChange={handleSlideChange}
                onBreakpoint={() => {
                    if (swiperRef.current) updateNavigationState(swiperRef.current)
                }}
                breakpoints={breakpoints || defaultBreakpoints}
                watchSlidesProgress={true}>
                {data.map((item, index) => (
                    <SwiperSlide className="flex! h-auto! mb-7.5 xl:mb-10" key={item.id ?? `slide-${index}`}>
                        {renderItem(item, index)}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-between items-center pt-4 2xl:pt-5 border-t dark:border-gray-15 border-Silver w-full">
                <div className="hidden xl:block">
                    <SlideCounter />
                </div>
                <div className="ms-auto xl:ms-0 flex items-center gap-3">
                    <button 
                        onClick={handlePrevSlide} 
                        disabled={isAtStart} 
                        aria-label="Previous slide"
                        className={`transition-all border border-gray-15 rounded-full w-11 h-11 2xl:w-14.5 2xl:h-14.5 flex items-center justify-center
                            ${isAtStart ? 'bg-gray-10 cursor-not-allowed opacity-50' : 'dark:bg-gray-15 bg-Platinum  hover:bg-purple-60 hover:border-none active:scale-95'}`}>
                        <IoArrowBackOutline className={`w-6 h-6 2xl:w-7.5 2xl:h-7.5 ${isAtStart ? 'text-gray-40' : 'dark:text-white text-Jet-Gray'}`}/>
                    </button>
                    <div className="block xl:hidden ">
                        <SlideCounter />
                    </div>
                    <button 
                        onClick={handleNextSlide} 
                        disabled={isAtEnd} 
                        aria-label="Next slide"
                        className={`transition-all border border-gray-15 rounded-full w-11 h-11 2xl:w-14.5 2xl:h-14.5 flex items-center justify-center
                            ${isAtEnd ? 'bg-gray-10 cursor-not-allowed opacity-50' : 'dark:bg-gray-15 bg-Platinum  hover:bg-purple-60 hover:border-none active:scale-95'}`}>
                        <IoMdArrowForward className={`w-6 h-6 2xl:w-7.5 2xl:h-7.5 ${isAtEnd ? 'text-gray-40' : 'dark:text-white text-Jet-Gray'}`} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SliderMovement

