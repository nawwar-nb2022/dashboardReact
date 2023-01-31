import { useTranslation } from "react-i18next"
import DDTable from "../../components/dataTable/dataTable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.css"

const List = () => {
    const [t, i18n]=useTranslation()
    return ( 

        <div className="list">
            <Sidebar/>
            <div className="listcontainer">
               <Navbar/>  
               <DDTable/>
            </div>
           
        </div>
     
    );
}
 
export default List;