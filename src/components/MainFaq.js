import React, { Component } from 'react';
import './style.css'
import Faq from './Faq';
import faq from './data';
class MainFaq extends Component {
    state = {
        dataState: faq,
    }
    render() {
        const mapArray = this.state.dataState.map((el, i) => {
            return <Faq question={el.question} answer={el.answer} answerLong={el.answerLong} key={i} />
        })
        return (
            <main>
                {mapArray}
            </main>
        );
    }
}
export default MainFaq;