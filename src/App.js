import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './router/Home';
import Detail from './router/Detail';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='movie/:id' element={<Detail />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
