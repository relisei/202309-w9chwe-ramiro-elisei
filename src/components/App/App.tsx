import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import UsersPage from "../../pages/UsersPage/UsersPage";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<UsersPage />} />
        <Route path="/add" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
