
export const name = "Աննա"
export const day = "24"
export const month = "Օգոստոս"

export const dateTimeBox: any = new Date("2026-08-24T16:30:00");

export const txt1Title = "ՍԻՐԵԼԻՆԵՐՍ";

export const txt1 =
  "Սիրով հրավիրում  ենք Ձեզ ներկա գտնվելու Աննայի Սուրբ մկրտության արարողությանը";

export const txt3 = "Մասնակցության\n մասին\n Խնդրում ենք \nտեղեկացնել \nմինչև\nՕգոստոսի 1-ը";
export const txt4 = "Սիրով կսպասեմ բոլորիդ";

export const program: any = [
  {
    time: "16:30",
    title: "Եկեղեցի",
    subt:'Գեղարդի վանք',
    address: "Գեղարդի վանք",
  },
  {
    time: "18:00",
    title: "Ռեստորան",
    subt:'Կոնտինենտալ ռեստորան ',
    address: "Continental restaurant",
  },
];

export const anim: any = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
  viewport: { once: true },
};

