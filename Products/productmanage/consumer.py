from kafka import KafkaConsumer
import json

topic_name = "product_created"

consumer = KafkaConsumer(topic_name,
                         bootstrap_servers=["kafka:9092"],
                         auto_offset_reset='earliest',
                         group_id="consumer-group-a")

print("Starting the consumer")

for msg in consumer:
    try:
        user_data = json.loads(msg.value.decode('utf-8'))
        print("Registered user =", user_data)
    except json.decoder.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}. Skipping message.")
