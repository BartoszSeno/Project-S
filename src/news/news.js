import Header from "../components/Header/header.js";
import Footer from "../components/footer/footer.js";
import Mainthree from "../context/meinthree.js";
import NewsBoxOne from "./context/newmeinone.js";

function News() {
  return (
    <>
      <Header />
      <Mainthree />
      <NewsBoxOne />
      <Footer />
    </>
  );
}
export default News;
