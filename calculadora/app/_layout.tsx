import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [display, setDisplay] = useState('0');

  const pressionar = (v) => {
    if (v === '.') {
      const partes = display.split(/[\+\-\*\/]/);
      if (partes[partes.length - 1].includes('.')) return;
    }
    setDisplay(display === '0' && v !== '.' ? v : display + v);
  };

  const calcular = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (e) {
      setDisplay('Erro');
    }
  };

  const limpar = () => setDisplay('0');

  const apagar = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.visor}>{display.replace('.', ',')}</Text>

      <View style={styles.grade}>
        
        <TouchableOpacity style={styles.botao} onPress={limpar}>
          <Text style={styles.texto}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={apagar}>
          <Text style={styles.texto}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOperacao} onPress={() => pressionar('/')}>
          <Text style={styles.texto}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOperacao} onPress={() => pressionar('*')}>
          <Text style={styles.texto}>x</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => pressionar('7')}>
          <Text style={styles.texto}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => pressionar('8')}>
          <Text style={styles.texto}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => pressionar('9')}>
          <Text style={styles.texto}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOperacao} onPress={() => pressionar('-')}>
          <Text style={styles.texto}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => pressionar('4')}>
          <Text style={styles.texto}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => pressionar('5')}>
          <Text style={styles.texto}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => pressionar('6')}>
          <Text style={styles.texto}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOperacao} onPress={() => pressionar('+')}>
          <Text style={styles.texto}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => pressionar('1')}>
          <Text style={styles.texto}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => pressionar('2')}>
          <Text style={styles.texto}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => pressionar('3')}>
          <Text style={styles.texto}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoIgual} onPress={calcular}>
          <Text style={styles.texto}>=</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoZero} onPress={() => pressionar('0')}>
          <Text style={styles.texto}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => pressionar('.')}>
          <Text style={styles.texto}>,</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000', 
    justifyContent: 'flex-end', 
    padding: 20 
  },
  visor: { 
    fontSize: 70, 
    color: '#fff', 
    textAlign: 'right', 
    marginBottom: 20 
  },
  grade: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  botao: { 
    width: '22%', 
    height: 80, 
    backgroundColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10, 
    borderRadius: 10 
  },
  botaoOperacao: { 
    width: '22%', 
    height: 80, 
    backgroundColor: '#f1a33c', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10, 
    borderRadius: 10 
  },
  botaoIgual: { 
    width: '22%', 
    height: 80, 
    backgroundColor: '#4CAF50', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10, 
    borderRadius: 10 
  },
  botaoZero: { 
    width: '72%', 
    height: 80, 
    backgroundColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 10, 
    borderRadius: 10 
  },
  texto: { 
    fontSize: 28, 
    color: '#fff', 
    fontWeight: 'bold' 
  }
});