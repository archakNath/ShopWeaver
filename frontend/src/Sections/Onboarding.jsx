import { Button } from "@/components/ui/button";
import React from "react";

const tasks = [
  {
    title: "Add your first product",
    description:
      "Write a description, add photos, and set pricing for the products you plan to sell.",
    action: <Button className="bg-black text-white">Add product</Button>,
    secondary: <span className="ml-2 text-sm underline cursor-pointer">Import products</span>,
  },
  {
    title: "Design your online store in seconds",
  },
  {
    title: "Name your store",
  },
  {
    title: "Pick a plan",
  },
  {
    title: "Confirm your shipping rates",
  },
  {
    title: "Place a test order",
  },
];

const Onboarding = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-black text-white px-4 py-2 rounded mb-6 flex justify-between items-center">
        <span>Select a plan to get 3 months for ₹20/month</span>
        <Button variant="ghost" className="text-white border border-white px-4 py-1">Select a plan</Button>
      </div>

      <h2 className="text-2xl font-semibold mb-1">Get ready to sell</h2>
      <p className="text-sm text-gray-600 mb-4">
        Here’s a guide to get started. As your business grows, you’ll get fresh tips and insights here.
      </p>

      <div className="bg-white border rounded-lg shadow p-4">
        <p className="font-medium mb-2">0 of 6 tasks complete</p>
        <h3 className="text-lg font-semibold mb-4">Setup guide</h3>
        <p className="text-sm text-blue-600 mb-4">Use this personalized guide to get your store up and running.</p>

        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-start gap-2 py-3 border-t first:border-t-0"
          >
            <div className="w-5 h-5 border-2 border-dashed rounded-full mt-1"></div>
            <div>
              <p className="font-medium text-sm">{task.title}</p>
              {task.description && (
                <p className="text-sm text-gray-600 mb-2">{task.description}</p>
              )}
              {task.action && task.action}
              {task.secondary && task.secondary}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;
