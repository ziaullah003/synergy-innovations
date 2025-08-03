import React from 'react';
import { UserCircle2Icon } from 'lucide-react';

const SynergyClubHero = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-900 to-blue-800 text-white px-4 sm:px-6 lg:px-12">
      {/* Main Hero Section */}
      <div className="container mx-auto py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-100">
                Software Synergy Club
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100">
              Where brilliant minds converge to build, collaborate, and innovate through the power of collective programming expertise.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20">
                Join Now
              </button>
              <button className="px-8 py-3 border-2 border-blue-200 hover:bg-blue-900/50 text-blue-100 font-medium rounded-lg transition-all">
                Learn More
              </button>
            </div>
            <div className="flex items-center pt-8 space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <UserCircle2Icon key={item} className="text-white m-0 w-10 h-10 sm:w-12 sm:h-12" />
                ))}
              </div>
              <p className="text-blue-200 text-sm sm:text-base">
                Join <span className="font-semibold text-blue-100">150+</span> members
              </p>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="lg:w-1/2 w-full max-w-lg">
            <div className="relative mx-auto">
              <img
                src="/slider1.jpeg"
                alt="Collaborative programming environment with developers working together on various devices showing code"
                className="w-full h-auto rounded-xl shadow-2xl border-4 border-blue-200 hover:scale-[1.02] transition-transform"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-200 rounded-lg shadow-lg opacity-80 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-300 rounded-lg shadow-lg opacity-80 animate-pulse animation-delay-100"></div>
            </div>
          </div>
        </div>
      </div>

     

      <style jsx>{`
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
        .animation-delay-100 {
          animation-delay: 100ms;
        }
      `}</style>
    </div>
  );
};

export default SynergyClubHero;
