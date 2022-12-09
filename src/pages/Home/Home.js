import { useEffect, useState } from "react";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

function Home() {
    // Creating a state for products data.
    // whenever there is achange in products, it will force component refresh.
    let [products, setProducts] = useState([]);
    const [click, setClick] = useState(0);

    // let data = "my data";

    useEffect(() => {
        fetch("Product.json" )
        // calling json function
        .then(res => res.json())
        // listening for json function to return.
        .then(res => {
            setProducts(res);
            console.log("Fetche called");
        })
    }, [click])

    return (
        <div>
            <Header/>
            <div class="container">
                <h3>{ products && products.length }</h3>
                <div className="row">
                    {
                        products.map((product) => (
                            <div className="col-4">
                                <ProductCard item={product}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;