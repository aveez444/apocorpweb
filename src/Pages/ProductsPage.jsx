import EngineHubSection from "../Components/EngineHubSection";
import FeaturesSection from "../Components/FeatureSection";
import ProductsHero from "../Components/ProductsHero";
import StatementSection from "../Components/StatementSection";
function ProductsPage() {

    return(
        <div>
            <ProductsHero />
            <StatementSection />
            <EngineHubSection />
            <FeaturesSection />
        </div>
    )

}

export default ProductsPage;