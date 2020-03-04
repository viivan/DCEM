# DCME
DCME a prototype system based on a browser/server structure. 
The system is implemented in Java, relies on Apache Tomcat 8.0 as a web application server, 
and uses a MySql 5.7 database. 
The front-end UI is implemented by HTML5, CSS3, and JavaScript, and communicates with the server through AJAX technology. 
At ﬁrst, the system converts the salient features of services into XML structure as a representation of a data cell, 
then realizes the algorithms to ensure eﬃcient evolution of service composition 
and sends the result to the front-end. Finally, to visualize the derivation process of the data cell, 
we use the Raphael framework to represent the bigraphical structure in the front-end.

Derivation process is based on the [Big Red](http://bigraph.org/papers/gcm2012/). The project is in the DCME's src folder.

note: **Must Use Firefox browser**

## Advantages
- Support Multiple Platforms
- Simplify Application Production
- Online Operation

## Framework
Springboot 2.x

jdk8

MySql 5.7

Developed with IDEA

## Install
### Required

Before building, install java1.8 required.

No need to download grade and tomcat, run jar package directly!

### Building

```shell script
cd bigraph_system

./gradlew build -x test
```

### Database

Execute database script in your database first. Script is in the sql_script folder.

Development environment needs to set application-dev.yml file.

Production environment needs to set application-prod.yml file.

### Port
By default, Spring Boot applications run on an embedded Tomcat via port 8080.
In order to change the default port, you just need to modify the server.port attribute


## Development environment deployment
```shell script
cd bigraph_system

./gradlew build -x test

java -jar ./build/libs/bigraph-0.0.1-SNAPSHOT.jar 
```

## Production environment deployment
The production environment log file is produced in the upper-level directory. It is retained for 30 days by default.
If you need to modify it, configure the logback-prod.xml file.

```shell script
cd bigraph_system

./gradlew build -x test

java -jar ./build/libs/bigraph-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
 
```
