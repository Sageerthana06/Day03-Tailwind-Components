function DashboardCards() {
  return (
    <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {/* Factory Image Card */}

      {/* Card 1 - Workspace Image */}
      <div className="h-44 rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600"
          alt="Engineering workspace with technical documents"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Clients Card */}
      <div className="h-44 bg-[#064e4b] text-white rounded-2xl flex flex-col items-center justify-center text-center p-5">
        <h2 className="text-3xl font-bold">100+</h2>
        <p className="text-sm text-gray-200 mt-2">
          Our Esteemed Clients and Partners
        </p>
      </div>

      {/* Projects Card */}
      <div className="h-44 bg-white rounded-2xl shadow-sm p-5 flex flex-col justify-center">
        <p className="text-sm text-gray-600">Total Projects</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">1951+</h2>
        <p className="text-xs text-green-600 mt-2">
          Increase of 126 this month
        </p>
      </div>

      {/* Experience Card */}
      <div className="h-44 bg-[#d9ffb8] rounded-2xl flex flex-col items-center justify-center text-center p-5">
        <h2 className="text-3xl font-bold text-gray-900">6+</h2>
        <p className="text-sm text-gray-700 mt-2">Years of Dedicated Service</p>
      </div>

      {/* Productivity Card */}
      <div className="h-44 bg-[#063c38] text-white rounded-2xl p-5 flex flex-col justify-end">
        <div className="text-2xl mb-3">◎</div>
        <p className="text-sm leading-6">
          Achieve Optimal Efficiency and Boost Productivity
        </p>
      </div>
    </div>
  );
}

export default DashboardCards;
