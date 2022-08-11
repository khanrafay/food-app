import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, ChevronRightIcon, LocationMarkerIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import { dishes } from '../components/Dishes/dishes';
import DishRow from '../components/DishRow';

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
        long,
        lat
    } } = route;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    console.log('dis', dishes)
    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={
                        imgUrl
                    }
                    className="w-full h-56 bg-gray-300 p-4"
                />
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
                    <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>
            <View className="bg-white">
                <View className="pt-4 px-4">
                    <Text className="text-2xl font-bold">{title}</Text>
                    <View className="flex-row space-x-2 my-1 flex-wrap">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon color="green" opacity={0.5} size={22} />
                            <Text className="text-green-500">4.8</Text>
                        </View>

                        <View className="flex-row items-center space-x-1 flex-wrap">
                            <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
                            <Text className="text-xs text-gray-500 " style={{
                                flexShrink: 2
                            }}>Nearby  -  {address}</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                </View>
                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y
                 border-gray-300
                ">
                    <QuestionMarkCircleIcon color="gray" opacity={0.6} size={22} />
                    <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
                    <ChevronRightIcon color="#00CCBB" />
                </TouchableOpacity>
            </View>

            <View>
                <Text className="px-4 pt-6 mb-4 font-bold text-xl">
                    Menu
                </Text>
                {/* Dishes */}
                {dishes.map((dish, index) =>
                    <DishRow
                        key={index}
                        id={index}
                        name={dish.name}
                        description={dish.description}
                        price={dish.price}
                        image={dish.image}
                    />
                )}
            </View>
        </ScrollView>
    )
}

export default RestaurantScreen