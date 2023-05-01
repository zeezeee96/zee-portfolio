import { Helmet } from "react-helmet";
import "./style/style.css";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import About from "./components/About";
import Services from "./components/Services";
import WorkExperience from "./components/WorkExperience";
// import PricingPlan from "./components/PricingPlan";
// import PortFolio from "./components/PortFolio";
// import Discount from "./components/Discount";
// import Prices from "./components/Prices";
// import Testimonial from "./components/Testimonial";
// import Team from "./components/Team";
import ContactMe from "./components/ContactMe";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://code.jquery.com/jquery-3.4.1.min.js"
        ></script>
        <script
          async
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
        ></script>
        <script async src="./lib/easing/easing.min.js"></script>
        <script async src="./lib/wow/wow.min.js"></script>
        <script async src="./lib/waypoints/waypoints.min.js"></script>
        <script async src="./lib/typed/typed.min.js"></script>
        <script async src="./lib/owlcarousel/owl.carousel.min.js"></script>
        <script async src="./lib/isotope/isotope.pkgd.min.js"></script>
        <script async src="./lib/lightbox/js/lightbox.min.js"></script>

        <script defer src="./mail/jqBootstrapValidation.min.js"></script>
        <script defer src="./mail/contact.js"></script>

        <script async src="./js/main.js"></script>
      </Helmet>
      <Header />
      <HeroBanner />
      <About />
      <Services />
      <WorkExperience />
      {/* <PricingPlan /> */}
      {/* <PortFolio /> */}
      {/* <Discount /> */}
      {/* <Prices /> */}
      {/* <Testimonial /> */}
      {/* <Team /> */}
      <ContactMe />
      <Blogs />
      <Footer />
      <Loader />
    </>
  );
}

export default App;
