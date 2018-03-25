namespace anemone{
    export class Parser{
        public static Parse(node:Tentacle,message:string){
            let num_repeats:number = Number(message[0]);
            if (num_repeats<1){
                //don't repeat
            }
            let sequence_id:string = message[1];
            let command:string = message.substring(2,message.indexOf("["));
            let repeaters:string = message.substring(message.indexOf("["),message.length);
            
            

        }
        
    }
}