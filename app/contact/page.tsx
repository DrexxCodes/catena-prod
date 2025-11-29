"use client"

import { useState } from "react"
import Image from "next/image"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Phone, Mail, Clock, MessageCircle, MapPin, Send, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState("Lagos")

  const addresses = {
    Lagos: "123 Construction Avenue, Ikeja, Lagos State, Nigeria",
    Anambra: "456 Industrial Road, Awka, Anambra State, Nigeria",
    Enugu: "789 Building Street, Enugu, Enugu State, Nigeria",
    Abuja: "321 Capital Plaza, Central Area, Abuja FCT, Nigeria",
    Ogun: "654 Paint Factory Lane, Abeokuta, Ogun State, Nigeria"
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      await addDoc(collection(db, "forms"), {
        ...formData,
        timestamp: new Date().toISOString(),
        status: "unread"
      })
      
      setSuccess(true)
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
      })
      
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Failed to submit form. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <Image
          src="/cta-background.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            Get In Touch
          </h1>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {/* Phone */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+234XXXXXXXXXX" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
              +234 XXX XXX XXXX
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <a href="https://wa.me/234XXXXXXXXXX" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
              +234 XXX XXX XXXX
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-purple-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:info@catena.com" className="text-gray-600 hover:text-purple-600 transition-colors text-sm break-all">
              info@catena.com
            </a>
          </div>

          {/* Opening Hours */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="text-orange-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Opening Hours</h3>
            <p className="text-gray-600 text-sm">Mon - Fri: 8AM - 6PM</p>
            <p className="text-gray-600 text-sm">Sat: 9AM - 4PM</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <p className="text-green-800 text-sm">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none text-gray-900"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Address Section with Tabs */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Locations</h2>
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(addresses).map((state) => (
                <button
                  key={state}
                  onClick={() => setActiveTab(state)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    activeTab === state
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>

            {/* Address Display */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 min-h-[200px] flex flex-col justify-center border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activeTab} Office</h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {addresses[activeTab as keyof typeof addresses]}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(addresses[activeTab as keyof typeof addresses])}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Visit us:</strong> We welcome walk-in customers at all our locations. 
                Please call ahead to schedule a consultation with our experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
    </>
  )
}