
import LandingPage from "../components/landing/LandingPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <LandingPage />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
