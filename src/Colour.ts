namespace anemone{
    export class Colour{
        public readonly Red:number;
        public readonly Blue:number;
        public readonly Green:number;

        public constructor(red:number,green:number,blue:number){
            this.Red = red;
            this.Blue = blue;
            this.Green = green;
        }

        public static HSB(hue:number,saturation:number,value:number):Colour{
            let h:number = Math.round(hue);
            let s:number = Math.round(saturation * 255 / 100);
            let v:number = Math.round(value * 255 / 100);
            return Colour.HSV(h,s,v);

        }
        public static HSV(h:number,s:number,v:number):Colour{
            let r,g,b:number;
            if (s == 0) {

                r = g = b = v;
            } else {
                
                let t1 = v;
                let t2 = (255 - s) * v / 255;
                let t3 = (t1 - t2) * (h % 60) / 60;

                if (h == 360) h = 0;

                    if (h < 60) { r = t1; b = t2; g = t2 + t3 }
                    else if (h < 120) { g = t1; b = t2; r = t1 - t3 }
                    else if (h < 180) { g = t1; r = t2; b = t2 + t3 }
                    else if (h < 240) { b = t1; r = t2; g = t1 - t3 }
                    else if (h < 300) { b = t1; g = t2; r = t2 + t3 }
                    else if (h < 360) { r = t1; g = t2; b = t1 - t3 }
                    else { r = 0; g = 0; b = 0 }
            }

            return new Colour(r,g,b);

        }
    }
}