import React from 'react';
import './FacebookMessanger.css'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const FacebookMessanger = () => {
    return (
        <div>
   <MessengerCustomerChat
    pageId="109506457517909"
    appId="1799920953728742"
  />,
        </div>
    );
};

export default FacebookMessanger;