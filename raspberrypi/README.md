# Raspberry Pi

Getting data on humidity.


## Getting Started

Eneable SPI.

    sudo raspi-config

„8 Advanced Options“ -> „A6 SPI“ -> „Yes“. 
    
Install the py-spidev library.
    
    sudo apt-get install git python-dev
    git clone git://github.com/doceme/py-spidev
    cd py-spidev/
    sudo python setup.py install

Run humidity.py

    python humidity.py


## Sources

Pi-Spidev: https://pypi.org/project/spidev/

Raspberry Pi architecture: https://tutorials-raspberrypi.de/bodenfeuchtigkeit-mit-dem-raspberry-pi-messen/

