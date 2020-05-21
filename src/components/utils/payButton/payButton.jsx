import React from 'react'
import GPayButton from "react-google-pay-button";

const payButton = (props) => {
    return(
        <GPayButton totalPriceStatus={'FINAL'} totalPrice={props.price} currencyCode={'USD'} countryCode={'BY'}/>
    )
};

export default payButton