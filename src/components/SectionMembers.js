import React from 'react';


const SectionMembers = (props) => {

    return (
        <section className="section-members">
            <div className="member-card">
                <div className="member-card--image">
                    <img src="../img/spelfarsan.jpg" alt="Oscar" />
                </div>
                <div className="member-card--bio">
                    <h2 className="heading-tertiary">Spelfarsan</h2>
                    <h5>AKA Oscar</h5>
                </div>
                <div style={{ textAlign: "left", padding: "2rem 0" }}>
                    <ul>
                        <li>favoritspel: Chron Trigger</li>
                        <li>favoritglass: Magnum White</li>
                        <li>favoritskostorlek: 42</li>
                    </ul>
                </div>
            </div>
            <div className="member-card">
                <div className="member-card--image">
                    <img src="../img/peter.png" alt="Peter" />
                </div>
                <div className="member-card--bio">
                    <h2 className="heading-tertiary">Bas Master</h2>
                    <h5>AKA Peter</h5>
                    <div style={{ textAlign: "left", padding: "2rem 0" }}>
                        <ul>
                            <li>favoritspel: warcraft II</li>
                            <li>favoritglass: magnum mandel-skalet</li>
                            <li>favoritskostorlek: italiensk 36</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="member-card">
                <div className="member-card--image">
                    <img src="../img/linda.png" alt="Linda" />
                </div>
                <div className="member-card--bio">
                    <h2 className="heading-tertiary">Slient Hilly</h2>
                    <h5>Linda</h5>
                    <div style={{ textAlign: "left", padding: "2rem 0" }}>
                        <ul>
                            <li>favoritspel: Warcraft II</li>
                            <li>favoritglass: Magnum mandel-skalet</li>
                            <li>favoritskostorlek: italiensk 36</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SectionMembers;
