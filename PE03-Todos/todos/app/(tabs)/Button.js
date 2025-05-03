import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ submitTodo, title = 'Submit' }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={submitTodo}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffffff', // 흰색 배경
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'flex-end', // 우측 정렬
        marginRight: 20, // 오른쪽 여백 추가
        marginTop: 10,
        borderRadius: 5, // 버튼 둥글게
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      buttonText: {
        color: '#000', // 버튼 글자 색 검정
        fontSize: 16,
      },
});

export default Button;
