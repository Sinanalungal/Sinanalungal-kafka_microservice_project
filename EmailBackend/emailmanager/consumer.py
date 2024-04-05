from kafka import KafkaConsumer
import json
from django.core.mail import send_mail


def emailconsumer():
    topic_name = "user_registered"

    consumer = KafkaConsumer(
        topic_name,
        bootstrap_servers='localhost:9092',
        auto_offset_reset='earliest',
        group_id='consumer-group-a'
    )

    for msg in consumer:
        try:
            user_data = json.loads(msg.value.decode('utf-8'))
            print(user_data)
            subject = 'User Successfully Registered'
            message = f'User Registration is Successfull:\n\n email:{user_data["email"]}\n\n Thank you for joining with us....'
            print(message)
            from_email = 'st9423126@gmail.com'
            recipient_list = [user_data["email"]]
            print(recipient_list)
            send_mail(subject, message, from_email, recipient_list, fail_silently=False)

        except json.decoder.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}. Skipping message.")


