import { ActivityIndicator, View } from 'react-native'

export const CircularProgress = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={50} />
        </View>
    )
}
