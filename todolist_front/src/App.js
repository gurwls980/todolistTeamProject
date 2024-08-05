import { Global } from '@emotion/react';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import ReactModal from 'react-modal';
import { reset } from './styles/global';
ReactModal.setAppElement("#root");
/** @JsxImportSource @emotion/react */

function App() {
    return(
        <>
            <Global css={reset} />
            <MainContainer/>
        </>
    );
}
export default App;