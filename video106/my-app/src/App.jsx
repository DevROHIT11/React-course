// APP.jsx is an entry point to the website like index.html is
// index.css is an css applied to whole page which is now cleared by me

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cards from "./components/cards";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards-container">
        <Cards title="Card 1" description="Card 1 description" />

        <Cards title="Card 2" description="Card 2 description" />

        <Cards title="Card 3" description="Card 3 description" />

        <Cards title="Card 4" description="Card 4 description" />
      </div>

      <Footer />
    </>
  );
}

export default App;
