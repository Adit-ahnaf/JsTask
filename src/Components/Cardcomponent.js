import React  from "react";

const Cardcomponent = (props) => {
  const { items, cartitems, setCartitems } = props;
  const AddtoCart = (item) => {
    const exist = cartitems.find((x) => x.id === item.id);
    if (exist) {
      setCartitems(
        cartitems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartitems([...cartitems, { ...item, qty: 1 }]);
    }
  };
  return (
    <div class=" m-5">
      <div class="grid grid-rows-3 grid-flow-col  gap-4">
        {items.map((item) => (
          <div
            onClick={() => AddtoCart(item)}
            class="flex flex-col h-min w-56 p-1 border-box bg-white rounded xl  mx-4 container max-width: 768px shadow-lg ... text-justify font-mono"
          >
            <div class="flex rounded flex-col w-ful w-full h-48 bg-gray-200">
              <img
                class="w-full bg-cover object-cover h-48 w-full "
                src={item.image}
              />
            </div>
            <div class="flex border-box p-1 flex-col">
              <p>{item.name}</p>
              <div className="grid grid-cols-2 gap-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardcomponent;
