import {Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import MainPage from "../pages/MainPage";
import Basket from "../pages/Basket";

const AppRouter = observer(() => {
    return (
        <div className="block" >
            <Routes>
                    <Route key="/" path="/" element={<MainPage/>} exact/>
                <Route key="/basket" path="/basket" element={<Basket/>} exact/>
            </Routes>
        </div>
    );

})

export default AppRouter;