
from kafka import KafkaConsumer
import json
import psycopg2  
def consumerfunction():
    topic_name = "product_ordered"

    dbname = 'ordered_products'
    user = 'postgres'
    password = '9207400638'
    host = 'postgres-db-orderedproducts'
    port = '5432'  

    try:
        conn = psycopg2.connect(dbname=dbname, user=user, password=password, host=host, port=port)
        print("Database connection established successfully!")

        consumer = KafkaConsumer(
            topic_name,
            bootstrap_servers='broker:9092',
            auto_offset_reset='earliest',
            group_id='consumer-group-a'
        )

        for msg in consumer:
            print('getting', msg)
            try:
                user_data = json.loads(msg.value.decode('utf-8'))
                print(user_data)
                cursor = conn.cursor()
                cursor.execute("INSERT INTO product_orderedproducts (username, orderdetails) VALUES (%s, %s)", (user_data['username'], json.dumps(user_data)))
                conn.commit()

            except json.decoder.JSONDecodeError as e:
                print(f"Error decoding JSON: {e}. Skipping message.")

    except psycopg2.Error as e:
        print(f"Error connecting to the database: {e}")
    finally:
        if conn:
            conn.close()
            print("Database connection closed.")
