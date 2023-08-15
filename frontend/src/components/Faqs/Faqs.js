import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Faq = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" onClick={toggleAnswer}>
                    <button className="accordion-button" type="button">
                        {question}
                    </button>
                </h2>
                {isOpen && (
                    <div className="accordion-collapse collapse show" aria-labelledby="accordion-heading">
                        <div className="accordion-body">
                            <p>{answer}</p>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    )

}

 export default Faq;