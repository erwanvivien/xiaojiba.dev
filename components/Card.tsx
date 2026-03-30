import Link from "next/link";
import styles from "../styles/Home.module.css";
import type { Website } from "../pages/websites";

const Card: React.FC<Website> = ({ className, desc, title, link }) => (
  <Link href={link} className={[styles.card, styles[className]].join(" ")}>
    <h2>{title}</h2>
    <p>{desc}</p>
  </Link>
);

export default Card;
