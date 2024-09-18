import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import Wrapper from "./pages/Wrapper/Wrapper";



export default function AppRouter(props) {
    return (

        <BrowserRouter>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<StartPage {...props} />} />
                </Routes>
            </Wrapper>
        </BrowserRouter>

    );
}
