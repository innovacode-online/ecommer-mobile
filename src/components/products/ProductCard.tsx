import React from 'react'
import { IProduct } from '../../interfaces'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GLOBALS } from '../../shared/globals';
import { COLORS } from '../../shared/theme';

interface Props {
    product: IProduct;
}

export const ProductCard = ({ product }: Props) => {

    const baseURL = 'https://store.innovacode.online'

    return (
        <TouchableOpacity activeOpacity={ 0.9 } style={ GLOBALS.product_card }>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: baseURL + product.images[0].url }}
                />
            </View>

            <Text style={{ fontWeight: 'bold' }}>{ product.name }</Text>
            <Text style={{ color: COLORS.text_soft, fontSize: 12, marginBottom: 10 }} numberOfLines={ 2 }>{ product.description }</Text>
            <Text style={{ fontWeight: 'bold' }}>
                Precio: <Text style={{ color: COLORS.primary }}>{ product.price }$</Text>
            </Text>
        </TouchableOpacity>
    )
}
