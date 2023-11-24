import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TYPOGRAPHY, GLOBALS } from '../shared/globals';
import { CategoryList, SearchInput } from '../components';

import { useContext } from 'react';
import { EcommerceContext } from '../context/ecommerce/EcommerceContext';

export const HomeScreen = () => {

    // const { top } = useSafeAreaInsets();

    const { producto } = useContext( EcommerceContext );

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar style='dark' />

            <View style={{ ...GLOBALS.container }}>
                <Text style={TYPOGRAPHY.title}>Bienvenido</Text>
                <Text style={TYPOGRAPHY.sub_title}>Innova Code</Text>
            </View>

            <SearchInput />
            <CategoryList/>
        </SafeAreaView>
    )
}
