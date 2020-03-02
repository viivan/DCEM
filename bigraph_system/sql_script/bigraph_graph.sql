create table graph
(
  id            int auto_increment
    primary key,
  xml_string    text                                null,
  user_id       int                                 null,
  data_clusters text                                null,
  term_language text                                null,
  type          varchar(64)                         null,
  request_count int       default 0                 null,
  create_time   timestamp default CURRENT_TIMESTAMP null,
  update_time   timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP,
  name          varchar(64)                         null,
  request_type  varchar(32)                         null
);

create index graph_user_id_index
  on graph (user_id);

INSERT INTO bigraph.graph (id, xml_string, user_id, data_clusters, term_language, type, request_count, create_time, update_time, name, request_type) VALUES (10, '<DC flag="DC1" description="Data Cell">
	<S description="services">
		<s>s1</s>
	    <s>s2</s>
	</S>
	<E description="finite edges">
		<e flag="e1"> </e>
	</E>
	<Ctrl description="the mapping between S and C">
		<s flag="s1">
			<C flag="C1" description="a dervice control" >
				<CN description="control Name">s1:control.name</CN>
				<CT description="control type">s1:control.type</CT>
				<P description="a service Ports">
					<p flag="port1">
						<pI description="port Id">s1.port1</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">input</pC>
					</p>
					<p flag="port2">
						<pI description="port Id">s1.port2</pI>
						<pN description="port Name">port2.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">output</pC>
					</p>
				</P>
				<CL description="control level">
					<DL description="dependency level">single</DL>
					<CN description="control name">null</CN >
				</CL>
				<U description="service availability">0.95</U>
			</C>
		</s>
		<s flag="s2"> 
			<C flag="C2" description="a dervice control" >
				<CN description="control Name">s2:control.name</CN>
				<CT description="control type">s2:control.type</CT>
				<P description="a service Ports">
					<p flag="port1">
						<pI description="port Id">s2.port1</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">input</pC>
					</p>
					<p flag="port2">
						<pI description="port Id">s2.port2</pI>
						<pN description="port Name">port2.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">output</pC>
					</p>
					
				</P>
				<CL description="control level">
					<DL description="dependency level">single</DL>
					<CN description="control name">null</CN >
				</CL>
				<U description="service availability">0.88</U>
			</C>
		</s >
	</Ctrl>
	<cL description="link graph ">
		<edgeLink flag="e1">
			<linkPort>s1.port2</linkPort>
			<linkPort>s2.port1</linkPort>
		</edgeLink >
	</cL>
	<cP description="place graph ">
		<root flag="root0" >
			<s flag="s1"></s>
			<s flag="s2"></s>
		</root>
	</cP>
</DC>', 1, '该数据细胞中共有两个服务，分别为s1,s2,s1中的输出s2中的输入，s1顺序调用s2,形成顺序结构', 'test', 'DC', 171, '2020-03-01 09:31:38', '2020-03-01 17:23:45', '数据细胞1', 'GET');
INSERT INTO bigraph.graph (id, xml_string, user_id, data_clusters, term_language, type, request_count, create_time, update_time, name, request_type) VALUES (11, '<DC flag="DC2" description="Data Cell">
	<S description="services">
		<s>s1</s>
	    <s>s2</s>
	</S>
	<E description="finite edges">
		<e flag="e1"> </e>
		
	</E>
	<Ctrl description="the mapping between S and C">
	    <s flag="s1">
			<C flag="C1" description="a dervice control" >
				<CN description="control Name">s1:control.name</CN>
				<CT description="control type">s1:control.type</CT>
				<P description="a service Ports">
					<p flag="port1">
						<pI description="port Id">s1.port1</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">input</pC>
					</p>
					<p flag="port2">
						<pI description="port Id">s1.port2</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">output</pC>
					</p>
					<p flag="port3">
						<pI description="port Id">s1.port3</pI>
						<pN description="port Name">port3.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">callput</pC>
					</p>
				</P>
				<CL description="control level">
					<DL description="dependency level">single</DL>
					<CN description="control name">null</CN >
				</CL>
				<U description="service availability">0.95</U>
			</C>
		</s>
	    <s flag="s2"> 
			<C flag="C2" description="a dervice control" >
				<CN description="control Name">s2:control.name</CN>
				<CT description="control type">s2:control.type</CT>
				<P description="a service Ports">
					<p flag="port1">
						<pI description="port Id">s2.port1</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">callput</pC>
					</p>
					<p flag="port2">
						<pI description="port Id">s2.port2</pI>
						<pN description="port Name">port2.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">output</pC>
					</p>
					
				</P>
				<CL description="control level">
					<DL description="dependency level">single</DL>
					<CN description="control name">null</CN >
				</CL>
				<U description="service availability">0.88</U>
			</C>
		</s >
	
	</Ctrl>
	<cL description="link graph ">
		<edgeLink flag="e1">
			<linkPort>s1.port1</linkPort>
			<linkPort>s2.port2</linkPort>
		</edgeLink >
		<innerLink>
			<innerName>s1.port3</innerName>
		</innerLink>
	</cL>
	<cP description="place graph ">
		<root flag="root0" >
			<s flag="s1">
				<site>site1</site>
				<s1 flag="s2"></s1>
			</s>
		</root>
	</cP>
	</DC>
	', 1, '该数据细胞中共有两个服务，分别为s1,s2，s1的输入是s2的输出，并且s1服务是s2的后置服务，从而形成循环结构。', 'test', 'DC', 5, '2020-03-01 13:35:14', '2020-03-01 17:20:16', '数据细胞2', 'GET');
INSERT INTO bigraph.graph (id, xml_string, user_id, data_clusters, term_language, type, request_count, create_time, update_time, name, request_type) VALUES (12, '<DC flag="DC3" description="Data Cell">
	<S description="services">
		<s>s1</s>
	</S>
	<E description="finite edges">
	</E>
	<Ctrl description="the mapping between S and C">
	    <s flag="s1">
			<C flag="C1" description="a dervice control" >
				<CN description="control Name">s1:control.name</CN>
				<CT description="control type">s1:control.type</CT>
				<P description="a service Ports">
					<p flag="port1">
						<pI description="port Id">s1.port1</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">callput</pC>
					</p>
					<p flag="port2">
						<pI description="port Id">s1.port2</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">output</pC>
					</p>
				</P>
				<CL description="control level">
					<DL description="dependency level">single</DL>
					<CN description="control name">null</CN >
				</CL>
				<U description="service availability">0.95</U>
			</C>
		</s>
	</Ctrl>
	<cL description="link graph ">
	</cL>
	<cP description="place graph ">
		<root flag="root0" >
			<s flag="s1"></s>
			<site>site1</site>
		</root>
	</cP>
	</DC>
	
	', 1, '该数据细胞中只有一个服务，为s1，s1上有2个端口，绿色为输出端口，红色为输入/输出端口', 'test', 'DC', 5, '2020-03-01 13:35:14', '2020-03-01 17:20:18', '数据细胞3', 'GET');
INSERT INTO bigraph.graph (id, xml_string, user_id, data_clusters, term_language, type, request_count, create_time, update_time, name, request_type) VALUES (13, '<DC flag="DC1" description="Data Cell">
	<S description="services">
		<s>s1</s>
	    <s>s2</s>
		<s>s3</s>
		<s>s4</s>
	</S>
	<E description="finite edges">
		<e flag="e1"> </e>
		<e flag="e2"> </e>
		<e flag="e3"> </e>
		<e flag="e4"> </e>
	</E>
	<Ctrl description="the mapping between S and C">
	    <s flag="s1">
			<C flag="C1" description="a dervice control" >
				<CN description="control Name">s1:control.name</CN>
				<CT description="control type">s1:control.type</CT>
				<P description="a service Ports">
					<p flag="port1">
						<pI description="port Id">s1.port1</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">input</pC>
					</p>
					<p flag="port2">
						<pI description="port Id">s1.port2</pI>
						<pN description="port Name">port2.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">output</pC>
					</p>
				
				</P>
				<CL description="control level">
					<DL description="dependency level">single</DL>
					<CN description="control name">null</CN >
				</CL>
				<U description="service availability">0.95</U>
			</C>
		</s>
	    <s flag="s2">
			<C flag="C2" description="a dervice control" >
				<CN description="control Name">s2:control.name</CN>
				<CT description="control type">s2:control.type</CT>
				<P description="a service Ports">
					<p flag="port1">
						<pI description="port Id">s2.port1</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">input</pC>
					</p>
					<p flag="port2">
						<pI description="port Id">s2.port2</pI>
						<pN description="port Name">port2.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">callput</pC>
					</p>
				</P>
				<CL description="control level">
					<DL description="dependency level">single</DL>
					<CN description="control name">null</CN >
				</CL>
				<U description="service availability">0.88</U>
			</C>
		</s >
		<s flag="s3">
			<C flag="C3" description="a dervice control" >
				<CN description="control Name">s3:control.name</CN>
				<CT description="control type">s3:control.type</CT>
				<P description="a service Ports">
					<p flag="port1">
						<pI description="port Id">s3.port1</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">input</pC>
					</p>
					<p flag="port2">
						<pI description="port Id">s3.port2</pI>
						<pN description="port Name">port2.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">callput</pC>
					</p>
				</P>
				<CL description="control level">
					<DL description="dependency level">single</DL>
					<CN description="control name">null</CN >
				</CL>
				<U description="service availability">0.84</U>
			</C>
		</s>
		<s flag="s4">
			<C flag="C4" description="a dervice control" >
				<CN description="control Name">s4:control.name</CN>
				<CT description="control type">s4:control.type</CT>
				<P description="a service Ports">
					<p flag="port1">
						<pI description="port Id">s4.port1</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">input</pC>
					</p>
					<p flag="port2">
						<pI description="port Id">s4.port2</pI>
						<pN description="port Name">port2.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">output</pC>
					</p>
					<p flag="port3">
						<pI description="port Id">s4.port3</pI>
						<pN description="port Name">port3.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">callput</pC>
					</p>
					<p flag="port4">
						<pI description="port Id">s4.port4</pI>
						<pN description="port Name">port4.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">callput</pC>
					</p>
					
				</P>
					
				<CL description="control level">
					<DL description="dependency level">single</DL>
					<CN description="control name">null</CN >
				</CL>
				<U description="service availability">0.84</U>
			</C>
		</s>
	</Ctrl>
	<cL description="link graph ">
		<edgeLink flag="e1">
			<linkPort>s1.port2</linkPort>
			<linkPort>s2.port1</linkPort>
		</edgeLink >
		<edgeLink flag="e2">
			<linkPort>s1.port2</linkPort>
			<linkPort>s3.port1</linkPort>
		</edgeLink>
		<edgeLink flag="e3">
			<linkPort>s2.port2</linkPort>
			<linkPort>s4.port3</linkPort>
		</edgeLink>
		<edgeLink flag="e4">
			<linkPort>s3.port2</linkPort>
			<linkPort>s4.port4</linkPort>
		</edgeLink>
	</cL>
	<cP description="place graph ">
		<root flag="root0" >
			<s flag="s4">
				<s1 flag="s1"></s1>
				<s1 flag="s2"></s1>
				<s1 flag="s3"></s1>
			</s>
			<site>site1</site>
		</root>
	</cP>
</DC>
	
	', 1, '该数据细胞中共有四个服务，分别为s1~s4，服务s1的输出是s2和s3服务的输入，并且形成并行结构，s4服务的输入是s2、s3的输出，并且s4服务是s2、s3的后置服务，', 'test', 'DC', 2, '2020-03-01 13:35:14', '2020-03-01 13:39:09', '数据细胞4', 'GET');
INSERT INTO bigraph.graph (id, xml_string, user_id, data_clusters, term_language, type, request_count, create_time, update_time, name, request_type) VALUES (14, '<DC flag="DC5" description="Data Cell">
	<S description="services">
		<s>s1</s>
	</S>
	<E description="finite edges">
		
	</E>
	<Ctrl description="the mapping between S and C">
		<s flag="s1">
			<C flag="C1" description="a dervice control" >
				<CN description="control Name">s1:control.name</CN>
				<CT description="control type">s1:control.type</CT>
				<P description="a service Ports">
					<p flag="port1">
						<pI description="port Id">s1.port1</pI>
						<pN description="port Name">port1.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">input</pC>
					</p>
					<p flag="port2">
						<pI description="port Id">s1.port2</pI>
						<pN description="port Name">port2.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">output</pC>
					</p>
					<p flag="port4">
						<pI description="port Id">s1.port4</pI>
						<pN description="port Name">port2.name</pN>
						<pT description="port Type">json</pT>
						<pC description="port attribution">callput</pC>
					</p>
				</P>
					
				<CL description="control level">
					<DL description="dependency level">single</DL>
					<CN description="control name">null</CN >
				</CL>
				<U description="service availability">0.84</U>
			</C>
		</s>
	</Ctrl>
	<cL description="link graph ">
		<innerLink>
			<innerName flag="site1">s1.port2</innerName>
		</innerLink>
	</cL>
	<cP description="place graph ">
		<root flag = "root4">
			<s flag ="s1"></s>
			<site>site1</site>	
		</root>
	</cP>
	</DC>', 1, '该数据细胞中只有一个服务，为s1.s1上有3个端口，黄色为输入端口，绿色为输出端口并且经过站点1，红色为输入/输出端口', 'test', 'DC', 23, '2020-03-01 13:35:14', '2020-03-01 17:20:20', '数据细胞5', 'GET');
INSERT INTO bigraph.graph (id, xml_string, user_id, data_clusters, term_language, type, request_count, create_time, update_time, name, request_type) VALUES (15, null, null, '12', '12', null, 5, '2020-03-01 15:09:52', '2020-03-01 17:20:22', 'test', null);