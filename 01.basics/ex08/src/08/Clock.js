import React from 'react';

export default function() {
    
    const date = new Date();
    
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let session = 'AM';

    

    return (
        /*
            comment01: 컴포넌트 안이 아니기 때문에 자바스크립트 구문이 가능하다.
        */


        <div
            /*
                comment02: 여기서도 다중행 주석이 가능하다. 비추천
            */
            className='clock'
            title='시계'
            prop01=''
        >

            {
                /*
                    JSX는 HTML이 아니다!!! <!-- --> 주석은 사용할 수 없다.
                */
            }

            // comment03: JSX 안에서의 주석을 사용하면 그대로 나온다.
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            {' : '}

            {/* comment04: 이런 방식으로 표현식이 실행되는 블록안에서 주석을 달아야 한다.: 추천ㅛ
             */}

            {('0' + minutes).slice(-2)}
            {' : '} 
            {seconds < 10 ? '0' + seconds : seconds}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    )
}