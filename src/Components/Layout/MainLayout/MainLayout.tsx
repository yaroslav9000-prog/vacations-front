import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<Header/>
            <Main/>
            <Menu/>
            <Footer/>
        </div>
    );
}

export default MainLayout;
