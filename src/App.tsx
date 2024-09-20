import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Application from "./components/main/application/Application";
import Brands from "./components/main/brands/Brands";
import Categories from "./components/main/categories/Categories";
import Customers from "./components/main/customers/Customers";
import Greet from "./components/main/greet/Greet";
import Store from "./components/main/store/Store";
import Rhythm from "./components/rhythm/Rhythm";

function App() {
  return (
    <>
      <div className="wrapper flex flex-col min-h-screen">
        <header>
          <Header />
        </header>
        <main className="flex-auto">
          <Greet />
          <Store/>
          <Categories/>
          <Brands/>
          <Rhythm/>
          <Customers/>
          <Application/>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
