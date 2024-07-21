import React from "react";
import { Navbar } from "./components/navbar";
import { SimpleSlider } from "./components/slider";
import ProductGrid from "./components/caps/caps";
import { NewProduct } from "./components/newProduct/newProduct";
import Products from "./components/Products/products";
import Img from "./assets/newProduct.png";
import Img1 from "./assets/newProduct1.png";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <div className="navb bg-black">
      <Navbar />

      <SimpleSlider />
      <ProductGrid />
      <NewProduct
        title="WE HAVE NEW PRODUCTS"
        img1={Img}
        img2={Img1}
        btn="See all"
      />
      <Products />
      <NewProduct
        title="Selection by brands
"
        btn="By breands"
        img1={Img}
        img2={Img1}
      />
      <Products />
      <Footer />
    </div>
  );
};

export default App;
