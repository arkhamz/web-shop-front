import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductContainer from "../components/ProductContainer";

function Details() {
  const { id } = useParams();
  console.log(("useparams: ", id));
  const [currentProduct, setCurrentProduct] = useState();

  //getting the product with the id param
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const product = await axios.get(`http://localhost:4000/products/${id}`);
        console.log(product.data);
        setCurrentProduct(product.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    getProductDetails();
  }, [id]);

  return (
    <div className="details-page">
      <h1>details page!</h1>
      {!currentProduct ? (
        "nothing yet!"
      ) : (
        <ProductContainer object={currentProduct} />
      )}
    </div>
  );
}

export default Details;
