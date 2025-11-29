"use client"

import Image from "next/image"

export default function Projects() {
  // Create more images for smoother infinite scroll effect
  const projectImages = Array.from({ length: 12 }, (_, i) => `project${(i % 9) + 1}.jpg`)
  const reverseProjectImages = [...projectImages].reverse()

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-12 md:mb-16 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Projects
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Showcasing our commitment to excellence in construction and roofing
        </p>
      </div>

      {/* Projects Gallery with Mask Effect */}
      <div className="relative mb-12 md:mb-16" style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      }}>
        {/* First row - scrolls left automatically */}
        <div className="flex gap-5 mb-5 scroll-left">
          {/* Duplicate images for seamless infinite scroll */}
          {[...projectImages, ...projectImages].map((image, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-72 h-48 md:w-80 md:h-52 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/${image}`}
                  alt={`Project ${(index % 9) + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second row - scrolls right automatically */}
        <div className="flex gap-5 scroll-right">
          {/* Duplicate images for seamless infinite scroll */}
          {[...reverseProjectImages, ...reverseProjectImages].map((image, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-72 h-48 md:w-80 md:h-52 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/${image}`}
                  alt={`Project ${9 - (index % 9)}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center px-4">
        <button className="px-8 py-3 md:px-10 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base md:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          View All Projects
        </button>
      </div>

      <style jsx>{`
        .scroll-left {
          animation: scrollLeft 60s linear infinite;
          will-change: transform;
          width: fit-content;
        }

        .scroll-right {
          animation: scrollRight 60s linear infinite;
          will-change: transform;
          width: fit-content;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Pause animation on hover */
        .scroll-left:hover,
        .scroll-right:hover {
          animation-play-state: paused;
        }

        /* Disable animations for users who prefer reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .scroll-left,
          .scroll-right {
            animation: none !important;
            transform: none !important;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .scroll-left,
          .scroll-right {
            animation-duration: 45s;
          }
        }
      `}</style>
    </section>
  )
}