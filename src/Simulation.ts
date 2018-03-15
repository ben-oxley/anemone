namespace anemone{
    export class Simulation{
        private readonly timestep:number=1;
        private spacing:number = 10;
        private readonly handler:MessageHandler;
        private readonly addressLength = 2;
        private nodes:Tentacle[] = [];
        
        public constructor(timestepMS:number){
            this.timestep = timestepMS;
            this.handler = new MessageHandler();
        }
        
        public constructNodes(numberOfNodes:number){
            let x:number = this.spacing*Math.random();
            let y:number = this.spacing*Math.random();
            for (let i:number = 0; i < numberOfNodes; i++){
                let position:Point = new Point(x,y);
                let newTentacle:Tentacle = new Tentacle(this.handler,this.makeid(),position);
                this.handler.register(newTentacle);
                this.nodes.push(newTentacle);
            }
        }

        public simulate(){
            this.nodes.forEach(n=>n.step());
        }

        private makeid():string {
            let text:string = "";
            let possible:string = "0123456789ABCDEF";
        
            for (let i:number = 0; i < this.addressLength; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
        }


    }
}