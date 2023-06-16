import { View, Text, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';

export default function registerPage(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>REGISTRAR</Text>
        <Link to={{screen: "dashboard"}} style={styles.caixa}>Criar conta</Link>
        <Link to={{screen: "login"}} style={styles.caixa}>Ja tenho conta</Link>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#999',
      alignItems: 'center',
      justifyContent: 'center',
    },

    caixa: {
      flex: 0,
      backgroundColor: 'yellow',
      marginTop: '20px',
      padding: '10px',
      borderRadius: '10px'
    },

    titulo: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '25px',
    }
  });