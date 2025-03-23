import { useContext } from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { ReloadCTX } from "../../contexts/reload";

const ProductDetails = () => {
  const { selectedProduct, loading } = useContext(ReloadCTX);

  if (loading) {
    return <Skeleton className="h-48 w-full rounded-md" />;
  }

  if (!selectedProduct) {
    return <p className="text-center text-2xl">Выберите товар, чтобы увидеть детали</p>
  }

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
      <p className="text-gray-500">{selectedProduct.description}</p>
      <p className="text-lg font-semibold mt-2">${selectedProduct.price}</p>
    </Card>
  );
};

export default ProductDetails;
