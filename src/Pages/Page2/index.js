import React from 'react';

import { Link } from 'react-router-dom'

import { AreaHeder } from './styled'

import { ContainerPage, TitlePage } from '../../Components/Main'

const Home = () => {
    return (
        <ContainerPage>
            <AreaHeder>
                <TitlePage>
                    Página 2
                </TitlePage>
                <Link to="/pag3"> Clique em mim para ir até a página 3</Link>
            </AreaHeder>
        </ContainerPage>
    );
}

export default Home;