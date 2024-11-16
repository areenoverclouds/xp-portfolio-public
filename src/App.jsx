import React from 'react';
import './index.css';
import logo from './logo2.webp';

import MySelf from './myself/MySelf';
import WorkExperience from './myself/WorkExperience';
import Games from './games/games';
import Network from './network/Network';
import Information from './information/Information';
import Skills from './skills/Skills';
import StartMenu from './start-menu/StartMenu';
import Notepad from './notepad/Notepad';
import Time from './start-menu/Time';

import computerImage from './myself/mycomputer.png';
import gamesImage from './games/games.png';
import networkImage from './network/earth.png';
import skillsImage from './skills/imgpic.png';
import textImage from './notepad/notepad.png';
import infoImage from './information/information.png';
import pptImage from './myself/powerpoint.png';

export default function App(props) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [tabs, setTabs] = React.useState({
        myself:  false,
        skills: false,
        games:  false,
        network:  false,
        information:  false,
        message:  false,
        ppt: false,
    });
    const [openTabs, setOpenTabs] = React.useState([]); // modals on screen
    const [taskbarTabs, setTaskbarTabs] = React.useState([]); // tabs in taskbar

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function triggerModalOpen(e) {
        const id = e.currentTarget.id;
        setTabs({...tabs, [id]: true});
        if (id === 'information') return;

        let newOpenTabs = openTabs.map(tab => tab.replace(id, ''));
        newOpenTabs.push(id);
        setOpenTabs(newOpenTabs);

        let newTaskbarTabs = taskbarTabs.filter(tab => tab.id !== id);
        setTaskbarTabs(newTaskbarTabs);
    }

    function triggerModalClose(e) {
        setTabs({...tabs, [e.target.id]: false});
        let newTaskbarTabs = taskbarTabs.filter(tab => tab.id !== e.target.id);
        setTaskbarTabs(newTaskbarTabs);
    }

    function triggerTabMinimize(e) {
        const icons = {
            myself: computerImage,
            skills: skillsImage,
            games: gamesImage,
            network: networkImage,
            information: infoImage,
            message: textImage,
            ppt: pptImage
        };
        const texts = {
            myself: 'Myself',
            skills: 'Skills',
            games: 'Games',
            network: 'Social',
            information: 'Information',
            message: 'Notepad',
            ppt: 'Work Exp'
        };
        triggerModalClose(e);
        setTaskbarTabs(prev => [...prev, { id: e.target.id, text: texts[e.target.id], icon: icons[e.target.id] }]);
    }

    function renderTabs() {
        let cellArray = [];
        for (let i = 0; i < openTabs.length; i++) {
            let cell = "";
            switch(openTabs[i]) {
                case 'myself':
                    cell = <MySelf isOpen={tabs.myself} trigger={triggerModalClose} triggerPPTOpen={triggerModalOpen} triggerTabMinimize={triggerTabMinimize} />;
                    break;
                case 'skills':
                    cell = <Skills isOpen={tabs.skills} trigger={triggerModalClose} triggerTabMinimize={triggerTabMinimize} />;
                    break;
                case 'games':
                    cell = <Games isOpen={tabs.games} trigger={triggerModalClose} triggerTabMinimize={triggerTabMinimize} />;
                    break;
                case 'network':
                    cell = <Network isOpen={tabs.network} trigger={triggerModalClose} triggerTabMinimize={triggerTabMinimize} />;
                    break;
                case 'message':
                    cell = <Notepad isOpen={tabs.message} trigger={triggerModalClose} triggerTabMinimize={triggerTabMinimize} />;
                    break;
                case 'ppt':
                    cell = <WorkExperience isOpen={tabs.ppt} trigger={triggerModalClose} triggerTabMinimize={triggerTabMinimize} />;
                    break;
                default: break;
            }          
            cellArray.push(cell);
        }
        return cellArray;
    }

    function renderTaskbarTabs() {
        return taskbarTabs.map((tab, key) => (
            <button id={tab.id} className="taskbar-tab-inactive" onClick={triggerModalOpen}>
                <img id={tab.id} src={tab.icon} style={{ width: '20px', height: '20px', marginRight: '5px' }} alt="" />
                <div className="taskbar-tab-text"> {tab.text} </div>
            </button>
        ));
    }

    return (
        <div className="App">

            <div className="icons" style={{ marginLeft: '10px', marginTop: '20px', display: 'flex', justifyContent: 'space-between', overflow: 'hidden', height: '80vh' }}>	
                <div style={{ display: 'flex', flexDirection: 'column'}}> 

                    {/* Myself */}
                        <button id={'myself'} onDoubleClick={triggerModalOpen} className='icon-button'>
                            <img id={'myself'} src={computerImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> My Self </div>
                        </button>

                    {/* Skills */}
                        <button id={'skills'} onDoubleClick={triggerModalOpen} className='icon-button' >
                            <img id={'skills'} src={skillsImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> Skills </div>
                        </button>

                    {/* Games */}
                        <button id={'games'} onDoubleClick={triggerModalOpen} className='icon-button' >
                            <img id={'games'} src={gamesImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> Games </div>
                        </button>

                    {/* Network */}
                        <button id={'network'} onDoubleClick={triggerModalOpen} className='icon-button' >
                            <img id={'network'} src={networkImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> Social </div>
                        </button>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>

                    {/* Information */}
                        <button id={'information'} onDoubleClick={triggerModalOpen} className='icon-button' >
                            <img id={'information'} src={infoImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> Information </div>
                        </button>

                    {/* Message */}
                        <button id={'message'} onDoubleClick={triggerModalOpen} className='icon-button' >
                            <img id={'message'} src={textImage} alt="" />
                            <div style={{ color: 'white', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: 'Helvetica', fontSize: '15px' }}> Message </div>
                        </button>

                    <div></div>
                </div>
            </div>
            
            {renderTabs()}
            {tabs.information && <Information isOpen={true} trigger={triggerModalClose} />}

            <div className="taskbar">
                {isMenuOpen && <StartMenu isOpen={isMenuOpen} trigger={toggleMenu} info={triggerModalOpen} shutDown={props.shutDown} />}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div  style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>    
                            <button className="start-button" onClick={toggleMenu}> 
                                <div style={{ margin: '5px' }}> 
                                    <img src={logo} height='30px' width='30px' alt="" /> 
                                </div>
                                <div className='start-text'> 
                                    Start 
                                </div>
                            </button>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-start', overflow: 'hidden', alignItems: 'center' }}>
                            {renderTaskbarTabs()}
                        </div>
                    </div>
                    
                    <div className="taskbar-time" id={'information'}> <Time info={triggerModalOpen}/> </div>
                </div>
            </div>

        </div>
    );  
} 

