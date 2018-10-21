import React, { Component } from 'react';



class SectionAbout extends Component {

    state = {YT:{isHovered:true},SC:{isHovered:true}}

    toggleMediaIcon = (icon) => {
       
        this.setState( (prevState, props) => ({
           [icon]: { isHovered: !prevState[icon].isHovered }
        }));
    }

    render() {

        return (
            <section className="section-about">
                <div style={{ width: "100%", padding: "20px", textAlign: "center" }}>
                    <h2 className="heading-secondary">
                        Programet med det lilla extra
                    </h2>
                </div>
                <div className="section-about-containter">
                    <div className="section-about-left">
                        <h3 className="heading-tertiary mb-1">Hur det startade</h3>
                        <p className="paragraph">
                        Det hela startade en vacker vårdag på en Kinakorg i södra stockholm. Där Spelfarsan och Bas Master tyckte
                        att i och med att vi ändå alltid pratar spel varför inte dela detta med en publik. Sagt och gjort skapades Spelfarsan med vänner.    
                        </p>
                        <h3 className="heading-tertiary mb-1">Varför är vi här</h3>
                        <p className="paragraph">
                        Vårt främsta mål att främja gaming i stort och ta det till kulturens finrum. 
                        Vi tar upp alla typer av ämnen som har någon form av koppling till gaming och vi har gärna med gäster.     
                        </p>
                    </div>
                    <div className="section-about-right">
                        <div className="section-about-image-box" >
                            <figure className="image-box-item mx-auto" onClick={() => window.location.href = "https://www.youtube.com/channel/UC1kRObvrDbvF58WBFAYWghg"} onMouseLeave={() => this.toggleMediaIcon("YT")  }  onMouseEnter={() => this.toggleMediaIcon("YT")  } >
                                <svg style={{ height: "100px", fill: this.state.YT.isHovered ? "rgb(119,119,119)" : "rgb(255,0,0)"  , marginTop: "10px" }}>
                                    <use xlinkHref="/img/icon-sprite.svg#icon-youtube2"></use>
                                </svg>
                            </figure>
                            <figure className="image-box-item mx-auto" onClick={() => window.location.href = "https://soundcloud.com/spelfarsan-med-vanner"} onMouseLeave={() => this.toggleMediaIcon("SC")  }  onMouseEnter={() => this.toggleMediaIcon("SC")  }>
                                <svg style={{ height: "100px", fill: this.state.SC.isHovered ? "rgb(119,119,119)" : "rgb(255,119,0)", marginTop: "10px" }}>
                                    <use xlinkHref="/img/icon-sprite.svg#icon-soundcloud2"></use>
                                </svg>
                            </figure>
                            <h3 className="heading-tertiary mt-3">Våra kanaler</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionAbout;
