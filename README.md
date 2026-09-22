# Desafio 13: Estrutura Condicional `switch`

## 1. Para que serve o `switch`?
O `switch` é uma estrutura de controle de fluxo usada para comparar uma única variável com múltiplos valores possíveis.

## 2. Função do `break` e `default`
- **`break`**: Interrompe a execução do `switch` assim que o caso correspondente é encontrado.
- **`default`**: Executado quando nenhum dos casos (`case`) coincide com o valor testado (similar ao `else`).

## 3. O que é *Fall-through*?
É o comportamento do JavaScript de continuar executando os blocos dos `case` seguintes quando o comando `break` é omitido. Podemos usar isso a nosso favor para agrupar múltiplos `case` que compartilham a mesma resposta.

## 4. Comparação Interna
O `switch` utiliza a **comparação estrita (`===`)**. Ele valida tanto o **valor** quanto o **tipo do dado**. Portanto, o número `1` não ativará o `case "1"` (string).