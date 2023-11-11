import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" />
      </Routes>
    </>
  );
};

export default App;
