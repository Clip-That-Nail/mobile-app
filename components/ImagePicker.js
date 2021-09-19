import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';

const ImgPicker = (props) => {
  const [pickedImage, setPickedImage] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
    if (result.status !== 'granted') {
      Alert.alert('Insufficient permissions!', 'You need to grant camera permissions to use this app.', [{ text: 'Okay' }]);
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setPickedImage(image.uri);
    props.onImageTaken(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <TouchableOpacity style={styles.imagePreviewIcon} onPress={takeImageHandler}>
            <Ionicons name="camera-outline" size={100} color="#dadada" />
            <Text style={styles.imagePreviewIconText}>Take animal picture.</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.imageContainer} onPress={takeImageHandler}>
            <Image style={styles.image} source={{ uri: pickedImage }} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreviewIcon: {
    flex: 1,
    width: '100%',
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreviewIconText: {
    color: "#999"
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    flex: 1,
    elevation: 1,
    borderRadius: 20,
    zIndex: 1
  },
});

export default ImgPicker;