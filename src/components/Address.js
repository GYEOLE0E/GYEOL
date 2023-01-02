import '../css/Address.css';
import { useEffect } from 'react';

const address = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.async = true;
        document.body.appendChild(script);
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
            }
        }).open();
    });

    return(
        <div id="Address">
            <div>
                <input type="text"/>
                <button>우편번호 검색</button>
            </div>
        </div>
    )
}

export default Address