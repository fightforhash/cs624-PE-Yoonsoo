import { StyleSheet } from 'react-native';

export const Colors = {
  dark: 'black',
  light: 'white',
};

const baseContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const baseBox = {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 300,
  width: 300,
};

const lightTheme = StyleSheet.create({
  container: {
    ...baseContainer,
    backgroundColor: Colors.light,
  },
  box: {
    ...baseBox,
    borderColor: Colors.dark,
  },
  innerSquare: {
    width: 120,
    height: 60,
    backgroundColor: '#4285F4',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    ...baseContainer,
    backgroundColor: Colors.dark,
  },
  box: {
    ...baseBox,
    borderColor: Colors.light,
  },
  innerSquare: {
    width: 120,
    height: 60,
    backgroundColor: '#4285F4',
  },
});

export const nested = {
  outerBox: {
    ...baseBox,
    borderColor: Colors.light,    
    backgroundColor: Colors.light, 
  },
  innerBox: {
    width: 80,
    height: 80,
    backgroundColor: '#4285F4',   
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
};

// 프로필 카드 스타일 수정
export const profileCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    position: 'relative',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: 'dodgerblue',
    width: 300,
    height: 400,
    overflow: 'visible',
  },
  cardImageContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: -60,
    left: '50%',
    marginLeft: -60,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    paddingTop: 0,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardTextContainer: {
    marginTop: 70,
    alignItems: 'center',
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 80,
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 10, // 이름과 직함 사이 패딩 추가
    marginBottom: 25,
    textAlign: 'center',
    textDecorationLine: 'underline', // 밑줄 추가
  },
  cardDescription: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
    lineHeight: 18,
    width: 240,
    height: 100,
  },
});

export function getStyleSheet(useDark) {
  return useDark ? darkTheme : lightTheme;
}
