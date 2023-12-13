import { useNavigate } from "react-router-dom";
import { useProductGlobalContext } from "../../context/products.Context";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import "../productForm/form.style.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CategoryForm = () => {
  const { productData, setProductData } = useProductGlobalContext();

  //   console.log("Product Data:", productData);

  const [formData, setFormData] = useState({
    category: "",
    description: "",
    imgUrl: "",
  });

  let navigate = useNavigate();

  const logInToAdmin = () => {
    navigate(`/admin`);
  };

  const handleAddProduct = async (data) => {
    try {
      // console.log(data);
      // console.log(data.id);
      const productDocRef = await doc(db, "products", String(data.id));
      // console.log(productDocRef);
      await setDoc(productDocRef, data);

      setFormData({
        category: "",
        description: "",
        imgUrl: "",
      });

      logInToAdmin();

      console.log("Product added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding product to Firestore:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      id: uuidv4(),
      category: formData.category,
      description: formData.description,
      imgUrl: formData.imgUrl,
      products: [],
    };

    handleAddProduct(productData);
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
            <label>Category :</label>
            <input
              type="text"
              placeholder="Enter your value"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            />
          </div>
          <div className="form-control">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              placeholder="Enter your value"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>
          <div className="form-control">
            <label>Image Url:</label>
            <input
              type="text"
              placeholder="Enter your value"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={(e) =>
                setFormData({ ...formData, imgUrl: e.target.value })
              }
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
