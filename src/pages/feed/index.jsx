import React from 'react';
import { Header } from '../../components/Header'
import { Column, Container, Title, TitleHighlight } from './styles'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';


const Feed = () => {
    return(<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Column>
            <Column flex={1}>
                <TitleHighlight># Ranking dos top 5</TitleHighlight>
                <UserInfo percentual={35} nome="GMR" image="https://avatars.githubusercontent.com/u/56043956?s=400&u=0d818c6e7fafeb84598dc11623b97eb465b7ea5c&v=4"/>
                <UserInfo percentual={55} nome="GMR" image="https://avatars.githubusercontent.com/u/56043956?s=400&u=0d818c6e7fafeb84598dc11623b97eb465b7ea5c&v=4"/>
                <UserInfo percentual={95} nome="GMR" image="https://avatars.githubusercontent.com/u/56043956?s=400&u=0d818c6e7fafeb84598dc11623b97eb465b7ea5c&v=4"/>
                <UserInfo percentual={15} nome="GMR" image="https://avatars.githubusercontent.com/u/56043956?s=400&u=0d818c6e7fafeb84598dc11623b97eb465b7ea5c&v=4"/>
                <UserInfo percentual={5} nome="GMR" image="https://avatars.githubusercontent.com/u/56043956?s=400&u=0d818c6e7fafeb84598dc11623b97eb465b7ea5c&v=4"/>
            </Column>
        </Container>
    </>)
}

export { Feed }