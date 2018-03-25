// static void _repeat_packet(char *packet_buffer, uint8_t packet_length)
// {
//     uint8_t i, delaytime;
//     uint8_t *end_bracket;

//     /* Check Packet TTL */
//     if(packet_buffer[0] == '0')
//     {
//         /* TTL Expired */
//         return;
//     }
        
//     /* Check packet length (including our NODE_ID and a comma) */
//     if((packet_length + strlen(NODE_ID) + 1) > 64)
//     {
//         /* Repeated packet will be too long, drop it */
//         return;
//     }

//     /* Check for our NODE ID */
//     if(memmem(packet_buffer, packet_length, NODE_ID, strlen(NODE_ID)) != NULL)
//     {
//         /* We've already handled the packet, drop it */
//         return;
//     }

//     /* Decrement TTL */
//     packet_buffer[0]--;

//     /* Find the brackets */
//     end_bracket = memchr(packet_buffer, ']', packet_length);
//     if(end_bracket == NULL)
//     {
//         /* End bracket not found */
//         return;
//     }

//     /* Append our NODE_ID */
//     sprintf((char *)end_bracket, ",%s]", NODE_ID);

//     /* Update packet length for NODE_ID and comma */
//     packet_length += strlen(NODE_ID) + 1;

//     /* Random delay to try and avoid packet collision */
//     delaytime = getRandBetween(5u, 80u);
//     for(i = 0; i < delaytime; i++)
//         _delay_ms(10);

//     /* Now send the repeated packet */
//     rf69_send((rfm_reg_t *)packet_buffer, packet_length, RFM_POWER);
// }