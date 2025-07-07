import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Plants Store",
    description:
      "An e-commerce platform for plant enthusiasts specializing in indoor and outdoor plants.",
    image: "/projects/project1.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Router Dom",
      "React Slick",
    ],
    demoUrl: "https://mustafabarakat633.github.io/plants-store/",
    githubUrl: "https://github.com/MustafaBarakat633/plants-store",
  },
  {
    id: 2,
    title: "React Context Shopping cart",
    description: "An e-commerce shopping cart using React Context.",
    image: "/projects/project2.png",
    tags: ["React", "React Context", "Taiwind CSS"],
    demoUrl: "https://mustafabarakat633.github.io/react-context_shopping-cart/",
    githubUrl:
      "https://github.com/MustafaBarakat633/react-context_shopping-cart/",
  },
  {
    id: 3,
    title: "Memberbase Project",
    description: "A landing page for design resources website.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "Animate On Scroll Library"],
    demoUrl: "https://mustafabarakat633.github.io/memberbase-project/",
    githubUrl: "https://github.com/MustafaBarakat633/memberbase-project",
  },
  {
    id: 4,
    title: "Elzero Template 3",
    description: "The React implementation of Elzero Template 3",
    image: "/projects/project4.png",
    tags: ["React", "Styled Components", "FontAwesome"],
    demoUrl: "https://mustafabarakat633.github.io/Elzero-Template-3/",
    githubUrl: "https://github.com/MustafaBarakat633/Elzero-Template-3",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A Weather application built with React that displays current weather conditions for any city.",
    image: "/projects/project5.png",
    tags: ["React", "API Inegration"],
    demoUrl: "https://mustafabarakat633.github.io/weather-app/",
    githubUrl: "https://github.com/MustafaBarakat633/weather-app/",
  },
  {
    id: 6,
    title: "Responsive Log in",
    description:
      "A fully responsive login page with modern UI design, adapting seamlessly to mobile, tablet, and desktop screens.",
    image: "/projects/project6.png",
    tags: ["HTML", "CSS", "Remix Icon"],
    demoUrl: "https://mustafabarakat633.github.io/pink-login/",
    githubUrl: "https://github.com/MustafaBarakat633/pink-login/",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
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
            href="https://github.com/MustafaBarakat633"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
