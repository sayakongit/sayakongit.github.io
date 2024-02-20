type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "sayaksaha.107@gmail.com",
  title: "Hi, I’m Sayak 👋",
  // profile: "/profile.webp",
  description:
    "Namaste, I am a *full-time software developer* currently working in *Tata Consultancy Services*. I have worked as an intern with *IIT Bombay*, *Hunar.ai* + *7 start-ups*. I majorly work as a full stack developer with Python and JavaScript based framweworks. Currently learning *TypeScript* and *Playwright*.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/10_sayak",
    },
    {
      label: "Github",
      link: "https://github.com/sayakongit",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/sayaksaha10",
    },
    {
      label: "Bento",
      link: "https://bento.me/sayaksaha",
    }
    // {
    //   label: "Hashnode",
    //   link: "https://sayak.hashnode.dev",
    // },
  ],
};

export default presentation;
