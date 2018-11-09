insert into users
(user_name,
"password")
values
($1,$2)

returning *;