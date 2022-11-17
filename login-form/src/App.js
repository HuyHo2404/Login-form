import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { routes } from './routes';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={routes.login} element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
