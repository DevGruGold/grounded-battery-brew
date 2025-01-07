import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-coffee to-coffee-light text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Sustainable Battery Innovation
            </h1>
            <p className="text-xl mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Transforming coffee grounds and sea salt into powerful, eco-friendly sodium-ion batteries.
            </p>
            <Link to="/contact">
              <Button className="bg-eco hover:bg-eco-light text-white" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Grounded Batteries?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-coffee">Eco-Friendly</h3>
              <p className="text-gray-600">
                Made from recycled coffee grounds and natural sea salt, reducing waste and environmental impact.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-coffee">Cost-Effective</h3>
              <p className="text-gray-600">
                Utilizing abundant, low-cost materials to create efficient energy storage solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-coffee">Locally Sourced</h3>
              <p className="text-gray-600">
                Proudly made in La Fortuna, Costa Rica, supporting local communities and reducing transport emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;