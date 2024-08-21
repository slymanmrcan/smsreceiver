import { useEffect, useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';

const GetSms = ({setMessages,setMsgCount,value})=>{
  const fetchSms = () => {
    SmsAndroid.list(
      JSON.stringify({
        box: 'inbox', // 'inbox' or 'sent'
        read: 0, // 0 for unread SMS, 1 for SMS already read
        indexFrom: 0, // start from index 0
        maxCount: 1000, // count of SMS to return
      }),
      (fail:unknown) => {
        console.log('Failed with this error: ' + fail);
      },
      (count:unknown, smsList:unknown) => {
        const smsListString = smsList as string;
        const messages = JSON.parse(smsList);
        setMessages(messages);
        setMsgCount(count);
      }
    );
  }
      useEffect(() => {
          fetchSms();
      },[])
    
    return(<View style={{width:"400",alignItems:'center'}}>
      <Button title='Yenile' onPress={() => fetchSms()}></Button>
    </View>);

}

export default GetSms