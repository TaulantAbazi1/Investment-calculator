import { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid =
    userInput.duration >= 1 &&
    userInput.initialInvestment >= 0 &&
    userInput.annualInvestment >= 0 &&
    userInput.expectedReturn >= 0;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">
          *Please enter a valid input, values cannot be negative or null.*
        </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
