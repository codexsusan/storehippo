import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  stock: string;
  price: string;
  images: string[];
  discountPercentage: string;
  description: string;
  category: string;
  brand: string;
};

const calculateDiscountedPrice = (
  price: string,
  discountPercentage: string
) => {
  const priceNumber = parseFloat(price);
  const discountPercentageNumber = parseFloat(discountPercentage);
  return priceNumber - (priceNumber * discountPercentageNumber) / 100;
};

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  }, []);

  return (
    <div className="w-full grid grid-cols-11 ">
      <div className="2xl:col-span-2 lg:col-span-1 h-full" />
      <div className="h-full w-full 2xl:col-span-7 2xl:col-start-3 col-span-9 col-start-2 py-10">
        <h2 className="text-center font-semibold text-3xl mb-10">Products</h2>
        <div className="flex flex-wrap gap-4 justify-between mx-12">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>

      <div className="2xl:col-span-2 2xl:col-start-10 lg:col-span-1 lg:col-start-11" />
    </div>
  );
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
      <img
        className="w-full h-56 object-cover object-center"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg text-gray-800">{product.title}</h2>

        <div className=" flex justify-between items-center">
          <span className="text-gray-700 text-lg font-medium flex gap-x-2">
            <p className="mr-1">
              Price: $
              {calculateDiscountedPrice(
                product.price,
                product.discountPercentage
              ).toFixed(2)}
            </p>

            <p className="flex gap-x-1 text-sm items-center text-red-600">
              MRP:
              <p className="line-through">$ {product.price}</p>
            </p>
          </span>
        </div>
        {product.discountPercentage && (
          <div className="mt-2 flex justify-start items-center">
            <span className="bg-green-200 text-green-700 py-1 px-3 rounded-full text-sm font-semibold">
              {product.discountPercentage}% OFF
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
