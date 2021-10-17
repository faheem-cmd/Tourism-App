import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'

const PlaceSingle = () => {


    const [page, setPage] = useState(true)
    const [select, setSelect] = useState(1)
    const [bo, setBo] = useState(true)

    const item = [{ id: 1, title: 'Overview' },
    { id: 2, title: 'Gallery' }]



    const handle = (e) => {
        setSelect(e)
        if (e === 1) {
            setPage(true)
        } else {
            setPage(false)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <ImageBackground imageStyle={{ borderBottomRightRadius: 30 }} style={styles.imageHotel} source={{ uri: 'https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2lra2ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' }}>
                    <View style={styles.subImg}>
                    </View>
                </ImageBackground>
                <View style={styles.sub}>
                    <View style={styles.title}>
                        {item.map(item =>
                            <TouchableOpacity key={item.id}>
                                <Text style={select == item.id ? { ...styles.over, borderBottomWidth:2,borderBottomColor:'orange', }  : { ...styles.over, color: 'grey', }} onPress={() => handle(item.id)}>{item.title}</Text>
                            </TouchableOpacity>)}
                    </View>
                </View>
                {page === true ?
                    <View>
                        <Text>heeello</Text>
                    </View> : <Text>faheem</Text>}
            </View>


        </View>

    )
}

export default PlaceSingle


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
    },
    subContainer: {
        padding: '0%',
        // elevation:2,
    },
    imageHotel: {
        height: 350,
        width: '100%',
        // flex: 1,
        resizeMode: 'cover',

    },
    subImg: {
        height: 350,
        width: '100%',
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
        borderBottomRightRadius: 30,
    },
    sub: {
        padding: '3%'
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 5
    },
    over: {
        fontSize: 20,
        fontFamily: liteFont,
        color: 'black',
    },
    border: {
        borderColor: "orange",

    }
})