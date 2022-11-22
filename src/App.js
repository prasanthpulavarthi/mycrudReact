import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NavigationBar from "./components/layout/NavigationBar";
import PageNotFound from "./components/pages/PageNotFound";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import EditUser from "./components/users/EditUser";
import AddUser from "./components/users/AddUser";
import User from "./components/users/user";
function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/user/add" element={<AddUser/>}/>
        <Route path="/user/edit/:id" element={<EditUser/>}/>
<Route path="/user/:id" element={<User/>}/>
        <Route path="*" element={<PageNotFound/>}/>



     
   
     </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
