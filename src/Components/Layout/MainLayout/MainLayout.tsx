import Header from "../Header/Header";
import Main from "../Main/Main";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout container">
			<Header/>
            <Main/>
        </div>
    );
}

export default MainLayout;
