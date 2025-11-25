import { Pressable, Image, StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function CardImage() {
    const [image, setImage] = useState(null);

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

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (

            (image ? <Image source={{ uri: image }} style={styles.card} /> : <Pressable style={styles.card} title="Pick an image from camera roll" onPress={pickImage} />)
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
})