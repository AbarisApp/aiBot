import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

export const VoucherAfterPayment = () => (
    <Document>
        <Page style={styles.body}>
            <View style={styles.topBox}>
                <View>
                    <Image style={styles.imgSec} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKPi3jhVfj74a6-V_gyO8TSVv6GN8bg7zUw&s" />
                    <Text style={styles.topBoxTextHeadingImg}>Sunrise Tours & Travels</Text>
                    <Text style={styles.topBoxText}>Regd. No. 2024170364</Text>
                </View>
                <View>
                    <Text style={styles.topBoxTextHeading}>Demo Account</Text>
                    <Text style={styles.topBoxText}>Abaris Travel CRM A Product by Abaris Softech</Text>
                    <Text style={styles.topBoxText}>GST No ABC</Text>
                    <Text style={styles.topBoxText}>Tel: 8851746286 </Text>
                    <Text style={styles.topBoxText}>Email: sales@abaris.in </Text>
                </View>
            </View>

            <View style={styles.headingBgRed}>
                <Text >Service Voucher</Text>
            </View>

            <View style={styles.flexSec}>
                <View>
                    <Text style={styles.normalText}>. Guest Name: Mr Abdul Quadir</Text>
                    <Text style={styles.normalText}>. Travel Start Date: 13 Nov 2024</Text>
                    <Text style={styles.normalText}>. Adults: 2</Text>
                    <Text style={styles.normalText}>. Vehicle Type: SUV Innova</Text>
                    <Text style={styles.normalText}>. Driver Number: 32465657657</Text>
                </View>
                <View>
                    <Text style={styles.normalText}>. Voucher Number: 2343554</Text>
                    <Text style={styles.normalText}>. End Date: 19 Nov 2024</Text>
                    <Text style={styles.normalText}>. Booking Confirmed By: Rahul</Text>
                    <Text style={styles.normalText}>. Vehicle Number: 3555566</Text>
                    <Text style={styles.normalText}>. Type of Servicer: Transport</Text>
                </View>
            </View>

            <View style={styles.headingBgMaroon}>
                <Text >Flight Details</Text>
            </View>

            <View style={styles.tableContainer}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={styles.tableCell}>From</Text>
                    <Text style={styles.tableCell}>To</Text>
                    <Text style={styles.tableCell}>Flight</Text>
                    <Text style={styles.bigtablecell}>Departure</Text>
                    <Text style={styles.bigtablecell}>Arrival</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Delhi</Text>
                    <Text style={styles.tableCell}>
                        Mumbai
                    </Text>
                    <Text style={styles.tableCell}>3434544</Text>
                    <Text style={styles.bigtablecell}>12 Nov 24 00:10 AM</Text>
                    <Text style={styles.bigtablecell}>13 Nov 24 00:10 AM</Text>
                </View>
            </View>

            <View style={styles.headingBgMaroon}>
                <Text>Hotel Details</Text>
            </View>

            <View style={styles.hotelDetailWrapper}>
                <View style={styles.horizontalSec}>
                    <View style={styles.city}>
                        <Text style={styles.normalText}>City: Shimla</Text>
                    </View>
                    <View style={styles.hotel}>
                        <Text style={styles.normalText}>Hotel: marigold</Text>
                    </View>
                </View>

                <View style={styles.horizontalSec}>
                    <View style={styles.confirmation}>
                        <Text style={styles.normalText}>Confirmation:</Text>
                    </View>
                    <View style={styles.checkIn}>
                        <Text style={styles.normalText}>Checkin: 13 Nov 24 12:00 PM</Text>
                    </View>
                    <View style={styles.checkOut}>
                        <Text style={styles.normalText}>Checkout: 15 Nov 24 10:00 AM</Text>
                    </View>
                </View>

                <View style={styles.horizontalSec}>
                    <View style={styles.rooms}>
                        <Text style={styles.normalText}>Rooms: 1:</Text>
                    </View>
                    <View style={styles.nights}>
                        <Text style={styles.normalText}>Nights: 2</Text>
                    </View>
                    <View style={styles.roomType}>
                        <Text style={styles.normalText}>Room Type: Standard</Text>
                    </View>
                    <View style={styles.mealPlan}>
                        <Text style={styles.normalText}>Meal Plan: AP (Full Board )</Text>
                    </View>
                    <View style={styles.mealType}>
                        <Text style={styles.normalTextRound}>Breakfast</Text>
                        <Text style={styles.normalTextRound}>lunch</Text>
                        <Text style={styles.normalTextRound}>Dinner</Text>
                    </View>
                </View>
            </View>

            <View style={styles.hotelDetailWrapper}>
                <View style={styles.horizontalSec}>
                    <View style={styles.city}>
                        <Text style={styles.normalText}>City: Manali</Text>
                    </View>
                    <View style={styles.hotel}>
                        <Text style={styles.normalText}>Hotel: Babylon</Text>
                    </View>
                </View>

                <View style={styles.horizontalSec}>
                    <View style={styles.confirmation}>
                        <Text style={styles.normalText}>Confirmation:</Text>
                    </View>
                    <View style={styles.checkIn}>
                        <Text style={styles.normalText}>Checkin: 15 Nov 24 12:00 PM</Text>
                    </View>
                    <View style={styles.checkOut}>
                        <Text style={styles.normalText}>Checkout: 16 Nov 24 10:00 AM</Text>
                    </View>
                </View>

                <View style={styles.horizontalSec}>
                    <View style={styles.rooms}>
                        <Text style={styles.normalText}>Rooms: 1:</Text>
                    </View>
                    <View style={styles.nights}>
                        <Text style={styles.normalText}>Nights: 1</Text>
                    </View>
                    <View style={styles.roomType}>
                        <Text style={styles.normalText}>Room Type: Standard</Text>
                    </View>
                    <View style={styles.mealPlan}>
                        <Text style={styles.normalText}>Meal Plan: MAP (Half Board )</Text>
                    </View>
                    <View style={styles.mealType}>
                        <Text style={styles.normalTextRound}>Breakfast</Text>
                        <Text style={styles.normalTextRound}>lunch</Text>
                        <Text style={styles.normalTextRound}>Dinner</Text>
                    </View>
                </View>
            </View>

            <View style={styles.hotelDetailWrapper}>
                <View style={styles.horizontalSec}>
                    <View style={styles.city}>
                        <Text style={styles.normalText}>City: Kasauli</Text>
                    </View>
                    <View style={styles.hotel}>
                        <Text style={styles.normalText}>Hotel: Kasauli Exotica</Text>
                    </View>
                </View>
                <View style={styles.horizontalSec}>
                    <View style={styles.city}>
                        <Text style={styles.normalText}>Contact: 9988765490</Text>
                    </View>
                    <View style={styles.hotel}>
                        <Text style={styles.normalText}>Address: Jai Niwas, Near Inspection Bungalow 173204</Text>
                    </View>
                </View>

                <View style={styles.horizontalSec}>
                    <View style={styles.confirmation}>
                        <Text style={styles.normalText}>Confirmation:</Text>
                    </View>
                    <View style={styles.checkIn}>
                        <Text style={styles.normalText}>Checkin: 16 Nov 24 12:00 PM</Text>
                    </View>
                    <View style={styles.checkOut}>
                        <Text style={styles.normalText}>Checkout: 17 Nov 24 10:00 AM</Text>
                    </View>
                </View>

                <View style={styles.horizontalSec}>
                    <View style={styles.rooms}>
                        <Text style={styles.normalText}>Rooms: 1:</Text>
                    </View>
                    <View style={styles.nights}>
                        <Text style={styles.normalText}>Nights: 1</Text>
                    </View>
                    <View style={styles.roomType}>
                        <Text style={styles.normalText}>Room Type: Standard</Text>
                    </View>
                    <View style={styles.mealPlan}>
                        <Text style={styles.normalText}>Meal Plan: MAP (Half Board )</Text>
                    </View>
                    <View style={styles.mealType}>
                        <Text style={styles.normalTextRound}>Breakfast</Text>
                        <Text style={styles.normalTextRound}>lunch</Text>
                        <Text style={styles.normalTextRound}>Dinner</Text>
                    </View>
                </View>
            </View>
        </Page>
        <Page style={styles.body}>
            <View style={styles.hotelDetailWrapper}>
                <View style={styles.horizontalSec}>
                    <View style={styles.city}>
                        <Text style={styles.normalText}>City: Amritsar</Text>
                    </View>
                    <View style={styles.hotel}>
                        <Text style={styles.normalText}>Hotel: Ramada by Wyndham Amritsar</Text>
                    </View>
                </View>
                <View style={styles.horizontalSec}>
                    <View style={styles.city}>
                        <Text style={styles.normalText}>Contact: 7788654369</Text>
                    </View>
                    <View style={styles.hotel}>
                        <Text style={styles.normalText}>Address: 117 Hall Bazaar 143006</Text>
                    </View>
                </View>

                <View style={styles.horizontalSec}>
                    <View style={styles.confirmation}>
                        <Text style={styles.normalText}>Confirmation:</Text>
                    </View>
                    <View style={styles.checkIn}>
                        <Text style={styles.normalText}>Checkin: 17 Nov 24 12:00 PM</Text>
                    </View>
                    <View style={styles.checkOut}>
                        <Text style={styles.normalText}>Checkout: 18 Nov 24 10:00 AM</Text>
                    </View>
                </View>

                <View style={styles.horizontalSec}>
                    <View style={styles.rooms}>
                        <Text style={styles.normalText}>Rooms: 1:</Text>
                    </View>
                    <View style={styles.nights}>
                        <Text style={styles.normalText}>Nights: 1</Text>
                    </View>
                    <View style={styles.roomType}>
                        <Text style={styles.normalText}>Room Type: Standard</Text>
                    </View>
                    <View style={styles.mealPlan}>
                        <Text style={styles.normalText}>Meal Plan: MAP (Half Board )</Text>
                    </View>
                    <View style={styles.mealType}>
                        <Text style={styles.normalTextRound}>Breakfast</Text>
                        <Text style={styles.normalTextRound}>lunch</Text>
                        <Text style={styles.normalTextRound}>Dinner</Text>
                    </View>
                </View>
            </View>

            <View style={styles.hotelDetailWrapper}>
                <View style={styles.horizontalSec}>
                    <View style={styles.city}>
                        <Text style={styles.normalText}>City: Delhi</Text>
                    </View>
                    <View style={styles.hotel}>
                        <Text style={styles.normalText}>Hotel: Red Orchid</Text>
                    </View>
                </View>

                <View style={styles.horizontalSec}>
                    <View style={styles.confirmation}>
                        <Text style={styles.normalText}>Confirmation:</Text>
                    </View>
                    <View style={styles.checkIn}>
                        <Text style={styles.normalText}>Checkin: 18 Nov 24 12:00 PM</Text>
                    </View>
                    <View style={styles.checkOut}>
                        <Text style={styles.normalText}>Checkout: 19 Nov 24 10:00 AM</Text>
                    </View>
                </View>

                <View style={styles.horizontalSec}>
                    <View style={styles.rooms}>
                        <Text style={styles.normalText}>Rooms: 1:</Text>
                    </View>
                    <View style={styles.nights}>
                        <Text style={styles.normalText}>Nights: 1</Text>
                    </View>
                    <View style={styles.roomType}>
                        <Text style={styles.normalText}>Room Type: Standard</Text>
                    </View>
                    <View style={styles.mealPlan}>
                        <Text style={styles.normalText}>Meal Plan: CP (Only Breakfast )</Text>
                    </View>
                    <View style={styles.mealType}>
                        <Text style={styles.normalTextRound}>Breakfast</Text>
                    </View>
                </View>
            </View>

            <View style={styles.headingBgMaroon}>
                <Text>Day Wise Itinerary</Text>
            </View>

            <View style={styles.hotelDetailWrapper}>
                <View style={styles.horizontalSecRed}>
                    <View style={styles.daySec}>
                        <Text style={styles.normalTextHeading}>Day 1</Text>
                    </View>
                    <View style={styles.DescriptionSecHeading}>
                        <Text style={styles.normalTextHeading}>ARRIVAL AND OVERNIGHT JOURNEY TO SHIMLA</Text>
                        <Text style={styles.normalTextHeading}>WED 13 NOV 24</Text>
                    </View>
                </View>
                <View style={styles.horizontalSecRed}>
                    <View style={styles.daySec}>
                        <Text style={styles.normalText}>hrs</Text>
                        <Text style={styles.normalText}>hrs</Text>
                    </View>
                    <View style={styles.DescriptionSec}>
                        <Text style={styles.normalText}>Scandal Point</Text>
                        <Text style={styles.normalText}>Kufri Fun Campus</Text>
                        <Text style={styles.normalText}>Launch your travel schedule for Shimla with a stimulating road trip from Delhi to Shimla overnight. You will be
                            greeted by your agent's representative on arrival at Delhi airport/railway station, who will escort you to ISBT
                            Kashmere Gate from where you will enter the Volvo bus booked for your ride to Shimla at 8 p.m. It is a trip of
                            around 340 kilometers and Shimla requires about 14-15 hours to enter. This Shimla tour package offers you the
                            chance to experience a leisurely road ride along one of the best national highways and the magnificent Himalayan
                            expressway that carves through the mountains of Shivalik. The path to Shimla, unlike other hilly routes, is very
                            straight and consistent. The overnight ride also offers you a chance to enjoy food from roadside dhabas where the
                            bus pauses to freshen up for passengers.</Text>
                        <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                        <Text style={styles.normalTextRoundSmall}>Lunch</Text>
                        <Text style={styles.normalText}>Overnight in marigold-Shimla</Text>
                    </View>
                </View>

                <View style={styles.horizontalSecRed}>
                    <View style={styles.daySec}>
                        <Text style={styles.normalTextHeading}>Day 2</Text>
                    </View>
                    <View style={styles.DescriptionSecHeading}>
                        <Text style={styles.normalTextHeading}>SHIMLA: LOCAL SIGHTSEEING AND SHOPPING</Text>
                        <Text style={styles.normalTextHeading}>THU 14 NOV 24</Text>
                    </View>
                </View>
                <View style={styles.horizontalSecRed}>
                    <View style={styles.daySec}>
                        <Text style={styles.normalText}>hrs</Text>
                    </View>
                    <View style={styles.DescriptionSec}>
                        <Text style={styles.normalText}>Naldehra Golf course</Text>
                        <Text style={styles.normalText}>Your sightseeing kit from Shimla helps you to experience the city's engaging tourist sites. A private cab will drop
                            you off at the designated hotel after landing at the Shimla bus terminal, where you can sign in at any time after 12
                            p.m. Take the time to renew yourself and then leave for the city's local sightseeing trip. Your tour package for
                            Shimla involves trips to numerous locations, such as the Vice Regal Cabin, located on Shimla Observatory Hill. This
                            building also acts as the Advanced Studies Indian Institute. The next stop would be the Church of Christ, designed
                            in the neo-Gothic style in 1857. Gaiety Theater, Scandal Point and Sankat Mochan Temple will involve several
                            famous sightseeing places that you would protect. It is free for you to shop in the evening along the remarkable
                            mall route, Lakkar bazar and the Tibetan market. Such markets are famed for handicrafts, wooden dolls, objects,
                            garments and other fancy goods. Return to your hotel for a delicious dinner and a restful nap</Text>
                        <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                        <Text style={styles.normalTextRoundSmall}>Lunch</Text>
                        <Text style={styles.normalTextRoundSmall}>Dinner</Text>
                        <Text style={styles.normalText}>Overnight in marigold-Shimla</Text>
                    </View>
                </View>
            </View>
        </Page>

        <Page style={styles.body}>

            <View style={styles.horizontalSecRed}>
                <View style={styles.daySec}>
                    <Text style={styles.normalTextHeading}>Day 3</Text>
                </View>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>MANALI: LOCAL SIGHTSEEING AND SHOPPING</Text>
                    <Text style={styles.normalTextHeading}>FRI 15 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.daySec}>
                    <Text style={styles.normalText}>hrs</Text>
                </View>
                <View style={styles.DescriptionSec}>
                    <Text style={styles.normalText}>Vashishta Kund</Text>
                    <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                    <Text style={styles.normalText}>Overnight in babylon-Manali</Text>
                </View>
            </View>

            <View style={styles.horizontalSecRed}>
                <View style={styles.daySec}>
                    <Text style={styles.normalTextHeading}>Day 4</Text>
                </View>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>KASAULI</Text>
                    <Text style={styles.normalTextHeading}>SAT 16 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.daySec}>
                    <Text style={styles.normalText}>hrs</Text>
                </View>
                <View style={styles.DescriptionSec}>
                    <Text style={styles.normalText}>Solang Valley</Text>
                    <Text style={styles.normalText}>Overnight in Kasauli Exotica-Kasauli</Text>
                </View>
            </View>

            <View style={styles.horizontalSecRed}>
                <View style={styles.daySec}>
                    <Text style={styles.normalTextHeading}>Day 5</Text>
                </View>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>AMRITSAR</Text>
                    <Text style={styles.normalTextHeading}>SUN 17 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.daySec}>
                    <Text style={styles.normalText}>hrs</Text>
                </View>
                <View style={styles.DescriptionSec}>
                    <Text style={styles.normalText}>Overnight in Ramada by Wyndham Amritsar-Amritsar</Text>
                </View>
            </View>

            <View style={styles.horizontalSecRed}>
                <View style={styles.daySec}>
                    <Text style={styles.normalTextHeading}>Day 6</Text>
                </View>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>DELHI</Text>
                    <Text style={styles.normalTextHeading}>MON 18 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.daySec}>
                    <Text style={styles.normalText}>hrs</Text>
                </View>
                <View style={styles.DescriptionSec}>
                    <Text style={styles.normalText}>Overnight in Red Orchid-Delhi</Text>
                </View>
            </View>

            <View style={styles.horizontalSecRed}>
                <View style={styles.daySec}>
                    <Text style={styles.normalTextHeading}>Day 7</Text>
                </View>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>FINAL GOODBYE TO SHIMLA</Text>
                    <Text style={styles.normalTextHeading}>TUE 19 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.daySec}>
                    <Text style={styles.normalText}>hrs</Text>
                </View>
                <View style={styles.DescriptionSec}>
                    <Text style={styles.normalText}>Hadimba Temple</Text>
                    <Text style={styles.normalText}>Today, our four-day Shimla tour package is coming to an end. Wake up in Shimla for your final day and prepare your
                        bags to move back to Delhi. Enjoy your last city breakfast and check-out from the hotel to Volvo Station. Bid
                        farewell with ravishing and ecstatic memories to the lovely place.</Text>
                    <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                </View>
            </View>


            <View style={styles.headingBgMaroon}>
                <Text>Other Conditions</Text>
            </View>
            <View style={styles.conditionSection}>
                <Text style={styles.normalText}>. We request all the customers to review travel warnings, announcements, advisories and prohibitions issued by the relevant authorities and governments prior to confirming their international bookings with YOUR COMPANY. By offering travel
                    products for particular destinations, YOUR COMPANY does not warrant that travel to such areas is advisable or without risk.YOUR COMPANY is not liable for damages or losses that may result from travel to such destinations.</Text>
            </View>

        </Page>

        <Page style={styles.body}>

            <View style={styles.headingBgMaroon}>
                <Text>Terms & Conditions</Text>
            </View>
            <View style={styles.conditionSection}>
                <Text style={styles.normalText}>. Additional costs may need to be incurred by the passenger if he/she wishes to change a meal plan.</Text>
                <Text style={styles.normalText}>. The customer is responsible to ensure and meeting all the foreign entry requirements, travel documents (passport, visa, etc) and health requirements.</Text>
                <Text style={styles.normalText}>. Date changes on a confirmed hotel may result in supplement costs.</Text>
                <Text style={styles.normalText}>. In the case of hotels packages where a minimum number of passengers have been indicated by the passenger, any increase or
                    decrease in the number of passengers may result in a change in the total hotel cost.</Text>
                <Text style={styles.normalText}>. Passengers will be charged extra for any upgrade in accommodation.</Text>
                <Text style={styles.normalText}>. Passengers will be charged extra for an extended hotel stay(s).</Text>
                <Text style={styles.normalText}>. Guaranteed early check-in or late check-out, if requested at any hotel by the passenger will be at a supplement cost which the
                    passenger needs to bear</Text>
                <Text style={styles.normalText}>. Any damage caused to the hotel room/coach during your stay, shall be payable by the passenger. YOUR COMPANY will not be
                    liable for the same</Text>
                <Text style={styles.normalText}>. YOUR COMPANY will not be liable or responsible in case of loss of baggage or personal belongings from the hotels. You are
                    requested to take care of all your personal possessions</Text>
                <Text style={styles.normalText}>. Child policy differs from hotel to hotel. Before booking the hotel, all passengers must verify and understand the same to avoid
                    price related issues</Text>
                <Text style={styles.normalText}>. Cancellation fees may also apply to any additional services, including extra night accommodations, independent services
                    provided by YOUR COMPANY and optional excursions reserved prior to, during, and after the tour.</Text>
                <Text style={styles.normalText}>. In the event of a natural calamity or unprecedented political unrest if any changes need to be done to the reservation, all
                    refunds, if any, will be at the discretion of the relevant service providers.</Text>
                <Text style={styles.normalText}>. No partial refunds or credits will be provided for any unused services on the tour.</Text>
            </View>


            <View style={styles.bottomFooterText}>
                <Text style={styles.normalText}>Thank you for booking with Abaris Travel CRM Account !! Powered By: Abaris Softech</Text>
            </View>



        </Page>

    </Document>
);


const styles = StyleSheet.create({
    body: {
        padding: 20,
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center'
    },
    section: {
        marginBottom: 10,
    },
    endBox: {
        margin: '10px',
    },
    tableContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // marginVertical: 20,
    },
    tableRow: {
        flexDirection: 'row',
        // borderBottom: '1px solid black',
        // paddingVertical: 8,
        // paddingHorizontal: 4,
    },
    tableCell: {
        width: '25%', // Adjust width percentage based on the number of columns
        padding: 4,
        textAlign: 'center',
        border: '1px solid black',
    },
    bigtablecell: {
        width: '25%', // Adjust width percentage based on the number of columns
        padding: 4,
        width: '200px',
        textAlign: 'center',
        border: '1px solid black',
    },
    tableHeader: {
        backgroundColor: '#f3f3f3',
        fontWeight: 'bold',
        // border: '1px solid black',
    },


    textBold: {
        fontSize: '14px',
        fontWeight: 'bold'
    },
    grandTotalSec: {
        margin: '10px 0',
        marginLeft: '200px'
    },
    topBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '15px 20px',
        borderBottom: '1px solid gray',
    },
    topBoxText: {
        fontSize: '11px',
        marginBottom: '5px'
    },
    imgSec: {
        width: 120,
        height: 60,
        marginLeft: 30,
    },
    topBoxTextHeading: {
        fontSize: '16px',
        color: 'black',
        textAlign: 'right'
    },
    topBoxTextHeadingImg: {
        fontWeight: '900',
        fontSize: '20px'
    },

    headingBgRed: {
        padding: '6px',
        textAlign: "center",
        fontSize: '16px',
        fontWeight: '700',
        backgroundColor: '#800000',
        margin: "12px 0",
        color: 'black'
    },
    flexSec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        borderBottom: '1px solid gray'
    },
    normalText: {
        fontSize: '10px',
        marginBottom: '5px',
        fontWeight: 'light'
    },
    headingBgMaroon: {
        padding: '6px',
        textAlign: "center",
        fontSize: '16px',
        fontWeight: '700',
        backgroundColor: '#800000',
        marginTop: "12px",
        marginBottom: '0',
        marginLeft: '0',
        marginRight: '0',
        color: 'black'
    },
    hotelDetailWrapper: {
        marginBottom: '10px'
    },
    horizontalSec: {
        flexDirection: 'row',
        border: '1px solid gray',
    },
    horizontalSecRed: {
        flexDirection: 'row',
        border: '1px solid #800000',
    },
    city: {
        width: '40%',
        borderRight: '1px solid gray',
        padding: '5px 8px',
        textAlign: 'left'
    },
    hotel: {
        width: '60%',
        padding: '5px 8px',
        textAlign: 'left'
    },
    confirmation: {
        width: '40%',
        padding: '5px 8px',
        borderRight: '1px solid gray',
        textAlign: 'left'
    },
    checkIn: {
        width: '30%',
        padding: '5px 8px',
        borderRight: '1px solid gray',
        textAlign: 'left'
    },
    checkOut: {
        width: '30%',
        padding: '5px 8px',
        textAlign: 'left'
    },
    rooms: {
        width: '15%',
        padding: '5px 5px',
        borderRight: '1px solid gray',
        textAlign: 'left'
    },
    nights: {
        width: '15%',
        padding: '5px 5px',
        borderRight: '1px solid gray',
        textAlign: 'left'
    },
    roomType: {
        width: '30%',
        padding: '5px 5px',
        borderRight: '1px solid gray',
        textAlign: 'left'
    },
    mealPlan: {
        width: '30%',
        padding: '5px 5px',
        borderRight: '1px solid gray',
        textAlign: 'left'
    },
    mealType: {
        width: '10%',
        paddingTop: '1px',
        paddingBottom: '1px',
        paddingLeft: '3px',
        paddingRight: '3px',
        textAlign: 'left'
    },
    normalTextRound: {
        border: '1px solid gray',
        borderRadius: '5px',
        padding: '2px 4px',
        margin: '1px 0',
        fontSize: '8px'
    },
    normalTextRoundSmall: {
        border: '1px solid gray',
        borderRadius: '5px',
        padding: '2px 4px',
        margin: '1px 0',
        fontSize: '8px',
        width: '50px'
    },
    daySec: {
        width: '20%',
        borderRight: '1px solid #800000',
        padding: '5px 5px',
        textAlign: 'left'
    },
    DescriptionSecHeading: {
        width: '80%',
        padding: '5px 5px',
        textAlign: 'left',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    DescriptionSec: {
        width: '80%',
        padding: '5px 5px',
        textAlign: 'left'
    },
    normalTextHeading: {
        fontSize: '11px'
    },
    conditionSection: {
        border: '1px solid gray',
        padding: "15px 10px",
    },
    bottomFooterText: {
        margin: '20px 0 10px 0',
        textAlign: 'center'
    }

})