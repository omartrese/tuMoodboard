import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useBoard } from "../BoardContext";

export default function Home({ navigation }) {
    const { board } = useBoard();
    const { images } = board || [];

    return (
        <View style={styles.container}>
            {
                !images &&
                <View>
                    <Text style={styles.title}>No moodboards yet!</Text>
                    <Text style={styles.subtitle}>Create your first moodboard!</Text>
                    <TouchableOpacity style={styles.editorBtn} onPress={() => navigation.navigate("Editor")}>
                        <Text style={{ fontSize: 18 }}>Go Editor</Text>
                    </TouchableOpacity>
                </View>
            }

            {
                images &&
                images.map((image, index) => {
                    return <Image key={index} source={{ uri: image }} style={{ width: 200, height: 200 }} />
                })
            }

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffd7d7ff",
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center"
    },

    subtitle: {
        fontSize: 28,
        fontWeight: "semibold",
        textAlign: "center"
    },

    editorBtn: {
        backgroundColor: "#ffffffff",
        marginHorizontal: "auto",
        marginVertical: 20,
        padding: 5,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    }

});