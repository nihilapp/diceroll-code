import React from 'react';
import { css } from '@emotion/react';
import AppLayout from '@/layouts/AppLayout';
import { sizeData } from '@/data/size.data';
import { useSiteMeta } from '@/hooks';
import {
  Heading2, Li, Red, Ul
} from '@/components/Contents';

const IndexPage = () => {
  const IndexPageStyle = css`
    & > p {
      text-indent: 15px;
      font-weight: 500;
      color: #333333;
      line-height: 1.8;
      letter-spacing: -1px;
      text-align: justify;
      margin: 40px 0;

      @media all and (min-width: 1024px) {
        font-size: ${sizeData[3]};
      }

      @media all and (min-width: 768px) and (max-width: 1023px) {
        font-size: ${sizeData[3]};
      }

      @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${sizeData[2]};
      }

      @media all and (max-width: 479px) {
        font-size: ${sizeData[2]};
      }
    }
  `;

  const meta = useSiteMeta({
    title: '홈',
    url: '/',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div css={IndexPageStyle}>
          <Heading2>DiceRoll 소개</Heading2>
          <p>DiceRoll은 TRPG를 하다가 만들게 된 웹 프로그램입니다. 주사위를 간편하게 굴릴 수 있습니다. 미리 준비된 주사위를 굴릴 수도 있고 커스텀 주사위를 굴릴 수도 있습니다. TRPG 뿐만 아니라 다양한 용도로 사용할 수도 있습니다. 의도치는 않았지만 계산기로도... 상단의 프리셋, 커스텀 링크를 클릭해서 해당 페이지로 넘어갈 수 있습니다.</p>
          <Heading2>사용법</Heading2>
          <p>DiceRoll에는 두가지의 페이지가 있습니다. 프리셋 페이지에서는 미리 준비된 주사위를 굴릴 수 있습니다. D2부터 D100까지 준비되어 있습니다. 커스텀 페이지에서는 원하는 주사위를 입력해서 굴릴 수 있습니다. 커스텀 주사위의 주사위식 규칙은 아래의 목록을 참고해주세요.</p>
          <Ul>
            <Li><Red>nDn</Red>을 입력하면 n면체 주사위를 n번 굴립니다. 예를 들어 <strong>3D6</strong>을 입력하고 굴리면 6면체 주사위를 3번 굴립니다. 한개만 굴린다면 <Red>1Dn</Red> 혹은 <Red>Dn</Red>과 같은 형식으로 입력하면 됩니다.</Li>
            <Li>커스텀 주사위를 여러개 굴릴 수도 있습니다. <Red>nDn nDn</Red>와 같이 띄어서 입력하면 각각의 값을 보여줍니다. <Red>nDn+nDn</Red>와 같이 +로 더해주면 총합을 보여줍니다.</Li>
            <Li>주사위의 값에 특정한 수를 더하거나 뺄 수 있습니다. <Red>nDn+4</Red>를 입력하면 <strong>nDn</strong>에 <strong>4</strong>를 더한 값을 보여줍니다. 음수도 가능합니다. <Red>nDn+-4</Red>를 입력하면 주사위의 값에서 <strong>4</strong>를 뺀 값을 보여줍니다. 이런식으로 보너스나 패널티를 적용할 수 있습니다. 여러번 사용할 수 있습니다.</Li>
            <Li>주사위식에는 D와 d를 가리지 않고 한영을 전환하지 않은 상태에서 ㅇ를 넣어도 동작합니다.</Li>
          </Ul>
          <Heading2>주사위식 예시</Heading2>
          <Ul>
            <Li><strong>d20:</strong> 20면체 주사위 1개를 굴립니다.</Li>
            <Li><strong>7ㅇ45:</strong> 45면체 주사위 7개를 굴립니다.</Li>
            <Li><strong>d8+7+2d6:</strong> 8면체 주사위 1개 + 7 + 6면체 주사위 2개를 굴리고 값을 더합니다.</Li>
            <Li><strong>3D6 3D6:</strong> 6면체 주사위 3개를 따로 두 번 굴리고 값을 따로 계산합니다.</Li>
            <Li><strong>3d6+3d6+3d6:</strong> 6면체 주사위 3개를 세번 굴리고 값을 더합니다.</Li>
            <Li><strong>3D6*3:</strong> 위와 같은 주사위식을 줄일 수 있습니다.</Li>
          </Ul>
        </div>
      </AppLayout>
    </>
  );
};

export default IndexPage;
