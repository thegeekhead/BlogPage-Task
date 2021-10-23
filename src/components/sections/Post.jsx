import React, { Component } from "react";
import ClipboardJS from "clipboard";
import "./Poststyle.css"

  var clipboard = new ClipboardJS('.btn');

  clipboard.on('success', function (e) {
    console.log(e);
  });

  clipboard.on('error', function (e) {
    console.log(e);
  });

class Post extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>About this Open Source Project</h1>
                    <p>
                        This open-source project is for you(community).
                        Our Team at <a href="https://afteracademy.com" rel="nofollow" target="_blank">AfterAcademy</a> has taken this initiative
                        to promote Backend Learning in the best possible
                        way. We are determined to provide quality content
                        for everyone. Let's do it together by learning
                        from this project.
                    </p>
                </div>
                <div>
                    <h1>We will learn and build the backend application for a blogging platform.</h1>
                    <p>
                        The main focus will be to create a maintainable and highly
                        testable architecture.
                        Following are the features of this project:
                        <ul>
                            <li><span>This backend is written in Typescript:</span>The type safety at build time and having intellisense for it in the IDE like vscode is unparalleled to productivity. We have found production bug reduced to a significant amount since most of the code vulnerabilities are identified during the build phase itself.</li>
                            <li><span>Separation of concern principle is applied:</span>Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.</li>
                            <li><span>Feature encapsulation is adopted:</span>The files or components that are related to a particular feature have been grouped unless those components are required in multiple features. This enhances the ability to share code across projects.</li>
                            <li><span>Centralised Error handling is done:</span> We have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.</li>
                            <li><span>Centralised Response handling is done:</span>Similar to Error handling we have a response handling framework. This makes it very convenient to apply a common API response pattern.</li>
                            <li><span>Mongodb is used through Mongoose:</span>Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.</li>
                            <li><span>Async execution is adopted:</span>We have used async/await for the promises and made sure to use the non-blocking version of all the functions with few exceptions.</li>
                            <li><span>Docker compose has been configured:</span>We have created the Dockerfile to provide the easy deployability without any setup and configurations.</li>
                            <li><span>Unit test is favored:</span>The tests have been written to test the functions and routes without the need of the database server. Integration tests has also been done but the unit test is favored.</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h1>3RE Architecture: Router, RouteHandler, ResponseHandler, ErrorHandler</h1>
                    <img src="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/3RE.png" />
                </div>
                <div>
                    <h1>Project Outline: Blogging Platform</h1>
                    <img src="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/project-outline.png" />
                </div>
                <div>
                    <h1>Request-Response Handling Schematic Diagram</h1>
                    <img src="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/api-structure.png" />
                </div>
                <div>
                    <h1>How to build and run this project</h1>
                    <ul>
                        <li>Run The Tests
                            <ul>
                                <li>Install node.js and npm on your local machine.</li>
                                <li>From the root of the project executes in terminal <code>npm install</code>.</li>
                                <li>Use the latest version of node on the local machine if the build fails.</li>
                                <li>To run the tests execute <code>npm test</code>.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1>API Examples</h1>
                    <ul>
                        <li>Signup
                            <ul>
                                <li>
                                    Meathod and Headers<br/>
                                    <pre>
                                        <button class="btn" data-clipboard-target="#foo">
                                            <img src="https://clipboardjs.com/assets/images/clippy.svg" alt="Copy to clipboard" style={{height:"20px"}}/>
                                        </button>
                                        <code id="foo">POST /v1/signup/basic HTTP/1.1
                                            Host: localhost:3000
                                            x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj
                                            Content-Type: application/json
                                        </code>
                                    </pre>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Post;