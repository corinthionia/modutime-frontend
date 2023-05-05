import { useNavigate, useParams } from 'react-router-dom';
import home from '../../assets/icons/home.svg';
import shareResult from '../../assets/icons/shareResult.svg';
import bubble from '../../assets/images/bubble.png';

import {
  BottomButton,
  BottomWrapper,
  Bubble,
  CurrentButton,
  CurrentButtonWrapper,
  ShareButton,
  Wrapper,
} from './ResultButton.styles';

const ResultButton = () => {
  const { roomUUID } = useParams();
  const navigate = useNavigate();

  const goToCurrent = () => {
    navigate(`/current/${roomUUID}`);
  };

  const shareData = {
    title: '모두의 시간',
    text: '쉽고 빠른 약속시간 정하기, 모두의 시간',
    url: `https://modu-time.site/current/${roomUUID}`, // 공유될 URL
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share(shareData);
    }
  };

  return (
    <Wrapper>
      <Bubble src={bubble} alt="go to current page bubble" />
      <BottomWrapper>
        <CurrentButtonWrapper>
          <CurrentButton
            src={home}
            alt="go to current page"
            onClick={goToCurrent}
          />
        </CurrentButtonWrapper>
        <BottomButton onClick={handleShareClick}>
          결과 공유하기
          <ShareButton src={shareResult} alt="share" />
        </BottomButton>
      </BottomWrapper>
    </Wrapper>
  );
};

export default ResultButton;
