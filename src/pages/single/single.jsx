import Chart from "../../components/chart/chart"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import TableDB from "../../components/table/table"
import "./single.css"
const Single = () => {
    const imgSre = "https://picsum.photos/200/300/?blur"
    return ( 
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>

                <div className="topSingle">
                    <div className="leftSingle">
                        <div className="editbuttonseingle">
                            edit
                        </div>
                        <h1 className="singleInfo">information</h1>
                        <div className="singleItem">
                            <img src={imgSre} alt="" className="singleImgeItem"/>

                        <div className="details">
                            <h1 className="titleitemsingle">nawwar nabhan</h1>
                            <div className="detailessingledata">
                                <span className="sigleITEMS">Email :</span>
                                <span className="sigleITEMV">naw@gmail.com</span>
                            </div>
                            <div className="detailessingledata">
                                <span className="sigleITEMS">phone :</span>
                                <span className="sigleITEMV">1321 321564</span>
                            </div>
                            <div className="detailessingledata">
                                <span className="sigleITEMS">Address :</span>
                                <span className="sigleITEMV">dfghjkl dfghjkl</span>
                            </div>
                        </div>

                         </div>
                    </div>
                    <div className="rightSingle">
                        <Chart aspect={3/1}/>
                    </div>
                </div>
                <div className="bottomSingle">
                    <TableDB show={"single user data"}/>
                </div>
            </div>
            
        </div>
     );
}
 
export default Single;