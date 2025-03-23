import { useContext } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import { ReloadCTX } from "../../contexts/reload";
import { IoIosSearch } from "react-icons/io";
import { IoReload } from "react-icons/io5";

const ProductList = () => {
  const { products, setSelectedProduct, fetchProducts, loading, search, setSearch } = useContext(ReloadCTX);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-1/2 p-4">
      <h2 className="text-xl font-bold mb-4">Список товаров</h2>

      <div className="relative mb-5">
        <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        <Input 
        placeholder=" Поиск товаров..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 pl-8"
      />
      </div>
      
      {loading ? (
        <div className="grid gap-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-12 w-full rounded-md" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="p-4 cursor-pointer hover:bg-gray-100" onClick={() => setSelectedProduct(product)}>
              <p className="font-semibold">{product.title}</p>
            </Card>
          ))}
        </div>
      )}

      <Button onClick={fetchProducts} className="mt-4 w-full">
        <IoReload /> Обновить товары
      </Button>
    </div>
  );
};

export default ProductList;
