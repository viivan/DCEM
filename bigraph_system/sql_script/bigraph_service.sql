create table service
(
  id                     int auto_increment
    primary key,
  bigraph_id             int                                 not null,
  service_id             varchar(32)                         null,
  service_name           varchar(64)                         null,
  service_parent_node    varchar(32)                         null,
  service_children_count varchar(32)                         null,
  service_inner          varchar(32)                         null,
  create_time            timestamp default CURRENT_TIMESTAMP null,
  update_time            timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP,
  service_site_number    varchar(32)                         null
);

create index service_bigraph_id_index
  on service (bigraph_id);

INSERT INTO bigraph.service (id, bigraph_id, service_id, service_name, service_parent_node, service_children_count, service_inner, create_time, update_time, service_site_number) VALUES (2, 9, '1', null, '1', null, '1', '2020-02-29 15:47:25', '2020-02-29 15:47:25', null);