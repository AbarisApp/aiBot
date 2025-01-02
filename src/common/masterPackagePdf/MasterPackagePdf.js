import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

export const MasterPackagePdf = () => (
    <Document>
        <Page style={styles.body}>
            <View style={styles.topBox}>
                <View>
                    <Image style={styles.imgSec} src="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600" />
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

            <View style={styles.bannerSection}>
                <Text style={styles.topBoxTextHeading}>Alluring Leh Ladakh Family Tour Package For 6 D / 5 N</Text>
                <View style={styles.bannerSectionFlex}>
                    <Text style={styles.topBoxText}>2 People</Text>
                    <Text style={styles.topBoxText}>13 Nov 2024</Text>
                </View>
                <View>
                    <Image style={styles.bannerImgBox} src="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </View>
            </View>

            <View style={styles.headingBgMaroon}>
                <Text>Overview</Text>
            </View>
            <View style={styles.overviwText}>
                <Text style={styles.normalText}>With us get personalized 5 nights 6 days Ladakh Family Tour Kit, send your family on an exciting holiday. This 6 day
                    custom kit helps you to discover the magic of Ladakh together with your loved ones. When you watch your children
                    smile with joy as they ride across this mountain desert and discover the tiny settlements, spend quality time with your
                    partner.

                    Experience a relaxing stay, hassle-free transfers and quality service as you book this family tour package for 5 nights
                    and 6 days in Ladakh. To make the most of an exquisite trip to this magical country, visit the Shanti Stupa, Leh Palace,
                    Hemis Monastery, Pangong Tso Pool, Three Idiot's School and other locations. Your Leh Ladakh tour itinerary will also
                    carry you to KhardungLa Pass, the world's highest motorway, and the mesmerizing Nubra Valley.

                    Offer your family the break that all of them have been craving with this all inclusive Ladakh family bundle. A holiday in
                    this enchanted land will not only reinforce your family connection, but will also fulfill your core of wanderlust. So, book
                    this bundle today for the Ladakh family tour and take your dream holiday.
                </Text>
            </View>
        </Page>

        <Page style={styles.body}>
            <View style={styles.headingBgMaroon}>
                <Text>Day Wise Itinerary</Text>
            </View>
            <View style={styles.hotelDetailWrapper}>
                <View style={styles.horizontalSecRed}>
                    <View style={styles.DescriptionSecHeading}>
                        <Text style={styles.normalTextHeading}>Day 1   ARRIVAL AND OVERNIGHT JOURNEY TO SHIMLA</Text>
                        <Text style={styles.normalTextHeading}>WED 13 NOV 24</Text>
                    </View>
                </View>
                <View style={styles.horizontalSecRed}>
                    <View style={styles.DescriptionSec}>
                        <Text style={styles.normalText}>Launch your travel schedule for Shimla with a stimulating road trip from Delhi to Shimla overnight.</Text>
                        <Text style={styles.normalText}>You will be greeted by your agent's representative on arrival at Delhi airport/railway station, who will escort you to ISBT
                            Kashmere Gate from where you will enter the Volvo bus booked for your ride to Shimla at 8 p.m. It is a trip of around
                            340 kilometers and Shimla requires about 14-15 hours to enter.</Text>

                        <Text style={styles.normalText}>This Shimla tour package offers you the chance to experience a leisurely road ride along one of the best national
                            highways and the magnificent Himalayan expressway that carves through the mountains of Shivalik. The path to
                            Shimla, unlike other hilly routes, is very straight and consistent. The overnight ride also offers you a chance to enjoy
                            food from roadside dhabas where the bus pauses to freshen up for passengers.</Text>
                        <Text style={styles.normalText}>Sightseeing/Transfer Activities</Text>

                        <View style={styles.smallImgWrapper}>
                            <Text style={styles.normalTextHeading}>Kufri Fun Campus</Text>
                            <Image style={styles.imgSecDesc} src="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </View>

                        <View style={styles.smallImgWrapper}>
                            <Text style={styles.normalTextHeading}>Scandal Point</Text>
                            <Image style={styles.imgSecDesc} src="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </View>
                        <View style={styles.roundTextWrapper}>
                            <View style={styles.roundTextWrapperInnerFlex}>
                                <Text style={styles.normalText}>City:</Text>
                                <Text style={styles.normalTextRoundSmall}>Shimla</Text>
                            </View>
                            <View style={styles.roundTextWrapperInnerFlex}>
                                <Text style={styles.normalText}>Meals Included:</Text>
                                <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                                <Text style={styles.normalTextRoundSmall}>Lunch</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Page>

        <Page style={styles.body}>
            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>Day 2   Shimla: Local sightseeing and shopping</Text>
                    <Text style={styles.normalTextHeading}>Thu 14 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSec}>
                    <Text style={styles.normalText}>Your sightseeing kit from Shimla helps you to experience the city's engaging tourist sites.</Text>
                    <Text style={styles.normalText}>A private cab will drop you off at the designated hotel after landing at the Shimla bus terminal, where you can sign in at
                        any time after 12 p.m. Take the time to renew yourself and then leave for the city's local sightseeing trip.
                        Your tour package for Shimla involves trips to numerous locations, such as the Vice Regal Cabin, located on Shimla
                        Observatory Hill. This building also acts as the Advanced Studies Indian Institute. The next stop would be the Church
                        of Christ, designed in the neo-Gothic style in 1857. Gaiety Theater, Scandal Point and Sankat Mochan Temple will
                        involve several famous sightseeing places that you would protect. It is free for you to shop in the evening along the
                        remarkable mall route, Lakkar bazar and the Tibetan market. Such markets are famed for handicrafts, wooden dolls,
                        objects, garments and other fancy goods.</Text>

                    <Text style={styles.normalText}>Return to your hotel for a delicious dinner and a restful nap.</Text>
                    <Text style={styles.normalText}>Sightseeing/Transfer Activities</Text>

                    <View style={styles.smallImgWrapper}>
                        <Text style={styles.normalTextHeading}>Naldehra Golf Course</Text>
                        <Image style={styles.imgSecDesc} src="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </View>

                    <View style={styles.roundTextWrapper}>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>City:</Text>
                            <Text style={styles.normalTextRoundSmall}>Shimla</Text>
                        </View>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>Meals Included:</Text>
                            <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                            <Text style={styles.normalTextRoundSmall}>Lunch</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>Day 3   Shimla: Local sightseeing and shopping</Text>
                    <Text style={styles.normalTextHeading}>FRI 15 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSec}>
                    <Text style={styles.normalText}>Sightseeing/Transfer Activities</Text>

                    <View style={styles.smallImgWrapper}>
                        <Text style={styles.normalTextHeading}>Vashishta Kund</Text>
                        <Image style={styles.imgSecDesc} src="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </View>

                    <View style={styles.roundTextWrapper}>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>City:</Text>
                            <Text style={styles.normalTextRoundSmall}>Manali</Text>
                        </View>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>Meals Included:</Text>
                            <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Page>

        <Page style={styles.body}>
            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>Day 4</Text>
                    <Text style={styles.normalTextHeading}>SAT 16 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSec}>
                    <Text style={styles.normalText}>Sightseeing/Transfer Activities</Text>

                    <View style={styles.smallImgWrapper}>
                        <Text style={styles.normalTextHeading}>Solang Valley</Text>
                        <Image style={styles.imgSecDesc} src="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </View>

                    <View style={styles.roundTextWrapper}>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>City:</Text>
                            <Text style={styles.normalTextRoundSmall}>Kasauli</Text>
                        </View>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>Meals Included:</Text>
                            <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>Day 5</Text>
                    <Text style={styles.normalTextHeading}>SUN 17 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSec}>
                    <View style={styles.roundTextWrapper}>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>City:</Text>
                            <Text style={styles.normalTextRoundSmall}>Amritsar</Text>
                        </View>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>Meals Included:</Text>
                            <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>Day 6</Text>
                    <Text style={styles.normalTextHeading}>MON 18 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSec}>
                    <View style={styles.roundTextWrapper}>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>City:</Text>
                            <Text style={styles.normalTextRoundSmall}>Delhi</Text>
                        </View>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>Meals Included:</Text>
                            <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Page>

        <Page style={styles.body}>
            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSecHeading}>
                    <Text style={styles.normalTextHeading}>Day 7   Final goodbye to Shimla</Text>
                    <Text style={styles.normalTextHeading}>TUE 19 NOV 24</Text>
                </View>
            </View>
            <View style={styles.horizontalSecRed}>
                <View style={styles.DescriptionSec}>
                    <Text style={styles.normalText}>Today, our four-day Shimla tour package is coming to an end.</Text>
                    <Text style={styles.normalText}>Wake up in Shimla for your final day and prepare your bags to move back to Delhi. Enjoy your last city breakfast and
                        check-out from the hotel to Volvo Station.</Text>
                    <Text style={styles.normalText}>Bid farewell with ravishing and ecstatic memories to the lovely place.</Text>
                    <Text style={styles.normalText}>Sightseeing/Transfer Activities</Text>

                    <View style={styles.smallImgWrapper}>
                        <Text style={styles.normalTextHeading}>Hadimba Temple</Text>
                        <Image style={styles.imgSecDesc} src="https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </View>

                    <View style={styles.roundTextWrapper}>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>City:</Text>
                            <Text style={styles.normalTextRoundSmall}>Manali</Text>
                        </View>
                        <View style={styles.roundTextWrapperInnerFlex}>
                            <Text style={styles.normalText}>Meals Included:</Text>
                            <Text style={styles.normalTextRoundSmall}>Breakfast</Text>
                        </View>
                    </View>

                </View>
            </View>
        </Page>




        <Page style={styles.body}>
            <View style={styles.headingBgMaroon}>
                <Text>Other Facility</Text>
            </View>
            <View style={styles.conditionSection}>
                <Text style={styles.normalText}>. Free Wi-Fi</Text>
                <Text style={styles.normalText}>. Airport transfers - Private</Text>
                <Text style={styles.normalText}>. Airport transfers - SIC</Text>
                <Text style={styles.normalText}>. Travel Insurance</Text>
                <Text style={styles.normalText}>. Inter Hotel Transfer- Private</Text>
                <Text style={styles.normalText}>. Sightseeing Transfers - Private</Text>
                <Text style={styles.normalText}>. Sightseeing Transfers - SIC</Text>
                <Text style={styles.normalText}>. Airport transfers - Speed Boat/Sea Plane</Text>
                <Text style={styles.normalText}>. Inter Hotel Transfer- SIC</Text>
            </View>

            <View style={styles.headingBgMaroon}>
                <Text>Inclusions</Text>
            </View>
            <View style={styles.conditionSection}>
                <Text style={styles.normalText}>. Airport/ Railway Station Transfers</Text>
                <Text style={styles.normalText}>. Volvo Fare</Text>
                <Text style={styles.normalText}>. Private Cab Transfers</Text>
                <Text style={styles.normalText}>. Breakfast</Text>
                <Text style={styles.normalText}>. IDinner</Text>
                <Text style={styles.normalText}>. Accommodation</Text>
                <Text style={styles.normalText}>. Shimla sightseeing tour</Text>
                <Text style={styles.normalText}>. Kufri sightseeing tour</Text>
                <Text style={styles.normalText}>. Horse/Yak ride</Text>
            </View>


            <View style={styles.headingBgMaroon}>
                <Text>Exclusions</Text>
            </View>
            <View style={styles.conditionSection}>
                <Text style={styles.normalText}>. Air/Train fare</Text>
                <Text style={styles.normalText}>. Early check-in and late checkout</Text>
                <Text style={styles.normalText}>. Lunch</Text>
                <Text style={styles.normalText}>. Outdoor activities</Text>
                <Text style={styles.normalText}>. Anything not mentioned in inclusions</Text>
                <Text style={styles.normalText}>. Heater charges</Text>
                <Text style={styles.normalText}>. Early check in charges</Text>
            </View>
            <View style={styles.termCondition}>
                <Text style={styles.normalText}>. Terms & Conditions Apply</Text>
            </View>

            <View style={styles.bottomFooterText}>
                <Text style={styles.normalTextHHH}>Abaris CRM</Text>
                <Text style={styles.normalText}>Abaris Travel CRM A Product by Abaris Softech, GST No ABC</Text>
                <Text style={styles.normalText}>8851746286 | 8851746286</Text>
            </View>
        </Page>


        {/* <Page style={styles.body}>

        </Page> */}

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
        width: '100%'
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
        width: '300px',
        textAlign: 'center',
        border: '1px solid black',
    },
    tableHeader: {
        backgroundColor: '#f3f3f3',
        fontWeight: 'bold',
        width: "100%"
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
        textAlign: 'center'
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
        width: '50px',
        backgroundColor: 'purple'
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
        padding: "10px 5px",
    },
    bottomFooterText: {
        margin: '20px 0 10px 0',
        textAlign: 'center'
    },




    bannerSectionFlex: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bannerImgBox: {
        width: '100%',
        height: '400px'
    },
    imgSecDesc: {
        margin: "10px 0",
        height: '200px',
        width: '200px'
    },
    smallImgWrapper: {
        margin: '15px 0'
    },
    roundTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    roundTextWrapperInnerFlex: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    mtopBox: {
        marginTop: '10px'
    },
    normalTextHHH: {
        fontSize: '12px',
        textAlign: 'center'
    },
    overviwText: {
        marginTop: '10px'
    },
    termCondition: {
        marginTop: '10px'
    }

})