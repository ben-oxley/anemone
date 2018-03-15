namespace anemone{
    export class FutureMessage{
        public readonly message:string;
        public ttl:number;
        public constructor(message:string,ttl:number){
            this.message = message;
            this.ttl = ttl;
        }
    }
}