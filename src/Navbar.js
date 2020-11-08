import React, { useEffect ,useState} from 'react'
import './Navbar.css'
function Navbar() {
    const [show, handleshow] = useState(false);
    useEffect(() => {
    //we add a scroll eventlistener like when we scroll and the value of scroll along y exceeds 100 we show the black navbar
         window.addEventListener('scroll',()=>{
             if(window.scrollY >100){
                handleshow(true);
             }else handleshow(false);
         })
        return () => {
         window.removeElementListener("scroll");
        }
    }, [])
    return (
        <div className={`navbar ${show && "add_black"}`}>
            <img class="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix Logo" />
             
            <img class="nav__avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Netflix Logo" />
        </div>
    )
}

export default Navbar;
