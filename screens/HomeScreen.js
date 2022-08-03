import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { themeColor } from '../utils/globals';
import sanityClient from '../sanity';


const HomeScreen = () => {
    const navigation = useNavigation();

    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 item-center mx-4 space-x-2">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color={themeColor} />
                    </Text>
                </View>
                <UserIcon size={35} color={themeColor} />
            </View>

            {/* Search */}
            <View className="flex-row space-x-2 items-center pb-2 mx-4">
                <View className="flex-row space-x-2 bg-gray-200 flex-1">
                    <SearchIcon color="gray" style={10} />
                    <TextInput placeholder='Restaurants and Cuisines'
                        keyboardType='default'
                    />
                </View>
                <AdjustmentsIcon color={themeColor} />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100 ">
                {/* Categories */}
                <Categories />

                {/* Featured */}

                <FeaturedRow
                    title={'Featured Row'}
                    description={'The best in town'}

                />


                {/* Tasty Discounts*/}
                {/* <FeaturedRow
                    id="1234"
                    title="Featured"
                    description="Lorem ipsum"
                    type="featured"
                /> */}

                {/* Offers near you*/}
                {/* <FeaturedRow
                    id="12345"
                    title="Featured"
                    description="Lorem ipsum"
                    type="featured"
                /> */}

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen