import React from "react";
import "../../CSS/checkout.css";
import useAuthUser from "../../Hooks/Authentications/useAuthUser";
import auth from "../../FirebaseConfig";
import useRemoveOrder from "../../Hooks/useRemoveOrder";

//checkout
const CheckOut = () => {
  const { user } = useAuthUser(auth);
  const { cart } = useRemoveOrder();

  let quantity = 0;
  let totalPrice = 0;
  for (const item of cart) {
    quantity = quantity + item.quantity;
    totalPrice = totalPrice + item.price * item.quantity;
  }

  return (
    <div className="checkout">
      <h5>Comming soon...</h5>
      <div className="envoice">
        <div>
          <p>
            Product: <span>{quantity}</span>
          </p>
          <p>
            Total Amount: $ <span>{totalPrice}</span>
          </p>
        </div>
        <div className="billing">
          <p>Billing</p>
          <p>.....</p>
        </div>
      </div>
      <form>
        <input type="text" value={user?.displayName} disabled />
        <input type="email" value={user?.email} disabled />
        <input type="text" placeholder="Contact no." />
        <textarea placeholder="Present address" />
        <button disabled>Place Order</button>
      </form>
    </div>
  );
};

export default CheckOut;
