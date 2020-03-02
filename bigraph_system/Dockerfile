# docker部署用，若需要使用docker部署，可直接build出镜像运行，docker build前先进行gradlew build构建jar包

FROM openjdk:8

MAINTAINER zhaoxinjiang shinjiang1102@gmail.com

COPY build/libs/bigraph-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

CMD ["java","-Xms1g","-Xmx1g", "-XX:+UnlockExperimentalVMOptions", "-XX:+UseG1GC", "-jar", "bigraph-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=prod"]