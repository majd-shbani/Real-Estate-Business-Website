export interface SliderMovementProps<T> {
    data: T[]
    renderItem: (item: T, index: number) => React.ReactNode
    spaceBetween?: number
    slidesPerView?: number 
    breakpoints?: {
        [width: number]: {
            slidesPerView?: number
            spaceBetween?: number
        }
    }
}