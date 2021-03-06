import React from 'react';

import { Link } from 'react-router-dom'

import { AreaHeder } from './styled'

import { ContainerPage, TitlePage } from '../../Components/Main'

import FullCalendar from '../../Components/FullCalendar'

const Home = () => {
    return (
        <ContainerPage>
                <AreaHeder>
                <TitlePage>
                    Página 3
                </TitlePage>
                <Link to="/"> Clique em mim para ir até a página Inicial</Link>
                
                <FullCalendar />
                
                </AreaHeder>
        </ContainerPage>
    );
}

export default Home;