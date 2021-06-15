import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import { css } from '@emotion/react';
import fontSize from '@/data/fontSize';
import Heading2 from '@/components/Contents/Heading2';

const IndexPage = () => {
  const style = css`
    & > p {
      text-indent: 15px;
      font-weight: 500;
      color: #333333;
      line-height: 1.8;
      letter-spacing: -1px;
      text-align: justify;
      transition: all 0.3s;
      margin: 40px 0;
    }
    
    & > ul {
      margin: 40px 0;
      
      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }
      
      & > li {
        font-weight: 500;
        letter-spacing: -1px;
        color: #333333;
        margin: 10px 0;
        line-height: 1.8;
        text-align: justify;
        transition: all 0.3s;
        padding: 10px;
        border-radius: 10px;
        background-color: #dddddd90;
        border: 1px solid #88888850;
        
        & > span {
          background-color: #ff4242;
          color: #ffffff;
          border-radius: 5px;
          padding: 0 5px;
        }
        
        &:nth-of-type(1) {
          margin-top: 0;
        }
        
        &:nth-last-of-type(1) {
          margin-bottom: 0;
        }
        
        &:before {
          content: '\\f0a9';
          font-family: 'Font Awesome 5 Free', sans-serif;
          font-weight: 900;
          margin-right: 5px;
        }
      }
    }
    
    @media (min-width: 1px) and (max-width: 600px) {
      p, ul > li {font-size: ${fontSize[1]};}
    }
    
    @media (min-width: 601px) and (max-width: 900px) {
      p, ul > li {font-size: ${fontSize[2]};}
    }
    
    @media (min-width: 901px) {
      p, ul > li {font-size: ${fontSize[3]};}
    }
  `;
  
  return (
    <>
      <AppLayout>
        <div css={style}>
          <Heading2>DiceRoll 소개</Heading2>
          <p>DiceRoll은 TRPG를 하다가 만들게 된 웹 프로그램입니다. 주사위를 간편하게 굴릴 수 있습니다. 미리 준비된 주사위를 굴릴 수도 있고 커스텀 주사위를 굴릴 수도 있습니다. TRPG 뿐만 아니라 다양한 용도로 사용할 수도 있습니다. 의도치는 않았지만 계산기로도... 상단의 프리셋, 커스텀 링크를 클릭해서 해당 페이지로 넘어갈 수 있습니다.</p>
          <Heading2>사용법</Heading2>
          <p>DiceRoll에는 두가지의 페이지가 있습니다. 프리셋 페이지에서는 미리 준비된 주사위를 굴릴 수 있습니다. D2부터 D100까지 준비되어 있습니다. 커스텀 페이지에서는 원하는 주사위를 입력해서 굴릴 수 있습니다. 커스텀 주사위의 주사위식 규칙은 아래의 목록을 참고해주세요.</p>
          <ul>
            <li><span>nDn</span>을 입력하면 n면체 주사위를 n번 굴립니다. 예를 들어 <strong>3D6</strong>을 입력하고 굴리면 6면체 주사위를 3번 굴립니다. 한개만 굴린다면 <span>1Dn</span> 혹은 <span>Dn</span>과 같은 형식으로 입력하면 됩니다.</li>
            <li>커스텀 주사위를 여러개 굴릴 수도 있습니다. <span>nDn nDn</span>와 같이 띄어서 입력하면 각각의 값을 보여줍니다. <span>nDn+nDn</span>와 같이 +로 더해주면 총합을 보여줍니다.</li>
            <li>주사위의 값에 특정한 수를 더하거나 뺄 수 있습니다. <span>nDn+4</span>를 입력하면 <strong>nDn</strong>에 <strong>4</strong>를 더한 값을 보여줍니다. 음수도 가능합니다. <span>nDn+-4</span>를 입력하면 주사위의 값에서 <strong>4</strong>를 뺀 값을 보여줍니다. 이런식으로 보너스나 패널티를 적용할 수 있습니다. 여러번 사용할 수 있습니다.</li>
            <li>주사위식에는 D와 d를 가리지 않고 한영을 전환하지 않은 상태에서 ㅇ를 넣어도 동작합니다.</li>
          </ul>
          <Heading2>주사위식 예시</Heading2>
          <ul>
            <li><strong>d20:</strong> 20면체 주사위 1개 굴리기</li>
            <li><strong>7ㅇ45:</strong> 45면체 주사위 7개 굴리기</li>
            <li><strong>d8+7+2d6:</strong> 8면체 주사위 1개 + 7 + 6면체 주사위 2개 굴리기</li>
            <li><strong>3D6 3D6:</strong> 6면체 주사위 3개를 따로 두 번 굴리기</li>
          </ul>
        </div>
      </AppLayout>
    </>
  );
};

export default IndexPage;