# Backend

- OS：Windows 10
- OpenJDK：1.8
- Maven：3.6.3
- Spring Boot：2.3.4.RELEASE

## server1

- server.port = 9001
- server.servlet.context-path = /app1
- build
    ```bash
    cd backend
    mvn clean package
    ```
- run
    ```bash
    java -jar app1.jar
    ```

## server2

- server.port = 9002
- server.servlet.context-path = /app2
- build
    ```bash
    cd backend
    mvn clean package
    ```
- run
    ```bash
    java -jar app2.jar
    ```