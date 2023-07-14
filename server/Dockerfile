FROM python:3.11-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file
COPY poetry.lock pyproject.toml /app/

# Install Poetry and dependencies
RUN pip install poetry && poetry config virtualenvs.create false && poetry install --no-interaction --no-ansi

# Copy the application code
COPY . /app

# Expose the port your WSGI application will listen on (adjust as needed)
EXPOSE 8000

# Run the WSGI application
CMD ["poetry", "run", "gunicorn", "--bind", "0.0.0.0:8000", "server.app:application"]
