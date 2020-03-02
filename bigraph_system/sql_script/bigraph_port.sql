create table port
(
  id             int auto_increment
    primary key,
  bigraph_id     int                                 not null,
  port_id        varchar(32)                         null,
  port_name      varchar(64)                         null,
  data_type      varchar(32)                         null,
  port_type      varchar(32)                         null,
  port_attribute varchar(32)                         null,
  create_time    timestamp default CURRENT_TIMESTAMP null,
  update_time    timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP
);

create index port_bigraph_id_index
  on port (bigraph_id);

INSERT INTO bigraph.port (id, bigraph_id, port_id, port_name, data_type, port_type, port_attribute, create_time, update_time) VALUES (3, 9, '1', '1', '1', '1', '1', '2020-02-29 15:47:25', '2020-02-29 15:47:25');