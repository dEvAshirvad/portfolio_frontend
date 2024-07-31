import AboutSection from "@/components/about-section";
import FAQ from "@/components/faq-section";
import Sections from "@/components/sections";
import SkillSection from "@/components/skills-section";
import Image from "next/image";

interface Work {
  title: string;
  year?: string;
  href?: string;
}

interface Section {
  type: "section";
  title: string;
  works: Work[];
}

interface AboutSection {
  type: "about";
  title: string;
  content: string;
}

interface SkillsSection {
  type: "skills";
  title: string;
  skills: Record<string, string[]>;
}

interface FAQSection {
  type: "faq";
  title: string;
  faqs: {
    title: string;
    answer: string;
  }[];
}

interface HomeLayout {
  works: Section;
  projects_and_research: Section;
  about: AboutSection;
  blogs: Section;
  skills: SkillsSection;
  faq: FAQSection;
}

interface Home {
  layout: HomeLayout;
}

const home: Home = {
  layout: {
    works: {
      type: "section",
      title: "Featured Work",
      works: [
        {
          title: "SVIITCH RAW",
          year: "JUN 2024"
        },
        {
          title: "Bull Trendz Academy",
          year: "DEC 2023"
        },
        {
          title: "tasQ",
          year: "APR 2023"
        },
      ]
    },
    projects_and_research: {
      type: "section",
      title: "Recent Projects & Research",
      works: [
        {
          title: "Depression Management Project NITRR",
          year: "JUN 2024"
        },
        {
          title: "Active Recall Based Recommendation Engine",
          year: "APR 2024"
        },
      ]
    },
    about: {
      type: "about",
      title: "About",
      content: "Collaborating with visionaries to design adaptive, user-centered experiences and brands. I specialize in product design, prototyping, and full-stack development, with a particular focus on backend systems and machine learning applications. My work is driven by a blend of technical expertise and a commitment to understanding and evolving alongside your goals. Alongside my core skills, I’m passionate about continuous learning in business analysis, which helps me offer well-rounded support for your innovative projects."
    },
    skills: {
      type: "skills",
      title: "Skills",
      skills: {
        languages: ["Javascript", "Python", "Java", "SQL", "NO-SQL"],
        libraries: ["React.js", "Express", "Hono", "Pandas", "Numpy", "Scikit-Learn", "Matplotlib", "Next.js"],
        tools: ["Figma", "Excel", "PowerPoint", "ChatGPT", "Visual Studio Code", "AWS", "Vercel"],
        softSkills: ["Communication", "Rapport Building", "Product Planning", "Task Management", "Stakeholder Communication"]
      }
    },
    blogs: {
      type: "section",
      title: "Recent Blogs",
      works: [
        {
          title: "How Internet Works?",
        },
        {
          title: "What is Recommendation Engine?",
        },
      ]
    },
    faq: {
      type: "faq",
      title: "Frequently Asked Questions",
      faqs: [
        {
          title: "Can you describe a challenging project you worked on and how you handled it?",
          answer: "One of the challenging projects I worked on was developing a recommendation engine for a client. The project involved complex data processing and integration with the existing system. I handled it by breaking down the tasks, ensuring clear communication with the client, and using agile methodologies to iterate and improve the solution continuously."
        },
        {
          title: "How do you ensure the scalability and performance of your applications?",
          answer: "I ensure scalability and performance by following best practices such as optimizing database queries, using efficient algorithms, implementing caching strategies, and employing load balancing. Additionally, I regularly conduct performance testing and monitoring to identify and address potential bottlenecks."
        },
        {
          title: "What is your experience with cloud services?",
          answer: "I have experience using AWS for deploying and managing applications. I have worked with various AWS services such as EC2, S3, RDS, and Lambda to build scalable and reliable cloud-based solutions."
        },
        {
          title: "How do you approach learning new technologies?",
          answer: "I approach learning new technologies with curiosity and dedication. I regularly participate in online courses, attend webinars, and read industry blogs. I also enjoy working on side projects to apply and reinforce my knowledge. Currently, I am focusing on learning data analysis techniques and tools like Python, SQL, and Tableau."
        },
        {
          title: "Can you tell us about your experience with client projects?",
          answer: "As a fresher, I have worked on a few client projects, which have provided me with valuable experience in understanding client requirements, managing timelines, and delivering quality solutions. These projects have ranged from developing web applications to implementing backend systems, and they have helped me develop strong problem-solving and communication skills."
        },
        {
          title: "How do you collaborate with team members and clients?",
          answer: "I prioritize clear and consistent communication, whether through regular meetings, detailed documentation, or collaborative tools like Slack and Trello. I believe in actively listening to team members and clients to understand their needs and provide effective solutions. My goal is to foster a collaborative environment where everyone's input is valued."
        }
      ]
    }
  }
}


export default function Home() {
  return (
    <div className="pb-32">
      <div className="py-20 h-screen flex md:flex-col flex-col-reverse md:justify-between justify-end gap-20 md:gap-0">
        <div className="hidden md:block container">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
            <h1 className="col-start-4 col-span-2 text-8xl">ASHIRVAD</h1>
            <h1 className="col-start-2 col-span-2 text-8xl">SATAPATHY</h1>
          </div>
        </div>
        <div className="container">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
            <p className="col-start-4 font-thin text-xs text-muted-foreground leading-snug tracking-wide">
              Partnering with visionaries to craft tailored, adaptive solutions that turn bold ideas into cutting-edge tech realities.
            </p>
          </div>
        </div>
        <div className="container grid md:grid-cols-5 grid-cols-1 gap-5">
          <div className="md:col-span-3 md:mb-20 mt-10">
            <p className="mb-5 md:hidden">Hello World 👋 I am Ashirvad Satapathy</p>
            <h1 className="font-medium  text-3xl text-muted-foreground leading-snug tracking-wide">Helping founders to build impactful, empathic product experiences</h1>
          </div>
        </div>
      </div>
      {
        Object.values(home.layout).map((layout, index) => {
          if (layout.type === "section") {
            return <Sections key={index} index={index + 1} lists={layout.works} title={layout.title} />
          }
          if (layout.type === "about") {
            return <AboutSection key={index} index={index + 1} title={layout.title} content={layout.content} />
          }
          if (layout.type === "skills") {
            return <SkillSection key={index} index={index + 1} title={layout.title} skills={layout.skills} />
          }
          if (layout.type === "faq") {
            return <FAQ key={index} index={index + 1} title={layout.title} faqs={layout.faqs} />
          }
        })
      }
      <div className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
            <h1 className="md:col-start-4 md:col-span-2 md:text-6xl text-3xl">
              Contact
            </h1>

            <h2 className="uppercase md:text-8xl text-4xl md:col-span-4 md:mt-20 mt-10">
              Let's Collaborate to make vision into reality.
            </h2>

            <ul className="md:grid md:grid-cols-5 grid-cols-1 md:mt-20 mt-10 gap-5 gap-y-0 md:col-span-5 row-start-3">
              <li className="py-4 col-span-2 border-b border-dashed flex justify-between">
                <p>Email</p>
                <p>hi@devashirvad.co.in</p>
              </li>
              <li className="py-4 col-span-2 col-start-4 border-b border-dashed flex justify-between">
                <p>Github</p>
                <p>dEvAshirvad</p>
              </li>
              <li className="py-4 col-span-2  border-b border-dashed flex justify-between">
                <p>Instagram</p>
                <p>@helloJicky</p>
              </li>
              <li className="py-4 col-span-2 col-start-4  border-b border-dashed flex justify-between">
                <p>LinkedIn</p>
                <p>Ashirvad Satapathy</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
