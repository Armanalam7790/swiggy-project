import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../store/cartSlice";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.card.info.price || item.card.info.defaultPrice) / 100;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-500">Add items from a restaurant to get started.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Your Cart ({cartItems.length})
        </h1>
        <button
          className="text-sm text-red-500 border border-red-400 px-4 py-2 rounded-full hover:bg-red-50 transition"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      {/* Items */}
      <div className="bg-white rounded-xl shadow divide-y">
        {cartItems.map((item, index) => {
          const info = item.card.info;
          const price = (info.price || info.defaultPrice) / 100;

          return (
            <div key={index} className="flex items-center gap-4 p-4">
              {info.imageId && (
                <img
                  src={CDN_URL + info.imageId}
                  alt={info.name}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{info.name}</h3>
                <p className="text-sm text-gray-500 mt-1">₹{price.toFixed(2)}</p>
              </div>
              <button
                className="text-sm text-red-400 hover:text-red-600 font-medium transition"
                onClick={() => dispatch(removeItem(info.id))}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-5 flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">Total Amount</p>
          <p className="text-2xl font-bold text-orange-600">₹{totalPrice.toFixed(2)}</p>
        </div>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Cart;