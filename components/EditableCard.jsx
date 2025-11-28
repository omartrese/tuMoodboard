import { Pressable, Image, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useBoard } from "../BoardContext";

export default function EditableCard({ id }) {
    const { board, setBoard } = useBoard();

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert('Permission required', 'Permission to access the media library is required.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log("Image " + id + " changed");
        if (!result.canceled) {
            setBoard(prev => {
                const newImages = [...prev.images];
                newImages[id] = result.assets[0].uri;

                return { ...prev, images: newImages };
            });
        }
    };

    return (

        (board.images[id] ? 
        <Pressable style={styles.card} onPress={pickImage}>
            <Image source={{ uri: board.images[id] }} style={styles.cardImg} />
        </Pressable> 
        : <Pressable style={styles.card} onPress={pickImage} />)
        // (board.images[id] ? <Image source={{ uri: board.images[id] }} style={styles.card} /> : <Pressable style={styles.card} onPress={pickImage} />)
    )
}

export const styles = StyleSheet.create({
    card: {
        width: "45%",
        height: 200,
        backgroundColor: "red",
        marginHorizontal: 6,
        marginVertical: 10
    },

    cardImg: {
        width: "100%",
        height: "100%",
    }
})