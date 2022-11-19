import React from "react"
import logo from "../../assets/logo-dio.png";
import { 
    BuscarInputContainer,
    Input,
    Row,
    Container,
    Menu,
    MenuRigth,
    Wrapper,
    UserPicture
} from "./styles";
import { Button } from "../Button";

export const Header = ({autenticado}) => {
    return(<>
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo Dio" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar"/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/56043956?s=400&u=0d818c6e7fafeb84598dc11623b97eb465b7ea5c&v=4"/>
                    ) : (
                        <>
                            <MenuRigth href="#">Home</MenuRigth>
                            <Button title='Entrar'/>
                            <Button title='Cadastrar'/>                        
                        </>
                    )}

                </Row>
            </Container>
        </Wrapper>
    </>)
}