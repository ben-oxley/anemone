namespace anemone{
    export class Generator{
        public static MAX_PACKET_LENGTH:number =64;
        public static generate(message:string,sequence_id:string,num_repeats:number,address:string){
            let buffer:string = "";
            buffer+=String(num_repeats);
            buffer+=sequence_id;

            //Add data
            buffer+=message;

            buffer += "["+address+"]";


        }
    }
}

// static int16_t gen_data(char *buf, uint8_t *sequence_id)
// {
//     int8_t temp = 0;

// #ifdef LOCATION_STRING
//     if(*sequence_id=='a' || *sequence_id=='z') {
//         sprintf(buf, "%u%cL%s", NUM_REPEATS, *sequence_id, LOCATION_STRING);
//     } else {
//         sprintf(buf, "%u%c", NUM_REPEATS, *sequence_id);
//     }
// #else
//     sprintf(buf, "%u%c", NUM_REPEATS, *sequence_id);
// #endif

//     rf69_read_temp(&temp);
//     sprintf(buf, "%sT%i.0", buf, temp);

//     /* Battery Voltage */
// #if ENABLE_BATTV_SENSOR == 1
//     static float battV = 0.0;
//     battV = get_batt_voltage();
//     char* battStr;
//     char tempStrB[14]; /* make buffer large enough for 7 digits */
//     battStr = dtostrf(battV,7,2,tempStrB);
//     while( (strlen(battStr) > 0) && (battStr[0] == 32) )
//     {
//         strcpy(battStr,&battStr[1]);
//     }
//     sprintf(buf, "%sV%s", buf, battStr);
// #endif

//     /* If zombie mode is enabled, put the current zombie status in telem */
// #ifdef ENABLE_ZOMBIE_MODE
//     sprintf(buf, "%sZ%d", buf, _use_zombie_mode(battV));
// #endif /* ENABLE_ZOMBIE_MODE */

//     return sprintf(buf, "%s[%s]", buf, NODE_ID);
// }
