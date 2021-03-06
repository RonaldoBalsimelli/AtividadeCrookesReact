import styled from 'styled-components'

export const AreaHeder = styled.div`
height: 60px;
background-image: linear-gradient(to right, #5B00F0,#ED4239);
color: #fff;

.container{
    padding: 5px 20px;
    display:flex;
    align-items: center;

}

    .logo{
        flex:1;
        
    }
    
            a{
                text-decoration:none;
                color: #fff;
                &:hover{
                    color: #F7C03B;
                }
            }

    nav{

        ul{
            display:flex;
        }

            li{
                list-style: none;
                margin-left: 20px;
            }

                a{
                    text-decoration:none;
                    color: #fff;
                    display: flex;
                    align-items: center;
                }
    }
`;