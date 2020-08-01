#!/usr/bin/python
 
import spidev
import os
import time
import psycopg2

delay = 2.0
 
spi = spidev.SpiDev()
spi.open(0,0)
 
def readChannel(channel):
  val = spi.xfer2([1,(8+channel)<<4,0])
  data = ((val[1]&3) << 8) + val[2]
  return data

 
if __name__ == "__main__":
  try:   
    while True:
      val = readChannel(0)
      print(val)
      try:
         connection = psycopg2.connect(user="postgres",
                                        password="yourpassword",
                                        host="host",
                                        port="5432",
                                        database="yourdatabase")
         cursor = connection.cursor()
      
         postgres_insert_query = """ INSERT INTO values (HUMIDITY) VALUES ((%s))"""
         record_to_insert = [val]
         cursor.execute(postgres_insert_query, record_to_insert)
      
         connection.commit()
         count = cursor.rowcount
         print (count, "Record inserted successfully into values table")

      except (Exception, psycopg2.Error) as error :
          if(connection):
            print("Failed to insert record into mobile table", error)
      finally:
          #closing database connection.
          if(connection):
              cursor.close()
              connection.close()

      time.sleep(delay)
      
  except KeyboardInterrupt:
    print "Cancel."
