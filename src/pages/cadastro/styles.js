import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Wrapper = styled.div`
    max-width: 300px;
`;

export const Column = styled.div`
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: sapce-between;
    align-items: center;
    margin-top: 20px;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    font-family: 'Open Sans';
    width: 320px;
    line-height: 44px;
    margin-bottom: 20px;
    color: #FFFFFF;
`;

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    font-style: normal;
    width: 320px;
    line-height: 44px;
    margin-bottom: 20px;
`;

export const Subtitlelogin = styled.p`
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    width: 320px;
    line-height: 25px;
    margin-bottom: 35px;
`;

export const InfoText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
`;

export const InfoTextLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin: 10px;
    color: #FFFFFF;
    flex-direction: row;
`;

export const Btn = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    margin: 10px;
    color: #23DD7A;
    flex-direction: row;
`;