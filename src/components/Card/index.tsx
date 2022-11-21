import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./style";

export const Card = () => {
    return(<>
        <CardContainer>
            <ImageBackground src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjkbEweKppIKtqtkGVBmQ8-sB24z3S2Fekw&usqp=CAU"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/56043956?s=400&u=0d818c6e7fafeb84598dc11623b97eb465b7ea5c&v=4" />
                    <div>
                        <h4>GMR - Gabriel de Matos Ramos</h4>
                        <p>Há 1 minuto</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto clone da DIO</h4>
                    <p>Feito no curso do bootcamp da OrangeTech</p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #JS #CSS</h4>
                    <p>
                        <FiThumbsUp /> 5
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    </>)
}