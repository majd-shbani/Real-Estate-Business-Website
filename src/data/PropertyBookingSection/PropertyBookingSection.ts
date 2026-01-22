export const BookingInputsData = [
    {
        id: 1,
        label: "First Name",
        name: "firstName",
        placeholder: "Enter First Name",
        type: "text",
    },
    {
        id: 2,
        label: "Last Name",
        name: "lastName",
        placeholder: "Enter Last Name",
        type: "text",
    },
    {
        id: 3,
        label: "Email",
        name: "email",
        placeholder: "Enter your Email",
        type: "email",
    },
    {
        id: 4,
        label: "Phone",
        name: "phoneNumber",
        placeholder: "Enter Phone Number",
        type: "text",
    },
    {
        id: 5,
        label: "Preferred Location",
        name: "location",
        placeholder: "Select Location",
        type: "select",
        options: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"]
    },
    {
        id: 6,
        label: "Property Type",
        name: "type",
        placeholder: "Select Property Type",
        type: "select",
        options: ["Apartment", "House", "Condo", "Townhouse", "Villa"]
    },
    {
        id: 7,
        label: "No. of Bathrooms",
        name: "bathrooms",
        placeholder: "Select No. of Bathrooms",
        type: "select",
        options: ["1", "2", "3", "4", "5+"]
    },
    {
        id: 8,
        label: "No. of Bedrooms",
        name: "bedrooms",
        placeholder: "Select No. of Bedrooms",
        type: "select",
        options: ["1", "2", "3", "4", "5+"]
    },
]

export const BudgetAndMethodData = [
    {
        id: 9,
        label: "Budget",
        name: "budget",
        placeholder: "Select Budget",
        type: "select",
        options: ["$0 - $500k", "$500k - $1M", "$1M - $2M", "$2M - $5M", "$5M+"]
    },
    {
        id: 10,
        label: "Preferred Contact Method",
        name: "contactMethod",
        placeholder: "Enter Your Number",
        type: "text",
        icon: "assets/icons/phone.svg",
        alt: "phone icon"
    },
    {
        id: 11,
        abel: "Preferred Contact Method",
        hideLabel: true,
        name: "contactMethod",
        placeholder: "Enter Your Email",
        type: "email",
        icon: "assets/icons/mail.svg",
        alt: "mail icon"
    }
]

export const MessageData = {
    id: 12,
    label: "Message",
    name: "message",
    placeholder: "Enter your Message here..",
    type: "textarea",
}

export const HEADER_DEFAULT_DATA = {
    title: "Let's Make it Happen",
    description: "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
}