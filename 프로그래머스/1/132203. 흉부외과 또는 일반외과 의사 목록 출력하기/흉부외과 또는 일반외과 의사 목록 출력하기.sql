-- 코드를 입력하세요
SELECT `DR_NAME`, `DR_ID`, `MCDP_CD`, `HIRE_YMD` from DOCTOR 
WHERE MCDP_CD IN ('CS','GS')
order by `HIRE_YMD` desc, `DR_NAME`;