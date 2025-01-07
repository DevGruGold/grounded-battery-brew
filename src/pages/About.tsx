import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-coffee mb-8">About Grounded Batteries</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              At Grounded Batteries, we're revolutionizing energy storage through innovative use of sustainable materials.
              Based in the beautiful La Fortuna, Costa Rica, we've developed a unique process that transforms used coffee
              grounds and sea salt into efficient sodium-ion battery components.
            </p>

            <h2 className="text-2xl font-bold text-coffee mt-8 mb-4">Our Innovation</h2>
            <p className="text-lg mb-6">
              Our groundbreaking technology utilizes coffee grounds for anodes and sea salt for the electrolyte solution,
              creating sustainable batteries that reduce waste while providing reliable energy storage solutions.
            </p>

            <h2 className="text-2xl font-bold text-coffee mt-8 mb-4">Our Location</h2>
            <p className="text-lg mb-6">
              Located in La Fortuna, Costa Rica, we're surrounded by the natural beauty that inspires our commitment to
              environmental sustainability. Our location provides us with access to abundant coffee grounds from local
              cafes and restaurants, creating a circular economy that benefits our community.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;