import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

export const TravelAgencyPdfPrint = () => (
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
                    <Text style={styles.topBoxText}>GST No: 122ASDF5865A</Text>
                    <Text style={styles.topBoxText}>URL: www.abarissoftech.com</Text>
                </View>
            </View>

            <View>
                <Text style={[{ fontWeight: 'bold', textAlign: 'center', marginTop: '5px' }]}>Invoice</Text>
                <View style={styles.seoDetailSec}>
                    <View style={styles.seoDetailSecInner}>
                        <View >
                            <Text style={styles.topBoxText}>Customer </Text>
                            <Text style={styles.topBoxText}>Name: </Text>
                            <Text style={styles.topBoxText}>Contact: </Text>
                            <Text style={styles.topBoxText}>Email: </Text>
                        </View>
                        <View >
                            <Text style={styles.topBoxText}>Abdul Quadir</Text>
                            <Text style={styles.topBoxText}>8851746286</Text>
                            <Text style={styles.topBoxText}>abarisapps@gmail.com</Text>
                        </View>
                    </View>
                    <View style={styles.seoDetailSecInner}>
                        <View >
                            <Text style={styles.topBoxText}>Invoice Date:</Text>
                            <Text style={styles.topBoxText}>Invoice No:</Text>
                        </View>
                        <View >
                            <Text style={styles.topBoxText}>11 Nov 2024</Text>
                            <Text style={styles.topBoxText}>FT-222-485312</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Table Section */}
            <View style={styles.tableContainer}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={styles.tableCell}>Sr.No</Text>
                    <Text style={styles.bigtablecell}>Narration / Description</Text>
                    <Text style={styles.tableCell}>Price</Text>
                    <Text style={styles.tableCell}>Service Charge</Text>
                    <Text style={styles.tableCell}>Total</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>1</Text>
                    <Text style={styles.bigtablecell}>
                        Package enquiry
                    </Text>
                    <Text style={styles.tableCell}>45000</Text>
                    <Text style={styles.tableCell}>1000</Text>
                    <Text style={styles.tableCell}>46000</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}></Text>
                    <Text style={styles.bigtablecell}>
                        Sub Total
                    </Text>
                    <Text style={styles.tableCell}>45000</Text>
                    <Text style={styles.tableCell}>1000</Text>
                    <Text style={styles.tableCell}>46000</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}></Text>
                    <Text style={styles.bigtablecell}>
                    </Text>
                    <Text style={styles.tableCell}></Text>
                    <Text style={styles.tableCell}>CGST(9%)</Text>
                    <Text style={styles.tableCell}>4140</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}></Text>
                    <Text style={styles.bigtablecell}>
                    </Text>
                    <Text style={styles.tableCell}></Text>
                    <Text style={styles.tableCell}>SGST(9%)</Text>
                    <Text style={styles.tableCell}>4140</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}></Text>
                    <Text style={styles.bigtablecell}>
                        Total INR
                    </Text>
                    <Text style={styles.tableCell}></Text>
                    <Text style={styles.tableCell}></Text>
                    <Text style={styles.tableCell}>54280</Text>
                </View>
            </View>

            <View>
                <Text style={styles.topBoxTextB}>HSN/SAC Code : 99855</Text>
            </View>

            <View style={styles.termCondition}>
                <View style={styles.termConditionFirst}>
                    <Text style={styles.topBoxTextH}>Terms & Conditions</Text>
                    <Text style={styles.topBoxText}>. All taxes as applicable from time to time specified by the Government</Text>
                    <Text style={styles.topBoxText}>shall be charged to customers.</Text>
                    <Text style={styles.topBoxText}>. Cheque deposits are subject to clearing.</Text>
                    <Text style={styles.topBoxText}>. All invoices are due within 7 days from the date of issue.</Text>
                    <Text style={styles.topBoxText}>. No full refunds are accepted after a booking is made.</Text>
                    <Text style={styles.topBoxText}>. Subject to our home jurisdiction.</Text>
                    <Text style={styles.topBoxText}>. There will be a 1.5% interest charge per month on late invoices.</Text>
                    <Text style={styles.topBoxText}>. Please quote the invoice number when remitting funds.</Text>
                </View>
                <View style={styles.termConditionSec}>
                    <Text style={styles.topBoxTextH}>Bank Details</Text>
                    <Text style={styles.topBoxText}>Account Name: Abaris CRM</Text>
                    <Text style={styles.topBoxText}>Account No: 2357564893</Text>
                    <Text style={styles.topBoxText}>Bank Name: SBI</Text>
                    <Text style={styles.topBoxText}>IFSC Code: SBIN0088</Text>
                    <Text style={styles.topBoxText}>Branch: NFC</Text>
                </View>
            </View>

            <View style={styles.signature}>
                <Text style={styles.topBoxTextBbb}>For Abaris Account</Text>
                <Text style={styles.topBoxText}>Signature</Text>
            </View>

            <View style={styles.bottomSec}>
                <Text style={styles.topBoxTextBbb}>Thank you for booking with Abaris CRM</Text>
                <Text style={styles.topBoxTextBbb}>Account...!!</Text>
                <Text style={styles.topBoxTextBbb}>This is computer generated invoice.</Text>
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
    toSecondBox: {
        flexDirection: 'row',
        padding: '10px 0 20px 0',
        justifyContent: 'space-between',
        borderBottom: '1px solid gray',
    },
    lastBox: {
        flexDirection: 'row',
        padding: '10px 0 20px 0',
        justifyContent: 'space-between',
        borderBottom: '1px solid gray',
    },
    seconBoxInnerFlex: {
        // flexDirection: 'row',
        // padding: '0',
        // justifyContent: 'space-between',
        width: '50%',
        marginRight: '15px'
    },
    secondBoxTableSec: {
        padding: '0',
        width: '50%'
    },

    toSecondBoxInner: {
        borderRight: '1px solid gray',
        padding: '10px',
        width: '50%'
    },

    topBoxText: {
        fontSize: '11px',
        marginBottom: '5px'
    },
    topBoxTextOther: {
        fontSize: '11px',
        marginBottom: '15px'
    },

    topHeading: {
        fontSize: '12px',
    },

    totalCell: {
        fontSize: 12,
        flex: 2, // Span across last 3 columns
        padding: 4,
        textAlign: 'center',
        // fontWeight: 'bold',
    },


    seoDetailSec: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '15px 10px',
        borderBottom: '1px solid gray',
    },
    seoDetailSecInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    imgSec: {
        width: 120,
        height: 60,
        marginRight: 10,
    },


    topBoxTextHeading: {
        fontSize: '18px',
        color: 'black',
    },
    termCondition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '15px',
        marginBottom: '15px'
    },
    termConditionFirst: {
        width: '60%',
        borderRight: '1px solid black',
        paddingRight: '10px'
    },
    termConditionSec: {
        width: '40%',
        textAlign: 'right'
    },
    topBoxTextH: {
        fontWeight: 'bold',
        marginBottom: '10px',
        borderBottom: "1px solid balck"
    },
    topBoxTextB: {
        marginTop: '15px',
        marginBottom: '15px'
    },
    signature: {
        textAlign: 'right'
    },
    bottomSec: {
        textAlign: 'center',
        marginTop: '20px'
    },
    topBoxTextBbb: {
        fontWeight: '900'
    },
    topBoxTextHeadingImg: {
        fontWeight: '900',
        fontSize: '22px'
    }




})