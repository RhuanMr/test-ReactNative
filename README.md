# Teste Contele de React Native

## Introdução

Esse artefato tem como base tirar dúvidas básicas sobre a execução do código

## Rodando o projeto

Siga as instruções contidas no repositório de back-end
```
https://github.com/contele/cntl-test/tree/master/react-native
```

Clone o repositório 
```
https://github.com/RhuanMr/test-ReactNative
```

Vá até a pasta do app
```
cd testRN
```

Instale as dependências
```
npm install
```

Caso esteja usando ios
```
pod install
```

Rode a aplicação na porta 9988
```
yarn android --port 9988
```
```
yarn ios --port 9988
```

## Erros comuns

É necessário instalar o Android Studio de maneira customizada, utilizando o caminho ```JAVA_HOME```. Verifique se as variáveis ambiente estão devidamente configuradas no``` ~/.bashrc``` ou ```~/.zshrc```:
```
export JAVA_HOME=ENDEREÇO_DE_INSTALAÇÃO_DO_JDK
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Existe um [erro](https://github.com/facebook/react-native/issues/23306) de Gradlew que pode ser resolvido no Linux com:
```
chmod 755 android/gradlew
```
