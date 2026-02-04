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
            onChange: () => { },
            autoComplete: "name"
      },
      {
            id: 2,
            name: "position",
            label: "Position",
            placeholder: "Position",
            type: "text",
            value: "",
            onChange: () => { },
            autoComplete: "organization-title"
      },
      {
            id: 3,
            name: "image",
            label: "Image URL",
            placeholder: "e.g. https://example.com/photo.jpg",
            type: "text",
            value: "",
            onChange: () => { },
      }
]


export const basicInfoFields = [
      {
            id: 1,
            label: "Property Name",
            name: "name",
            type: "text",
            placeholder: "Villa Name"
      },
      {
            id: 2,
            label: "Location",
            name: "location",
            type: "text",
            placeholder: "City, Country"
      },
      {
            id: 3,
            label: "Property Type",
            name: "type",
            type: "select",
            options: ["Villa", "Apartment", "Penthouse"],
            placeholder: "Select Type"
      },
      {
            id: 4,
            label: "Category Badge",
            name: "categoryBadge",
            type: "text",
            placeholder: "e.g. Coastal Escapes"
      },
      
];

export const specsFields = [
      {
            id: 5,
            label: "Bedrooms",
            name: "specs.bedrooms",
            type: "number",
            placeholder: "0",
            isNumber: true
      },
      {
            id: 6,
            label: "Bathrooms",
            name: "specs.bathrooms",
            type: "number",
            placeholder: "0",
            isNumber: true
      },
      {
            id: 7,
            label: "Area Size",
            name: "specs.area",
            type: "text",
            placeholder: "e.g. 2,500 sq ft"
      },
      {
            id: 22,
            label: "Build Year",
            name: "specs.buildYear",
            type: "text",
            placeholder: "2024",
      }
];

export const pricingConfig = [
      {
            title: "Additional Fees", section: "additionalFees",
            fields: [
                  { id: 8, label: "Property Transfer Tax", name: "propertyTransferTax" },
                  { id: 9, label: "Legal Fees", name: "legalFees" },
                  { id: 10, label: "Home Inspection", name: "homeInspection" },
                  { id: 11, label: "Property Insurance", name: "propertyInsurance" },
                  { id: 12, label: "Mortgage Fees", name: "mortgageFees", type: "text" },
            ]
      },
      {
            title: " Monthly Costs", section: "monthlyCosts",
            fields: [
                  { id: 13, label: "Property Taxes", name: "propertyTaxes" },
                  { id: 14, label: "Homeowners' Association Fee", name: "hoaFees" },
            ]
      },
      {
            title: " Total Initial Costs", section: "totalInitialCosts",
            fields: [
                  { id: 15, label: "Additional Fees", name: "additionalFeesSum" },
                  { id: 16, label: "Down Payment", name: "downPayment" },
                  { id: 17, label: "Mortgage Amount", name: "mortgageAmount" },
            ]
      },
      {
            title: " Monthly Expenses", section: "monthlyExpenses",
            fields: [
                  { id: 18, label: "Property Taxes", name: "propertyTaxes" },
                  { id: 19, label: "Homeowners' Association Fee", name: "hoaFees" },
                  { id: 20, label: "Mortgage Payment", name: "mortgagePayment", type: "text" },
                  { id: 21, label: "Property Insurance", name: "propertyInsurance" },
            ]
      }
];
