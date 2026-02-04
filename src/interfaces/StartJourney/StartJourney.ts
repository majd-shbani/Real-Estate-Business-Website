export interface ButtonProps {
    text: string
    to : string
    style: string

}
export interface JourneyProps {
    title: string
    description: string
    exploreButton : string
    rightImage : string
    leftImage : string
    button : ButtonProps
    starbg?: string
}

export interface StartJourneyProps {
    journeyProps: JourneyProps
}   
