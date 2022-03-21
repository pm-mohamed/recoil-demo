import React, { useState } from "react";
import Cards from 'react-credit-cards';
import { useRecoilState } from "recoil";
import { Input } from 'antd';
import { UserOutlined, FieldNumberOutlined, CalendarOutlined, QrcodeOutlined } from '@ant-design/icons';
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
        <Input allowClear size="large" type="tel" name="number" placeholder="Card Number" prefix={<FieldNumberOutlined />} onChange={handleInputChange} onFocus={handleInputFocus} style={{ width: '20%' }}/>
        <br />
        <Input allowClear size="large" type="name" name="name" placeholder="Name" prefix={<UserOutlined />} onChange={handleInputChange} onFocus={handleInputFocus} style={{ width: '20%' }}/>
        <br />
        <Input allowClear size="large" type="expiry" name="expiry" placeholder="Expirey" prefix={<CalendarOutlined />} onChange={handleInputChange} onFocus={handleInputFocus} style={{ width: '20%' }}/>
        <br />
        <Input allowClear size="large" type="cvc" name="cvc" placeholder="cvc" prefix={<QrcodeOutlined />} onChange={handleInputChange} onFocus={handleInputFocus} style={{ width: '20%' }}/>
      </form>
    </div>
  );
}

export default PaymentForm;
