import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
  LoadingDiv,
  LoadingImg,
  PostReadDiv,
  PostReplDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  Repl,
  ReplInput,
  ReplSubmitDiv,
  ReplTitleDiv,
  Replwriter,
  WritereplDiv,
} from './styledComponent';
const postData = {
  title: '로딩이 빙글빙글',
  contents: '로딩이 빙글빙글 돌아가는 4학년의 하루~~~~',
};

const replData = [
  {
    id: 2,
    contents: '응애?',
  },
  {
    id: 5,
    contents: '4학년은 응애가 아닙니다!',
  },
];
const countRepls = (repls) => {
  console.log('리뷰 개수를 세는 중...');
  return repls.length;
};
const ShowPost = (props) => {
  const Params = useParams();
  const [post, setPost] = useState(null);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPost(postData);
      setPostLoading(false);
    }, 300);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setRepls(replData);
      setReplLoading(false);
    }, 1000);
  }, []);

  const [repl, setRepl] = useState('');

  const onChange = (e) => {
    setRepl(e.target.value);
  };

  // for useMemo
  const replCount = useMemo(() => countRepls(repls), [repls]);
  // const replCount = countRepls(repls);

  if (!Params.postID) {
    return <PostSection>잘못된 접근입니다.</PostSection>;
  }
  return (
    <div>
      <PostSection>
        <PostTitleDiv>
          <PostTitle>
            {/* title */}
            {post && post.title}
          </PostTitle>
        </PostTitleDiv>

        {postLoading ? (
          <LoadingDiv>
            <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
          </LoadingDiv>
        ) : (
          <PostReadDiv>{post && post.contents} </PostReadDiv>
        )}

        {/* post contents */}

        <ReplTitleDiv>댓글 {replCount}</ReplTitleDiv>
        {replLoading ? (
          <LoadingDiv>
            <LoadingImg src={`${process.env.PUBLIC_URL}/img/loading.svg`} />
          </LoadingDiv>
        ) : (
          repls &&
          repls.map((element) => (
            <PostReplDiv key={element.id}>
              <Replwriter>익명</Replwriter>
              <Repl>{element.contents}</Repl>
            </PostReplDiv>
          ))
        )}

        <WritereplDiv>
          <ReplInput onChange={onChange} value={repl}></ReplInput>
          <ReplSubmitDiv>
            <span>입력</span>
          </ReplSubmitDiv>
        </WritereplDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;