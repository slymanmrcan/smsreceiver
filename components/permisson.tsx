import { useEffect, useLayoutEffect } from "react";
import { View,Text,PermissionsAndroid, Platform,} from "react-native"
import Contacts from 'react-native-contacts';

const Permisson :React.FC =()=>{
//permisson burada vermeyi deneyelim
    useEffect(()=>{
        const requestSMSPermission = async () => {
            if (Platform.OS === 'android') {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_SMS,
                {
                  title: 'SMS Erişim İzni',
                  message: 'SMS mesajlarını okumak için izin vermeniz gerekiyor.',
                  buttonNeutral: 'Daha Sonra',
                  buttonPositive: 'Tamam',
                }
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                
                console.log('SMS izni verildi.');
              } else {
                console.log('SMS izni reddedildi.');
              }
            }
          };
          


        requestSMSPermission();
    },[])
    useEffect(()=>{
        const requestContactPermission = async ()=>{
            if (Platform.OS === "android") {
                const granted1 = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                    {
                        title: 'Rehber erişim izni',
                        message: 'Rehber erişim izni',
                        buttonPositive: 'Please accept bare mortal',
                    }
                );
                if (granted1 === PermissionsAndroid.RESULTS.GRANTED) {
                
                    console.log('rehber izni verildi.');
                  } else {
                    console.log('rehber izni reddedildi.');
                  }
                }
              };

        requestContactPermission();

    },[])


    return(
        <View></View>
    );
}


export default Permisson;