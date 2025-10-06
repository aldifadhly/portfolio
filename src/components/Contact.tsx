export default function Contact() {
  return (
    <section id="contact" className="section bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-transparent border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 text-lg font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}