import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const FetchApi = ({ messages }) => {
  const [text, onChangeText] = useState('https://8995-5-25-33-224.ngrok-free.app/otp');
 
  const SendCode = () => {
    const mesajsira = Object.values(messages);
    const filteredmessage1 = mesajsira.filter(m => m.address === "PASSO*");
    const sortedMessages = filteredmessage1.sort((a, b) => b.date - a.date);
    const lastmessage = sortedMessages[0].body;
    console.log(lastmessage);
    const code = "123"
    //const code = lastmessage.match(/\b\d{6}\b/);
    //console.log(code);
    
    //const messagesend = lastmessage.body;
    //console.log(lastmessage);
    
    
    fetch(`${text}?timestamp=${Date.now()}&code=${code}`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // API'den gelen veriyi işleyin
      })
      .catch(error => {
        console.error('API çağrısı sırasında hata oluştu:', error);
      });
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='api adresi buraya girilecek'
      />
      <View style={styles.fixToText}>
        <Button title='Gönder' onPress={SendCode} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default FetchApi;