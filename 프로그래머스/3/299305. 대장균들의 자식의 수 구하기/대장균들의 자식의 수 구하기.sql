select e.id, (case when j.CHILD_COUNT is null then 0 else j.CHILD_COUNT end) as CHILD_COUNT from ecoli_data e
left join 
(select count(*) as CHILD_COUNT, parent_id as id from ecoli_data
where parent_id is not null
group by parent_id) j
on e.id= j.id