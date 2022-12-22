// Código em inglês 
import { useState } from "react"

interface Product {
  title: string;
  price: string;
}

const productList = [
  {
    title: 'Macarrão',
    price: 'R$ 25,00'
  },
  {
    title: 'Hamburger',
    price: 'R$ 30,00'
  }
]

export function ProductList() {
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([])

  function searchProduct(search: string) {
    const filtered = productList.filter(product => product.title.includes(search))

    setFilteredProductList(filtered)
  }

  return (
    <div>
      <input type="text" onChange={(e) => searchProduct(e.target.value)} />

      {filteredProductList.map(produto => (
        <div>
          <p>{produto.title}</p>
          <p>{produto.price}</p>
        </div>
      ))}
    </div>
  )
}

