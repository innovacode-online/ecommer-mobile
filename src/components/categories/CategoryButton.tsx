import { Image, ListRenderItemInfo, Text, View } from 'react-native'
import { ICategory } from '../../interfaces';
import { GLOBALS } from '../../shared/globals';

interface Props {
    category: ICategory;   
}

export const CategoryButton = ({ category }: Props) => {

    const baseURL = 'https://store.innovacode.online'
console.log(category.image)
    return (
        <View style={{ ...GLOBALS.category_button }}>
            <Image
                style={{ width: 40, height: 40 }}
                source={{ uri: baseURL + category.image }}
            />
            <Text>{ category.name }</Text>
        </View>
    )
}
