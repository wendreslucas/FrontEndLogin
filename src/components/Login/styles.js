import styled from 'styled-components'
import media from '../../ui/media'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`
export const StyleForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 450px;
  height: 400px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 7px 29px 0px;

  ${media.mobile} {
    width: 80%;
  }
`
export const DivBtn = styled.div`
  height: 260px;
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  ${media.mobile} {
    width: 80%;
  }
`

export const DivInputs = styled.div`
  width: 270px;

  ${media.mobile} {
    width: 80%;
  }
`

export const DivSpan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .btn {
    font-size: 0.8rem;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    border: none;
    background: transparent;
    color: #36a9e0;

    ${media.mobile} {
      font-size: 0.8rem;
    }

    /* visibility: ${props => (props.disabled ? 'hidden' : 'visible')}; */

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`
