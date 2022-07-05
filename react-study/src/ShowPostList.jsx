import {
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostListDiv,
    PostSection,
    PostTitle,
    PostTitleDiv,
} from './styledComponent';

import {
    faArrowsRotate,
    faPenToSquare,
    faArrowsLeft,
    faArrowsRight
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EachPost from './EachPost';

function ShowPostList( {isPost, loading, addPost, postList} ) {
    return(
        <>
        <PostSection>
            <PostTitleDiv>
                <FontAwesomeIcon onclick={addPost} icon={faArrowsRotate} />
                <PostTitle>익명 게시판</PostTitle>
                <FontAwesomeIcon icon={faPenToSquare} />
            </PostTitleDiv>
            <PostListDiv>
                {loading ? (
                    <LoadingDiv>
                        <LoadingImg src={'./loading.svg'} />
                    </LoadingDiv>        
                ) : isPost? (
                    <LoadingDiv>아직 작성된 글이 없습니다.</LoadingDiv>
                ) : (
                    <ul>
                        {postList.map((element) => (
                             <EachPost key={element.id} title={element.title} replCount={element.replCount} />
                        ))}
                       
                    </ul>
                )}
            </PostListDiv>
        </PostSection>

        <PagingSection>
            <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowsLeft} />
            </PagenumberDiv>
            <PagenumberDiv>
                2
            </PagenumberDiv>
            <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowsRight} />
            </PagenumberDiv>
        </PagingSection>
        </>
    );
}

export default ShowPostList;