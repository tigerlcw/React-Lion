import {
    Main,
    MediaDiv,
} from './styledComponent';

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import {darkTheme, GlobalStyles, lightTheme} from './styles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import ShowPost from './ShowPost';
import WritePost from './WritePost';


function App() {
    const initialPostList = [
        {id:1, title: '한성대학교 멋사', replCount: 1},
        {id:2, title: '한성대학교 멋사 프론트', replCount: 12},
        {id:3, title: '한성대학교 멋사 백엔드', replCount: 32},
    ];

    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(false);
    const [isPost, setIsPost] = useState(false);
    const [postList, setPostList] = useState(initialPostList);

    const addPost = () => {
        setPostList((PostList) => [
            ...PostList,{id:4, title: '한성대학교 멋사 새로운 글', replCount: 10},
        ]);
    }
    return (
    <>
    <ThemeProvider theme={darkMode?darkTheme:lightTheme}>

    <GlobalStyles />
    <MediaDiv>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Main>
                <Slogun />
                <ShowPostList loading={loading} isPost={isPost} postList={postList} addPost={addPost}/>
            </Main>
        <Footer />
    </MediaDiv>
    </ThemeProvider>
    </>
    );
}

export default App;
