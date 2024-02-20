import React from "react";
import {Link} from "react-router-dom";

export function Projects() {
    return (
        <main>
            <div id="main">
                <p><em><strong>Red Hat / BU SPARK</strong></em> - <i><Link to={"https://github.com/BU-Spark/ds-redhat-predictive-kubernetes"} target={"_blank"}>Predictive Kubernetes Software</Link></i>- (Jan 2024 - Present)</p>
                <ul>
                    <li>Working with a team of 4 other students to develop a predictive resource scaling system for Kubernetes clusters, where I am the team representative to our project manager at Red Hat</li>
                    <li>Using data processing, feature extraction and ML techniques to identify patterns and trends in resource consumption for K8s clusters to predict necessary resource scaling</li>
                </ul>
                <p><em><strong>CS392 Fall 2023</strong></em> - <i><Link to={"https://github.com/KingTingTheGreat/7-day-forecast"} target={"_blank"}>7-Day Forecast App</Link></i> - (Dec 2023)</p>
                <ul>
                    <li>Collaborated with a team of 2 other students to create a web app that displays an accurate 7-day weather forecast for the user’s current IP address location</li>
                    <li>Developed using a Next/React stack, where I worked on the front-end forecast display, credits, info, and about pages</li>
                </ul>
                <p><em><strong>CS411 Spring 2023</strong></em> - <i><Link to={"https://github.com/abirislam910/cookmaster-alpha1.0"} target={"_blank"}>CookMaster</Link></i> - (May 2023)</p>
                <ul>
                    <li>Collaborated with a team of 2 other students to create an educational web app for chefs that returns relevant recipes, including video tutorials, based on a set of ingredients as input</li>
                    <li>Developed using a Node/React stack, where I integrated the Spooncular API for recipes and YouTube API for videos, and designed front-end using CSS</li>
                </ul>
                <p><em><strong>BostonHacks 2022</strong></em> - <i><Link to={"https://devpost.com/software/turing-house"} target={"_blank"}>Turing House</Link></i> - <em><strong>Winner of Most Creative Use of Twilio Award</strong></em> - (Nov 2022)</p>
                <ul>
                    <li>Collaborated with a team of 3 other students to create a top-down puzzle game that sends hints and messages from “Alan Turing” to the player’s phone number</li>
                    <li>Developed front-end in Processing, of which I developed 2 of the puzzles and a start/end screen</li>
                    <li>Developed back-end in Python using Flask, where I integrated the Twilio API to send messages to the player</li>
                </ul>
                <p><em><strong>Farmingdale State RAM Program</strong></em> - <i>XRF Spectra Analysis Software</i> - <em><strong>SRI Symposium Finalist</strong></em> - (Jun 2020 - Aug 2020)</p>
                <ul>
                    <li>Coordinated with a team of 3 other students remotely to write open-source software for XRF spectrometers, used in a materials science lab to increase speed of <br /> compositional analysis
                    </li>
                    <li>Wrote a program in Python, using Pandas and Matplotlib to extract reference data from a dense Excel sheet and match input spectral data to the reference in order to <br /> identify new materials
                    </li>
                </ul>
            </div>
        </main>
    )
}