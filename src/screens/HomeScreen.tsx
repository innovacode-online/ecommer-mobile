import { ScrollView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TYPOGRAPHY, GLOBALS } from '../shared/globals';
import { CategoryList, ProductList, SearchInput } from '../components';

export const HomeScreen = () => {


    return (
        <ScrollView style={{ flex: 1 }}>
            <StatusBar style='dark' />
            <SafeAreaView>
                <View style={{ ...GLOBALS.container, marginBottom: 20 }}>
                    <Text style={TYPOGRAPHY.title}>Bienvenido</Text>
                    <Text style={TYPOGRAPHY.sub_title}>Innova Code</Text>
                </View>
                <SearchInput />
                <CategoryList />
                <ProductList />
            </SafeAreaView>
        </ScrollView>
    )
}
