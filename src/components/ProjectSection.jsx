import { ExternalLink, Github, ArrowRight } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description:
      "A modern SaaS landing page built with React and Tailwind CSS.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://react-landing-page-ten-theta.vercel.app/",
    githubUrl: "https://github.com/bhanuprudhvi/react-landing-page",
  },
  {
    id: 2,
    title: "3D Iphone Website",
    description:
      "A 3D interactive iPhone showcase website using React,Tailwind and Three.js.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind CSS", "Three.js"],
    demoUrl: "https://apple-website-ashy-xi.vercel.app/",
    githubUrl: "https://github.com/bhanuprudhvi/Apple-Website",
  },
  {
    id: 3,
    title: "Movie App",
    description:
      "A movie discovery app using React and The Movie Database API.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "API"],
    demoUrl: "https://tv-time-alpha.vercel.app/",
    githubUrl: "https://github.com/bhanuprudhvi/TV-Time",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in web
          development and design. Each project reflects my commitment to
          creating engaging and user-friendly digital experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/bhanuprudhvi"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
