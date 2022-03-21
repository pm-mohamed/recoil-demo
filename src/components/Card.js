import React, { useState } from "react";
import Cards from 'react-credit-cards';
import { useRecoilState } from "recoil";
import { number, name, expiry, cvc, focus } from "../atoms/atoms";

function Card() {
  const [numberState, setNumber] = useRecoilState(number);
  const [nameState, setName] = useRecoilState(name);
  const [expireyState, setExpirey] = useRecoilState(expiry);
  const [cvcState, setCvc] = useRecoilState(cvc);
  const [focusState, setFocus] = useRecoilState(focus);

  return (
    <div id="PaymentForm">
      <Cards
        preview={true}
        issuer={"visa"}
        cvc={cvcState}
        expiry={expireyState}
        focused={focusState}
        name={nameState}
        number={numberState}
      />
    </div>
  );
}

export default Card;
