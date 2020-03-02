create table site
(
  id            int auto_increment
    primary key,
  bigraph_id    int                                 null,
  site_id       varchar(32)                         null,
  site_outer_id varchar(32)                         null,
  create_time   timestamp default CURRENT_TIMESTAMP null,
  update_time   timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP
);

create index site_bigraph_id_index
  on site (bigraph_id);

INSERT INTO bigraph.site (id, bigraph_id, site_id, site_outer_id, create_time, update_time) VALUES (2, 9, '1', '1', '2020-02-29 15:47:25', '2020-02-29 15:47:25');
INSERT INTO bigraph.site (id, bigraph_id, site_id, site_outer_id, create_time, update_time) VALUES (3, 15, '2', null, '2020-03-01 15:09:52', '2020-03-01 15:09:52');
INSERT INTO bigraph.site (id, bigraph_id, site_id, site_outer_id, create_time, update_time) VALUES (12, 10, '2', '2', '2020-03-01 16:44:30', '2020-03-01 16:44:30');
INSERT INTO bigraph.site (id, bigraph_id, site_id, site_outer_id, create_time, update_time) VALUES (13, 10, '1', '1', '2020-03-01 16:44:30', '2020-03-01 16:44:30');