import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200, // Fixed typo here as well
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <>
      <Header />
      {/* the function is passed as a value to userInput */}
      <UserInput onChangeInput={handleChange} userEntered={userInput} />
      {!inputIsValid && <p>Please enter valid input data </p>}

      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
