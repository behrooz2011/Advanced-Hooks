// import React from "react";

// export default function UseMemo() {
//   return (
//     <div className="flex">
//       {/* Left Column */}
//       <div className="w-3/4">
//         <div className="grid grid-cols-3 gap-4 p-4">
//           {/* Small Div 1 */}
//           <div className="bg-red-200 p-2">
//             <p>Div 1</p>
//           </div>
//           {/* Small Div 2 */}
//           <div className="bg-blue-200 p-2">
//             <p>Div 2</p>
//           </div>
//           {/* Small Div 3 */}
//           <div className="bg-green-200 p-2">
//             <p>Div 3</p>
//           </div>
//           {/* Small Div 4 */}
//           <div className="bg-yellow-200 p-2">
//             <p>Div 4</p>
//           </div>
//           {/* Small Div 5 */}
//           <div className="bg-teal-200 p-2">
//             <p>Div 5</p>
//           </div>
//           {/* Small Div 6 */}
//           <div className="bg-purple-200 p-2">
//             <p>Div 6</p>
//           </div>
//           {/* <div className="bg-teal-200 p-2">
//             <p>Div 7</p>
//           </div> */}
//         </div>
//       </div>
//       {/* Right Column */}
//       <div className="w-1/4 bg-gray-200">Price</div>
//     </div>
//   );
// }

//

import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Card = ({ product, image, price }) => {
  const { itemsPurchased, setItemsPurchased } = useContext(CartContext);
  console.log("Card....");

  const handleItemClick = (item) => {
    setItemsPurchased([...itemsPurchased, item]);
    console.log({ itemsPurchased });
  };
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt="Card" className="h-40 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">${price}</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleItemClick({ product, price })}
        >
          Add your item to the cart
        </button>
      </div>
    </div>
  );
};
//great for photo
//https://unsplash.com/photos/
const UseMemoComponent = () => {
  const { totalPrice } = useContext(CartContext);
  const cards = [
    {
      product: "a",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      price: 200,
    },
    {
      product: "b",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
      price: 350,
    },
    {
      product: "c",
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      price: 180,
    },
    {
      product: "d",
      image:
        "https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      price: 300,
    },
    {
      product: "e",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=398&q=80",
      price: 390,
    },
    {
      product: "f",
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      price: 130,
    },
  ];

  return (
    <>
      <div className="flex">
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-4 p-4">
            {cards.map((card, index) => (
              <div key={index}>
                <Card
                  image={card.image}
                  price={card.price}
                  product={card.product}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/4 text-xl font-bold p-4 bg-gray-50 shadow-lg rounded-lg overflow-hidden m-4">
          <span className="">Total Price:{totalPrice}</span>
          {/* <h1>An arm and a leg</h1> */}
        </div>
      </div>
    </>
  );
};

export default UseMemoComponent;
