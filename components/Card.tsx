import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

type CardProps = {
  title: string;
  desc: string;
  link: string;
  className: string;
};

const Card: NextPage<CardProps> = ({ className, desc, title, link }) => (
  <Link href={link}>
    <a className={[styles.card, styles[className]].join(" ")}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </a>
  </Link>
);

export default Card;
