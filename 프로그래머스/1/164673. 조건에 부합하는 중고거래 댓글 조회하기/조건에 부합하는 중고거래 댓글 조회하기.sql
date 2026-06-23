-- 코드를 입력하세요

-- boards 에서 가져와야 할 컬럼 : 게시글 제목, 게시글 ID 
-- reply 에서 가져와야 할 컬럼 : 댓글 id, 댓글 작성자 id, 댓글 내용, 댓글 작성일
-- 필요 조건 : 2022년 10월 작성글 
-- 정렬조건 : 댓글 작성일 오름차순 , 게시글 제목
-- 조인 조건 : 게시글 ID

SELECT B.TITLE, B.BOARD_ID, R.REPLY_ID,R.WRITER_ID, R.CONTENTS, R.CREATED_DATE 
FROM USED_GOODS_BOARD B
JOIN USED_GOODS_REPLY R ON B.BOARD_ID = R.BOARD_ID
WHERE B.CREATED_DATE >= '2022-10-01' 
    AND B.CREATED_DATE <'2022-11-01'
ORDER BY R.CREATED_DATE , B.TITLE