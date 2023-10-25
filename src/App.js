// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import ProtectedRoutes from "./middlewares/ProtectedRoutes";
// // import Success from "./pages/Success";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Login />} />
//         <ProtectedRoutes>
//           <Route path="/home" element={<Home />} />
//         </ProtectedRoutes>

//         {/* <Route path="/success/:token" element={<Success />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"; // Assicurati di importare anche Outlet
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
