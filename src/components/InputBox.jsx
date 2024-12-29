import React from "react"; // Importing React library
import { useId } from "react"; // Importing useId hook for generating unique IDs

function InputBox({
  label, // Label for the input box
  className = "", // Optional class names
  onAmountChange, // Callback for amount changes
  ammount, // Current amount value
  onCurrencyChange, // Callback for currency changes
  currencyOptions = [], // Array of available currencies
  selectCurrency = "usd", // Selected currency
  amountDisabale = false, // Disable amount input if true
  currencyDisabaled = false, // Disable currency dropdown if true
}) {
  const amountInputId = useId(); // Unique ID for the input field

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Input section */}
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/30 mb-2 inline-block">
          {label} {/* Label text */}
        </label>
        <input
          id={amountInputId} // Unique ID for the input
          type="number" // Numeric input type
          placeholder="Ammount" // Placeholder text
          className="outline-none w-full bg-transparent py-1.5"
          disabled={amountDisabale} // Disable input if amountDisabale is true
          value={ammount} // Set the input value
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value)) // Callback for input changes
          }
        />
      </div>
      {/* Currency dropdown */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectCurrency} // Currently selected currency
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Callback for dropdown changes
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisabaled} // Disable dropdown if currencyDisabaled is true
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency} {/* Dropdown options */}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox; // Exporting InputBox component
