import { RouteObject } from "react-router-dom";
import About from "../Pages/AboutPage/About";
import Home from "../Pages/HomePage/Home";
import LayoutWrapper from "../Wrappers/LayoutWrapper/LayoutWrapper";
import MainPage from "../Pages/MainPage/MainPage";
// import ThreeMainPage from "../components/ThreeComponent/ThreeMainPage/ThreeMainPage";
import ProjectGalMain from "../components/ProjectGallery/ProjectGalMain/ProjectGalMain";
import Dashboard from "../Pages/Dashboard";

const routes:RouteObject[] = [
      {
        path: '/',
        element: <LayoutWrapper />,
        children: [
          { path:"dashboard", element:<Dashboard/>},
          { path: '', element: <MainPage /> },
          { path: 'about', element: <About /> },
          { path: "home", element: <Home /> },
          // { path: "three-main-page", element:<ThreeMainPage/>},
          { path: "project-gallery", element:<ProjectGalMain/>}


        ],
      },
  ];
export default routes;