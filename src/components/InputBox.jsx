import React from "react";

function InputBox({
  label,
  className = "",
  onAmountChange,
  ammount,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabale = false,
  currencyDisabaled = false,
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/30 mb-2 inline-block">{label}</label>
        <input
          type="number"
          placeholder="Ammount"
          className="outline-none w-full bg-transparent py-1.5"
          disabled={amountDisabale}
          value={ammount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        {/*did not understand the onChange*/}
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type </p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisabaled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}> {/*key is used to increse performance in a loop*/}
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
