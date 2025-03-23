import ProductDetails from "./components/custom/ProductDetails";
import ProductList from "./components/custom/ProductList";
import { ReloadProvider } from "./contexts/ReloadProvider";

function App() {
  return (
    <ReloadProvider>
      <div className="flex flex-col md:flex-row p-4">
        <ProductList />
        <div className="w-1/2 p-4">
          <ProductDetails />
        </div>
      </div>
    </ReloadProvider>
  );
}

export default App;
