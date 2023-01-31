import "./featured.css";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useTranslation } from 'react-i18next';
import { useState } from "react";

const Featured = () => {
    const [t, i18n] =useTranslation();
    
    const ProgressbarValue = '70%';
    return ( 
        <div className="featured">
            <div className="top-featured">
                <h1 className="title-featured">{t('TotalRevenue')}</h1>
                <MoreVertOutlinedIcon fontSize="small"/>
            </div>
            <div className="bottom-featured">
                <div className="featured-chart">
                    <CircularProgressbar value={70} 
                    text={ProgressbarValue} 
                    strokeWidth={3}/>
                </div>
                <p className="bottom-title">
                    {t('tsmt')}
                </p>
                <p className="bottom-amount">
                    434$
                </p>
                <p className="desc">
                    {t('descChart')}
                </p>



            <div className="itemS-featured">

                <div className="featured-item">
                    <div className="item-title">{t('Target')}</div>
                    <div className="item-result positive">
                        <KeyboardArrowUpRoundedIcon fontSize="small"/>
                        <div className="resultAmount">12$</div>
                    </div>
                </div>
                <div className="featured-item">
                    <div className="item-title">{t('LastWeek')}</div>
                    <div className="item-result negative">
                        <KeyboardArrowDownRoundedIcon fontSize="small"/>
                        <div className="resultAmount">12$</div>
                    </div>
                </div>
                <div className="featured-item">
                    <div className="item-title">{t('LastMonth')}</div>
                    <div className="item-result positive">
                        <KeyboardArrowUpRoundedIcon fontSize="small"/>
                        <div className="resultAmount">12$</div>
                    </div>
                </div>


            </div>


            </div>
        </div>
     );
}
 
export default Featured;