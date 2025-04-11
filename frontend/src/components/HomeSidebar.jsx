// Sidebar.jsx
import { CreditCard, Home, LayoutDashboard, Package, ShoppingCart } from "lucide-react";
import React, { useState } from "react";

const HomeSidebar = () => {
  const [activePopup, setActivePopup] = useState(null);

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, popup: ["Analysis", "CRM", "Contact", "Settings"] },
    { name: "Appearance", icon: <LayoutDashboard size={20} />, popup: ["Themes", "Pages"] },
    { name: "Orders", icon: <ShoppingCart size={20} />, popup: ["View Orders", "Track"] },
    { name: "Product", icon: <Package size={20} />, popup: ["Categories", "Tags", "Attribute", "Coupons", "Review"] },
    { name: "Payment", icon: <CreditCard size={20} />, popup: ["Integration", "Dashboard", "Taxes"] },
  ];

  const togglePopup = (itemName) => {
    setActivePopup(activePopup === itemName ? null : itemName);
  };

  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg">
      <h1 className="text-2xl font-bold text-center py-6 border-b border-gray-700">
        My Sidebar
      </h1>
      <nav className="flex flex-col gap-2 px-4 mt-4">
        {menuItems.map((item) => (
          <div key={item.name} className="flex flex-col">
            <button
              onClick={() => item.popup && togglePopup(item.name)}
              className="flex items-center gap-3 px-4 py-2 w-full rounded-lg hover:bg-gray-800 transition"
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </button>
            {item.popup && activePopup === item.name && (
              <div className="bg-gray-800 text-white rounded-md ml-6 mt-1 flex flex-col gap-1">
                {item.popup.map((opt) => (
                  <button key={opt} className="text-left hover:bg-gray-700 px-4 py-1 rounded text-sm">
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default HomeSidebar;
