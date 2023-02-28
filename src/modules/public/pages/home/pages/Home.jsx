      import Cabecalho from "../../cabecalho/Cabecalho";
import {} from "../../../styles/Home.css";
import {} from '../../../styles/Reset.css'; 
import MenuLateral from "../../menu-lateral/MenuLateral";
import SearchIcon from '@mui/icons-material/Search';

import { initializeApp } from "firebase/app";
import { getFirestore,
   getDocs,
   collection,

  } from "firebase/firestore";
import { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const firebaseApp = initializeApp ({
  apiKey: "AIzaSyChFtHWpfGqZgCAs_Ur2t6Lm_wIpnnOCIQ",
  authDomain: "gestaodevendas-815fc.firebaseapp.com",
  projectId: "gestaodevendas-815fc",
});


export const Home = () => {
    const [produto, setProduto] = useState([]);

    
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "produto");
  
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(userCollectionRef);
          setProduto(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
      },[]);

      // const [lista, setLista] = ([]);

      // const listaOrdenada = lista.sort(Intl.Collator().compare);

    return(
      <>
            <Cabecalho/>
            <main className="principal">
              <MenuLateral/>
              <div>
                <section className="principal-bloco-pesquisa"> 
                        <div>
                            <label><SearchIcon/></label>
                            <input type="text" placeholder="Pesquisar Produto"/> 
                        </div>
                </section>   
{/* 
                {produto.map((user) => (
                    <ul key={user.id}>
                        <li>{user.name}</li>
                    </ul>
                  
                ))} */}
                <TableContainer 
                    component={Paper} 
                    style={{minHeight:350, marginTop:"3%", width:750}}
                    >
                          <Table 
                          sx={{ width: 750 }} 
                          aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow >
                                <TableCell 
                                align="left">Código</TableCell>
                                <TableCell align="left">Nome </TableCell>
                                <TableCell align="left">Estoque</TableCell>
                                <TableCell align="left">Valor</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                                {produto.map((user) => (
                            <TableRow
                             key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">{user.codigo}</TableCell>
                            <TableCell align="left" >{user.name}</TableCell>
                            <TableCell align="left">{user.quantidade}</TableCell>
                            <TableCell align="left">{user.preco}</TableCell>
                            

                          </TableRow>
                        
                                ))}
                        
                            </TableBody>
                          </Table>
                </TableContainer>
              </div>

            </main>
      </>  
    )
    
};
export default Home;