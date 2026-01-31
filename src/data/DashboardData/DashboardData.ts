export const DEFAULT_DATA = {
    logo: "/assets/icons/Logo.svg",
    profile: "/assets/images/profile.webp",
    user: "Admin",
    button: "Back To Home"
}

export const Links = [
    {
        text: "Real Estates",
        href: "/dashboard"
    },
    {
        text: "Employees",
        href: "/dashboard/employees"
    }
]

export const EmployeeFormInputs = [
    {
        id: 1,
        name: "name",
        label: "Full Name",
        placeholder: "Full Name",
        type: "text",
        value: "",
        onChange: () => {},
        autoComplete: "name"
    },
    {
        id: 2,
        name: "position",
        label: "Position",
        placeholder: "Position",
        type: "text",
        value: "",
        onChange: () => {},
        autoComplete: "organization-title"
    },
    {
        id: 3,
        name: "image",
        label: "Image URL",
        placeholder: "e.g. https://example.com/photo.jpg",
        type: "text",
        value: "",
        onChange: () => {},
    }
]