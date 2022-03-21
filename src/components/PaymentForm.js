import React, { useState } from "react";
import Cards from 'react-credit-cards';
import { useRecoilState } from "recoil";
import { number, name, expiry, cvc } from "../atoms/atoms";

function PaymentForm() {
  const [focus, setFocus] = useState("");
  const [numberState, setNumber] = useRecoilState(number);
  const [nameState, setName] = useRecoilState(name);
  const [expireyState, setExpirey] = useRecoilState(expiry);
  const [cvcSate, setCvc] = useRecoilState(cvc);

  function handleInputFocus(e){
    setFocus(e.target.name );
  };

  function handleInputChange(e){
    const { name, value } = e.target;
    
    if(name === "number"){
      setNumber(value)
    } else if(name === "name"){
      setName(value)
    } else if(name === "expiry"){
      setExpirey(value)
    } else if(name === "cvc"){
      setCvc(value)
    }
  }

  return (
    <div id="PaymentForm">
      <Cards
        preview={true}
        issuer={"visa"}
        cvc={cvcSate}
        expiry={expireyState}
        focused={focus}
        name={nameState}
        number={numberState}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="name"
          name="name"
          placeholder="name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="expiry"
          name="expiry"
          placeholder="expiry"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="cvc"
          name="cvc"
          placeholder="cvc"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
}

export default PaymentForm;
