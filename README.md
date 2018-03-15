Anemone is an interactive, mesh networking light display, designed to be built for EMF as a cross-site installation. The design of anemone is intended to create pulsing waves of colour which propagate across the site, based on interaction with people, mesh networking propagation and magical RF weirdness. Anyone will be able to shake an anemone node, attached to a pole which will cause it to glow and transmit packets to surrounding nodes. This effect will cascade, causing waves of colour to propagate across the network (intended to be several hundred nodes).

Several nodes will be designed as command and control nodes which will allow for other interesting effects to be tested based on other commands, patterns and sequences to supplement the use of the installation. This will also allow us to put nodes into a power saving mode during the day.

The design for anemone is inspired by other multi-node light installations, however whereas many of these are cabled and orchestrated centrally, each node will receive, process and retransmit packets of instructions to the other nodes. This should result in a simple, low cost and scalable light installation. 

Each anemone nodes is comprised of a low power, arm based microprocessor, a vibration sensor, RGB led and mesh networking radio. Each node is battery powered and should last for the duration of EMF. The mesh networking system is designed on top of the UKHASNet protocol, an ASCII based FSK transmission protocol for the 868Mhz ISM band, it’s simple structure, and low transmission rate make it easy to work with and more importantly, result in a slow propagation of packets across the network, this is intended to cause the “wave” like propagation of colour. Each node fits inside a plastic casing and is mounted on top of a bamboo cane, providing the ability to see the nodes across the site and making them easy to install and remove.

The total cost of construction for nodes is intended to be £5 each to build, making a network of 200 nodes £1000 in total.

Progress:
https://github.com/jonsowman/ukhasnet-fc-node/tree/master/rgb-node
Simulation:
https://github.com/ben-oxley/anemone
Deadlines:

H&S:
