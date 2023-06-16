import { View, Text, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';

export default function esqueciPage(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Esqueci</Text>
        <Link to={{screen: "dashboard"}} style={styles.caixa}>Recuperar Senha</Link>
        <Link to={{screen: "login"}} style={styles.caixa}>Voltar</Link>
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
      marginTop: '20px',
      backgroundColor: 'yellow',
      borderRadius: '10px',
      padding: '5px',
    },

    titulo: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '25px',
    }
  });