import Hero from "../Components/Hero";
import "../Styles/HomePages.css"
import AnimateApoCorp from "../Components/AnimateApoCorp";
import CarouselAnimation from "../Components/CarouselAnimation";
import OperationsFlowSection from "../Components/OperationsFlowSection";
import MetricSection from "../Components/MetricSection";

function HomePages() {
    return (
        <div className="homepage">
            <Hero />
            <OperationsFlowSection />
            <MetricSection />
            <AnimateApoCorp />
            <CarouselAnimation />
        </div>
    )

}
export default HomePages;