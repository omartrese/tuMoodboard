import { View, StyleSheet } from "react-native"
import CardImage from "../components/CardImage"

export default function Editor() {

    return (
        <View style={styles.container}>
            {
                [1, 2, 3].map((el) => {
                    return <CardImage />
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
    },

})
