import Button from "./Button.jsx";
import DashboardCards from "./DashboardCards.jsx";

function Hero() {
  return (
    <section className="min-h-screen bg-[#f1f5f5] px-5 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          The Future of Manufacturing
          <br />
          with <span className="text-[#064e4b]">Latest Technology</span>
        </h1>

        <p className="text-gray-600 mt-5 text-base">
          Expert tech to elevate your manufacturing. Let's take your business
          further.
        </p>

        <div className="flex justify-center gap-4 mt-7">
          <Button>Get Started</Button>
          <Button variant="outline">Try Demo</Button>
        </div>

        <div className="mt-8">
          <div className="text-yellow-500 text-xl tracking-wider">★★★★★</div>
          <p className="text-gray-700 text-sm font-semibold mt-1">5.0</p>
          <p className="text-gray-500 text-xs mt-1">from 80+ reviews</p>
        </div>
      </div>

      <DashboardCards />
    </section>
  );
}

export default Hero;
