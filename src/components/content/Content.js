import React, { Component } from 'react';
import './Content.css';
import Card from '../card/Card';

class Content extends Component {
    constructor() {
        super()
        this.state = {

            data: [
                {
                    title: "Fintech 4.0 — How Technology Is Reshaping The $5 Trillion Insurance Sector",
                    descripsi: "The concept of insurance dates back to ancient history with the first form of written policy appearing in the code of King Hammurabi, some…",
                    author: "Emil Mamedov",
                    thumbnail: "https://miro.medium.com/max/304/1*UwaAIpO6UmRAY_ICQ9xikw.jpeg",
                },
                {
                    title: "Is Virtual Reality the Future of Democracy?",
                    descripsi: "How design, linguistics, and This error occurred during the build time and cannot be dismissed.mushrooms can show the way forward.",
                    author: "Project ALTER",
                    thumbnail: "https://miro.medium.com/max/304/1*XxUrroOBiGdX1coAUu-8Dw.jpeg",
                },
                {
                    title: "A Captive and Trivial Culture: Technology Ethics in a Tech-Consumed World",
                    descripsi: "In the introduction to Neil Postman’s 1985 book Amusing Ourselves to Death, Postman compared the dystopias described in two novels: George…",
                    author: "Mikaela Stiner in The Startup",
                    thumbnail: "https://miro.medium.com/max/304/1*u0k3ob1Q6kZ86BDOwRBa5w.jpeg",
                },
                {
                    title: "How much RAM do I need?",
                    descripsi: "Every personal computer is made up of several components that combine to run the applications that make the PC such a useful tool. There’s…",
                    author: "Yudhajit Chowdhury",
                    thumbnail: "https://miro.medium.com/max/304/1*zHeZko-vpL21RHd-eVwhbg.jpeg",
                },

            ]
        };
    }

    render() {
        return (
            <div className="Container">
            {this.state.data.map((item, index) => {
                return (
                    <div className="main">
                        
                        
                        
                        <Card 
                        title={item.title} 
                        descripsi={item.descripsi}
                        author={item.author}
                        thumbnail={item.thumbnail}
                        />            
            

                    </div>
                )
            })}
        </div>

        );
    }
}

    export default Content;
