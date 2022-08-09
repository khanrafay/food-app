import { View, Text, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const RestaurantScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    } } = route;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    console.log('img', imgUrl)
    return (
        <ScrollView>
            <View className="relativeaa">
            <Image
                source={
                    imgUrl
                }
                className="w-full h-56 bg-gray-300 p-4"
            />
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen