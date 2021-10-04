import React from "react";

const CartComponents = (props) => {
  const { cartitems, remove } = props;

  return (
    <div class="w-screen max-w-md">
      <div class="h-full flex flex-col bg-white shadow-xl ">
        <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
          <div class="flex items-start justify-between">
            <div class="ml-3 h-7 flex items-center"></div>
          </div>
          <div>{cartitems.length === 0 && <div>CART IS EMPTY </div>}</div>
          <div class="mt-8">
            <div class="flow-root">
              <ul role="list" class="-my-6 divide-y divide-gray-200">
                {cartitems.map((items) => (
                  <li class="py-6 flex">
                    <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={items.image}
                        class="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div class="ml-4 flex-1 flex flex-col">
                      <div>
                        <div class="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{items.name}</a>
                          </h3>
                          <p class="ml-4">BDT-{items.price}</p>
                        </div>
                      </div>
                      <div class="flex-1 flex items-end justify-between text-sm">
                        <div class="flex">
                          <button
                            onClick={() => remove(items)}
                            type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponents;
