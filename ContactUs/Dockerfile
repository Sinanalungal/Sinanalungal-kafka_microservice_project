FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update -q && \
    apt-get install -yq libpq-dev && \
    apt-get install -y postgresql-client

WORKDIR /app

COPY requirements.txt ./
RUN pip install -r requirements.txt && \
    pip install gunicorn

COPY . ./

EXPOSE 8004

CMD ["sh", "-c", "python manage.py makemigrations && \
                 python manage.py migrate && \
                 python manage.py collectstatic --noinput && \
                 gunicorn --bind 0.0.0.0:8004 contactus.wsgi:application"]
