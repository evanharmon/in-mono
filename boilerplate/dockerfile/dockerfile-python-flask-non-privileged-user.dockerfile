# this is a playground app - not a secure, hardened, and productionized app
# reference the .dockerignore file for the list of files to exclude from docker image
FROM python:3.9.10-slim-buster

WORKDIR /app

# Create non-root user
RUN useradd -m -s /bin/bash app

# Use isolated venv
RUN python3 -m venv /app/venv

COPY requirements.txt ./
# improvement: don't install python-dotenv or copy .env in the container
RUN /app/venv/bin/pip install -r requirements.txt

COPY . .

# Set ownership of app directory to non-root
RUN chown -R app:app /app

EXPOSE 3000

# Run as app instead of root
USER app

# This is a playground app - so ok to run in dev server mode
# CMD ["flask", "run", "--host=0.0.0.0", "--port=3000"]
CMD ["/app/venv/bin/flask", "run", "--host=0.0.0.0", "--port=3000"]