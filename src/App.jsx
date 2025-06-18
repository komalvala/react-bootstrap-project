import './App.css'
import Header from "./components/Header";
import Banner from "./components/Banner"
import ContactUs from "./components/ContactUs";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
     <>
      <Header />
      <Banner title="Contact Us" />
      <ContactUs />
      <MapSection />
      <Footer />
    </>
  );
}

export default App;
