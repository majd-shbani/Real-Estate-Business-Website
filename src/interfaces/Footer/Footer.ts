export interface EmailFooter {
    emailIcon : string
    placeholder : string 
    telegramIcon : string
}

export interface Service {
    service : string
}
export interface FooterService {
    serviceTitle : string
    services : Service[]
}

export interface SocialMedia {
    icon : string
}


export interface FooterProps {
    imageIcon : string
    imageName : string
    sendEmail : EmailFooter
    footerService : FooterService[]
    copyright : string
    terms : string
    socialMedia : SocialMedia[]
}

export interface FooterInterface {
    footerProps : FooterProps
}