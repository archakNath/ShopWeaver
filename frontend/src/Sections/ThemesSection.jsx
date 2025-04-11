import React from "react";

const ThemesSection = () => {
  const themes = [
    {
      name: "Theme 1",
      image:
        "https://i.pinimg.com/736x/bd/cb/59/bdcb59330b04884ed3a141d517443c39.jpg",
    },
    {
      name: "Theme 2",
      image:
        "https://i.pinimg.com/736x/fc/4f/be/fc4fbed4b39884a6419d8001f9d812c7.jpg",
    },
    {
      name: "Theme 3",
      image:
        "https://i.pinimg.com/736x/f8/65/0d/f8650d4b05f9bd102e2e8f82b96d7463.jpg",
    },
    {
      name: "Theme 4",
      image:
        "https://i.pinimg.com/736x/3a/d0/28/3ad028b91edd78b6964f60046ab7741b.jpg",
    },
    {
      name: "Theme 5",
      image:
        "https://i.pinimg.com/736x/3d/74/ed/3d74eda228415efdc8bddafc0791aace.jpg",
    },
    {
      name: "Theme 6",
      image:
        "https://i.pinimg.com/736x/48/d9/07/48d907762f12822cd675a252ed5eb911.jpg",
    },
  ];

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl mb-3">Current theme</h1>
      <div className="rounded-xl overflow-hidden bg-white shadow-lg">
        <img
          className="w-full h-[60vh] object-cover"
          src="https://i.pinimg.com/736x/b7/9d/cc/b79dcc004d7918b24e6d5d744afa3d72.jpg"
          alt="Current theme preview"
        />
        <div className="p-4">
          <h3 className="font-bold text-2xl mb-3">Theme name</h3>
          <button className="bg-amber-200 font-medium py-2 px-3 rounded-sm cursor-pointer">
            Customize
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-xl overflow-hidden bg-white shadow-lg p-4">
        <p className="font-medium text-xl mb-3">Theme library</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="flex flex-col space-x-3 p-3 border border-gray-200 rounded-md"
            >
              <img
                className="w-full h-[300px] object-cover rounded"
                src={theme.image}
                alt={`${theme.name} preview`}
              />
              <div className="flex justify-between mt-3 ">
                <p className="font-medium">{theme.name}</p>
                <button className="bg-amber-200 font-medium py-2 px-3 rounded-sm cursor-pointer">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemesSection;
