import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        return (
            <div>
                {/* NiN */}
                <div className="row justify-content-md-center project">
                    <div className="col-md-auto">
                        <img src="assets/NIN.PNG" className="NIN" alt="Neighbors in Need"/>
                    </div>
                </div> 
                <div className="row justify-content-md-center">
                <div className="col-xs-auto">
                    <a className="descrp-text NIN-app highlight-me" href="neighbors-in-need.herokuapp.com/">
                        <i className="far fa-window-restore"></i>
                        Neighbors in Need Deployed App
                    </a>
                </div>
                <div className="col-xs-auto">
                    <a className="descrp-text NIN-repo highlight-me" href="https://github.com/lucsedirae/neighbors-in-need">
                        <i className="fab fa-github"></i>
                        Neighbors in Need GitHub Repo
                    </a>
                </div>
            </div>       

                {/* Burger Project */}
                <div className="row justify-content-md-center project">
                    <div className="col-md-auto">
                        <img src="assets/nom-a-burger.png" className="burger" alt="Burger"/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-xs-auto">
                        <a className="descrp-text burger-app highlight-me" href="https://protected-atoll-97608.herokuapp.com/">
                            <i className="far fa-window-restore"></i>
                            nom-a-burger Deployed App
                        </a>
                    </div>
                    <div className="col-xs-auto">
                        <a className="descrp-text burger-repo highlight-me" href="https://github.com/mhall313/burger">
                            <i className="fab fa-github"></i>
                            nom-a-burger GitHub Repo
                        </a>
                    </div>
                </div>

                {/* Bandmates */}
                <div className="row justify-content-md-center project">
                    <div className="col-md-auto">
                        <img src="assets/Bandmates.PNG" className="bandmates" alt="Bandmates"/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-xs-auto">
                        <a className="descrp-text bandmates-app highlight-me" href="https://joshallan.dev/bandmates-musician-finder/">
                            <i className="far fa-window-restore"></i>
                            Bandmates Deployed App
                        </a> 
                    </div>
                    <div className="col-xs-auto">
                        <a className="descrp-text bandmates-repo highlight-me" href="https://github.com/jallan07/bandmates-musician-finder">
                            <i className="fab fa-github"></i>
                            Bandmates GitHub Repo
                        </a> 
                    </div>
                </div>

                {/* Weather App */}
                <div class="row justify-content-md-center project">
                    <div class="col-xs-auto">
                        <img src="assets/Do-I-Need-a-Jacket.PNG" class="weather-app" alt="Do I Need a Jacket web app"/>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-xs-auto">
                        <a class="descrp-text weather-dapp highlight-me" href="https://mhall313.github.io/weather-db/">
                            <i class="far fa-window-restore"></i>
                            Do I Need a Jacket? Deployed App
                        </a>
                    </div>
                    <div class="col-md-auto">
                        <a class="descrp-text weather-repo highlight-me" href="https://github.com/mhall313/weather-db">
                            <i class="fab fa-github"></i>
                            Do I need a Jacket? GitHub Repo
                        </a>
                    </div>
                </div>

                {/* Coding Quiz */}
                <div className="row justify-content-md-center project">
                    <div className="col-md-auto">
                        <img src="assets/Coding-Quiz.PNG" className="quiz-app" alt="Coding Quiz web app"/>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-xs-auto">
                        <a className="descrp-text quiz-dapp highlight-me" href="https://mhall313.github.io/code-quiz/">
                            <i className="far fa-window-restore"></i>
                            Code Quiz Deployed App
                        </a>
                    </div>
                    <div className="col-xs-auto">
                        <a className="descrp-text quiz-repo highlight-me" href="https://github.com/mhall313/code-quiz">
                            <i className="fab fa-github"></i>
                            Code Quiz GitHub Repo
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
