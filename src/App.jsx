import "./App.css"
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Vision from "./components/vision/Vision";
import Product from "./components/product/Product";
import About from "./components/about/About";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


function App() {
  const router = createBrowserRouter([

    {
      path:"/",
      element:<><Header/> <Home/></>
    },
    {
      path:"/product",
      element:<><Header/><Product/></>
    },
    {
      path:"/vision",
      element:<><Header/><Vision/></>
    },
    {
      path:"/features",
      element:<><Header/><Features/></>
    },
    {
      path:"/about",
      element:<><Header/><About/></>
    },
    {
      path:"/reservation",
      element:<><Header/><Vision/></>
    },

  ])

  return (
    <>
    
    
    <RouterProvider router={router} />

    
    
    </>
  )
}
export default App;
