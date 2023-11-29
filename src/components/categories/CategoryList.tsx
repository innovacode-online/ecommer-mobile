import { FlatList, Text } from 'react-native'

import { useEcommerce } from '../../hooks/useEcommerce';
import { TYPOGRAPHY, GLOBALS } from '../../shared/globals';
import { CategoryButton } from './CategoryButton';

export const CategoryList = () => {

    const { categories } = useEcommerce();

    return (
        <>
            <Text style={{ ...TYPOGRAPHY.title, ...GLOBALS.container }}>Categorias</Text>
            <FlatList
                horizontal
                data={ categories }
                style={ GLOBALS.categories_list }
                showsHorizontalScrollIndicator={ false }
                renderItem={( { item } ) => (
                    <CategoryButton category={ item }/>
                )}
            />

        </>
    )
}
