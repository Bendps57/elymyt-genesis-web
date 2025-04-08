
import LandingPage from "../components/landing/LandingPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LandingPage />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <img 
            src="https://i.imgur.com/EFrii9y.png" 
            alt="eLimyt Signature" 
            className="w-full max-w-4xl mx-auto" 
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Index;
