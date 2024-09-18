import "./App.css";
import Header from "./components/header/Header";
import Categories from "./components/main/categories/Categories";
import Greet from "./components/main/greet/Greet";
import Store from "./components/main/store/Store";

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
        </main>
        <footer className="pt-[10rem]">Footer</footer>
      </div>
    </>
  );
}

export default App;
