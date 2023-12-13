import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductGlobalContext } from "../../context/products.Context";
import ProductCard from "./productCard.Component";
import toast, { Toaster } from "react-hot-toast";
import { db } from "../../utils/firebase";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";

const ProductItems = ({ products }) => {
  const { categoryId } = useParams();
  const { productData, setProductData } = useProductGlobalContext();

  let navigate = useNavigate();

  const navigateToShop = () => {
    navigate(`/shop`);
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  const deleteProductHandler = async (categoryId, productId) => {
    console.log("cate id:", categoryId);
    console.log("product id:", productId);

    try {
      const updatedCategories = productData.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            products: category.products.filter(
              (product) => product.id !== productId
            ),
          };
        }
        return category;
      });
      const productDocRef = await doc(db, "products", String(categoryId));
      // console.log(productDocRef);
      await setDoc(productDocRef, ...updatedCategories);

      console.log(updatedCategories);
      setProductData(updatedCategories);

      toast.success("Successfully deleted!");
    } catch (error) {
      console.error("Error deleting data:", error.message);
      toast.error("Error deleting Product!");
    }
  };

  useEffect(() => {
    // Filter products based on categoryId when the component mounts or categoryId changes
    const filtered = categoryId
      ? products.filter((category) => category.category === categoryId)
      : products;

    setFilteredProducts(filtered);
  }, [categoryId, products]);

  return (
    <div className="product-category-container">
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
      {filteredProducts.map((category) => {
        // console.log(category);
        return (
          <span key={category.id}>
            <div className="product-category">
              <p className="product-category-title">{category.category}</p>
              <button onClick={navigateToShop}>All category</button>
            </div>

            <div className="product-card-container">
              {category.products.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    cateId={category.id}
                    product={product}
                    deleteProductHandler={deleteProductHandler}
                  />
                );
              })}
            </div>
          </span>
        );
      })}
    </div>
  );
};

export default ProductItems;
