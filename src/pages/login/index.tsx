import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from '../../components/Button/index'
import { Header } from '../../components/Header'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { api } from "../../services/api";
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
import { IformData } from './types';

const schema = yup.object({
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup.string().min(6, 'pelo menos 6 caracters para senha').required('Campo obrigatório'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const {control, handleSubmit, formState: { errors }} = useForm<IformData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const onSubmit = async (formData: IformData) => {
        try {
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            } else(
                alert('Email ou senha inválido(s)')
            )
        } catch (error) {
            alert('Tente novamente')
        }
    };

    console.log("errors", errors);

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
                        <Input  name="email" placeholder='E-mail' leftIcon={<MdEmail/>} control={control}/>
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