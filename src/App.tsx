import "./App.css";
import LoginPage from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";
// import Counter from "./components/Counter";
// import BasicFunctions from "./typescript/BasicFunctions";
// import BasicTypes from './typescript/BasicTypes';
// import ObjectLiterals from './typescript/ObjectLiterals';

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb.5">React + TS</h1>
        {/* <BasicTypes />
      <ObjectLiterals />
      <BasicFunctions /> }
      <Counter/>*/
      <LoginPage />
      }
      </div>
    </AuthProvider>
  );
}

export default App;
