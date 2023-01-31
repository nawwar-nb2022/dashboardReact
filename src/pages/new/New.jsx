import { useTranslation } from 'react-i18next';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './new.css'

// icon


import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useEffect, useState } from 'react';
const New = () => {    
    const {t, i18n} =useTranslation();



    const [file , SetFile] = useState("")
    const [image, setimage] = useState()
    

    const [inputlist , setList] = useState({
        name : "",
        email:  "",
        pass : "",
        address: "",
        country: "",
    })
    const inputFunction = e=>{
        const value = e.target.value;
        const name = e.target.name;
        setList((prev)=> ({...prev , [name] : value}))
    }
    return ( 
        <div className="new">
            <div className="SideBarContAiner">
            <Sidebar/>
            </div>
            <div className="New_container">
                <Navbar/>
                <div className="NEw_top ">
                    <p>
                    {/* { t("Add new user")} */}
                    </p>
                </div>
              
                <div className="NEw_bottom">
                    <div className="new_bottom_Left">
                        <img src= {file ? URL.createObjectURL(file) : "https://picsum.photos/id/1027/100/100" } alt="test"/> 
                    </div>
                    <div className="new_bottom_Right">
                        <form>
                            <div className="input_container">
                                <label htmlFor="upload_image"> image :<DriveFolderUploadIcon className="icon"/> :</label>
                                <input type="file" onChange={e=>SetFile(e.target.files[0])}  id="upload_image" style={{display:"none"}}/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="Name">Name :</label>
                                <input type="text" 
                                id="Name"
                                name="name"
                                onChange={inputFunction}
                                value = {inputlist.name}
                                placeholder="Nawwar nabhan"/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="email">email :</label>
                                <input type="email"
                                id="email"
                                name="email"
                                onChange={inputFunction}
                                value = {inputlist.email}
                                placeholder="Nawwar@gmail.com"/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="pass">password :</label>
                                <input type="password" 
                                id="pass"
                                name="pass"
                                onChange={inputFunction}
                                value = {inputlist.pass}
                                placeholder="password"/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="Address">Address :</label>
                                <input type="text" 
                                id="Address"
                                name="address"
                                onChange={inputFunction}
                                value = {inputlist.address}
                                placeholder="tartus city"/>
                            </div>
                            <div className="input_container">
                                <label htmlFor="country">country :</label>
                                <input type="text"
                                id="country"
                                name="country"
                                onChange={inputFunction}
                                value = {inputlist.country}
                                placeholder="syria"/>
                            </div>
                            {console.log(inputlist.name)}
                                <button className="new_button">
                                    send
                                </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default New;