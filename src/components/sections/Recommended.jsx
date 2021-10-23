import React, { Component } from "react";
import Recommendeditem from "../fields/Recommendedtem";

import img1 from "../assets/portfolio/1.jpg"
import img2 from "../assets/portfolio/2.jpg"
import img3 from "../assets/portfolio/3.jpg"

const portfoliodetails = [
    {
        image: img1,
        heading: 'Threads',
        subheading: 'Illustrations'
    },
    {
        image: img2,
        heading: 'Explore',
        subheading: 'Graphic Design'
    },
    {
        image: img3,
        heading: 'FInish',
        subheading: 'Identity'
    }
]

class Recommended extends Component {
    render() {
        return (
                <div>
                    <section className="page-section bg-light" id="portfolio">
                        <div className="container">
                            <div className="text-center">
                                <h3 className="section-subheading text-muted">Recommended for you</h3>
                            </div>
                            <div className="row">

                                {portfoliodetails.map((portfolio, index) => {
                                    return <Recommendeditem {...portfolio} key={index} />
                                })}

                            </div>
                        </div>
                    </section>
                </div>
        )
    }
}

export default Recommended;