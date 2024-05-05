import React, { useEffect, useState } from 'react'


const ProductList = ({ category } : { category: string }) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log("Fetching products in ", category);
        setProducts(["Clothing", "Household"]);

        return () => console.log("disconnecting from server");
    }, [category]);

  return (
    <div>ProductList</div>
  )
}

export default ProductList