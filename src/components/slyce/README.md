# Slyce – Agilize Grid System

Slyce é um grid system que fraciona o viewport em 24 pedaços e pode ser utilizado para formatar o layout de diversas formas, simples e rápido.

### Getting started

Existem 3 componentes core para a configuração da estruturas.

##### Container

O primeiro componente é o `Container`, que deve envolver os demais componentes da composição. O papel dele, além de manter a estrutura em bloco, é aplicar um passing de meio gutter ($gutterSpace) para caso o usuário queira criar espaçamentos iguais entre as colunas.


| Propriedades | Descrição | Types
| --- | --- | --- |
| children | Recebe um react node como filho | React Node |
| className | É possível atribuir uma classe específica ao container | string |

<br>

##### Row
O componente Row é o responsável por manter as colunas lado a lado.

| Propriedades | Descrição | Types
| --- | --- | --- |
| children | Recebe um react node como filho | React Node |
| className | É possível atribuir uma classe específica a Row | string |
| justifyContent | Uso de colunas com espaçamento menor que 24 frações e realinhamento | 'flex-start', 'flex-end', 'center', 'space-between', 'space-around' |

<br>

##### Col

`Col` é o componente mais importante do slyce, nele devemos passar o valor que cada coluna vai ocupar dentro das 24 frações e para cada dispositivo. Ex:

```
<Col small={24} medium={8} large={8}>
      Coluna 01
</Col>
```

No caso acima, para dispositivos pequenos a coluna ocupará 24 frações (total da tela) e para médios e grandes ocupará 8 frações (1/3 da tela).

Obs: A configuração dos média queries são definidas no tema.


O componente `Col` recebe configurações de cores do styled-system, permitindo que passe propriedades como `backgroundColor | bg` e definindo uma cor de fundo para a coluna inteira (cores definidas no tema). Ex:

```
<Col small={24} medium={8} large={8} backgroundColor=”green”>
      Coluna 01
</Col>
```

É possível determinar um espaçamento (offset) esquerdo para cada coluna, isso nos permite criar gaps entre as colunas ou positionar uma coluna em um lugar específico. Ex:

```
<Col small={12} medium={12} large={12} offsetLeft={6}>
      Coluna 01
</Col>
```

A coluna se posicionaria ao centro, ocupando 50% da largura do dispositivo.

O componente tem, por padrão, um padding (eixo X) interno equivalente a meio gutter ($gutterSpace), porém, é possível que esse padding seja removido através da prop noGutter. Ex:

```
<Col small={12} medium={12} large={12} noGutter>
      Coluna 01
</Col>
```

Ainda na coluna, é disponibilizado a propriedade `align-self`. Isso permite que as colunas sejam alinhadas verticalmente às demais colunas. Ex:

```
<Col small={12} medium={12} large={12} alignSelf=”center”>
      Coluna 01
</Col>
```

<br>

| Propriedades | Descrição | Types
| --- | --- | --- |
| children | Recebe um react node como filho | React Node |
| className | É possível atribuir uma classe específica à Coluna | string |
| small | Quantidade de frações da tela utilizada por dispositivos pequenos | number |
| medium | Quantidade de frações da tela utilizada por dispositivos médios | number |
| large | Quantidade de frações da tela utilizada por dispositivos grandes | number |
| noGutter | Remove o espaçamento entre colunas | boolean (default: false) |
| offsetLeft | Adiciona um espaçamento esquerdo na coluna com valor igual a frações de coluna | number (default: 0) |
| alignSelf | Permite que as colunas sejam alinhadas verticalmente às demais colunas | 'flex-start', 'center', 'flex-end' |

<br>

Basic example:

```
<Container>
    <Row>
        <Col small={12} medium={12} large={12} noGutter>
            Coluna 01
        </Col>
        <Col small={12} medium={12} large={12} noGutter>
            Coluna 02
        </Col>
    </Row>
    <Row>
        <Col small={8} medium={8} large={8} noGutter>
            Coluna 01
        </Col>
        <Col small={8} medium={8} large={8} noGutter>
            Coluna 02
        </Col>
        <Col small={8} medium={8} large={8} noGutter>
            Coluna 03
        </Col>
    </Row>
</Container>
```

<br>

Advanced example:

```
<Container>
    <Row>
        <Col small={12} medium={12} large={12} noGutter>
            Coluna 01
        </Col>
        <Col small={12} medium={12} large={12} noGutter>
            <Container>
                <Row>
                    <Col small={8} medium={8} large={8} noGutter>
                        Coluna 01
                    </Col>
                    <Col small={8} medium={8} large={8} noGutter>
                        Coluna 02
                    </Col>
                    <Col small={8} medium={8} large={8} noGutter>
                        Coluna 03
                    </Col>
                </Row>
                <Row>
                    <Col small={8} medium={8} large={8} noGutter>
                        Coluna 04
                    </Col>
                    <Col small={8} medium={8} large={8} noGutter>
                        Coluna 05
                    </Col>
                    <Col small={8} medium={8} large={8} noGutter>
                        Coluna 06
                    </Col>
                </Row>
            </Container>
        </Col>
    </Row>
</Container>
```

#### Box

Box component é uma extensão do styled-system que permite uma agilidade no desenvolvimento.

Documentação: https://styled-system.com/getting-started
