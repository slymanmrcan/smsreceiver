

import React from 'react';
import {PropsWithChildren, useEffect,useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Permisson from './permisson';
import SmsAndroid from 'react-native-get-sms-android';
import DropDownPicker from 'react-native-dropdown-picker';

import GetSms from './GetSms';
import MyCustomType from './types/customTypes';

import FetchApi from './FetchApi';
import ShowSms from './showSms';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Main :React.FC<MyCustomType> =({body,address,smsList,date})=> {
  //dropdown state
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null); 
  const [msgcount, setMsgCount] = useState(); 
  const [refreshData, setRefreshData] = useState(false); 
  
  //const [items, setItems] = useState([messages.]);
  const [messages, setMessages] = useState([]);
  
  const [filteredmessage, setFilteredmessage] = useState([]);
  //dropdown start
  const [items, setItems] = useState([]);
 
//dropdown end

  useEffect(() => {
    // Benzersiz adresleri çıkar
    const uniqueAddresses = [...new Set(messages.map(msg => msg.address))];
    // DropDownPicker için uygun formata dönüştür
    const addressItems = uniqueAddresses.map(address => ({
      label: address,
      value: address,
    }));
    setItems([
      {label: "tümü",value:"tümü"},
      ...addressItems]);
  }, [messages]);

  DropDownPicker.setTheme("DARK");

  
  return (
    <View style={styles.container}>
      <Permisson/>
      <Text style={{textAlign:'center',fontSize:20}}>Mesajlarınız burada gözükmeli</Text>
      <GetSms value = {value} setMessages={setMessages} setMsgCount={setMsgCount} />

      <View style={{alignItems:'flex-end'}}>
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder='gönderen seç'
      style={{marginLeft:60,width:240,marginTop:20,display:'flex'}}
      modalProps={{
        animationType: "fade"
      }}
      zIndex={3000}
      zIndexInverse={1000}
      closeAfterSelecting={true}
      closeOnBackPressed={true}
      itemSeparator={true}
      maxHeight={200}/>
      </View>
      

    <View style = {{marginTop:180}}>
          {/* <FetchApi messages ={messages} /> */}
    </View>
    {/* mesajları çeken ve ekran gösteren  kısım*/}
         <ShowSms messages={messages} value={value} />
          
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    padding:10,
    width:100,
  },
  container:{
      flex: 1,
      paddingTop: 20, // İçeriğin üst kısmında 20 birim boşluk bırakır
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
 
});

export default Main
