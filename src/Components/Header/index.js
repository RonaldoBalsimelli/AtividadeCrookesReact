import React from 'react';
import { Link } from 'react-router-dom'

import { AreaHeder } from './styled'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Header(){
    return (
       <AreaHeder>
            <div className="container">
                <div className="logo">
                <Link to="/">Crookes</Link>    
                </div>

                <nav>
                    <ul>
                        <li><Link to="/pag1">Página 1</Link></li>
                        <li><Link to="/pag2">Página 2</Link></li>
                        <li><Link to="/pag3">Página 3</Link></li>
                        <li><Link to="/logout"><ExitToAppIcon />Sair</Link></li>
                    </ul>
                </nav>
            </div>
       </AreaHeder>
    );
}

export default Header;
