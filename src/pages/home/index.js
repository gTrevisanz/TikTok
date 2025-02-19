import { 
    View,
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    StatusBar, 
    Platform, 
    FlatList
} from 'react-native';
import { useState, useRef } from 'react';
import FeedItem from '../../components/ButtonNew/FeedItem'; 

const feedItems = [ 
    {
      id: '1', 
      video: 'https://i.imgur.com/Cnz1CPK.mp4',
      name: '@sujeitoprogramador',
      description: 'Criando o ShortDev do zero com RN',
    },
    {
      id: '2', 
      video: 'https://i.imgur.com/E0tK2bY.mp4',
      name: '@henriquesilva',
      description: 'Fala turma, estou aprendendo React Native com sujeito programador',
    },
    {
      id: '3', 
      video: 'https://i.imgur.com/mPFvFyX.mp4',
      name: '@sujeitoprogramador',
      description: 'Aprendendo a trabalhar com Drag and Drop no React Native',
    }
];

export function Home() {
    const [showItem, setShowItem] = useState(feedItems[0]);

    const onViewRef = useRef(({ viewableItems }) => {
        if (viewableItems && viewableItems.length > 0) {
            setShowItem(feedItems[viewableItems[0].index]);
        }
    });

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50
    });

    return (
        <View style={styles.container}>
            {/* Labels de navegação */}
            <View style={styles.labels}>
                <TouchableOpacity>
                    <Text style={[styles.labelText, { color: "#DDD" }]}>Seguindo</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={[styles.labelText, { color: "#FFF" }]}>Pra você</Text>
                    <View style={styles.indicator}></View>
                </TouchableOpacity>
            </View>

            {/* Lista de vídeos */}
            <FlatList 
                data={feedItems}
                renderItem={({ item }) => <FeedItem data={item} currentVisibleItem={showItem} />}
                keyExtractor={(item) => item.id}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewabilityConfig.current}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    labels: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        position: 'absolute',
        top: 6,
        right: 0,
        left: 0,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 55,
        zIndex: 99
    }, 
    labelText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 2,
    },
    indicator: {
        backgroundColor: "#FFF",
        width: 32,
        height: 2,
        alignSelf: 'center'
    }
});
