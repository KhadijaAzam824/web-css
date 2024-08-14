import './App.css';
// import Signup from './login/login'
import Signup from './Signup/Signup.js';
// import{RouterProvider,createBrowserRouter} from"react-router-dom";

function App() {
  // const route= createBrowserRouter({

  //   path:"/",
  //   element:<Signup/>
  // })

  // path:"/",
  // element:<login/>,


  return (
    <div className="App">
      {/* <RouterProvider router={route}></RouterProvider> */}

      <h2>My first react project</h2>
      <Signup />
    </div>
  );
}

export default App;
