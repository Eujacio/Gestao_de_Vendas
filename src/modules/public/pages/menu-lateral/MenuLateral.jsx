import { } from "../../styles/MenuLateral.css";
import ReceiptIcon from '@mui/icons-material/Receipt';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import BallotIcon from '@mui/icons-material/Ballot';
import GradingIcon from '@mui/icons-material/Grading';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

export const MenuLateral = () => {
    return(
        <>
        
            <ul class="lista-menu">
            <li class="lista-menu__item">
                   <HomeIcon/> <a href="#" class="lista-menu__link">Home</a>
                </li>
                <li class="lista-menu__item">
                   <ReceiptIcon/> <a href="#" class="lista-menu__link">Balcão de Vendas</a>
                </li>
                <li class="lista-menu__item">
                    <CurrencyExchangeIcon /><a href="#" class="lista-menu__link">Movimento Financeiro</a>
                </li>
                <li class="lista-menu__item">
                    <BallotIcon/><a href="#" class="lista-menu__link">Cadastro de Produtos</a>
                </li>
                <li class="lista-menu__item">
                    <GradingIcon/><a href="#" class="lista-menu__link">Estoque</a>
                </li>
                <li class="lista-menu__item">
                    <EqualizerIcon/><a href="#" class="lista-menu__link">Relatórios</a>
                </li>
                <li class="lista-menu__item">
                    <AccountCircleIcon/><a href="#" class="lista-menu__link">Perfil</a>
                </li>
                <li class="lista-menu__item">
                    <LogoutIcon/><a href="#" class="lista-menu__link">Sair</a>
                </li>
            </ul>        
        </>
        
        
        )
    
};
export default MenuLateral;