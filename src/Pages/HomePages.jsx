import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import "../Styles/HomePages.css"
import AnimateApoCorp from "../Components/AnimateApoCorp";
import CarouselAnimation from "../Components/CarouselAnimation";
// import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import OperationsFlowSection from "../Components/OperationsFlowSection";
import MetricSection from "../Components/MetricSection";

function HomePages() {
    return (
        <div className="homepage">
            {/* <NavBar /> */}
            {/* <div className="homepage"> */}
            {/* rest of homepage content */}
            {/* </div> */}
            <Hero />
            <OperationsFlowSection />
            <MetricSection />
            <AnimateApoCorp />
            <CarouselAnimation />
            {/* <ContactSection /> */}
            {/* <Footer /> */}
        </div>
    )

}
export default HomePages;