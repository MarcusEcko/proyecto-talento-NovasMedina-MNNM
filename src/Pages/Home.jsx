import Header from "../Components/Header"
import Hero from "../Components/Hero"
import Sections from "../Components/Sections";
import Featured from "../Components/Featured";
import Benefits from "../Components/Benefits";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

function Home({ products }) {
    return (
        <div>
            <Header />
            <Hero products={products} />
            <Sections products={products} />
            <Featured products={products} />
            <Benefits />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Home;
