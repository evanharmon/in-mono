# this is a playground - not a secure or hardened application
# use pinned go version https://hub.docker.com/_/golang
# SECURITY: would be a SHA normally
FROM golang:1.23.4-bookworm

# Install dependencies
# SECURITY: would be a dir like /usr/src/app
WORKDIR /app
# SECURITY: would be a more explicit copy
COPY . .
# -d downloads but does not build, `./...` is current directory and subdirs
RUN go get -d -v ./...

# Build
RUN go build -o api .

# Run as non-privileged user
RUN useradd -ms /bin/sh -u 1001 app
# SECURITY: would use a dir like /usr/local/bin
RUN chown -R app:app /app
USER app
# SECURITY: would use a home dir

# Expose port
EXPOSE 8000

# Default run cmd - no entrypoint set
# SECURITY: would be a distroless sha image as well for final stage
CMD ["./api"]
