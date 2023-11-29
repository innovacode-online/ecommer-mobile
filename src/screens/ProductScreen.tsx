
import { ScrollView, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProductScreen = () => {

    const { params }: any = useRoute();
    
    console.log(params.slug)

    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView>
                <Text>{ params.slug }</Text>
            </SafeAreaView>
        </ScrollView>
    )
}
