import styled from 'styled-components';

export const Container = styled.header`



  .chatScreen_timestamp{
    text-align: center;
    padding: 20px;
    color: gray;
  }

  .chatScreen_message{
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .chatScreen_text{
    margin-left: 10px;
    background-color: lightgray;
    padding: 15px;
    border-radius: 20px;
  }

  .chatScreen_textUser{
    margin-left: auto;
    background-color: #29b3cd;
    color: white;
    padding: 15px;
    border-radius: 20px;
  }

  /* Form Input to type a message*/
  .chatScreen_input{
    display: flex;
    padding: 5px;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid lightgray;
  }

  .chatScreen_inputField{
    flex: 1;
    padding: 10px;
    border: none;
  }

  .chatScreen_inputButton{
    border: none;
    margin-right: 20px;
    background-color: white;
    font-weight: bolder;
    color: #fe3d71;
  }
`;