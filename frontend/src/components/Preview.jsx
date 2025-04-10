import React from "react";

function Preview() {
  const section_list = [
    {
      name: "Header",
      code: (
        <header className="flex w-full justify-between items-center p-3">
          <h1 className="font-bold">Admin</h1>
          <nav className="flex gap-5">
            <ul className="flex gap-3 items-center">
              <li>Shop</li>
              <li>Cart</li>
              <li>About us</li>
            </ul>
            <button className="bg-amber-200 py-2 px-3 rounded-sm">Login</button>
          </nav>
        </header>
      ),
    },
    {
      name: "Hero",
      code: (
        <main
          style={{
            backgroundImage: `url(https://i.pinimg.com/736x/0a/d5/16/0ad516d7ee2277fab0a7c37aecab1cb8.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="text-white flex justify-center items-center p-10 "
        >
          <div className="container flex justify-between items-center">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold">Fresh Grocery at door step</h1>
              <h3 className="text-2xl">
                We deliver fresh groceries to your doorstep
              </h3>
              <button className="bg-purple-900 py-2 px-3 rounded-sm w-fit">
                Order now
              </button>
            </div>
            <img
              src="https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-cartoon-happy-school-boy-waving-hand-png-image_4691658.png"
              alt=""
            />
          </div>
        </main>
      ),
    },
    
  ];
  return (
    <div className="p-5 w-full bg-stone-100 max-[400px]:w-full">
      <h2 className="text-2xl font-bold mb-3">Preview</h2>
      <div id="sections-preview" className="w-full bg-white rounded-xl p-2">
        {section_list.map((section, index) => (
          <React.Fragment key={index}>
            <div>
              <p className="text-sm text-gray-400">{section.name}</p>
              <div className="border-1 overflow-hidden border-dashed rounded-xl">
                {section.code}
              </div>
            </div>
            {index !== section_list.length - 1 && (
              <p className="mx-auto text-white bg-[#c6c6c6] w-fit mt-2 p-1 rounded-lg cursor-pointer">
                <img src="/plus.svg" alt="" />
              </p>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Preview;
