import React, { Component } from 'react';

import styles from './home.css';

import Icon from './../../assets/images/icon.png';

/* 
    This is just a sample introduction file.
    You can clear the code written in this file and start writing your own code.
*/

export class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src={Icon} />
                    <h1 className={styles.title}>What's Cooking!</h1>
                    <p>
                        What’s Cooking! is an easy-to-use application for people 
                        of all ages who wish to learn the art of cooking.
                    </p>
                </div>
                <div className={styles.instructions}>
                    <h2>Instructions</h2>
                    <p>
                        This is a boilerplate template to help you start coding with 
                        your application straightaway.
                    </p>
                    <ul>
                        <li>
                            Candidates are expected to implement Redux and store.
                        </li>
                        <li>
                            Routing has also been enabled in this template, but the candidate  
                            is expected to implement the routes on their own.
                        </li>
                        <li>
                            Candidates are free to use CSS, SASS, SCSS or LESS for styling.
                        </li>
                        <li>
                            Candidates need to use the APIs provided by  <a href="https://www.themealdb.com/api.php">MealDB Server</a>.
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;
