import HeaderProductList from '@/components/ProductAndServices/HeaderProductList'
import Ourservices from '@/components/ProductAndServices/Ourservices'
import ProductListing from '@/components/ProductAndServices/ProductListing'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderProductList />
      <ProductListing />
      <div className="w-full flex justify-center my-8">
  <img
    src="https://ik.imagekit.io/siddharth637/abhilashit/hero/Gemini_Generated_Image_7pfg727pfg727pfg.png"
    alt="Product hero banner"
    className="w-250 h-auto object-cover"
  />
</div>
      <Ourservices />
    </div>
  )
}

export default page
