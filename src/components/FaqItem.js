import React from 'react';
import './style.css';


const FaqItem = (props) => {
    return (
        <section className="faqitem-sec" >
            <div>
                <h4>{props.frage}</h4>
                <button onClick={props.func} >+</button>
            </div>
            <article style={{ display: props.stylediv }} >
                <div>
                    <p>{props.antwort}</p>
                    <button onClick={props.func2} >+</button>
                </div>
                <div style={{ display: props.stylediv2 }} >
                    <p>{props.antwort2}</p>
                </div>
            </article>
        </section>
    );
}
export default FaqItem;