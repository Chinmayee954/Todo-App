import React from "react";

function Footer()
{

    const year = new Date().getFullYear();
    return (
        <p className="footer">
            Copyright {year}
        </p>
    )
}

export default Footer;