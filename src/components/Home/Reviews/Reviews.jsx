'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviewsData = [
  {
    id: 1,
    rating: 5,
    text: 'The team explained every EV model clearly and helped me choose the right scooter for my daily commute.',
    author: 'Amit Kumar',
    avatar: 'https://via.placeholder.com/50?text=HK'
  },
  {
    id: 2,
    rating: 5,
    text: 'Smooth purchase experience, transparent pricing, and quick delivery. The showroom support was excellent.',
    author: 'Priya Sharma',
    avatar: 'https://via.placeholder.com/50?text=AD'
  },
  {
    id: 3,
    rating: 4,
    text: 'Booked a test ride and got proper guidance on battery range, charging, and service. Very helpful staff.',
    author: 'Rahul Verma',
    avatar: 'https://via.placeholder.com/50?text=SW'
  },
  {
    id: 4,
    rating: 5,
    text: 'After-sales service has been reliable. They respond quickly and make EV ownership feel easy.',
    author: 'Neha Singh',
    avatar: 'https://via.placeholder.com/50?text=PS'
  }
]

const Reviews = () => {
  const [visibleCards, setVisibleCards] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(true)

  useEffect(() => {
    const updateVisibleCards = () => {
      let nextVisibleCards = 1

      if (window.innerWidth >= 1024) {
        nextVisibleCards = 3
      } else if (window.innerWidth >= 768) {
        nextVisibleCards = 2
      }

      setVisibleCards(nextVisibleCards)
      setCurrentIndex(nextVisibleCards)
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)

    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  const infiniteReviews = [
    ...reviewsData.slice(-visibleCards),
    ...reviewsData,
    ...reviewsData.slice(0, visibleCards)
  ]

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1)
  }, [])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1)
  }, [])

  useEffect(() => {
    if (currentIndex >= reviewsData.length + visibleCards) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(visibleCards)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 700)

      return () => clearTimeout(timer)
    }

    if (currentIndex < visibleCards) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setCurrentIndex(reviewsData.length + visibleCards - 1)
        setTimeout(() => setIsTransitioning(true), 50)
      }, 700)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, visibleCards])

  const translateX = -(currentIndex * (100 / visibleCards))

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 shrink-0 rounded bg-yellow-400"></div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our EV Customers Say
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Show previous review"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              aria-label="Show next review"
              onClick={handleNext}
              className="w-12 h-12 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all flex items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none'
            }}
          >
            {infiniteReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-none px-3"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <article className="h-full rounded-lg border border-gray-100 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                  {/* Stars */}
                  <div className="mb-4">
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="mb-6 line-clamp-3 text-sm text-gray-700">
                    {review.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <div
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-500"
                    >
                      {review.author
                        .split(' ')
                        .map((name) => name[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <span className="font-semibold text-blue-500">{review.author}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
