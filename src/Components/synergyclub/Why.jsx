import { ChevronRight } from "lucide-react";
let Why = () => {
  return (
    <>
    {/* Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-950 mb-6">About Synergy Club</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-300 to-blue-950 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-blue-950">Who We Are</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Software Synergy Club was founded in 2023 by two emerging software engineering students, Salman Ilahi and Ziaullah. It is a vision-driven technical community created to support and guide emerging students in their personal and professional growth.Our mission is to build the confidence and competence of students by enhancing their technical knowledge, communication skills, and presentation abilities, while also providing career counseling to help them make informed decisions about their future.Through interactive workshops, awareness sessions, and collaborative activities, we strive to create an environment where students can learn, share, and prepare themselves to excel in the competitive world ahead.
                </p>
               
                
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
                  alt="Community gathering"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="mt-6 grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <h5 className="text-2xl font-bold text-blue-950">Vision</h5>
                    <p className="text-gray-600">Your journey to great future begins here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section className="text-black mb-10 p-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Synergy Club?</h2>
            <p className="text-xl text-black">What makes our community special</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Inclusive and welcoming environment",
              "Regular networking and learning events",
              "Professional development opportunities",
              "Career counseling and mentorship",
              "Global presence with local impact",
              "Strong community support system"

            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-blue-200 backdrop-blur-sm rounded-xl p-6 border border-blue-300/20"
              >
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-4 h-4 text-black" />
                </div>
                <p className="text-blqck font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Why;