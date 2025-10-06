export default function About() {
  return (
    <section id="about" className="section bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-6">
            I&apos;m a passionate developer focused on creating beautiful and functional web experiences.
            With expertise in modern web technologies, I bring ideas to life through clean code and
            intuitive design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <p className="text-gray-400">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="text-center p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <p className="text-gray-400">Node.js, Express, MongoDB</p>
            </div>
            <div className="text-center p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <p className="text-gray-400">Git, VS Code, Figma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}