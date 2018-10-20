import React, { Component } from 'react';



class SectionAbout extends Component {

    state = {YT:{isHovered:true},SC:{isHovered:true}}

    constructor(props) {
        super(props);
    }

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
                        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tristique libero. Nam vel tempus lorem. Morbi aliquam, quam sit amet tincidunt convallis, nisl nulla condimentum metus, ac lacinia purus elit sit amet nulla. Etiam id turpis neque. Ut non libero ac velit mattis porta.</p>
                        <h3 className="heading-tertiary mb-1">Vår vision</h3>
                        <p className="paragraph">
                            Cras leo leo, dapibus vel consequat vel, lacinia vitae enim. Nam condimentum enim orci, lobortis feugiat velit luctus ut. Nunc venenatis malesuada pharetra. Vivamus semper et lorem eget ullamcorper. Vivamus tristique augue non ligula semper rutrum. Sed quis libero rutrum, elementum dui a, vestibulum diam. Quisque mollis placerat purus eu eleifend. Pellentesque eget neque mollis, hendrerit felis id, sodales risus.</p>
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
