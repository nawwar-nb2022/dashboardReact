import Chart from '../../components/chart/chart'
import Featured from '../../components/featured/featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/widget'
import './home.css'
import { useTranslation } from 'react-i18next';
import TableDB from '../../components/table/table'

const Home = () => {
    const {t, i18n} =useTranslation();
    return ( 
        <div className="home">
            <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="Widgets">
                <Widget type="Users" striped/>     
                <Widget type="order" striped/>     
                <Widget type="earning"striped/>      
                <Widget type="balance"striped/>     
            </div>  

            <div className="charts">
            <Featured/>
            <Chart aspect={3/2}/>
            </div>
            <div className="list-container">
                <div className="listTitle">
                    {t("Latest")}
                </div>
                <TableDB show={"all data"}/>
            </div>
        </div>
        </div>
     );
}
 
export default Home;