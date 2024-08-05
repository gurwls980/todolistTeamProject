export const container = css`
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const h2 = css`
    padding: 6px;
        margin-left: 30px;
        border-bottom: 4px solid #D6E0F0;
        margin-left: 30px;
        color: #a3c2e5;
        font-family: GangwonEduSaeeum_OTFMediumA;
        font-size: 60px;
        text-shadow: 1px 1px 0 #000000, 1px -1px 0 #000000, 1px -1px 0 #000000,-1px 1px 0 #000000;
        align-items: center;
`;

export const containerBox = css`
    position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
        height: 100px;
`;

export const inputBox = css`
    position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        display: flex;
        width: 100%;
        height: 70px;
`;

export const h1 = css`
    display: flex;
        justify-content: center;
        align-items: center;
`;

export const registerInput = css`
    width: 120px;
        height: 50%;
        margin: 20px 40px;
        padding: 10px;
        border: 2px solid #D6E0F0;
        border-radius: 8px;
        text-align: center;
        font-family: 'GangwonEduSaeeum_OTFMediumA';
        font-size: 21px;
`;

export const listTitle = css`
    font-family: 'EF_jejudoldam';
        color: #a3c2e5;
        font-size: 50px;
        text-shadow: 
        2px 1px 0 #000000, /* 왼쪽 아래 */
        2px -1px 0 #000000, /* 오른쪽 위 */
        2px -2px 0 #000000, /* 오른쪽 아래 */
        -2px 2px 0 #000000; /* 왼쪽 위 */
`;

    // table th:nth-of-type(1) {
    //     width: 30px;
    // }

    // table th:nth-of-type(2) {
    //     width: 300px;
    // }

    // table th:nth-of-type(3) {
    //     width: 90px;
    // }

    // table th:nth-of-type(4) {
    //     width: 40px;
    // }

    // table th:nth-of-type(5) {
    //     width: 40px;
    // }

    export const scBox = css`
        display: flex;
`;

export const sc = css`
        display: flex;
        align-items: center;
        margin-left: auto;
        background-color: #ffffff;
       
        border: none;

        &:hover {
            background-color: #fafafa;
        }
        &:active{
            background-color: #dbdbdb;
        }
`;

export const td = css`
        text-align: left; /* 텍스트 왼쪽 정렬 */
        padding: 10px;
        margin-bottom: 5px;
`;

export const todoCheck = css`
        min-width: 25px;
        margin-right: 10px;
        cursor: pointer;
`;

export const todoCheck:checked + .content = css`
        text-decoration: line-through; /* 체크된 경우 줄 그어지기 */
        color: gray; /* 체크된 항목 색상 변경 */
        background-color: #f0f0f0; 
        text-decoration-thickness: 2px;
`;

export const todoCheck:checked = css`
        accent-color: #a3c2e5; /* 체크박스의 색상 변경 */
`;

export const button = css`
        height: 100%;
        width: 30px;
        padding: 4px 6px;
        margin-left: 12px;
        color: #2f4fbb;
        border: none;
`;

export const registerBox = css`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        margin-top: 10px;
`;

export const submitBox = css`
        display: flex;
        justify-content: center;
        border-radius: 10px;
        box-sizing: border-box;
        border: 2px solid #D6E0F0;
        margin: 30px 60px 30px 30px;
        width: 50%;
        height: 80%;
        font-size: 40px;
        font-family: 'GangwonEduSaeeum_OTFMediumA';

        &:focus {
            background-color: #D6E0F0; /* 클릭 시 배경 색상 변경 */
        }
`;

export const listContainer = css`
        position: relative;
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        justify-content: center;
        margin-top: 100px;
        margin-left: 40px;
`;

export const list= css`
        position: relative;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden; /* 수평 스크롤바 숨기기 */
        box-sizing: border-box;
        border: 2px solid #D6E0F0;
        border-radius: 10px;
        margin-right: 40px;
        width: 600px;
        height: 700px;
        background-color: white;
`;

export const list::-webkit-scrollbar = css`
        display: none;
`;

export const .list h2 = css`
        padding: 6px;
        margin-left: 30px ;
        border-bottom: 4px solid #D6E0F0;
        margin-left: 30px ;
        color: #a3c2e5;
        text-shadow: 
        1px 1px 0 #000000, /* 왼쪽 아래 */
        1px -1px 0 #000000, /* 오른쪽 위 */
        1px -1px 0 #000000, /* 오른쪽 아래 */
        -1px 1px 0 #000000; /* 왼쪽 위 */
        font-family: 'GangwonEduSaeeum_OTFMediumA';
        font-size: 50px;
`;

export const .list thead = css`
        padding:0;
        margin: 24px;
`;

export const .list tr = css`
        display: flex;
        justify-content: space-between;
        text-align: center;
        width: auto;
        margin:8px;
        padding: 6px;
        border-bottom: 2px solid #D6E0F0;
`;

export const tr = css`
        position: relative;
`;

export const th = css`
        font-family: 'GangwonEduSaeeum_OTFMediumA';
        background-color: #f4f4f4;
`;

export const table = css`
        width: 100%;
`;

export const content = css`
        max-width: 300px; /* 최대 너비 설정 */
        min-width: 300px;
        overflow-wrap: break-word;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 5px;
        font-family: 'GangwonEduSaeeum_OTFMediumA';
        font-size: 35px;
        color: #333333;
`;

export const date = css`
        text-align: center;
        font-family: 'GangwonEduSaeeum_OTFMediumA';
        font-size: 25px;
`;

export const updateContent = css`
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        max-width: 400px;
        font-family: 'GangwonEduSaeeum_OTFMediumA';
`;

export const todo = css`
        min-width: 20px;
        margin-right: 10px;
        cursor: pointer;
`;

export const todo:checked + .content = css`
        text-decoration: line-through; /* 체크된 경우 줄 그어지기 */
        color: gray; /* 체크된 항목 색상 변경 */
        background-color: #f0f0f0; 
        text-decoration-thickness: 2px;
`;

export const todo:checked = css`
        accent-color: #a3c2e5; /* 체크박스의 색상 변경 */
`;