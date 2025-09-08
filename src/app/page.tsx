"use client";

import { useState, useEffect } from "react";

export default function HelloWorldPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main Hello World Content */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Hello World Title */}
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Hello World
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Welcome to your first Next.js application with Tailwind CSS
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-blue-700 rounded-full animate-pulse delay-200"></div>
          </div>
          
          {/* Info Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 Built with Modern Tech
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <span className="font-medium text-blue-700">Next.js 15</span>
                <span className="text-xs">React Framework</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
                <span className="font-medium text-purple-700">Tailwind CSS</span>
                <span className="text-xs">Utility-First CSS</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                <span className="font-medium text-green-700">TypeScript</span>
                <span className="text-xs">Type Safety</span>
              </div>
            </div>
          </div>
          
          {/* Footer Message */}
          <p className="text-gray-500 mt-8 text-sm">
            Ready to build something amazing? Start coding! ✨
          </p>
        </div>
      </div>
    </main>
  );
}