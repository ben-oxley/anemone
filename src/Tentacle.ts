namespace anemone{

    export class Tentacle{
        private position:Point;
        private address:string;
        private readonly minReceiveRSSI:number = -120; //-120dBm @ 1.2kbps, FSK
        private readonly antennaGain:number = 2;
        private handler:MessageHandler;
        private transmitPowerMax:number = +13;//dBm (+13dBm (RFM69W), +20dBm (RFM69HW))
        private messages:FutureMessage[] = [];
        
        constructor(handler:MessageHandler,address:string,position:Point){
            this.handler = handler;
            this.position = position;
            this.address = address;
        }

        public step(){
            let messagesToRemove:FutureMessage[] = [];
            this.messages.forEach(m=>{
                m.ttl--;
                if (m.ttl<=0){
                    messagesToRemove.push(m);
                    this.send(m.message,this.transmitPowerMax);
                }
            });
            messagesToRemove.forEach(m=>{
                let index = this.messages.indexOf(m);
                if (index > -1) {
                    this.messages.splice(index, 1);
                }
            });
        }


        public receive(message:string,rssi:number){

        }

        private send(message:string,power:number){
        this.handler.send(this,message,power);
        }

        public getAntennaGain():number{
            return this.antennaGain;
        }

        public getPosition():Point{
            return this.position;
        }
        
    }
}