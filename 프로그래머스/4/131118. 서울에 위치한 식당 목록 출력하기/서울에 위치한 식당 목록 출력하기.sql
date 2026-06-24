-- 코드를 입력하세요

# rest info : 


# 필요 조건 : 서울 위치한 식당 , 
#            리뷰 평균점수 소수점 세번째 자리 반올림, 
#            평균점수 기준 내림차순 정렬, 같다면 즐겨찾기 기준 내림차순 정렬  

# 조인 조건 : rest_id 

# 그룹바이를 rest_id와 rest-name 기준으로 하고 avg를 통해 평균점수 그리고 반올림 ? 

SELECT I.REST_ID, I.REST_NAME, I.FOOD_TYPE, I.FAVORITES, I.ADDRESS, R.SCORE 
FROM REST_INFO I 
JOIN (SELECT REST_ID, round(avg(REVIEW_SCORE),2) as SCORE FROM REST_REVIEW GROUP BY REST_ID) AS R
ON I.REST_ID = R.REST_ID
WHERE ADDRESS LIKE '서울%' 
ORDER BY R.SCORE DESC , FAVORITES DESC

