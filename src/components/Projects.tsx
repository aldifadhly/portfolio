export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern web application built with Next.js and TypeScript.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/images/project1.jpg',
    },
    {
      title: 'Project 2',
      description: 'Full-stack application with real-time features.',
      tech: ['React', 'Node.js', 'Socket.IO'],
      image: '/images/project2.jpg',
    },
    {
      title: 'Project 3',
      description: 'E-commerce platform with seamless payment integration.',
      tech: ['Next.js', 'Stripe', 'MongoDB'],
      image: '/images/project3.jpg',
    },
  ];

  return (
    <section id="projects" className="section bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-colors duration-300"
            >
              <div className="aspect-video bg-gray-900"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}