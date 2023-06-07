//////////////
import React, { useState, useMemo } from "react";

const Card = ({ setItemsPurchased, product, image, price }) => {
  console.log("Card....");

  const handleItemClick = (item) => {
    setItemsPurchased((prev) => [...prev, item]);
    // console.log({ itemsPurchased });
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
          Add to the cart now
        </button>
      </div>
    </div>
  );
};

// great for photo
// https://unsplash.com/photos/

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
const UseMemoComponent = () => {
  const [itemsPurchased, setItemsPurchased] = useState([]);

  const totalPrice = useMemo(() => {
    console.log("useMemo triggered");
    console.log({ itemsPurchased });
    return itemsPurchased.reduce((sum, item) => sum + item.price, 0);
  }, [itemsPurchased]);

  //Great use of useMemo
  // const renderedCards = useMemo(() => {
  //   console.log("useMemo 2 ...");
  //   return cards.map((card, index) => (
  //     <div key={index}>
  //       <Card
  //         image={card.image}
  //         price={card.price}
  //         product={card.product}
  //         setItemsPurchased={setItemsPurchased}
  //       />
  //     </div>
  //   ));
  // }, []);

  //not efficient needs to be replaced by the codes above
  const renderedCards = () => {
    console.log("useMemo 2 ...");
    return cards.map((card, index) => (
      <div key={index}>
        <Card
          image={card.image}
          price={card.price}
          product={card.product}
          setItemsPurchased={setItemsPurchased}
        />
      </div>
    ));
  };

  return (
    <>
      <div className="flex">
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-4 p-4">{renderedCards()}</div>
        </div>
        <div className="w-1/4 text-xl font-bold p-4 bg-gray-50 shadow-lg rounded-lg overflow-hidden m-4">
          <span className="">Total Price: {totalPrice}</span>
        </div>
      </div>
    </>
  );
};

export default UseMemoComponent;
