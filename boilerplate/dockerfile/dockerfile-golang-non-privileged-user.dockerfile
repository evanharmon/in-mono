# syntax=docker/dockerfile:1
# this is a playground app - not a secure, hardened, and productionized app

FROM golang:1.19

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o /app/main

# Create a non-root user
RUN useradd -m -s /bin/bash app

# Set ownership of the app directory to the app user
RUN chown -R app:app /app

# Run the container as the app user
USER app

CMD ["/app/main"]