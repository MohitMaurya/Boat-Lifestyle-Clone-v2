import { ProductCard } from "./components/ProductCard";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import { ImageSlider } from "./components/ImageSlider";
import { Login } from "./components/Login";
import { Video } from "./components/Video";
import { Register } from "./components/Register";
import { Error } from "./components/Error";
import { Chatbot } from "./components/Chatbot";
import { Blog } from "./components/blog/Blog";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <Login /> */}
            <ImageSlider />
            <Video />
            <Blog />
            {/* <ProductCard /> */}
            <Footer />
        </div>
    );
}

export default App;
