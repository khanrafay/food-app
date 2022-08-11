import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { themeColor } from '../utils/globals';

const DishRow = ({
    id, name, description, price, image
}) => {

    const [isPressed, setPressed] = useState(false);
    return (
        <>
            <TouchableOpacity onPress={() => setPressed(true)}
                className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
                <View className="flex-row ">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400 p-4">{description}</Text>
                        <Text className="text-gray-400 p-4"><Currency quantity={price} currency="USD" /></Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"
                            }}
                            source={image}
                            className="w-20 h-20 bg-gray-300 p-4"
                        />
                    </View>
                </View>
            </TouchableOpacity>

            {isPressed ? (<View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 pb-3">
                    <TouchableOpacity>
                        <MinusCircleIcon size={40} color={themeColor} />
                    </TouchableOpacity>
                    <Text>0</Text>
                    <TouchableOpacity>
                        <PlusCircleIcon size={40} color={themeColor} />
                    </TouchableOpacity>
                </View>
            </View>) : (<></>)}
        </>
    )
}

export default DishRow