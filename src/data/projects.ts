export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Sangnet",
    techs: ["ReactJS (NextJS)", "Django Rest Framework"],
    link: "https://github.com/sayakongit/sangnet",
  },
  {
    title: "Meals wiki",
    techs: ["VueJs", "TypeScript"],
    link: "https://github.com/sayakongit/meals-wiki",
  },
  {
    title: "Naukri finder",
    techs: ["Python", "Django"],
    link: "https://github.com/sayakongit/naukri-search-django",
  },
];

export default projects;
