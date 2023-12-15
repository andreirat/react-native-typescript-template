import {
  ImagePickerResponse,
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

interface ImagePickerService {
  openImageLibrary(callback: (imageUri: string | undefined) => void): void;

  openCamera(callback: (imageUri: string | undefined) => void): void;
}

const cameraOptions: ImageLibraryOptions | CameraOptions = {
  mediaType: 'photo',
  includeBase64: true,
  maxWidth: 2160,
  maxHeight: 2160,
};

const handleImagePickerResponse = (
  response: ImagePickerResponse,
  callback: (imageUri: string | undefined) => void,
): void => {
  if (response.didCancel) {
    callback(undefined);
  } else if (response.errorCode) {
    callback(undefined);
  } else {
    callback(response && response.assets ? response.assets[0].uri : undefined);
  }
};

const imagePickerService: ImagePickerService = {
  openImageLibrary: callback => {
    launchImageLibrary(cameraOptions, response => handleImagePickerResponse(response, callback));
  },
  openCamera: callback => {
    launchCamera(cameraOptions, response => handleImagePickerResponse(response, callback));
  },
};

export default imagePickerService;
