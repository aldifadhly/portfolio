export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hello, I&apos;m
            <span className="text-gray-400"> Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Full Stack Developer | Designer | Creator
          </p>
          <a
            href="#projects"
            className="hover-underline text-lg font-semibold px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}