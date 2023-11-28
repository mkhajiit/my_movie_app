import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './router/Home';
import Detail from './router/Detail';

function App() {
    return (
        //basename={process.env.PUBLIC_URL} 이렇게 하면 local에서도 배포한후에도 경로에 문제없이 작동이 된다.
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='movie/:id' element={<Detail />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
