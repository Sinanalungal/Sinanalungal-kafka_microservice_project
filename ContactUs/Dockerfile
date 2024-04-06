# Use the official Python image as a base
FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && \
    apt-get install -yq --no-install-recommends \
    libpq-dev gcc libc6-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt && \
    pip install gunicorn

COPY . /app/

EXPOSE 8004

CMD ["sh", "-c", "python manage.py makemigrations && \
                 python manage.py migrate && \
                 python manage.py collectstatic --noinput && \
                 gunicorn --bind 0.0.0.0:8004 contactus.wsgi:application"]
