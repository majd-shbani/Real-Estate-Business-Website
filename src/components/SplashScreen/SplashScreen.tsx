import React from 'react'

const SplashScreen: React.FC = () => {
    return (
    <div 
        className="fixed inset-0 z-100 flex items-center justify-center bg-gray-08"
        style={{
            animation: 'fadeOut 0.5s ease-in-out 1.5s forwards'
        }}
    >
        <img 
        src="/assets/icons/company-logo.svg" 
        alt="Company Logo" 
        className="w-70 h-70 sm:w-100 sm-h-100 xl:w-140 xl:h-140 2xl:w-180 2xl:h-180 object-contain"
        style={{
            animation: 'zoomIn 0.8s ease-out forwards'
        }}
        />
    </div>
    )
}

export default SplashScreen