import {
    FooterDiv,
    FooterBig,
    FooterSmall,
} from './styledComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
    
        <FooterDiv>
            <FontAwesomeIcon icon={faReact} />
            <FooterBig>for react study</FooterBig>
            <FooterSmall>for 멋사 프론트엔드 10기</FooterSmall>
        </FooterDiv>
        
    );
}

export default Footer;