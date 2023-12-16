import { FaStar } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BiSolidPencil } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useCartGlobalContext } from "../../context/cart.Context";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useUserContext } from "../../context/user.Context";
import { useProductGlobalContext } from "../../context/products.Context";

const ProductCard = ({ product, cateId }) => {
  const { id, image, title, rating, price } = product;

  const { addItemToCart } = useCartGlobalContext();
  const { user, userData } = useUserContext();
  const { deleteProductHandler } = useProductGlobalContext();

  const deleteProduct = (cateId, id) => {
    deleteProductHandler(cateId, id);
  };

  // finding admin data
  const admin = userData.find(
    (item) => item.email === "janarthanan.v2107@gmail.com"
  );

  const adminDisplayName = admin ? admin.displayName : "";

  const userName = user ? user.displayName : "";

  // hooks
  const [dialog, setDialog] = useState(false);

  const productDialogOpen = () => {
    setDialog(true);
  };

  const productDialogClose = () => {
    setDialog(false);
  };

  const addToCartHandler = (product) => {
    toast.success("Product Successfully added!");
    addItemToCart(product);
  };

  const userAuthMessage = () => {
    toast.error("Please Login!");
  };

  const ProductRating = ({ rate }) => {
    const starArray = Array.from({ length: rate });

    return (
      <div className="rating">
        {starArray.map((item, index) => (
          <FaStar key={index} />
        ))}
      </div>
    );
  };

  return (
    <div className="product-card">
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          className: "",
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
            marginTop: "50px",
          },
        }}
      />
      <span className="img-container" onClick={productDialogOpen}>
        <p>Men's</p>
        <img src={image} alt="t-shirt" />
      </span>
      <span className="title-container">
        <p>{title}</p>

        <ProductRating rate={rating.rate} />
      </span>
      <span className="price-container">
        <p>${price}</p>
      </span>
      <div className="cart-btn-container">
        <button
          style={{
            width: `${userName === adminDisplayName ? "" : "100%"}`,
          }}
          onClick={() => (user ? addToCartHandler(product) : userAuthMessage())}
        >
          <FaCartShopping />
          Add to cart
        </button>
        {userName === adminDisplayName ? (
          <span>
            <button onClick={() => deleteProduct(cateId, id)}>
              <RiDeleteBin2Line />
            </button>
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="product-dialog">
        <div className={`overlay ${dialog ? "open" : "close"}`}>
          <div className="model-container">
            <div className="close-btn" onClick={productDialogClose}>
              <FaTimes />
            </div>
            <img src={image} alt={title} className="dialog-card-img" />
            <div className="product-info">
              <span className="dialog-title-container">
                <h3 className="title">{title}</h3>
                <h3 className="price">${price}</h3>
              </span>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita porro amet exercitationem, velit id illum facere at
                sequi eos omnis sed architecto quod ex repellat vel pariatur
                natus odit? Itaque vitae dolorem aut ad, iste earum dolorum
                necessitatibus fugit voluptatem expedita quo quas,
              </p>

              <span>
                <p>Men's</p>
                <ProductRating rate={rating.rate} />
              </span>

              <div className="cart-btn-container">
                <button onClick={() => addToCartHandler(product)}>
                  <FaCartShopping />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
