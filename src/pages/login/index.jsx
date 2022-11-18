import { MdEmail, MdLock } from "react-icons/md";
import { Button } from '../../components/Button/index'
import { Header } from '../../components/Header'
import { 
    Container, 
    Title, 
    Column, 
    Wrapper, 
    TitleLogin, 
    Subtitlelogin, 
    Row, 
    EsqueciText, 
    CriarText 
} from './styles'
import { Input } from '../../components/Input';

const Login = () => {
    return(<>
        <Header/>
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça o seu cadastro</TitleLogin>
                    <Subtitlelogin>Faça o seu login e make the change</Subtitlelogin>
                    <form>
                        <Input placeholder='E-mail' leftIcon={<MdEmail/>}/>
                        <Input type='password' placeholder='Senha' leftIcon={<MdLock/>}/>
                        <Button title='Entrar' variant='secondary'/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }