import { useState, useEffect, ReactNode } from "react";
import { ReloadCTX } from "./reload";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface ReloadProviderProps {
  children: ReactNode;
}

export const ReloadProvider = ({ children }: ReloadProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_PUBLIC_API}/products`);
      const data = await res.json();
      setProducts(data.products);
    }
    catch (error) {
      console.error("Ошибка загрузки:", error);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ReloadCTX.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
        fetchProducts,
        loading,
        search,
        setSearch,
      }}
    >
      {children}
    </ReloadCTX.Provider>
  );
};
