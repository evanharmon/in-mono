# syntax=docker/dockerfile:1
# this is a playground app - not a secure, hardened, and productionized app
# SECURITY: would be a SHA normally
FROM golang:1.19

# SECURITY: would use /usr/src/app
WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

# SECURITY: would use a more explicit copy
COPY . .

# SECURITY: would build to /usr/local/bin
RUN go build -o /app/main

# Create a non-root user
RUN useradd -m -s /bin/bash app

# Set ownership of the app directory to the app user
# SECURITY: would use an actual home dir
RUN chown -R app:app /app

# Run the container as the app user
USER app

# SECURITY: would be a distroless sha image as well for final stage
CMD ["/app/main"]