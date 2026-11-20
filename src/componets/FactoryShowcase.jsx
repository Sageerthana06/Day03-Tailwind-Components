function FactoryShowcase() {
  return (
    <section className="bg-white min-h-[450px] px-8 md:px-20 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Logo */}
        <div className="flex justify-center items-center">
          <div className="w-44 h-44 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-8xl font-bold">b</span>
          </div>
        </div>

        {/* Factory Image */}
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900"
            alt="Industrial manufacturing factory"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default FactoryShowcase;
