import Template from './components/Template'
import FaleConosco from './pages/FaleConosco';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Sobre from './pages/Sobre'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Template />}>
                    <Route path='/' element={<Home />} />
                    <Route path='sobre' element={<Sobre />} />
                    <Route path='fale-conosco' element={<FaleConosco />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}