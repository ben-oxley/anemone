namespace anemone{
    export class Command{
        public static readonly HUE_KEY:string = 'H';
        public static readonly SATURATION_KEY:string = 'S';
        public static readonly VALUE_KEY:string = 'V';
        public static readonly ATTACK_KEY:string = 'A'; //Ramp up time (0 default)
        public static readonly DELAY_KEY:string = 'D'; //hold time, 0 for indefinite (0 default)
        public static readonly RELEASE_KEY:string = 'R'; //ramp down time (0 default)
        public static readonly SLEEP_KEY:string = 'X'; //seconds to sleep (0 default)
        public static readonly TRANSMIT_DELAY_KEY = 'P'; //milliseconds to delay (0 default) - this is in addition to ukhasnet protocol delay
    }

}