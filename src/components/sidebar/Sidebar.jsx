import './sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PQLR from '@mui/icons-material/ProductionQuantityLimitsRounded';
import BorderStyleRoundedIcon from '@mui/icons-material/BorderStyleRounded';
import Markunread from '@mui/icons-material/MarkunreadMailboxOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'


import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
const Sidebar = () => {
    const [t, i18n] =useTranslation()
    const {dispatch} = useContext(DarkModeContext)

    return ( 
        <div className="sidebar">
            <div className="top">
                <span className="logo">
                    QM
                </span>
            </div>
            <div className="center">

                <ul>
                    <p className="title">{t('Main')}</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <Link to="/" style={{textDecoration:"none"}}>{t("Dashboard")}</Link>
                    </li>
                    <p className="title">{t("LISt")}</p>
                    <li>
                        <PeopleAltRoundedIcon className="icon"/>
                        <Link to="/users" style={{textDecoration:"none"}}>{t("Users")}</Link>
                    </li>
                    <li>
                        <PQLR className="icon"/>
                        <Link to="product" style={{textDecoration:"none"}}>{t("Product")}</Link>
                    </li>
                    <li>
                        <BorderStyleRoundedIcon className="icon"/>
                        <span>
                        {t("Orders")}
                        </span>
                    </li>
                    <li>
                        <Markunread className="icon"/>
                        <span>
                        {t("Delivery")}
                        </span>
                    </li>
                    <p className="title">{t("Useful")}</p>
                    <li>
                        <QueryStatsOutlinedIcon className="icon"/>
                        <span>
                        {t("Stats")}
                        </span>
                    </li>
                    <li>
                        <NotificationsActiveOutlinedIcon className="icon"/>
                        <span>
                        {t("Notification")}
                        </span>
                    </li>
                    <p className="title">{t("Service")}</p>
                    <li>
                        <WysiwygIcon className="icon"/>
                        <span>
                        {t("System")}
                        </span>
                    </li>
                    <li>
                        <AddLocationAltIcon className="icon"/>
                        <span>
                        {t("logs")}
                        </span>
                    </li>
                    <p className="title">{t("Users")}</p>
                    <li>
                        <AccountBoxIcon className="icon"/>
                        <span>
                        {t("profile")}
                        </span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>
                        {t("logout")}
                        </span>
                    </li>
                </ul>

            </div>
            <hr/>
            <div className="bottom">
                <div className="colorhtem d" onClick={()=>dispatch({type:"dark"})}></div>
                <div className="colorhtem w" onClick={()=>dispatch({type:"light"})}></div>
            </div>
        </div>
     );
}
 
export default Sidebar;