import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Heading = styled.h1`
  color: #1e293b;
  font-size: 27px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Description = styled.p`
  color: #334155;
  font-size: 17px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`
export const Image = styled.img`
  width: 100%;
  margin-top: 12px;
`
export const HooksDescription = styled.p`
  color: #334155;
  font-size: 15px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`
export const Button = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  height: 35px;
  width: 80px;
  outline: none;
  border-width: 0px;
  cursor: pointer;
  border-radius: 7px;
  font-size: 11px;
`
