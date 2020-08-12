import React from "react";

import './custom-button.styles.scss'

const CustomButton = ({children, idGoogleSignIn,inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted': ''} {idGoogleSignIn ? 'google-sign-in': ''} custom-button`}
            {...otherProps}>
        {children}
    </button>
)

export default CustomButton;
