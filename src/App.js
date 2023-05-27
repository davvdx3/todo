import './App.scss';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Template from './Components/Template';
import Create from './Components/Create';
import CreateForm from './Components/CreateForm';
import ListCard from './Components/ListCard';

function App() {
    return (
        <div className='app'>
            <NavBar />
            <Routes>
                <Route path='/' element={<><Template /><Create /></>} />
                <Route path='/form' element={<CreateForm />} />
                <Route path='/list' element={<ListCard />} />
            </Routes>
        </div>
    );
}

export default App;
