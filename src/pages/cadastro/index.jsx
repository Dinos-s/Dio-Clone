import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { useForm } from "react-hook-form"
import { MdEmail, MdLock, MdPerson } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { api } from "../../services/api"
import { 
    Btn,
    Column, 
    Container, 
    InfoText, 
    InfoTextLogin, 
    Row, 
    Subtitlelogin, 
    Title, 
    TitleLogin, 
    Wrapper 
} from "./styles"

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email inválido').required('Campo obrigatório'),
    password: yup.string().min(6, 'pelo menos 6 caracters para senha').required('Campo obrigatório'),
}).required();

export const Cadastro  = () => {

    const navigate = useNavigate();

    const {control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const onSubmit = async formData => {
        try {
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`)
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
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça o seu cadastro</TitleLogin>
                    <Subtitlelogin>Faça o seu cadastro e make the change</Subtitlelogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input  name="nome" errorMessage={errors?.name?.message} control={control} placeholder='Nome' leftIcon={<MdPerson/>}/>
                        <Input  name="email" errorMessage={errors?.email?.message} control={control} placeholder='E-mail' leftIcon={<MdEmail/>}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} type='password' placeholder='Senha' leftIcon={<MdLock/>}/>
                        <Button title='Entrar' variant='secondary' type='submit'/>
                    </form>
                    <Row>
                        <InfoText>
                            Ao clicar em "criar minha conta grátis",declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </InfoText>
                        <InfoTextLogin>
                            Já tenho conta. 
                            <Btn>Fazer login </Btn>
                        </InfoTextLogin>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}