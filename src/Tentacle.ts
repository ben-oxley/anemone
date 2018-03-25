namespace anemone{

    export class Tentacle{
        private position:Point;
        private address:string;
        private readonly minReceiveRSSI:number = -120; //-120dBm @ 1.2kbps, FSK
        private readonly antennaGain:number = 2;
        private handler:MessageHandler;
        private transmitPowerMax:number = +13;//dBm (+13dBm (RFM69W), +20dBm (RFM69HW))
        private messages:FutureMessage[] = [];
        private sequenceID = 'a';
        private colour:Colour = new Colour(0,0,0);
        
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

        public setColour(colour:Colour){
            this.colour = colour;
        }
        
    }
}

// int main(void)
// {
//     uint32_t wakecount = 0;
//     uint32_t next_tx_wakecount;
//     uint32_t tx_wakecount_interval;
//     uint8_t sequence_id = 'a';

//     bool packet_received;
//     uint8_t i, packet_len;
//     int16_t lastrssi;

//     /* Turn off peripherals that we don't use */
//     PRR |= _BV(PRTWI) | _BV(PRTIM2) | _BV(PRTIM1) | _BV(PRTIM0) | _BV(PRUSART0);

//     /* Initialise the RFM69 */
//     while(rf69_init() != RFM_OK)
//         _delay_ms(100);

//     /* Generate and transmit a packet */
//     packet_len = gen_data(packet_buf, &sequence_id);
//     rf69_send((rfm_reg_t *)packet_buf, packet_len, RFM_POWER);

//     /* Set transmit interval (rounded up to a multiple of 8s watchdog cycles) */
//     tx_wakecount_interval = (BEACON_INTERVAL / 8) + !!(BEACON_INTERVAL % 8);

//     /* Set next Transmit time */
//     next_tx_wakecount = wakecount + tx_wakecount_interval;

//     while(1)
//     {
//         if(_use_zombie_mode(get_batt_voltage()))
//         {
//             /* Battery Voltage Low - Zombie Mode, ignore all repeating
//              * functionality of the node 
//              * Low Power Sleep for 8 seconds
//              */
//             rf69_set_mode(RFM69_MODE_SLEEP);
//             _power_down(WDTO_8S);
//         }
//         else
//         {
//             /* Set RFM69 into Receive Mode */
//             rf69_set_mode(RFM69_MODE_RX);

//             /* This loop is calculated to take roughly 8 seconds, i.e. 255
//              * iterations with a 30ms delay */
//             for(i = 0; i < 0xFF; i++)
//             {
//                 /* Poll the RFM69 for a received packet */
//                 rf69_receive((rfm_reg_t *)packet_buf, &packet_len, &lastrssi, &packet_received);

//                 if(packet_received)
//                 {
//                     /* Repeat the received packet */
//                     _repeat_packet(packet_buf, packet_len);
//                 }
//                 else
//                 {
//                     /* Sleep for 30ms */
//                     _power_down(WDTO_30MS);
//                 }
//             }
//         }

//         /* Check if we're due to transmit a beacon */
//         if(wakecount == next_tx_wakecount)
//         {
//             /* Increment sequence id */
//             if(sequence_id == 'z')
//                 sequence_id = 'b';
//             else
//                 sequence_id++;

//             /* Generate and transmit a packet */
//             packet_len = gen_data(packet_buf, &sequence_id);
//             rf69_send((rfm_reg_t *)packet_buf, packet_len, RFM_POWER);

//             /* Set next Transmit time */
//             next_tx_wakecount = wakecount + getRandBetween(tx_wakecount_interval, tx_wakecount_interval+2);
//         }

//         wakecount++;
//     }

//     return 0;
// }
