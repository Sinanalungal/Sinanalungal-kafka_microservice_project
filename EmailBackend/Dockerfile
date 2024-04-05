FROM python:3.8-alpine

ENV PYTHONUNBUFFERED=1
RUN apk update && \
    apk add --no-cache  gcc musl-dev

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8005

CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8005"]
