import React from "react"
import logo from "../../assets/logo-dio.png";
import { 
    BuscarInputContainer,
    Input,
    Row,
    Container,
    Menu,
    MenuRigth,
    Wrapper
} from "./styles";
import { Button } from "../Button";

export const Header = () => {
    return(<>
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo Dio" />
                    <BuscarInputContainer>
                        <Input                  placeholder="Buscar"/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <MenuRigth href="#">Home</MenuRigth>
                    <Button title='Entrar'/>
                    <Button title='Cadastrar'/>
                </Row>
            </Container>
        </Wrapper>
    </>)
}