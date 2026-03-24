import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";

const Getproducts = () => {
    let navigate = useNavigate();
    // declare our states here 
    const [loading, setLoading] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    // function to get products
    const getproducts = async () => {
        setLoading("please wait...")
        try {
            const response = await axios.get("http://abedhiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {

        }
    }
    // call the function 
    useEffect(() => {
        getproducts()
    }, [])
    console.log(products)
    const imagepath = "http://abedhiggs.alwaysdata.net/static/images/"

    return (
        <div className="row">
            {/* carousel goes here  */}
            <Carousel/>
            <h1 className="text-primary text-center">Available Products</h1>
            {/* bind the states  */}
            <h2 className="text-secondary">{loading}</h2>
            <h2 className="text-danger">{error}</h2>
            {/* map here  */}
            {products.map(singleproduct => (

                <div className="col-md-3  mb-4">
                    <div className="card shadow h-100">

                        {/* image goes here  */}
                        <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "300px", objectFit: "cover" }} />
                        <div className="card-body">
                            <h2 className="text-info">{singleproduct.product_name}</h2>
                            <p>{singleproduct.product_description}</p>
                            <b className="text-warning">KSH {singleproduct.product_cost}</b><br />
                            <button className="btn btn-danger w-100" onClick={() => navigate("/makepayment",{state:{singleproduct}})}>Purchase now</button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default Getproducts