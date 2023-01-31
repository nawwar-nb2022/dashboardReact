import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import per from "../../images/per.jpg";
import { useTranslation } from 'react-i18next';



import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Navbar = () => {
    const {t, i18n} =useTranslation();
    const {darkMode,dispatch} = useContext(DarkModeContext)

    return ( 
        <div className="Navbar" >
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder={t('search')}/>
                    <SearchIcon className="searchIcon"/>
                </div>
                <div className="items">
                    <div className="item">
                        
                           {i18n.language== 'ar'&& <button onClick={()=>{i18n.changeLanguage('en')}} className="lang-button">
                               {t("English") }
                            <GTranslateOutlinedIcon className="lang-icon" fontSize="small"/>
                            </button>}
                           { i18n.language=='en' &&<button onClick={()=>{i18n.changeLanguage('ar')}} className="lang-button">
                               {t('Arabic')}
                               <GTranslateOutlinedIcon className="lang-icon" fontSize="small"/> 
                            </button>}
                    </div>
                     <div className="item">
                        <DarkModeOutlinedIcon  onClick={()=>{dispatch({type:"toggle"})} }/> 
                    </div>
                    
                    <div className="item">
                        <FullscreenExitOutlinedIcon/>
                    </div>
                    <div className="item">
                        <NotificationsOutlinedIcon/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ListRoundedIcon/>
                    </div>
                    <div className="item">
                        <img src={per} alt="admin-icon" title="admin-icon" className="admin-icon"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;