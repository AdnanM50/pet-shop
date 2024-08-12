import ProductCard from '@/components/card/productCard'
import React from 'react'

const Page = () => {
  return (
    <div>
         <div className="grid gap-6 lg:grid-cols-2">
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
    </div>
  )
}

export default Page