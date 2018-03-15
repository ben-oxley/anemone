namespace anemone{
    export class MessageHandler{
        private nodes:Tentacle[] = [];
        private readonly frequency = 868e6;
        private readonly c = 299792458;
        private readonly antennaGain:number = 0;
        public register(tentacle:Tentacle){
            this.nodes.push(tentacle);
        }
        public send(tentacle:Tentacle,message:string,transmitPower:number){
            this.nodes.forEach(n=>{
                n.receive(message,this.calculateRssi(tentacle,n,transmitPower));
            });
        }

        private calculateRssi(from:Tentacle,to:Tentacle,transmitPower:number):number{
            let fromPos:Point = from.getPosition();
            let toPos:Point = to.getPosition();
            let distance:number = Math.sqrt(Math.pow(fromPos.x-toPos.x,2)+Math.pow(fromPos.y-toPos.y,2));
            let fspl:number = Math.pow(4*Math.PI*distance*this.frequency/this.c,2);
            let dbFSPL:number = 20*Math.log10(distance) + 20*Math.log10(this.frequency)+32.44 - from.getAntennaGain()-to.getAntennaGain();
            return transmitPower - dbFSPL;
        }


    }
}