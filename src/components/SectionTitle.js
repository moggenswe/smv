import React from 'react';


const SectionTitle = (props) => {

    return (
        <div style={{width: "100%", padding: "20px", textAlign: "center" }}>
            <h2 className="heading-secondary">
                {props.title}
            </h2>
        </div>
    );
}

export default SectionTitle;
