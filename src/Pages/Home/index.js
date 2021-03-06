import React from 'react';

import { Link } from 'react-router-dom'
import { AreaHeder } from './styled'


import { ContainerPage, TitlePage } from '../../Components/Main'



const Home = () => {
    return (
        <ContainerPage>
            <AreaHeder>
                <TitlePage>
                    Seja Bem Vindo!
                </TitlePage>
                <div><Link to="/pag1"> Clique em mim para ir até a página 1</Link></div>
                <div><Link to="/pag2"> Clique em mim para ir até a página 2</Link></div>
                <div><Link to="/pag3"> Clique em mim para ir até a página 3</Link></div>
            </AreaHeder>
        </ContainerPage>
    );
}


export default Home;