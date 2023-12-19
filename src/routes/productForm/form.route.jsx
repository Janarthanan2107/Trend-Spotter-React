import { useNavigate, useParams } from "react-router-dom";
import { useProductGlobalContext } from "../../context/products.Context";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../utils/firebase";

const Form = () => {
  const { category } = useParams();

  const { productData, setProductData } = useProductGlobalContext();

  //   console.log("Product Data:", productData);

  const [formData, setFormData] = useState({
    category: category,
    title: "",
    price: "",
    image: "",
    rate: "",
    count: "",
  });

  let navigate = useNavigate();

  const logInToShop = () => {
    navigate(`/shop/${category}`);
  };

  const handleAddProduct = async (selectedCategory, data) => {
    try {
      const id = productData.find(
        (category) => category.category === selectedCategory
      ).id;

      console.log(id);

      const updatedCategories = productData.find(
        (category) => category.id === id
      );

      // Update the context state with the updated categories
      console.log(updatedCategories);

      // Reference to the specific document in the "products" collection
      const productDocRef = doc(db, "products", id);

      await updateDoc(productDocRef, {
        ...updatedCategories,
        products: arrayUnion(data),
      });

      setFormData({
        category: "",
        title: "",
        price: "",
        image: "",
        rate: "",
        count: "",
      });

      logInToShop();

      console.log("Product added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding product to Firestore:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCategory = formData.category;

    const productData = {
      id: uuidv4(),
      title: formData.title,
      price: parseInt(formData.price, 10),
      image: formData.image,
      rating: {
        rate: parseInt(formData.rate, 10),
        count: parseInt(formData.count, 10),
      },
    };

    handleAddProduct(selectedCategory, productData);
  };

  return (
    <div className="product-form-container">
      <div className="heading">
        <h3>Procurement form</h3>
        <p>Add the product based on the category that your are seeking for!!</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-control">
            <label>Product Name:</label>
            <input
              type="text"
              name="title"
              placeholder="Enter your value"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div className="form-control">
            <label>Price:</label>
            <input
              type="number"
              placeholder="Enter your value"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              required
            />
          </div>
          <div className="form-control">
            <label>Image Url:</label>
            <input
              type="text"
              placeholder="Enter your value"
              name="image"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              required
            />
          </div>
          <div className="grouped-input">
            <div className="form-control">
              <label>Category :</label>
              <input
                type="text"
                placeholder="Enter your value"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
                readOnly
              />
            </div>
            <div className="form-control">
              <label>Rating:</label>
              <input
                type="number"
                placeholder="Enter your value"
                name="rate"
                value={formData.rate}
                onChange={(e) =>
                  setFormData({ ...formData, rate: e.target.value })
                }
                required
              />
            </div>
            <div className="form-control">
              <label>Stock:</label>
              <input
                type="number"
                placeholder="Enter your value"
                name="count"
                value={formData.count}
                onChange={(e) =>
                  setFormData({ ...formData, count: e.target.value })
                }
                required
              />
            </div>
            <div className="form-control">
              <p></p>
              <p>*Provided values are gonna reflect in the application data</p>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
