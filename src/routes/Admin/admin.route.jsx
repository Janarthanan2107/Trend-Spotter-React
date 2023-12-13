import { RiDeleteBin2Line } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user.Context";
import { useProductGlobalContext } from "../../context/products.Context";
import { useEffect } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import toast, { Toaster } from "react-hot-toast";
import "./admin.styles.scss";

const Admin = () => {
  // admin data
  const { userData, setUserData } = useUserContext();
  const { productData, setProductData ,getData} = useProductGlobalContext();

  // finding admin data
  const admin = userData.find(
    (item) => item.email === "janarthanan.v2107@gmail.com"
  );

  // navigate to sign in
  let navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/signIn");
  };

  const navigateToCategoryForm = () => {
    navigate("/categoryForm");
  };

  const navigateToForm = (id) => {
    navigate(`/form/${id}`);
  };

  const userDeleteHandler = async (id) => {
    try {
      // Delete the document
      await deleteDoc(doc(db, "user", id));

      // Update the user data in the context
      const updatedUserData = userData.filter((user) => user.id !== id);
      setUserData(updatedUserData);

      toast.success("Successfully deleted!");
    } catch (error) {
      console.error("Error deleting data:", error.message);
      toast.error("Error deleting user!");
    }
  };

  const productDeleteHandler = async (id) => {
    try {
      // Delete the document
      await deleteDoc(doc(db, "products", id));

      // Update the user data in the context
      const updatedProductData = productData.filter((user) => user.id !== id);
      setProductData(updatedProductData);

      toast.success("Successfully deleted!");
    } catch (error) {
      console.error("Error deleting data:", error.message);
      toast.error("Error deleting user!");
    }
  };

  // validation for admin page
  useEffect(() => {
    if (!admin) {
      navigateToSignIn();
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const hightToAdmin = (email) => {
    if (email === "janarthanan.v2107@gmail.com") {
      return (
        <span className="admin-space">
          {email}
          <p className="admin-badge">Admin</p>
        </span>
      );
    } else {
      return <>{email}</>;
    }
  };

  const productsArrayLength = productData
    .map((item) => item.products.length)
    .reduce((acc, current) => acc + current, 0);

  return (
    <div className="admin-container">
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
      <div className="admin-stats">
        <div className="card">
          <div className="stats-topic">
            <p>User Data:</p>
            <p className="stats-message">
              No of User logging into the application data
            </p>
          </div>
          <div className="stats-count">
            <p>{userData.length} users</p>
          </div>
        </div>
        <div className="card">
          <div className="stats-topic">
            <p>Product Data:</p>
            <p className="stats-message">
              No of products added into the application data
            </p>
          </div>
          <div className="stats-count">
            <p>{productsArrayLength} data</p>
          </div>
        </div>
        <div className="card">
          <div className="stats-topic">
            <p>Product Category:</p>
            <p className="stats-message">
              No of products splits into category with the application data
            </p>
          </div>
          <div className="stats-count">
            <p>{productData.length} category</p>
          </div>
        </div>
      </div>
      <br />
      <hr />
      {/* <div className="stats-tables">
        <span>
          <h3 className="table-heading">User Data : </h3>
          <div className="user-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => {
                  const { id, displayName, email, createdAt } = user;
                  return (
                    <tr key={index}>
                      <td>{displayName}</td>
                      <td>{hightToAdmin(email)}</td>
                      <td>{createdAt}</td>
                      <td>
                        <button
                          className="delete-icon"
                          onClick={() => userDeleteHandler(id)}
                        >
                          <RiDeleteBin2Line />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </span>
        <span>
          <span className="cate-head">
            <h3 className="table-heading">
              <span>Category Data : </span>
            </h3>
            <button onClick={navigateToCategoryForm} className="add-icon">
              Add Category
            </button>
          </span>
          <div className="category-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Product count</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((item, index) => {
                  const {id, category, description, products } = item;
                  return (
                    <tr key={index}>
                      <td>{category}</td>
                      <td>{description}</td>
                      <td>
                        <span className="action-container">
                          {products.length}
                          <button
                            className="add-icon"
                            onClick={() => navigateToForm(category)}
                          >
                            <GoPlus />
                          </button>
                          <button
                            className="delete-icon"
                            onClick={() => productDeleteHandler(id)}
                          >
                            <RiDeleteBin2Line />
                          </button>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </span>
      </div> */}
    </div>
  );
};

export default Admin;
