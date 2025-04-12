import React from "react";

const AnalyticsSection = () => {
  const metrics = [
    { title: "Total Revenue", value: "$56,800", trend: "+12%" },
    { title: "Active Users", value: "8,245", trend: "+5.4%" },
    { title: "New Signups", value: "1,024", trend: "+8.1%" },
    { title: "Bounce Rate", value: "23%", trend: "-3.7%" },
  ];

  const barData = [60, 80, 45, 70, 50, 90, 40];

  return (
    <div className="p-6 sm:p-10 bg-white text-black min-h-screen font-sans">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Analytics Dashboard</h2>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gray-100 p-5 rounded-2xl shadow hover:shadow-md transition duration-300"
          >
            <p className="text-gray-500 text-sm mb-2">{metric.title}</p>
            <h3 className="text-xl font-semibold text-black">{metric.value}</h3>
            <p
              className={`text-sm mt-1 ${
                metric.trend.includes("-") ? "text-red-500" : "text-green-600"
              }`}
            >
              {metric.trend} from last week
            </p>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-gray-100 p-6 rounded-2xl shadow mb-10">
        <h4 className="text-lg font-medium mb-4">Weekly Sales Overview</h4>
        <div className="flex items-end justify-between h-40 w-full gap-2">
          {barData.map((value, index) => (
            <div
              key={index}
              className="bg-black/80 rounded-t-xl transition-all duration-300 hover:bg-black"
              style={{
                width: "12%",
                height: `${value}%`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-3 text-sm text-gray-500">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <span key={i} className="w-12 text-center">
              {day}
            </span>
          ))}
        </div>
      </div>

      {/* Circular Gauge */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h4 className="text-lg font-medium mb-4">System Performance</h4>
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                className="text-green-600"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 25.6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <text
                x="18"
                y="20.35"
                className="text-sm fill-black text-center"
                alignmentBaseline="middle"
                textAnchor="middle"
              >
                80%
              </text>
            </svg>
          </div>
        </div>

        {/* Text Insight Section */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h4 className="text-lg font-medium mb-2">Quick Insight</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            User engagement has increased over the past week, driven by a new email campaign
            and targeted ads. System performance is optimal, with no major latency spikes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
