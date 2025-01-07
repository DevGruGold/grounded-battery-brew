import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [contactMethod, setContactMethod] = useState<"phone" | "email" | null>(null);

  const handlePhoneClick = () => {
    setContactMethod("phone");
    const message = "Hello! I'm interested in learning more about Grounded Batteries' sustainable energy solutions. Could we schedule a call to discuss?";
    window.location.href = `tel:+50661500559`;
    toast({
      title: "Message Template",
      description: message,
      duration: 5000,
    });
  };

  const handleEmailClick = () => {
    setContactMethod("email");
    const subject = "Inquiry about Grounded Batteries";
    const body = "Hello! I'm interested in learning more about Grounded Batteries' sustainable energy solutions. Could you please provide more information about your products and services?";
    window.location.href = `mailto:xmrtsolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-coffee mb-8">Contact Us</h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-8">
              We'd love to hear from you! Choose your preferred method of contact below,
              and we'll provide you with a pre-scripted message to get the conversation started.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold mb-4">Call Us</h2>
                <p className="mb-4">+506 6150 0559</p>
                <Button
                  onClick={handlePhoneClick}
                  className="bg-ocean hover:bg-ocean-light text-white"
                >
                  Call Now
                </Button>
              </div>

              <div className="p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold mb-4">Email Us</h2>
                <p className="mb-4">xmrtsolutions@gmail.com</p>
                <Button
                  onClick={handleEmailClick}
                  className="bg-eco hover:bg-eco-light text-white"
                >
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;