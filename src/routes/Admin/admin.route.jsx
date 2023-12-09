import { RiDeleteBin2Line } from "react-icons/ri";
import { GoPlus } from "react-icons/go";

import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user.Context";
import { useProductGlobalContext } from "../../context/products.Context";
import { useEffect } from "react";

import "./admin.styles.scss";

const Admin = () => {
  // admin data
  const { userData } = useUserContext();
  const { productData } = useProductGlobalContext();

  // finding admin data
  const admin = userData.find(
    (item) => item.email === "janarthanan.v2107@gmail.com"
  );

  // navigate to sign in
  let navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate("/signIn");
  };

  const navigateToForm = (id) => {
    navigate(`/form/${id}`);
  };

  // validation for admin page
  useEffect(() => {
    if (!admin) {
      navigateToSignIn();
    }
  }, []);

  // console.log(userData);

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

  return (
    <div className="admin-container">
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
            <p>{productData.length} data</p>
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
      <div className="stats-tables">
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
                  const { displayName, email, createdAt } = user;
                  return (
                    <tr key={index}>
                      <td>{displayName}</td>
                      <td>{hightToAdmin(email)}</td>
                      <td>{createdAt}</td>
                      <td>
                        <button className="delete-icon">
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
          <h3 className="table-heading">Category Data : </h3>
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
                  const { category, description, products } = item;
                  return (
                    <tr key={index}>
                      <td>{category}</td>
                      <td>{description}</td>
                      <td>
                        {products.length}
                        <button
                          className="add-icon"
                          onClick={() => navigateToForm(category)}
                        >
                          <GoPlus />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Admin;
