import "./table.css";


import { useTranslation } from 'react-i18next';


// table import
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableDB = ({show}) => {
    const {t, i18n} =useTranslation();
    const rows = [
        {
            id:123,
            product: "dasdsd",
            img : "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            customer:" dasdadassd",
            date: "Month",
            amount : 34,
            method :"online",
            status :"Approved"
        },
        {
            id:123,
            product: "dasdsd",
            img : "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            customer:" dasdadassd",
            date: "Month",
            amount : 34,
            method :"online",
            status :"pending"
        },
        {
            id:123,
            product: "dasdsd",
            img : "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            customer:" dasdadassd",
            date: "Month",
            amount : 34,
            method :"online",
            status :"Approved"
        },
        {
            id:123,
            product: "dasdsd",
            img : "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            customer:" dasdadassd",
            date: "Month",
            amount : 34,
            method :"online",
            status :"pending"
        },
        {
            id:123,
            product: "dasdsd",
            img : "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            customer:" dasdadassd",
            date: "Month",
            amount : 34,
            method :"online",
            status :"Approved"
        },
      ]
    return ( 
        
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="TableCell">ID</TableCell>
          <TableCell className="TableCell">product</TableCell>
          <TableCell className="TableCell">costumer</TableCell>
          <TableCell className="TableCell">date</TableCell>
          <TableCell className="TableCell">amount</TableCell>
          <TableCell className="TableCell">method</TableCell>
          <TableCell className="TableCell">status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell >{row.id}</TableCell>
            <TableCell >
                <div className="cellWraper">
                    <img src={row.img}  className="image"/>
                    {row.product}
                </div>
            </TableCell>
            <TableCell className="TableCell">{row.customer}</TableCell>
            <TableCell className="TableCell">{row.date}</TableCell>
            <TableCell className="TableCell">{row.amount}</TableCell>
            <TableCell className="TableCell">{row.method}</TableCell>
            <TableCell className="TableCell">
                <span className={`${row.status}`}>{row.status}</span>
                
                </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

     );
}
 
export default TableDB;