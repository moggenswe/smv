import React from 'react';

const Header = (props) => {

    return (
        <header className="header">
            <div className="header__logobox">
                <img src="/img/logo-bw.svg" alt="Logo" className="header__logobox--logo" />
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Spelfarsan med vänner</span>
                    <span className="heading-primary-sub">det var bättre förr</span>
                </h1>
            </div>
        </header>
    );
}

export default Header;
