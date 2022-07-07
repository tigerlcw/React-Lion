import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostListDiv,
    PostSection,
    PostTitle,
    PostTitleDiv,
    CursorDiv,
} from './styledComponent';

import {
    faArrowsRotate,
    faPenToSquare,
    faArrowLeft,
    faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EachPost from './EachPost';

const initialPostList = [
    {id:1, title: '한성대학교 멋사'},
    {id:2, title: '한성대학교 멋사 프론트'},
    {id:3, title: '한성대학교 멋사 백엔드'},
];

function ShowPostList( ) {

    const [loading, setLoading] = useState(true);
    const [isPost, setIsPost] = useState(false);
    const [postList, setPostList] = useState([]);

    const addPost = () => {
        setPostList((PostList) => [
            ...PostList,{id:4, title: '한성대학교 멋사 새로운 글'},
        ]);
    };

    const navigate = useNavigate();
    const goWrite = () => {
        navigate('/write');
    };

    useEffect(() => {
        setTimeout(() => {
            setPostList(initialPostList);
            setLoading(false);
        },500)
    },[]); // 첫 한 번만 렌더링 하고자 빈 배열 삽입

    return(
        <>
        <PostSection>
            <PostTitleDiv>
                <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
                <PostTitle>익명 게시판</PostTitle>
                <CursorDiv>
                <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
                </CursorDiv>
            </PostTitleDiv>
            <PostListDiv>
                {loading ? (
                    <LoadingDiv>
                        <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
                    </LoadingDiv>        
                ) : isPost? (
                    <LoadingDiv>아직 작성된 글이 없습니다.</LoadingDiv>
                ) : (
                    <ul>
                        {postList.map((element) => (
                             <EachPost key={element.id} title={element.title} postID={element.id} />
                        ))}
                       
                    </ul>
                )}
            </PostListDiv>
        </PostSection>
        {loading || (                        
        <PagingSection>
            <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowLeft} />
            </PagenumberDiv>
            <PagenumberDiv>
                2
            </PagenumberDiv>
            <PagenumberDiv>
            <FontAwesomeIcon icon={faArrowRight} />
            </PagenumberDiv>
        </PagingSection>
        )};
        </>
    );
}

export default ShowPostList;