import type React from "react"

interface LoadingScreenProps {
  subtext?: string
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ subtext }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative size-16">
          <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-indigo-500 border-b-transparent border-l-transparent animate-spin animation-delay-150"></div>
          <div className="absolute inset-4 rounded-full border-4 border-t-transparent border-r-transparent border-b-purple-500 border-l-transparent animate-spin animation-delay-300"></div>
        </div>
        <p className="text-xl font-medium text-white">Loading</p>
        {subtext && <p className="text-sm text-gray-300 max-w-xs text-center">{subtext}</p>}
      </div>
    </div>
  )
}

export default LoadingScreen
