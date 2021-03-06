import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Input } from 'antd';
import { UserOutlined, FieldNumberOutlined, CalendarOutlined, QrcodeOutlined } from '@ant-design/icons';
import { number, name, expiry, cvc, focus } from "../atoms/atoms";

function PaymentForm() {
  const [numberState, setNumber] = useRecoilState(number);
  const [nameState, setName] = useRecoilState(name);
  const [expireyState, setExpirey] = useRecoilState(expiry);
  const [cvcState, setCvc] = useRecoilState(cvc);
  const [focusState, setFocus] = useRecoilState(focus);

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
      <form>
        <Input allowClear size="large" type="text" name="number" placeholder="Card Number" prefix={<FieldNumberOutlined />} onChange={handleInputChange} onFocus={handleInputFocus} style={{ width: '20%' }}/>
        <br />
        <Input allowClear size="large" type="text" name="name" placeholder="Name" prefix={<UserOutlined />} onChange={handleInputChange} onFocus={handleInputFocus} style={{ width: '20%' }}/>
        <br />
        <Input allowClear size="large" type="text" name="expiry" placeholder="Expirey" prefix={<CalendarOutlined />} onChange={handleInputChange} onFocus={handleInputFocus} style={{ width: '20%' }}/>
        <br />
        <Input allowClear size="large" type="text" name="cvc" placeholder="cvc" prefix={<QrcodeOutlined />} onChange={handleInputChange} onFocus={handleInputFocus} style={{ width: '20%' }}/>
      </form>
    </div>
  );
}

export default PaymentForm;
