export interface Work {
  title: string;
  year?: string;
  href?: string;
  image?: string;
  link?: string;
  description?: string;
  slug?: string;
  technologies?: string[];
  client?: string;
  budget?: string;
  duration?: string;
}

export const works: Work[] = [
  {
    title: "GreenWatch",
    image: "/greenwatch.png",
    link: "/project/greenwatch",
    description:
      "GreenWatch is an environmental monitoring platform developed for the District Administration, Dantewada, to support sustainability initiatives through digital tools for tracking energy consumption and carbon footprint. The platform aims to make environmental data more accessible and help users better understand the impact of their energy usage.\n\nBuilt to support environmental awareness and data-driven decision-making, GreenWatch brings sustainability monitoring into a centralized digital experience. The project focuses on making environmental information easier to access and manage, supporting the broader goal of encouraging responsible energy consumption and more sustainable practices.",
    slug: "greenwatch",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    client: "District Administration, Dantewada",
    budget: "₹ 32,76,847",
    duration: "8 months",
    year: "SEP 2026",
    href: "https://greenwatch.rdmp.in/",
  },
  {
    title: "Shrestha",
    image: "/shrestha.png",
    link: "/project/shrestha",
    description:
      "Shrestha is a digital platform developed for the District Administration, Raipur, with a focus on supporting administrative operations and improving the delivery of public services. The project brings digital technology into government workflows, helping create a more structured and accessible way to manage administrative activities.\n\nDesigned around the needs of public administration, the platform represents an effort to streamline digital processes and improve how information and services are managed. Shrestha reflects the role of modern web applications in helping government organizations build more efficient, organized, and citizen-oriented digital experiences.",
    slug: "shrestha",
    client: "District Administration, Raipur",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    budget: "₹ 8,57,000",
    duration: "6 months",
    href: "https://shresthv3.rdmp.in/",
    year: "May 2025",
  },
  {
    title: "Rahat",
    image: "/rahat.png",
    link: "/project/rahat",
    description:
      "Rahat is an RBC 6(4) Unwanted Death Case Management Portal developed for the District Administration, Raipur. It is designed to support the administrative handling of cases under the relevant provision, providing a dedicated digital platform for managing case-related information and workflows.\n\nThe project focuses on bringing greater structure and consistency to the case management process through a centralized web application. By digitizing aspects of administrative case handling, Rahat aims to support better information organization, case tracking, and coordination for officials involved in the process.",
    slug: "rahat",
    client: "District Administration, Raipur",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    budget: "₹ 6,43,000",
    duration: "3 months",
    href: "https://rahat.rdmp.in/",
    year: "April 2026",
  },
  {
    title: "Raipur Interdepartmental Portal",
    image: "/raipur-interdepartmental-portal.png",
    link: "/project/raipur-interdepartmental-portal",
    description:
      "The Raipur Interdepartmental Portal is a digital platform developed for the District Administration, Raipur, to support coordination and information sharing across government departments. It addresses the need for a centralized digital environment where interdepartmental information and administrative processes can be organized more effectively.\n\nBy providing a common platform for departmental coordination, the project aims to support more connected workflows and improve access to relevant information across administrative units. It represents an approach to modernizing government operations through web technology, with an emphasis on structured information management and improved institutional collaboration.",
    slug: "raipur-interdepartmental-portal",
    client: "District Administration, Raipur",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    budget: "₹ 2,43,000",
    duration: "3 months",
    href: "https://rid.rdmp.in/",
    year: "March 2026",
  },
];

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}

export function getNeighbors(slug: string) {
  const index = works.findIndex((work) => work.slug === slug);
  return {
    previous: index > 0 ? works[index - 1] : undefined,
    next: index >= 0 && index < works.length - 1 ? works[index + 1] : undefined,
  };
}
