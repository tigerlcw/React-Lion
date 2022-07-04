import {
    Main,
    MediaDiv,
} from './styledComponent';

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import {darkTheme, GlobalStyles, lightTheme} from './styles';
import { ThemeProvider } from 'styled-components';
import useState from 'react';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const loading = false;
    const isPost = false;
    return <>
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>

    <GlobalStyles />
    <MediaDiv>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
                <Slogun />
                <ShowPostList />
            </Main>
        <Footer />
    </MediaDiv>
    </ThemeProvider>
    </>;
}

export default App;
