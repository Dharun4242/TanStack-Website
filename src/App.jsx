
import { Suspense, lazy } from "react";
import Loader from "./components/Loader.jsx";

const ProductList = lazy(() => import("./pages/ProductList.jsx"));


export default function App() {
  return (
   <div>
      
      <Suspense fallback={<Loader />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
