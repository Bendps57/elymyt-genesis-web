
import LandingPage from "../components/landing/LandingPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LandingPage />
      <div className="py-16 md:py-24 bg-gradient-to-br from-elimyt-blue/10 via-elimyt-purple/10 to-elimyt-pink/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src="https://i.imgur.com/EFrii9y.png" 
              alt="eLimyt Signature" 
              className="w-full max-w-4xl mx-auto" 
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Index;
