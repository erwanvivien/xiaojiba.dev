export type Website = {
  link: string;
  title: string;
  desc: string;
  className: string;
};

export const websites: Website[] = [
  {
    link: "https://maison-bundle.com",
    title: "🏠 Maison Bundle →",
    desc: "The collection of french DIY ebooks, website fully custom built by me.",
    className: "maison_bundle",
  },
  {
    link: "https://moonvas.com",
    title: "🌕 Moonvas →",
    desc: "Your Creative Orbit. A platform to explore and build ideas collaboratively.",
    className: "moonvas",
  },
  {
    link: "https://featguessr.com",
    title: "🌍 FeatGuessr →",
    desc: "An artist matching mini-game, link artists via intermediate collaborations.",
    className: "featguessr",
  },
  {
    link: "https://sam.xiaojiba.dev",
    title: "Social Account Manager",
    desc: "Removes social account management context-switch friction",
    className: "social_account_manager",
  },
];
