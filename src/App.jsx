import Map from './components/Map'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import ZoomInButton from './components/buttons/ZoomInButton';
import ZoomOutButton from './components/buttons/ZoomOutButton';
import MenuButton from './components/buttons/MenuButton';
import VolumeButton from './components/buttons/VolumeButton';
import RightSideBar from './components/RightSideBar';
import { useState } from 'react';
import useWindowSize from './hooks/useWindowResize';
import RotateYourDevice from './components/RotateYourDevice';
import { useRef } from 'react';
import MapElements from './components/MapElements';
import SideBar from './components/SideBar';
import AboutUsSidebar from './components/AboutUsSideBar';
import { useEffect } from 'react';
import Div100vh from 'react-div-100vh';

function App() {
    const [showRightSideBar, setShowRightSideBar] = useState(false)
    const [showLeftSideBar, setShowLeftSideBar] = useState(false)
    const {width:windowWidth, height:windowHeight} = useWindowSize();

    const [rerenderOnce, setRerenderOnce] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRerenderOnce(true);
        }, [1000])
    }, [])

    useEffect(() => {
        const appHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--app-height', `${window.innerHeight}px`)
        }
        window.addEventListener('resize', appHeight)
        appHeight()

        return () => window.removeEventListener('resize', appHeight)
    }, [])

    return (
        <>
            {/* <div className='bg-cream h-screen w-screen'>
                <Map setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar}/>
            </div> */}
            <Div100vh className='bg-cream'>
                <Map setShowLeftSideBar={setShowLeftSideBar} setShowRightSideBar={setShowRightSideBar}/>
            </Div100vh>

            <SideBar showSideBar={showRightSideBar} setShowSideBar={setShowRightSideBar} position="right">
                <AboutUsSidebar setShowSideBar={setShowRightSideBar}/>
            </SideBar>

            <SideBar showSideBar={showLeftSideBar} setShowSideBar={setShowLeftSideBar} position="left">
                <AboutUsSidebar setShowSideBar={setShowLeftSideBar}/>
            </SideBar>

            {/* <RotateYourDevice /> */}
        </>

    );
    }
export default App