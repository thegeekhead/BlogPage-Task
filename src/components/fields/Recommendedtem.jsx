import React, { Component } from "react";

class Recommendeditem extends Component {
    render() {
        return (
            <div className="col-lg-4 col-sm-6">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={this.props.image} alt="..." />
                    </a>
                    <div className="portfolio-caption">
                        <div className="portfolio-caption-heading">{this.props.heading}</div>
                        <div className="portfolio-caption-subheading text-muted">{this.props.subheading}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Recommendeditem;