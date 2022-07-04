import {
    EachPostLi,
    LoadingDiv,
    LoadingImg,
    PagenumberDiv,
    PagingSection,
    PostLink,
    PostListDiv,
    PostRepl,
    PostSection,
    PostTitle,
    PostTitleDiv,
} from './styledComponent';

import {
    faArrowsRotate,
    faPenToSquare,
    faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import loadingIcon from './loading.svg';

function ShowPostList(isPost, loading) {
    return(
        <>
        <PostSection>
            <PostTitleDiv>
                <FontAwesomeIcon icon={faArrowsRotate} />
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
                        <EachPostLi>
                            <div>
                                <FontAwesomeIcon icon={faLocationPin} />
                                <PostLink>한성대학교, 프론트엔드 팀</PostLink>
                            </div>
                            <PostRepl>[23]</PostRepl>
                        </EachPostLi>
                    </ul>
                )}
            </PostListDiv>
        </PostSection>

    
        </>
    );
}

export default ShowPostList;