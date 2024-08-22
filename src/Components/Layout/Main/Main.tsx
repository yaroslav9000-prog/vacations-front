import { Route, Routes } from "react-router-dom";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
			<Routes>
                <Route path="/" element={<SongList/>}/>
                <Route path="/Login" element={<AddNewSong/>}/>
                <Route path="/Register" element={<AboutMe/>}/>
                <Route path="/vacations" element={</>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Main;
