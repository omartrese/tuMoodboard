import { View, StyleSheet } from "react-native"
import CardImage from "../components/CardImage"
import { useBoard } from "../BoardContext"


export default function Editor() {

    const { board } = useBoard();

    return (
        <View style={styles.container}>
            {
                (Array.from({ length: board.size }, (_, i) => i)).map((el) => {
                    return <CardImage key={el} id={el} />
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
