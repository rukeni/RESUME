import React from 'react';
import ReactMarkDown from 'react-markdown';

const index = () => {
  const markdown = `
  ### Snowflakes Server (스노우 플레이크 서버)

 일반적인 서버 운영법은 서버 설치 - OS 인스톨 - 필요한 소프트웨어 & 어플리케이션 설치. 그리고 문제가 생긴경우 패치를 하거나 정기적인 보안 패치 튜닝들을 해당 서버에 지속적으로 적용하고 어플리케이션은 CI/CD 등의 툴을 이용하여 배포하는 구조를 가지고 있었다.

 이렇게 설정된 서버는 다시 똑같이 설정하기가 매우 어렵다. 문서화가 꼼꼼히 되는 경우도 드물고 담당자가 바뀌거나 관리 조직이 바뀌는 경우에는 더 곤란한 상황이 생긴다. 그래서 한번 설정하면 다시 설정이 불가능하다고 하여 '마치 눈처럼 녹아버리는' 스노우 플레이크 서버라고 부른다.

  ### Phoenix Server (피닉스 서버)

 피닉스는 불사조로도 알려져 있지만 정확히는 불속에서 다시 태어나는 re-born(재탄생)의 개념을 가지고있다. 새로운 소프트웨어를 인스톨하거나 설정을 변경할때 기존 서버에 변경 작업을 더 하지 않고 처음 OS 설치에서 부터 전 과정 다시 반복하는 것이다. 스노우 플레이크 서버라면, 기존 작업에다가 새로운 소프트웨어를 설치하겠지만 피닉스 서버 패턴에 의하면 새 VM을 만들고 처음부터 다시 설치하고 기존 VM을 교체해버린다. 이러한 피닉스 패턴의 장점은 다음과 같다.

- 스크립트에 모든 설정 정보가 유지되게 된다.
- 이 스크립트를 git와 같은 소스 코드 관리 시스템을 이용해서 관리하게 되면, 어떤 부분을 누가 어떻게 수정을 했는지 추적이 가능하게 된다.
  `;
  return (
    <div className="flex-1 flex flex-col w-3/4 flex-wrap pl-20 justify-end items-center">
      <ReactMarkDown className="p-10 font-bold flex flex-col justify-center items-center" source={markdown} />
    </div>
  );
};

export default index;
