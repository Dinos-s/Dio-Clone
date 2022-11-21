import {useNavigate} from 'react-router-dom'
import { Button } from '../../components/Button/index'
import banner from "../../assets/banner.png";
import { Header } from '../../components/Header'
import { Container, Title, TextContent, TitleHighlight } from './styles'

const Home = () => {

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }

    return(<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                    Começe seu futuro agora;
                </Title>
                <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                     desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title='Começar agora' variant='secondary' onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={banner} alt="Imagem Principal" />
            </div>
        </Container>
    </>)
}

export { Home }