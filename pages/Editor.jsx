import { View, Text, StyleSheet } from "react-native"

export default function Editor() {



    return (
        <View style={styles.container}>
            {
                [1, 2, 3, 4, 5, 6].map((el) => {
                    return <View style={styles.card}>
                        <Text style={{color: "#fff"}}> {el} </Text>
                    </View>

                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2, 
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginHorizontal: 10
    },
    
    card: {
        width: "45%",
        height: 200,
        backgroundColor: "red",
        marginHorizontal: 6,
        marginVertical: 10
    }
})
