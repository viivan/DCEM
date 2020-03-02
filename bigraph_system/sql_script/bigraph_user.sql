create table user
(
  id            int auto_increment
    primary key,
  user_password varchar(64)                         not null,
  user_id       varchar(64)                         not null,
  name          varchar(64)                         not null,
  create_time   timestamp default CURRENT_TIMESTAMP null,
  update_time   timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP,
  constraint user_user_id_uindex
    unique (user_id)
)
  charset = utf8;

