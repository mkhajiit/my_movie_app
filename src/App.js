import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './router/Home';
import Detail from './router/Detail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/hello`} element={<h1>Hello</h1>} />
                <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />} />
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
