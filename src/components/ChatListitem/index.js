import { Text, View, Image, StyleSheet } from 'react-native';

const ChatlistItem = () => {
    return (
        <View style={styles.container} >
            <Image source={{uri:'https://img.freepik.com/premium-vector/big-head-llama-avatar_79416-58.jpg?w=2000'}}
            style={styles.Image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                <Text style={styles.name} numberOfLines={1} > Sabrina </Text>
                <Text style={styles.subTitle}> 8:30 </Text>
                </View>

                <Text numberOfLines={2} style={styles.subTitle}>Hello, there!</Text>
                    
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,

        height: 70,

    },
    Image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        //backgroundColor: 'red',

        borderBottomWidth: StyleSheet.hairlineWidth ,
        borderBottomColor: 'lightgray',
    },
    row: {

        flexDirection: 'row',
        marginBottom: 5,
    },
    name: {
        flex: 1,
        fontWeight: 'bold'
    },
    subTitle: {
        color: 'gray',
    },

});

export default ChatlistItem;