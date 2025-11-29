"use client"

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, Users, Award, Target, Eye, CheckCircle, Flame, Wind, Volume2, Thermometer, Clock, Wrench } from "lucide-react"

export default function AboutPage() {
  const coreValues = [
    { icon: Users, title: "Professional Specialists", description: "Highly skilled and experienced professionals" },
    { icon: Award, title: "Quality Assurance", description: "Strict quality control at every stage" },
    { icon: Target, title: "Precise Builders", description: "Attention to detail in every project" },
    { icon: Shield, title: "Brilliant Ideas", description: "Innovative solutions for your needs" }
  ]

  const offerings = [
    { name: "Stone Coated Metal Roofing Tiles", percentage: 82 },
    { name: "High Quality Catena Paints & Painting Services", percentage: 80 },
    { name: "PVC Rainwater System", percentage: 80 },
    { name: "Real Estate", percentage: 82 },
    { name: "Building Accessories", percentage: 80 },
    { name: "Product Installation", percentage: 80 },
    { name: "Aluminium Roofing Sheets", percentage: 82 },
    { name: "Carpentry Services & Supply of High Quality Wood", percentage: 80 },
    { name: "General Construction", percentage: 80 }
  ]

  const features = [
    { icon: Flame, text: "Fire Resistant (Class A)" },
    { icon: Wind, text: "Wind Resistant (up to 260kph)" },
    { icon: Volume2, text: "Excellent Noise Control" },
    { icon: Thermometer, text: "Heat Resistant" },
    { icon: Shield, text: "Superior Durability" },
    { icon: CheckCircle, text: "Leakage Proof" },
    { icon: Wrench, text: "Easy Installation" },
    { icon: Award, text: "Flexural Strength" },
    { icon: Clock, text: "Low or No Maintenance" }
  ]

  const stats = [
    { number: "1000+", label: "Satisfied Clients" },
    { number: "1000+", label: "Completed Projects" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Quality Guarantee" }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <Image
          src="/hero6.jpg"
          alt="About Catena Dynamic Resources"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            About Catena Dynamic Resources
          </h1>
          <p className="text-lg md:text-xl text-white/90 text-center max-w-3xl">
            Your Smart Choice For Quality But Affordable Roofing & Construction
          </p>
        </div>
      </div>

      {/* Main Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              We are an indigenous Nigerian company that specializes in the importation, supply and distribution of premium quality roofing products and building materials.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              We strive to meet the varying needs of our customers through the services we offer in the areas of roofing, construction/building, painting, post-project maintenance and supply of building materials. Our company has built an outstanding reputation in delivering top-notch products and services; our ultimate aim being our customer's satisfaction.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Catena products and raw materials used for the production of Catena customized paints are imported from Europe and Asia. All our products undergo the different stages of strict quality control checks by quality control staff, with full monitoring by production staff. These guarantee our product quality.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Our services are carried out by highly skilled and experienced professionals/staff that are always available to satisfy the demands of our clients. Transparency and integrity are our greatest gifts to our customers.
            </p>
            <p className="text-blue-600 text-xl font-semibold leading-relaxed">
              With CATENA DYNAMIC RESOURCES LIMITED, excellent service delivery with high quality products that are durable and meet with international standards are guaranteed... At affordable costs!
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-8 text-center">
              This is why we are YOUR SMART CHOICE!
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 border-2 border-blue-200 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                To continually provide premium products, quality workmanship and value-added services, whilst maintaining utmost professionalism, transparency and integrity in our relationships with our clients, partners and workforce.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-10 border-2 border-purple-200 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center">
                  <Eye className="text-white" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                To build an innovative and dynamic brand with an extensive outreach, that earns the right to be called 'the contractor of choice' by achieving admirable results for our clients every time and creating fulfilling careers for our workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{offering.name}</h3>
                  <span className="text-blue-600 font-bold text-lg">{offering.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${offering.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/90 text-sm md:text-base font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Why Choose Our Products?
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Seven Steps to Control Quality, Ensuring Accurate Size and Dimensions
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold">{feature.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Do You Have Any Questions?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us now for prompt responses and expert consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="tel:08033018217" className="text-white font-semibold hover:text-blue-200 transition-colors">
              08033018217
            </a>
            <span className="hidden sm:inline text-white">|</span>
            <a href="tel:08176691526" className="text-white font-semibold hover:text-blue-200 transition-colors">
              08176691526
            </a>
            <span className="hidden sm:inline text-white">|</span>
            <a href="tel:08035367070" className="text-white font-semibold hover:text-blue-200 transition-colors">
              08035367070
            </a>
          </div>
          <a href="mailto:Info@catenaltd.com" className="text-white font-semibold text-lg hover:text-blue-200 transition-colors">
            Info@catenaltd.com
          </a>
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}