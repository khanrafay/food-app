import { View, Text, ScrollViewBase, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { themeColor } from '../utils/globals'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'
import { getRestaurants } from '../api'

const FeaturedRow = ({ id, title, description, type }) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const data = getRestaurants().then(({ data }) => {
            console.log('data', data)
            setRestaurants(data)
        });
    }, [])




    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text>{title}</Text>
                <ArrowRightIcon color={themeColor} />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="px-4"
            >
                {/* Restaurant Card */}
                {restaurants?.map((restaurant, index) => (
                    <>
                        {index < 10 &&
                            <RestaurantCard
                                key={index}
                                id={index}
                                imgUrl={restaurant?.photo?.images?.medium?.url}
                                title={restaurant?.name}
                                rating={restaurant?.rating}
                                address={restaurant?.address}
                                short_description={restaurant?.description}
                                dishes={restaurant?.cuisine}
                                long={restaurant?.longitude}
                                lat={restaurant?.lattitude}
                            />
                        }
                    </>
                ))}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow