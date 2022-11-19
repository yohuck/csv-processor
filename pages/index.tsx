import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Processor } from "../components/Processor";

type ProcessorProps = {
  removeHeader?: boolean;
};

type HomeProps = {
  children: React.ReactNode;
};

export const Home = () => {
  return (
    <div className="wrapper">
      <Processor />
    </div>
  );
};
