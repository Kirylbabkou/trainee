import './Header.scss'
import Navigation from "./ui/navigation/Navigation";
import SearchBar from "../../components/shared/ui/searchBar/SearchBar";
import Button from "../../components/shared/ui/button/Button";

function Header() {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <Navigation />
        <a href="#">
          <span className="logo header__logo"></span>
        </a>
        <div className="header__buttons">
          {/* <button className="button button_bordered" disabled>Регистрация</button> */}
          <SearchBar />
          <Button btnText='Войти' />
        </div>
      </div>
    </header>
  );
}

export default Header;
