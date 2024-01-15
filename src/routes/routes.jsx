import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound } from "../pages";
import { Main } from "../layout";
// import { Contact, Home, Blog, NotFound } from "./Pages";



const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  }
])

export default routes

// function Router() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/neyaz-posts" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

// export default Router;