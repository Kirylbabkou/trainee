import "../src/sass/style.css";
import Footer from "./widgets/footer/Footer";
import Header from "./widgets/header/Header";
import Home from "./pages/home/Home";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <>
      <Header />
      <Home />
      <SignIn />
      <Footer />
    </>
  );
}

export default App;
