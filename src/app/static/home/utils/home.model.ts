import { MenuItem } from "primeng/api";
import { Project } from "src/shared/utilities/interfaces";

export const ResponsiveOptions: any[] = [
  {
    breakpoint: "1024px",
    numVisible: 5,
  },
  {
    breakpoint: "768px",
    numVisible: 3,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
  },
];

export const SocialButtons: MenuItem[] = [
  {
    icon: "pi pi-home",
    command: () => {
      window.open("https://www.linkedin.com/in/mohamed-eldeeb-94a3b11a4/");
    },
  },
  {
    icon: "pi pi-send",
    command: () => {
      window.open("http://m.me/MohamedXEldeeb");
    },
  },
  {
    icon: "pi pi-google",
    command: () => {
      window.open("mailto:mohamed.eldeib5@gmail.com");
    },
  },
  {
    icon: "pi pi-phone",
    command: () => {
      window.open("https://wa.me/+201033898113");
    },
  },
  {
    icon: "pi pi-github",
    command: () => {
      window.open("https://github.com/M-Hamo", "_blank");
    },
  },
];

export const Projects: Project[] = [
  {
    title: "Claro Eg",
    img: "assets/projects/Claro Eg/promo.png",
    details:
      "Claro Eg is a website for buying, selling and marketing real estate in Egypt and the Middle East.",
  },
  {
    title: "Hatly Wadely",
    img: "assets/projects/Hatly Wadely/promo.png",
    details:
      "Hatly wadely is a Delivery service and market site for selling products and delivering orders to homes.",
  },
  {
    title: "Academic archive",
    img: "assets/projects/Academic archive/promo.png",
    details: "Academic archive is a website for archiving files on server storage.",
  },
];
