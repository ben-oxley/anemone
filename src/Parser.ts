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
            let colour:Colour = Parser.parseHSV(command);
            if (colour){
                node.setColour(colour);
            }
            
            

        }

        public static parseHSV(message:string):Colour{
            let hueCommand:string = Parser.getSubmessage(message,"H");
            let valueCommand:string = Parser.getSubmessage(message,"S");
            let saturationCommand:string = Parser.getSubmessage(message,"V");
            if (hueCommand&&saturationCommand&&valueCommand){
                let hue = this.parseCommand(hueCommand);
                let saturation = this.parseCommand(saturationCommand);
                let value = this.parseCommand(valueCommand);
                return Colour.HSV(hue,saturation,value);
            }
            return undefined;
        }

        public static parseCommand(command:string):number{
            return Number(command);
        }

        public static getSubmessage(message:string,key:string):string{
            let start:number = message.search(key)+1;
            if (start === 0){
                return undefined;
            }
            
            let endIndex = message.substring(start).search("[A-Za-z]");
            if (endIndex === -1){
                return message.substring(start,message.length);
            }
            if (endIndex === 0){
                return undefined;
            }
            let end:number = start + endIndex;
            return message.substring(start,end);
        }

        public getNumberOfHops(repeaters:string):number{
            return repeaters.split(',').length;
        }
        
    }
}