import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from '../../components/Button/index'
import { Header } from '../../components/Header'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
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
import { useForm } from 'react-hook-form';

const schema = yup.object({
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup.string().min(6, 'pelo menos 6 caracters para senha').required('Campo obrigatório'),
}).required();

const Login = () => {

    const {control, handleSubmit, formState: {errors, isValid}} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    console.log(isValid, errors);
    const onSubmit = data => console.log(data);

    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/feed')
    }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input  name="email" errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail/>}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} type='password' placeholder='Senha' leftIcon={<MdLock/>}/>
                        <Button title='Entrar' variant='secondary' type='submit'/>
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