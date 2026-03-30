import Link from "next/link";
import type { Website } from "../app/websites";
import stylesheet from "./Card.module.css";

export const Card: React.FC<Website> = ({ className, desc, title, link }) => (
  <Link
    href={link}
    className={[stylesheet.card, stylesheet[className]].join(" ")}
  >
    <h2>{title}</h2>
    <p>{desc}</p>
  </Link>
);
