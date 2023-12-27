import Head from "next/head";
import Header from "./components/Header";
import Home from "./components/Home";
import Numbers from "./components/NumbersList";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Index() {
  //Deixa lento a rolagem da pagina até o link clicado
  const handleClickLinks = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Rifa Online</title>
        <meta name="description" content="Desafio técnico UEEK" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      </Head>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&family=Nunito:wght@200;300;400;500&family=Rubik:wght@300&display=swap');
      `}</style>

      <div className="homePage">
        <Header handleClickLinks={handleClickLinks} />
        <Home handleClickLinks={handleClickLinks} />
        <Numbers handleClickLinks={handleClickLinks} /> <About />
        <Footer handleClickLinks={handleClickLinks} />
      </div>
    </>
  );
}
