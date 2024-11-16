import React, { Component } from "react";

class Content extends Component {
    render() {
        return (
            <div>
                <h2>Мої інтереси</h2>
                <ul>
                    <li>Історія</li>
                    <li>Географія</li>
                    <li>Програмування</li>
                    <li>Читання художньої літератури</li>
                </ul>
                <h2>Улюблені фільми</h2>
                <ol>
                    <li>Інтерстеллар</li>
                    <li>Месники Фінал</li>
                    <li>Матриця</li>
                </ol>
            </div>
        );
    }
}

export default Content;
