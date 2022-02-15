import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Navigation/Nav";
import Footer from './Components/Footer';




 

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        {/* <Routes>
          <Route path='/' element={<Tasks />} /> 
          <Route path='tasklist/:id' element={<TaskList />} />
          <Route path='about' element={<About />} />
          <Route path='posts' element={<Posts />} />
         <Route path='todo' element={<Todo />} />  
         <Route path='*' element={<FileNotFound />} />

        </Routes>*/}
        {/* <Footer />  */}
      </div>
    </BrowserRouter>
  );
};
export default App;
 



