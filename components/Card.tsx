import Link from "next/link";
import styles from "../styles/Home.module.css";

type CardProps = {
  title: string;
  desc: string;
  link: string;
  className: string;
};

const Card: React.FC<CardProps> = ({ className, desc, title, link }) => (
  <Link href={link} className={[styles.card, styles[className]].join(" ")}>
    <h2>{title}</h2>
    <p>{desc}</p>
  </Link>
);

export type { CardProps };
export default Card;
