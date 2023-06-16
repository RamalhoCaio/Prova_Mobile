import { Text, View, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native';

export default function loginPage(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>BEM VINDO</Text>
        <Link to={{screen: "dashboard"}} style={styles.caixa}>Entrar</Link>
        <Link to={{screen: "registrar"}} style={styles.caixa}>Criar conta</Link>
        <Link to={{screen: "esqueci"}} style={styles.caixa}>Esqueci minha senha!</Link>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#999',
      alignItems: 'center',
      justifyContent: 'center',
    },

    caixa: {
      flex: 1,
      backgroundColor: 'yellow',
      marginTop: '10px',
      paddingHorizontal: '20px',
      paddingVertical: '5px',
      borderRadius: '10px',
    },

    titulo: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '25px',
    }
  });