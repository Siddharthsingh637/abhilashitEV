"use client"

import React, { useEffect, useState } from 'react'
import ProductCard from '../Cards/ProductCard'
import { requestJson } from '@/lib/api'

const ProductListing = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const loadProducts = async () => {
      try {
        const data = await requestJson('/models', { signal: controller.signal })
        const list = Array.isArray(data) ? data : data?.models || []

        if (!isMounted) return
        setProducts(
          list.map((item) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            imageUrl: item.imageUrl,
            priceRange: item.priceRange,
            trueRange: item.trueRange,
            speed: item.speed,
            colorsAvailable: item.colorsAvailable || [],
          }))
        )
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Unable to load products')
        }
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadProducts()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
      {/* PRODUCTS SECTION */}
      <section className="w-full">

        {isLoading ? (
          <div className="flex flex-col gap-6 sm:gap-8">
            {[...Array(3)].map((_, index) => (
              <article
                key={index}
                className="group bg-white rounded-sm overflow-hidden border border-neutral-100 flex flex-row items-stretch h-[280px] animate-pulse"
              >
                <div className="w-[35%] sm:w-[40%] lg:w-[45%] flex-shrink-0 h-full bg-neutral-200" />
                <div className="w-[65%] sm:w-[60%] lg:w-[55%] p-4 sm:p-5 lg:p-6 flex flex-col justify-between h-full">
                  <div className="flex flex-col gap-4">
                    <div className="h-6 rounded-lg bg-neutral-200 w-3/4" />
                    <div className="h-4 rounded-lg bg-neutral-200 w-5/6" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 rounded-2xl bg-neutral-200" />
                      <div className="h-16 rounded-2xl bg-neutral-200" />
                    </div>
                    <div className="h-6 rounded-full bg-neutral-200 w-1/2" />
                  </div>
                  <div className="border-t border-neutral-100 pt-3 flex items-center justify-between gap-2 mt-auto">
                    <div className="space-y-2">
                      <div className="h-3 rounded-lg bg-neutral-200 w-24" />
                      <div className="h-5 rounded-lg bg-neutral-200 w-32" />
                    </div>
                    <div className="h-10 rounded-full bg-neutral-200 w-24" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : error ? (
          <div className="py-20 text-center">
            <p className="text-red-500 text-lg font-semibold">{error}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 sm:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </section>

      {/* removed services section - moved into Ourservices.jsx */}
    </div>
  )
}

export default ProductListing
