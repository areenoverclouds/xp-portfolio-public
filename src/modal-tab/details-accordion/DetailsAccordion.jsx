import React from "react";
import {CgChevronDoubleDownO} from "react-icons/cg";
import {CgChevronDoubleUpO} from "react-icons/cg";
import '../../index.css';

export default function DetailsAccordion(props) {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-header-text"> <b>{props.header}</b> </div>
        <div className="accordion-header-icon"> {isOpen ? <CgChevronDoubleUpO /> : <CgChevronDoubleDownO />} </div>
      </div>
      {isOpen && <div className="accordion-content"> {props.text} </div>}
    </div>
  );
}