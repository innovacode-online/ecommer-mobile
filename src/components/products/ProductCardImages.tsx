import React, { useEffect, useState } from 'react'
import { IProduct } from '../../interfaces'
import { FlatList, Image, Pressable, View } from 'react-native';
import { GLOBALS } from '../../shared/globals';

interface Props {
    product: IProduct;
}

export const ProductCardImages = ({ product }: Props) => {

    const [urlImage, setUrlImage] = useState('');

    const baseURL = 'https://store.innovacode.online';

    useEffect(() => {
        if( product?.images ){
            setUrlImage(product.images[0].url)
            return;
        }

        setUrlImage('');

    }, [product])


    return (
        <View style={GLOBALS.container}>
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={{ uri: baseURL + urlImage }}
                    style={{
                        width: 300, height: 300, marginBottom: 20
                    }}
                />
            </View>

            <FlatList
                data={product?.images}
                horizontal
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => setUrlImage( item.url ) }
                    >
                        <Image
                            style={{ width: 80, height: 80 }}
                            source={{ uri: baseURL + item.url }}
                        />
                    </Pressable>
                )}
                contentContainerStyle={{ gap: 20, marginBottom: 30 }}
            />



        </View>
    )
}
