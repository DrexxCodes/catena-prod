"use client"

import { useState, useEffect, useRef } from "react"

type StatKey = "projects" | "clients" | "experience" | "quality"

interface StatItem {
  key: StatKey
  target: number
  suffix: string
  label: string
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    quality: 0,
  })
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  const statsData: StatItem[] = [
    {
      key: "projects",
      target: 1000,
      suffix: "+",
      label: "Completed Projects",
    },
    {
      key: "clients",
      target: 200,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      key: "experience",
      target: 15,
      suffix: " years",
      label: "Years Experience",
    },
    {
      key: "quality",
      target: 100,
      suffix: "%",
      label: "Quality Assurance",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true)
            hasAnimated.current = true
            startCountAnimation()
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const startCountAnimation = () => {
    const duration = 2000
    const frameRate = 60
    const totalFrames = (duration / 1000) * frameRate
    let currentFrame = 0

    const animate = () => {
      currentFrame++
      const progress = currentFrame / totalFrames

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)

      setCounts({
        projects: Math.floor(statsData[0].target * easeOutQuart),
        clients: Math.floor(statsData[1].target * easeOutQuart),
        experience: Math.floor(statsData[2].target * easeOutQuart),
        quality: Math.floor(statsData[3].target * easeOutQuart),
      })

      if (currentFrame < totalFrames) {
        requestAnimationFrame(animate)
      } else {
        // Ensure final values are exact
        setCounts({
          projects: statsData[0].target,
          clients: statsData[1].target,
          experience: statsData[2].target,
          quality: statsData[3].target,
        })
      }
    }

    requestAnimationFrame(animate)
  }

  return (
    <section ref={sectionRef} className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-600">Numbers that speak for our excellence</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={stat.key}
              className={`bg-white rounded-lg shadow-md p-8 text-center transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Stat Number */}
              <div className="mb-4">
                <div className="text-5xl md:text-6xl font-bold text-blue-600">
                  {counts[stat.key as StatKey].toLocaleString()}
                  <span className="text-4xl ml-1">{stat.suffix}</span>
                </div>
              </div>

              {/* Stat Label */}
              <p className="text-gray-700 font-semibold text-lg mb-6">{stat.label}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-2000"
                  style={{
                    width: `${(counts[stat.key as StatKey] / stat.target) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
