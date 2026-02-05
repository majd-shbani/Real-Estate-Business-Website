# 🏡 Real Estate Business Website

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12.8.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-5.0.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)

A modern, full-featured real estate business website built with React 19, TypeScript, and Tailwind CSS 4. Features include property listings, advanced filtering, admin dashboard, and Firebase integration.

[Features](#-features) • [Installation](#-installation) • [Project Structure](#-project-structure) • [Technologies](#-technologies-used)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Pages & Routes](#-pages--routes)
- [Components](#-components)
- [Firebase Configuration](#-firebase-configuration)
- [Available Scripts](#-available-scripts)
- [Environment Variables](#-environment-variables)

---

## 🌟 Overview

This is a comprehensive real estate business website that provides a seamless experience for both property seekers and real estate administrators. The application features a modern, responsive design with smooth animations and an intuitive user interface.

### Key Highlights

- ⚡ **Lightning Fast**: Built with Vite for optimal performance
- 🎨 **Modern UI**: Sleek design with Tailwind CSS 4 and Framer Motion animations
- 🔐 **Secure**: Firebase authentication and database integration
- 📱 **Responsive**: Fully responsive design for all devices
- 🎯 **Type-Safe**: Full TypeScript support for better code quality
- 🔄 **State Management**: Redux Toolkit for predictable state updates

---

## ✨ Features

### 🏠 Property Listings
- Browse comprehensive property database
- Detailed property information with images
- Property categorization (Sale/Rent)
- Featured properties section

### 🔍 Advanced Filtering System
- Filter by price range
- Location-based search
- Property type selection
- Number of bedrooms/bathrooms
- Amenities filtering
- Real-time filter updates

### 👨‍💼 Admin Dashboard
- Centralized property management
- Add, edit, and delete properties
- Employee management system
- Real-time data synchronization with Firebase
- Image upload and management

### 📧 Contact Forms
- EmailJS integration for inquiries
- Property-specific contact forms
- General contact page
- Form validation

### 📱 Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Smooth animations and transitions

---

## 🛠 Technologies Used

### Frontend
- **React 19.2.0** - Latest React with improved performance
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Framer Motion 12.29.2** - Animation library

### State Management
- **Redux Toolkit 2.11.2** - State management
- **React Redux 9.2.0** - React bindings for Redux

### Routing
- **React Router DOM 7.12.0** - Client-side routing

### Build Tool
- **Vite 7.2.4** - Next-generation frontend tooling

### Backend & Services
- **Firebase 12.8.0** - Backend as a Service (BaaS)
  - Firestore Database
  - Realtime Database

### Additional Libraries
- **Swiper 12.1.0** - Modern slider component
- **EmailJS 4.4.1** - Email service integration
- **React Icons 5.5.0** - Icon library

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugin React** - React support for Vite

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- A **Firebase account** for backend services

### Step 1: Clone the Repository

```bash
git clone https://github.com/majd-shbani/Real-Estate-Business-Website.git
cd Real-Estate-Business-Website
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

### Step 3: Configure Firebase

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)

2. Enable the following Firebase services:
   - **Realtime Database**
   - **Firestore Database**

3. Get your Firebase configuration from Project Settings

4. Create a `firebaseConfig.ts` file in the `src` directory (if not exists):

```typescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### Step 4: Configure EmailJS (Optional)

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Update the EmailJS configuration in your contact forms

### Step 5: Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Step 6: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

---

## 📁 Project Structure

```
Real-Estate-Business-Website/
├── 📁 public/                      # Static assets
│   └── 📁 assets/                  # Images, icons, and media files
│       ├── 📁 images/              # Project photos
│       └── 📁 icons/               # SVG icons and logos
│
├── 📁 src/                         # Source code
│   ├── 📁 components/              # Reusable React components (58 components)
│   │   ├── 📁 Nav/                 # Navigation components
│   │   │   ├── Nav.tsx
│   │   │   ├── NavBurger.tsx
│   │   │   ├── NavItems.tsx
│   │   │   └── NavLogoText.tsx
│   │   │
│   │   ├── 📁 Hero Components/     # Hero sections for different pages
│   │   │   ├── HeroHome.tsx
│   │   │   ├── HeroAbout.tsx
│   │   │   ├── HeroProperties.tsx
│   │   │   ├── HeroServices.tsx
│   │   │   └── HeroContact.tsx
│   │   │
│   │   ├── 📁 Cards/               # Various card components
│   │   │   ├── BaseCard.tsx
│   │   │   ├── FeaturedCard.tsx
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── EmployeeCard.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   ├── FaqCard.tsx
│   │   │   └── StepsCard.tsx
│   │   │
│   │   ├── 📁 Sections/            # Page sections
│   │   │   ├── FeaturedSection.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── OurTeamSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── StatisticSection.tsx
│   │   │   └── ValuedClientSection.tsx
│   │   │
│   │   ├── 📁 Forms/               # Form components
│   │   │   ├── FormContainer.tsx
│   │   │   ├── FormInput.tsx
│   │   │   ├── Connect.tsx
│   │   │   └── InquireAboutSeaside.tsx
│   │   │
│   │   ├── 📁 UI Elements/         # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── Title.tsx
│   │   │   ├── TextContainer.tsx
│   │   │   ├── Star.tsx
│   │   │   └── PaginationDots.tsx
│   │   │
│   │   └── 📁 Other Components/
│   │       ├── Footer.tsx
│   │       ├── SplashScreen.tsx
│   │       ├── Achievements.tsx
│   │       ├── SliderMovement.tsx
│   │       └── ...
│   │
│   ├── 📁 pages/                   # Page components
│   │   ├── Root.tsx                # Root layout with navigation
│   │   ├── Home.tsx                # Homepage
│   │   ├── AboutUs.tsx             # About page
│   │   ├── Properties.tsx          # Property listings with filters
│   │   ├── PropertyDetails.tsx     # Individual property details
│   │   ├── Services.tsx            # Services page
│   │   ├── Contact.tsx             # Contact page
│   │   │
│   │   └── 📁 Dashboard/           # Admin dashboard
│   │       ├── Dashboard.tsx       # Dashboard layout
│   │       │
│   │       ├── 📁 RealEstate/      # Property management
│   │       │   ├── ListRealEstates.tsx
│   │       │   ├── ViewRealEstate.tsx
│   │       │   └── RealEstateForm.tsx
│   │       │
│   │       ├── 📁 Employees/       # Employee management
│   │       │   ├── ListEmployees.tsx
│   │       │   └── EmployeeForm.tsx
│   │       │
│   │       ├── 📁 Hooks/           # Custom hooks for dashboard
│   │       └── 📁 Utils/           # Utility functions
│   │
│   ├── 📁 redux/                   # Redux state management
│   │   ├── 📁 slice/               # Redux slices
│   │   │   └── propertySlice.ts    # Property state management
│   │   └── store.ts                # Redux store configuration
│   │
│   ├── 📁 data/                    # Static data and mock data
│   │   ├── NavData.ts              # Navigation menu data
│   │   ├── HeroData.ts             # Hero section content
│   │   ├── FeaturedSectionData.ts  # Featured properties
│   │   ├── TestimonialCardData.ts  # Customer testimonials
│   │   ├── FaqCardData.ts          # FAQ items
│   │   ├── PricingData.ts          # Pricing plans
│   │   ├── OurTeamSection.ts       # Team members
│   │   ├── PropertyDetailsHeader.ts
│   │   ├── PropertyKeyFeatures.ts
│   │   ├── DashboardData/          # Dashboard-specific data
│   │   └── ...
│   │
│   ├── 📁 interfaces/              # TypeScript interfaces
│   │   ├── NavInterface.ts         # Navigation types
│   │   ├── BaseCard.ts             # Card component types
│   │   ├── FeaturedCard.ts         # Featured card types
│   │   ├── TestimonialCard.ts      # Testimonial types
│   │   ├── FormInput.ts            # Form input types
│   │   ├── Button.ts               # Button types
│   │   ├── Dashboard.ts            # Dashboard types
│   │   └── ...
│   │
│   ├── firebaseConfig.ts           # Firebase configuration
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles
│
├── 📄 index.html                   # HTML template
├── 📄 package.json                 # Dependencies and scripts
├── 📄 tsconfig.json                # TypeScript configuration
├── 📄 tsconfig.app.json            # App-specific TS config
├── 📄 tsconfig.node.json           # Node-specific TS config
├── 📄 vite.config.ts               # Vite configuration
├── 📄 eslint.config.js             # ESLint configuration
├── 📄 .gitignore                   # Git ignore rules
└── 📄 README.md                    # This file
```

### Directory Breakdown

#### 📁 `/src/components` (58 Components)

This directory contains all reusable React components organized by functionality:

- **Navigation Components**: Nav, NavBurger, NavItems, NavLogoText
- **Hero Sections**: HeroHome, HeroAbout, HeroProperties, HeroServices, HeroContact
- **Cards**: BaseCard, FeaturedCard, TestimonialCard, EmployeeCard, PricingCard, etc.
- **Sections**: FeaturedSection, TestimonialSection, OurTeamSection, etc.
- **Forms**: FormContainer, FormInput, Connect, InquireAboutSeaside
- **UI Elements**: Button, Section, SectionHeader, Title, Star, etc.

#### 📁 `/src/pages` (10 Pages)

Main page components that represent different routes:

- **Public Pages**: Home, AboutUs, Properties, PropertyDetails, Services, Contact
- **Dashboard Pages**: Dashboard layout with nested routes for property and employee management

#### 📁 `/src/redux`

State management using Redux Toolkit:

- **slice/**: Contains Redux slices for different features
- **store.ts**: Configures and exports the Redux store

#### 📁 `/src/data`

Static data and content for the application:

- Navigation menus
- Hero section content
- Featured properties
- Testimonials
- FAQ items
- Team members
- Dashboard configurations

#### 📁 `/src/interfaces`

TypeScript type definitions and interfaces for type safety throughout the application.

---

## 🏗 Architecture

### Application Flow

1. **Frontend Layer (React Components)**
   - User interacts with React components
   - Components dispatch actions to Redux
   - Components receive data from Redux selectors

2. **State Management Layer (Redux)**
   - Centralized state management
   - Actions and reducers handle state updates
   - Middleware for async operations

3. **Backend Services Layer (Firebase)**
   - **Firestore Database**: Stores properties, users, and employees
   - **Realtime Database**

### Data Flow

```
User Interaction → Component → Redux Action → Firebase API → Firestore
                                      ↓
                                Redux State Update
                                      ↓
                                Component Re-render
```

---

## 🗺 Pages & Routes

### Public Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Landing page with hero, features, and testimonials |
| `/aboutUs` | `AboutUs` | Company information and team |
| `/Properties` | `Properties` | Property listings with advanced filters |
| `/propertyDetails/:id` | `PropertyDetails` | Detailed view of a specific property |
| `/services` | `Services` | Services offered by the company |
| `/contact` | `Contact` | Contact form and information |

### Dashboard Routes (Admin)

| Route | Component | Description |
|-------|-----------|-------------|
| `/dashboard` | `ListRealEstates` | List all properties |
| `/dashboard/real-estate/create` | `RealEstateForm` | Create new property |
| `/dashboard/real-estate/:id` | `ViewRealEstate` | View property details |
| `/dashboard/real-estate/:id/edit` | `RealEstateForm` | Edit existing property |
| `/dashboard/employees` | `ListEmployees` | List all employees |
| `/dashboard/employees/create` | `EmployeeForm` | Add new employee |
| `/dashboard/employees/:id/edit` | `EmployeeForm` | Edit employee information |

### Route Configuration

Routes are configured in `src/main.tsx` using React Router DOM v7:

```typescript
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "aboutUs", element: <AboutUs /> },
      { path: "Properties", element: <Properties /> },
      { path: "propertyDetails/:id", element: <PropertyDetails /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> }
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <ListRealEstates /> },
      { path: "real-estate/create", element: <RealEstateForm /> },
      { path: "real-estate/:id", element: <ViewRealEstate /> },
      { path: "real-estate/:id/edit", element: <RealEstateForm /> },
      { path: "employees", element: <ListEmployees /> },
      { path: "employees/create", element: <EmployeeForm /> },
      { path: "employees/:id/edit", element: <EmployeeForm /> }
    ]
  }
]);
```

---

## 🧩 Components

### Core Components

#### Navigation Components

**Nav.tsx**
- Main navigation bar
- Responsive design with mobile menu
- Active route highlighting
- Smooth scroll behavior

**NavBurger.tsx**
- Hamburger menu for mobile devices
- Animated menu icon
- Toggle functionality

**NavItems.tsx**
- Navigation menu items
- Dynamic route generation
- Active state management

**NavLogoText.tsx**
- Company logo and branding
- Clickable link to homepage

#### Hero Components

Each page has its own hero component with unique styling and content:

- **HeroHome.tsx**: Main landing hero with CTA buttons
- **HeroAbout.tsx**: About page hero with company mission
- **HeroProperties.tsx**: Properties page hero with search
- **HeroServices.tsx**: Services page hero
- **HeroContact.tsx**: Contact page hero

#### Card Components

**BaseCard.tsx**
- Reusable card wrapper
- Consistent styling
- Hover effects

**FeaturedCard.tsx**
- Property card for featured listings
- Image gallery
- Quick property details
- CTA buttons

**TestimonialCard.tsx**
- Customer testimonial display
- Star ratings
- Customer photo and name

**EmployeeCard.tsx**
- Team member information
- Photo, name, and role
- Social media links

**PricingCard.tsx**
- Service pricing display
- Feature lists
- CTA buttons

#### Form Components

**FormContainer.tsx**
- Form wrapper with consistent styling
- Form validation
- Submit handling

**FormInput.tsx**
- Reusable input component
- Label and error handling
- Various input types support

**Connect.tsx**
- Contact form for general inquiries
- EmailJS integration
- Form validation

**InquireAboutSeaside.tsx**
- Property-specific inquiry form
- Pre-filled property information

#### Section Components

**FeaturedSection.tsx**
- Displays featured properties
- Grid layout
- Responsive design

**TestimonialSection.tsx**
- Customer testimonials carousel
- Swiper integration
- Auto-play functionality

**OurTeamSection.tsx**
- Team member grid
- Employee cards
- Responsive layout

**FaqSection.tsx**
- Frequently asked questions
- Accordion-style display
- Expandable/collapsible items

**PricingSection.tsx**
- Service pricing plans
- Comparison table
- Highlighted recommended plan

#### UI Elements

**Button.tsx**
- Reusable button component
- Multiple variants (primary, secondary, outline)
- Loading states
- Icon support

**Section.tsx**
- Page section wrapper
- Consistent spacing
- Background options

**SectionHeader.tsx**
- Section title and subtitle
- Centered or left-aligned
- Decorative elements

**Title.tsx**
- Page and section titles
- Consistent typography
- Gradient text options

**Star.tsx**
- Star rating component
- Filled/empty states
- Half-star support

### Dashboard Components

Located in `src/pages/Dashboard/`:

**Dashboard.tsx**
- Admin dashboard layout
- Sidebar navigation
- Nested route rendering

**ListRealEstates.tsx**
- Property list view
- Search and filter
- Pagination
- Quick actions (view, edit, delete)

**RealEstateForm.tsx**
- Create/edit property form
- Image upload
- Form validation
- Firebase integration

**ViewRealEstate.tsx**
- Detailed property view
- Image gallery
- All property information
- Edit/delete actions

**ListEmployees.tsx**
- Employee list view
- Search functionality
- Quick actions

**EmployeeForm.tsx**
- Add/edit employee form
- Image upload
- Role selection

---

**Actions:**
- `fetchProperties`: Load properties from Firebase
- `addProperty`: Add new property
- `updateProperty`: Update existing property
- `deleteProperty`: Remove property
- `setFilters`: Update filter criteria
- `applyFilters`: Filter properties based on criteria
- `selectProperty`: Set selected property for details view

---

## 🔥 Firebase Configuration

### Setting Up Firebase

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup wizard

2. **Enable Required Services**

   **Firestore Database:**
   - Navigate to Realtime database
   - Click "Create database"
   - Make the steps

3. **Get Configuration**
   - Go to Project Settings
   - Scroll to "Your apps"
   - Click the web icon (</>)
   - Copy the configuration object

4. **Update `firebaseConfig.ts`**

```typescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
```

### Firestore Database Structure

```
properties/
  ├── {propertyId}/
  │   ├── title: string
  │   ├── description: string
  │   ├── price: number
  │   ├── location: string
  │   ├── propertyType: string
  │   ├── bedrooms: number
  │   ├── bathrooms: number
  │   ├── area: number
  │   ├── amenities: string[]
  │   ├── images: string[]
  │   ├── featured: boolean
  │   ├── status: "sale" | "rent"
  │   └── createdAt: timestamp

employees/
  ├── {employeeId}/
  │   ├── name: string
  │   ├── role: string
  │   ├── email: string
  │   ├── phone: string
  │   ├── photo: string
  │   └── socialLinks: object
```

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```
Starts the development server at `http://localhost:5173` with hot module replacement (HMR).

### Build

```bash
npm run build
```
Creates an optimized production build:
1. Runs TypeScript compiler (`tsc -b`)
2. Builds the project with Vite
3. Output is in the `dist/` directory

---

## 🔐 Environment Variables

For security, sensitive configuration should be stored in environment variables.

### Update `firebaseConfig.ts`

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## 🎨 Styling & Theming

### Tailwind CSS Configuration

The project uses Tailwind CSS 4 with the Vite plugin for styling.

**Configuration in `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ]
})


## 📱 Responsive Design

The application is fully responsive and optimized for:

- 📱 **Mobile**: 320px - 640px
- 📱 **Tablet**: 640px - 1024px
- 💻 **Desktop**: 1280px - 1535px
- 🖥 **Large Desktop**: 1536px+

### Tailwind Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

## 👥 Authors
### Team : Focal X Group 2
- **Mohammad Karakit** - **Majd Shbani** - **Maya Farha** - **Mohammad Alkreima** - **Ammar Baroudi** - **Alaa Soufi**

---

<div align="center">

**Made with ❤️ using React, TypeScript, and Tailwind CSS**

</div>


