import React from 'react';


const SectionMembers = (props) => {

    return (
        <section className="section-members">

            <div className="member-card">
                <div className="member-card--image">
                    <img src="../img/spelfarsan.jpg" />
                </div>
                <div className="member-card--bio">
                    <h2 className="heading-tertiary">Spelfarsan</h2>
                    <h5>AKA Oscar</h5>
                </div>

            </div>

            <div className="member-card">
                <div className="member-card--image">
                    <img src="../img/spelfarsan.jpg" />
                </div>
                <div className="member-card--bio">
                    <h2 className="heading-tertiary">MR Gear</h2>
                    <h5>AKA Peter</h5>
                </div>

            </div>

            <div className="member-card">
                <div className="member-card--image">
                    <img src="../img/spelfarsan.jpg" />
                </div>
                <div className="member-card--bio">
                    <h2 className="heading-tertiary">Spooky</h2>
                    <h5>AKA Lina</h5>
                </div>

            </div>

        </section>
    );
}

export default SectionMembers;
