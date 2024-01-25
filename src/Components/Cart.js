import React from "react";
// import getCartapi from "../api/getCart";
import deleteCartapi from "../api/deleteCartapi";

const Cart = ({ cartData, setCart }) => {
  if (cartData.length === 0)
    return <h1 className="text-center">Your Cart is Empty</h1>;
  let totalAmount = 0;
  const deleteCart = async (id) => {
    await deleteCartapi(id);
    setCart(cartData.filter((cart) => cart._id !== id));
  };
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-12 table-responsive">
            <h1>Cart</h1>
            <table className="table table-light p-0">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartData.length > 0 &&
                  cartData.map((item, index) => {
                    totalAmount += item.price;
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src={item.image}
                            style={{ height: "6rem" }}
                            alt={item.title}
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>
                          <input
                            type="number"
                            style={{ width: 50 }}
                            min={1}
                            max={10}
                            value={item.quantity}
                          />
                          <button
                            style={{
                              border: 1,
                              borderRadius: "40%",
                              background: "white",
                            }}
                          >
                            <i
                              className="fa-solid fa-check fas fa-1x text-success"
                              style={{ fontSize: 20 }}
                            ></i>
                          </button>
                        </td>
                        <td>
                          <button
                            style={{
                              border: 1,
                              borderRadius: "40%",
                              background: "white",
                            }}
                            onClick={() => deleteCart(item._id)}
                          >
                            <i
                              className="fa-solid fa-trash fas fa-1x text-danger"
                              style={{ fontSize: 20 }}
                            ></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total Price: ${totalAmount}</h2>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
