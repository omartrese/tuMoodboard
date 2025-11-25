import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create your first moodboard!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Editor")}>
                <Text>Create moodboard</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafcf7",
        alignItems: "center"
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",

    }

});