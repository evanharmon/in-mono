# this is a playground - not a secure or hardened application
# use pinned go version https://hub.docker.com/_/golang
FROM golang:1.23.4-bookworm

# Install dependencies
WORKDIR /app
COPY . .
# -d downloads but does not build, `./...` is current directory and subdirs
RUN go get -d -v ./...

# Build
RUN go build -o api .

# Run as non-privileged user
RUN useradd -ms /bin/sh -u 1001 app
RUN chown -R app:app /app
USER app

# TODO: use another target, copy the binary to a google scratch image
# TODO: use an image with no shell access

# Expose port
EXPOSE 8000

# Default run cmd - no entrypoint set
CMD ["./api"]
