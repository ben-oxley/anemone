EMF Proposal Submission
-----------------------

Title:

Anemone is an interactive, mesh networked light display, designed to be built for EMF. It is intended to create pulsing waves of colour which propagate across the festival, based on interaction with people, mesh networking propagation and RF weirdness. Anyone will be able to shake an anemone node, causing it to glow and transmit packets to surrounding nodes. This effect will cascade, causing waves of colour to propagate across the network (intended to be several hundred nodes). Base nodes will also enable other more advance patterns.

Each anemone node is comprised of a low power, arm based microprocessor, a vibration sensor, RGB led and mesh networking radio. Each node is battery powered and should last for the duration of EMF. The mesh networking system is designed on top of the UKHASNet protocol. It’s simple structure makes it easy to work with and it's and low transmission rate results in a slow propagation of packets, causing the “wave” like propagation of colour. 

Each node fits inside a plastic casing and is mounted on top of a bamboo cane, providing visibility across the site and making them easy to install and remove.

The total cost of construction for nodes is intended to be £5 each to build. We intend to part fund this ourselves but would like support to make the installation as large as possible. 

PCB:
https://github.com/jonsowman/ukhasnet-fc-node/tree/master/rgb-node
Development of code to simulate the network:
https://github.com/ben-oxley/anemone
--------------------------
Deadlines:

H&S:

Technical Design:
Several nodes will be designed as command and control nodes which will allow for other interesting effects to be tested based on other commands, patterns and sequences to supplement the use of the installation. This will also allow us to put nodes into a power saving mode during the day.

The mesh networking system is designed on top of the UKHASNet protocol, an ASCII based FSK transmission protocol for the 868Mhz ISM band, it’s simple structure, and low transmission rate make it easy to work with and more importantly, result in a slow propagation of packets across the network, this is intended to cause the “wave” like propagation of colour.