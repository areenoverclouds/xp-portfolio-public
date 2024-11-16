/* I don't think it is used anywhere now */

// import React from 'react';
// import folderImage from './folder.png';
// import '../index.css';
// import Modal from 'react-modal';
// import DetailsAccordion from '../modal-tab/details-accordion/DetailsAccordion';
// import TopBar from '../modal-tab/header/TopBar';
// import Draggable from 'react-draggable';

// Modal.setAppElement('#root');

// export default function Projects () {

//     const [isOpen, setIsOpen] = React.useState(false);

//     const trigger = () => {
//         setIsOpen(!isOpen);
//     }

//     return (
//         <div>
//             <button style={{ backgroundColor: 'transparent', border: 'none', height: '80px', width: '80px' }} onDoubleClick={trigger}>
//                 <img src={folderImage} alt="" />
//                 <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica' }}> Projects </div>
//             </button>

//             <Draggable>
            
//             <Modal
//                 isOpen={isOpen}
//                 onRequestClose={trigger}
//                 className="modal"
//                 overlayClassName="overlay"
//                 shouldCloseOnOverlayClick={false}
//             >
//                 <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid white'}} > 
//                     <TopBar heading="Projects" img={folderImage} trigger={trigger} />
//                     <div style={{ display: 'flex', flexDirection: 'row' }}> 
//                         <div className="side-bar">
//                             <DetailsAccordion header="Details" text="The projects I have built over the course of time. Find their exe and source code files here." />                                
//                         </div>
//                         <div classname="modal-content" style={{ display: 'flex', flexDirection: 'row'}}>
                            
//                             <div> hi </div>
                            
//                         </div>
//                     </div>
//                 </div>
//             </Modal>
//             </Draggable>

//         </div>
//     )
// }