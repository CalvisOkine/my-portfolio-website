import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Calvis",
  lastName: "Okine",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Cybersecurity Officer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Accra", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Every now and then, I dive into security, geek out on tech, 
      and spill whatever’s on my mind because why keep all the fun to myself? 😎🔐🚀
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/CalvisOkine",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/calvisokine/",
  },
/*   {
    name: "X",
    icon: "x",
    link: "",
  }, */
  {
    name: "Email",
    icon: "email",
    link: "mailto:calvisokine@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <> Anything Security </>,
  subline: (
    <>
      I'm Calvis, fueled by a passion for <InlineCode>cybersecurity</InlineCode>, whether  
      <br /> it’s locking things down with governance and standards or diving deep into the technical side.
       Always curious, always learning, because there’s always something new to secure! 🚀🔐
    </>
  ),
};

const about = {
  label: "WHOAMI",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/calvis-okine",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Calvis Okine is a cybersecurity enthusiast who thrives on turning complex security challenges 
        into clear, effective solutions. His work bridges governance, technical expertise, and the 
        ever-evolving intersection of security and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IT Governance & Standard Consults",
        timeframe: "June 2024 - Present",
        role: "Cybersecurity Officer",
        achievements: [
          <>Participated in training sessions to enhance cybersecurity skills and industry knowledge.</>,
          <>Contributed to the development of an Information Security Management System (ISMS) implementation project plan.</>,
        ],
        images: [],
      },
      {
        company: "Newmont Corporation",
        timeframe: "Oct 2023 - Dec 2023",
        role: "Inventory Optimization Officer",
        achievements: [
          <>Conducted detailed stock counts and collaborated with contract leads.</>,
          <>Mastered the binning system using printed labels and QR codes for efficient item location.</>,
          <>Enhanced inventory accuracy, reduced costs, and optimized business processes.</>,
        ],
        images: [],
      },
      {
        company: "Newmont Corporation",
        timeframe: "Jan 2023 - Sept 2023",
        role: "National Service Person",
        achievements: [
          <>Assisted in managing user requests and ensuring timely service delivery.</>,
          <>Supported planning and maintenance of technology inventory and assets using ServiceNow.</>,
          <>Helped diagnose technology issues across hardware, network, and software systems.</>,
        ],
        images: [],
      },
      {
        company: "Dimension Data GH",
        timeframe: "Nov 2021 - Jan 2022",
        role: "Intern",
        achievements: [
          <>Gained proficiency in fiber optics, server maintenance, and network diagramming.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Ghana Communication Technology University",
        description: <>Bachelor of Science in Information Technology (2018 - 2023)</>,
      },
      {
        name: "Adisadel College",
        description: <>Studied Business with electives in Cost Accounting, Financial Accounting, Business Management, and Economics.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Microsoft 365",
        description: <>Proficient in Microsoft 365 tools for productivity and collaboration.</>,
        images: [],
      },
      {
        title: "ServiceNow",
        description: <>Experience in IT service management and asset tracking using ServiceNow.</>,
        images: [],
      },
      {
        title: "ISMS",
        description: <>Knowledgeable in Information Security Management Systems implementation.</>,
        images: [],
      },
      {
        title: "Technical Support",
        description: <>Diagnosing hardware, software, and network issues.</>,
        images: [],
      },
       
    ],
  }
};

const blog = {
  label: "My Thoughts",
  title: "Random Brain Dumps – Because Gatekeeping is Boring! 😎🔐🚀",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Cyber Quests",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery};
