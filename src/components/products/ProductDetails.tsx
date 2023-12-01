
import { Text, View } from 'react-native'

import { IProduct } from '../../interfaces'
import { GLOBALS, TYPOGRAPHY } from '../../shared/globals';
import { COLORS } from '../../shared/theme';
import { ButtonPrimary } from '../shared/ButtonPrimary';

interface Props {
    product: IProduct;
}

export const ProductDetails = ({ product }: Props) => {
    return (
        <View style={GLOBALS.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20
            }}>
                <View>
                    <Text style={TYPOGRAPHY.title}>{product?.name}</Text>
                    <Text style={{ color: COLORS.text_soft }}>{product?.category?.name}</Text>
                </View>
                
                
                <Text style={{ ...TYPOGRAPHY.title, color: COLORS.primary }}>{product?.price}$</Text>
            </View>


            <Text style={TYPOGRAPHY.sub_title}>Descripcion del producto: </Text>
            <Text style={{
                lineHeight: 20,
                color: COLORS.text_soft,
                marginBottom: 20
            }}>
                {product?.description}
            </Text>

            <ButtonPrimary
                label='Agregar a favoritos'
                onPress={() => console.log('Agregando a favoritos')}
            />
        </View>
    )
}
