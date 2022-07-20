import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductContainer from "../components/ProductContainer";

function Details({ cartUpdater, cartState }) {
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState();

  //getting the product with the id param
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const product = await axios.get(`http://localhost:4000/products/${id}`);

        setCurrentProduct(product.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    getProductDetails();
  }, [id]);

  return (
    <div className="details-page">
      {!currentProduct ? (
        "nothing yet!"
      ) : (
        <ProductContainer
          cartState={cartState}
          cartUpdater={cartUpdater}
          object={currentProduct}
        />
      )}
    </div>
  );
}

export default Details;
