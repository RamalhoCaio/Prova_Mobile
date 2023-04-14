import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Seu Inventário</Text>

      <Text>Espada</Text>
      <Image 
        source = {{uri:'https://img.freepik.com/vetores-premium/ilustracao-de-desenho-animado-desenhada-a-mao-de-espada_288796-1948.jpg?w=2000'}}
        style ={styles.imagem}
        />
      <Text>Dano : 15           Durabilidade : 100</Text>
      <Text style={styles.botao}>Propor troca</Text>
      <Text></Text>

      <Text>Escudo Gasto</Text>
      <Image 
        source = {{uri:'https://static.vecteezy.com/ti/vetor-gratis/p3/12469823-escudo-de-desenho-animado-vetor.jpg'}}
        style ={styles.imagem}
        />
        <Text>Protecao : 20           Durabilidade : 43</Text>
      <Text style={styles.botao}>Propor troca</Text>

      <Text>Armadura</Text>
      <Image 
        source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4y4bf41wADdHWCWsFWbPVBfCMnlKcMfaw6w&usqp=CAU'}}
        style ={styles.imagem}
        />
        <Text>Proteção : 30           Durabilidade : 100</Text>
      <Text style={styles.botao}>Propor troca</Text>
      <StatusBar style="auto" />
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
  imagem: {
    alignItems: 'center',
    width: '100px',
    height: '100px',
  },
  botao: {
    backgroundColor: '#0390fc',
    padding: 5,
    color: 'white',
    marginBottom: 30,
  },
  titulo: {
    fontWeight: 'Bolder',
    color : 'red',
    marginBottom: 80,
  }
});
