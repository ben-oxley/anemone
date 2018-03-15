var anemone;
(function (anemone) {
    class FutureMessage {
        constructor(message, ttl) {
            this.message = message;
            this.ttl = ttl;
        }
    }
    anemone.FutureMessage = FutureMessage;
})(anemone || (anemone = {}));
var anemone;
(function (anemone) {
    class MessageHandler {
        constructor() {
            this.nodes = [];
            this.frequency = 868e6;
            this.c = 299792458;
            this.antennaGain = 0;
        }
        register(tentacle) {
            this.nodes.push(tentacle);
        }
        send(tentacle, message, transmitPower) {
            this.nodes.forEach(n => {
                n.receive(message, this.calculateRssi(tentacle, n, transmitPower));
            });
        }
        calculateRssi(from, to, transmitPower) {
            let fromPos = from.getPosition();
            let toPos = to.getPosition();
            let distance = Math.sqrt(Math.pow(fromPos.x - toPos.x, 2) + Math.pow(fromPos.y - toPos.y, 2));
            let fspl = Math.pow(4 * Math.PI * distance * this.frequency / this.c, 2);
            let dbFSPL = 20 * Math.log10(distance) + 20 * Math.log10(this.frequency) + 32.44 - from.getAntennaGain() - to.getAntennaGain();
            return transmitPower - dbFSPL;
        }
    }
    anemone.MessageHandler = MessageHandler;
})(anemone || (anemone = {}));
var anemone;
(function (anemone) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    anemone.Point = Point;
})(anemone || (anemone = {}));
var anemone;
(function (anemone) {
    class Simulation {
        constructor(timestepMS) {
            this.timestep = 1;
            this.spacing = 10;
            this.addressLength = 2;
            this.nodes = [];
            this.timestep = timestepMS;
            this.handler = new anemone.MessageHandler();
        }
        constructNodes(numberOfNodes) {
            let x = this.spacing * Math.random();
            let y = this.spacing * Math.random();
            for (let i = 0; i < numberOfNodes; i++) {
                let position = new anemone.Point(x, y);
                let newTentacle = new anemone.Tentacle(this.handler, this.makeid(), position);
                this.handler.register(newTentacle);
                this.nodes.push(newTentacle);
            }
        }
        simulate() {
            this.nodes.forEach(n => n.step());
        }
        makeid() {
            let text = "";
            let possible = "0123456789ABCDEF";
            for (let i = 0; i < this.addressLength; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
    }
    anemone.Simulation = Simulation;
})(anemone || (anemone = {}));
var anemone;
(function (anemone) {
    class Tentacle {
        constructor(handler, address, position) {
            this.minReceiveRSSI = -120;
            this.antennaGain = 2;
            this.transmitPowerMax = +13;
            this.messages = [];
            this.handler = handler;
            this.position = position;
            this.address = address;
        }
        step() {
            let messagesToRemove = [];
            this.messages.forEach(m => {
                m.ttl--;
                if (m.ttl <= 0) {
                    messagesToRemove.push(m);
                    this.send(m.message, this.transmitPowerMax);
                }
            });
            messagesToRemove.forEach(m => {
                let index = this.messages.indexOf(m);
                if (index > -1) {
                    this.messages.splice(index, 1);
                }
            });
        }
        receive(message, rssi) {
        }
        send(message, power) {
            this.handler.send(this, message, power);
        }
        getAntennaGain() {
            return this.antennaGain;
        }
        getPosition() {
            return this.position;
        }
    }
    anemone.Tentacle = Tentacle;
})(anemone || (anemone = {}));
//# sourceMappingURL=tsc.js.map