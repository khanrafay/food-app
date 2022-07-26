import { View, Text, ScrollViewBase, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { themeColor } from '../utils/globals'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description, type }) => {
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
                <RestaurantCard
                 id="123"
                 imgUrl="https://links.papareact.com/gn7"
                 title="Sushi!"
                 rating="4"
                 genre="Japanese"
                 address="Japan Town"
                 short_description="It's the best one"
                 dishes={[]}
                 long="20"
                 lat="0"
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow