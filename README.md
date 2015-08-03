# docker-helloworld

simple docker container example.

## run container

```
docker run --name helloworld -d -p 8080:8080 jimareed/helloworld
docker ps
curl localhost:8080 (returns 'Hello World')
docker stop helloworld
```