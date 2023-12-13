import Head from "next/head";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import Entrar from "../../componentes/Entrar"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title> Football </title>
      </Head>
      <Cabecalho />
      <div className={styles.home}>
        <h1> Football</h1>
        <main>
          <p> Nosso site foi projetado para fornecer informações sobre Futebol para deficientes visuais. Aproveite!</p>
        </main>
        <div className={styles.Entrar}>
        <Entrar />
        </div>
      </div>
      <Rodape />
    </div>
  )
}