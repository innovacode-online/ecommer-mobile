import { useRoute } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import { IProduct } from '../interfaces';
import { useFetch } from '../hooks/useFetch';
import { TYPOGRAPHY } from '../shared/globals';
import { CircularProgress, ProductCardImages, ProductDetails } from '../components';

export const ProductScreen = () => {

    const baseUrl = 'https://store.innovacode.online/api/products';

    const { params }: any = useRoute();
    const { data: product, isLoading, isError } = useFetch<IProduct>(`${baseUrl}/${params.slug}`);

    // ! No recomendable
    // const product  = data as IProduct;

    if (isLoading) {
        return <CircularProgress />
    }

    if (isError.hasError) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{isError.message}</Text>
            </View>
        )
    }


    return (
        <ScrollView showsVerticalScrollIndicator={ false } style={{ flex: 1 }}>
            <SafeAreaView>
                <Text style={{ ...TYPOGRAPHY.title, textAlign: 'center', marginBottom: 20 }}>
                    {product?.name}
                </Text>
                <ProductCardImages product={ product } />
                <ProductDetails product={ product }/>
            </SafeAreaView>
        </ScrollView>
    )
}
