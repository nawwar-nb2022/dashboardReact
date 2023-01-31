import "./widget.css"
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({type}) => {
    let data;

//test

const amount = 100;
const diff = 20


    switch(type){
        case "Users":
            data={
                title :"users",
                isMony :false ,
                link : 'see all users',
                icon: <PersonOutlineOutlinedIcon className="icon"/>
            };
            break
        case "order":
            data={
                title :"order",
                isMony :false ,
                link : 'see all order',
                icon: <ShoppingCartOutlinedIcon className="icon"/>
            };
            break
        case "earning":
            data={
                title :"earning",
                isMony :true ,
                link : 'show all net earning',
                icon: <MonetizationOnOutlinedIcon className="icon"/>
            };
            break
        case "balance":
            data={
                title :"balance",
                isMony :true ,
                link : 'see details',
                icon: <AccountBalanceWalletOutlinedIcon className="icon"/>
            };
            break
            default:
            break;
    }
    return ( 
        <div className="widget">
            <div className="left">
                <div className="title-w">{data.title}</div>
                <div className="counter-s">{amount} {data.isMony && '$'}  </div>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpRoundedIcon/>
                    {diff}%
                </div>
                <div className="person">
                   {data.icon}
                </div>
            </div>
        </div>
     );
}
 
export default Widget;