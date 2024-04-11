import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Product from "./components/Products";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <HeroSection />
      <Testimonial />
      <Product />
    </div>
  );
}

export default App;
