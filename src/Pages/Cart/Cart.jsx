import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22C55E",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://techhut-server.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Course has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleCheckOut = () => {
    if (cart.length === 0) {
      // Show a warning SweetAlert if the cart is empty
      Swal.fire({
        icon: "warning",
        text: "Your cart is empty. Please add items before proceeding to checkout.",
        confirmButtonColor: "#000000",
      });
    } else {
      // Show a success SweetAlert for successful checkout
      Swal.fire({
        icon: "success",
        text: "Checkout successful!",
        confirmButtonColor: "#22C55E",
      }).then(() => {
        // Clear the cart by sending a DELETE request to the backend to delete all items
        fetch("https://techhut-server.vercel.app/carts", {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            // After clearing the cart, refetch the updated cart data from the backend
            refetch();
          })
          .catch((error) => {
            console.error("Error clearing cart:", error);
          });
      });
    }
  };

  return (
    <div>
      <div className="mx-auto w-3/4   sm:px-6 sm:py-12 lg:px-8">
        <div>
          <header className="text-center">
            <h1 className="text-xl font-semibold tracking-tighter text-gray-900 sm:text-3xl">
              {user?.displayName}&apos;s Cart
            </h1>
          </header>

          <div className="mt-20">
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item._id} className="flex items-center gap-4">
                  <img
                    src={item.productImage}
                    alt=""
                    className="h-16 w-16 rounded object-contain"
                  />

                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.productName}
                    </h3>

                    <dl className="mt-0.5 space-y-px text-[12px] text-gray-600">
                      <div>
                        <dt className="inline">Specs: </dt>
                        <dd className="inline">{item.specs}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="flex flex-1 items-center justify-end gap-2">
                    <p>${item.price}</p>

                    <button
                      onClick={() => handleDelete(item)}
                      className="text-gray-600 transition hover:text-red-500"
                    >
                      <span className="sr-only">Remove item</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-end gap-8 !text-base font-medium">
                    <dt>Total</dt>
                    <dd>${total}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <span className="inline-flex items-center justify-center rounded-full bg-base-200 px-2.5 py-0.5 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p className="whitespace-nowrap text-xs">VAT Included</p>
                  </span>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleCheckOut}
                    className="block rounded-md bg-gray-950 px-5 py-3 text-sm text-white transition hover:bg-opacity-90 active:bg-opacity-90"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
