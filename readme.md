# Docker

```

- docker login

- docker image ls [-a --digests --no-trunc -q]
- docker container ls [-a --latest --no-trunc -q -s]

- docker image build -t docker-learn:v0.0.2 ./

- docker container run [-d -p 3003:3002 --name container_1] docker-learn:v0.0.2

- docker container stop 93242c8d6b31
- docker container start [-i] 93242c8d6b31

- docker tag docker-learn:v0.0.2 arijititobuz/docker-learn:v0.0.2
- docker push arijititobuz/docker-learn:v0.0.2
- docker pull arijititobuz/docker-learn:v0.0.2

```

