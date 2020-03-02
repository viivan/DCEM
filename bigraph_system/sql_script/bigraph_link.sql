create table link
(
  id          int auto_increment
    primary key,
  bigraph_id  int                                 not null,
  link_from   varchar(32)                         null,
  link_to     varchar(32)                         null,
  create_time timestamp default CURRENT_TIMESTAMP null,
  update_time timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP
);

create index link_bigraph_id_index
  on link (bigraph_id);

INSERT INTO bigraph.link (id, bigraph_id, link_from, link_to, create_time, update_time) VALUES (2, 1, 'test', 'test', '2020-02-29 13:21:38', '2020-02-29 13:21:38');
INSERT INTO bigraph.link (id, bigraph_id, link_from, link_to, create_time, update_time) VALUES (3, 1, 'test', 'test', '2020-02-29 13:27:14', '2020-02-29 13:27:14');
INSERT INTO bigraph.link (id, bigraph_id, link_from, link_to, create_time, update_time) VALUES (4, 1, 'test', 'test', '2020-02-29 13:29:07', '2020-02-29 13:29:07');
INSERT INTO bigraph.link (id, bigraph_id, link_from, link_to, create_time, update_time) VALUES (5, 7, 'test', 'test', '2020-02-29 13:31:06', '2020-02-29 13:31:06');
INSERT INTO bigraph.link (id, bigraph_id, link_from, link_to, create_time, update_time) VALUES (8, 9, 'test', 'test', '2020-02-29 15:47:25', '2020-02-29 15:47:25');