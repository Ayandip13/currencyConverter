import { InputBox } from "./components/InputBox"; // Importing InputBox component
import { useState } from "react"; // Importing useState hook to manage state
import { useCurrencyInfo } from "./hooks/useCurrencyInfo"; // Custom hook for fetching currency information

function App() {
  // State variables to manage the input amount, from-currency, to-currency, and converted amount
  const [ammount, setAmmount] = useState(0); // Stores the amount entered by the user
  const [from, setFrom] = useState("usd"); // Stores the currency to convert from
  const [to, setTo] = useState("inr"); // Stores the currency to convert to
  const [convertedAmount, setConvrtedAmount] = useState(0); // Stores the converted amount

  const currencyInfo = useCurrencyInfo(from); // Fetching currency conversion rates using the custom hook
  // Example: { usd: 1, inr: 82.5, eur: 0.91 }

  const options = Object.keys(currencyInfo); // Extracting available currencies as an array of keys
  // Example: ["usd", "inr", "eur"]

  // Function to swap the "from" and "to" currencies and exchange their amounts
  const swap = () => {
    setFrom(to); // The "to" currency becomes the "from" currency
    setTo(from); // The "from" currency becomes the "to" currency
    setConvrtedAmount(ammount); // Swap the displayed amounts
    setAmmount(convertedAmount);
  };

  // Function to perform the currency conversion
  const convert = () => {
    setConvrtedAmount(ammount * currencyInfo[to]); // Multiply the input amount by the conversion rate
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      {/* App container with background styling */}
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* Form section */}
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent page reload on form submission
              convert(); // Call convert function
            }}
          >
            {/* Input box for the "from" currency */}
            <div className="w-full mb-1">
              <InputBox
                label="From" // Label for the input box
                amount={ammount} // Pass the amount state
                currencyOptions={options} // Pass available currencies
                onCurrencyChange={(currency) => setAmmount(ammount)} // Callback to set currency (placeholder here)
                selectCurrency={from} // Selected currency for "from"
                onAmountChange={(ammount) => setAmmount(ammount)} // Callback for amount change
              />
            </div>
            {/* Swap button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} // Call the swap function
              >
                swap
              </button>
            </div>
            {/* Input box for the "to" currency */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount} // Converted amount to display
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} // Callback for changing "to" currency
                selectCurrency={to} // Selected currency for "to"
                amountDisable // Disable amount input for the "to" box
              />
            </div>
            {/* Submit button */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()} {/* Display conversion info */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App; // Exporting the App component
