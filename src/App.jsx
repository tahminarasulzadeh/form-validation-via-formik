import "./App.scss";
import styled from "styled-components";
import Form from "./components/Form";
import { compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import msgSlice from "./redux/reducers/msgSlice";

const store = configureStore({
  reducer: msgSlice,
});


const Title = styled.p`
  color: #fff;
  text-align: center;
  font-size: 25px;
`;
function App() {
  return (
    <Provider store={store}>
      <div className="center">
        <Title>The Form Title </Title>
        <Form />
      </div>
    </Provider>
  );
}

export default App;
