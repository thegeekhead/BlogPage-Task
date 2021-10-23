import React, { Component } from "react";
import "./Newsletterstyle.css"

class Newsletter extends Component {
    render() {
        return (
            <section class="subscribe-area pb-50 pt-70">
                <div class="container">
                    <div class="row">

                        <div class="col-md-4">
                            <div class="subscribe-text mb-15">
                                <span>JOIN OUR NEWSLETTER</span>
                                <h2>subscribe newsletter</h2>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="subscribe-wrapper subscribe2-wrapper mb-15">
                                <div class="subscribe-form">
                                    <form action="#">
                                        <input placeholder="enter your email address" type="email"/>
                                        <button>subscribe <i class ="fas fa-long-arrow-alt-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default Newsletter;