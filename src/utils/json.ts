const sections = [
  {
    id: 1,
    title: 'Insira alguns dados básicos',
    text: [
      {
        id: 1,
        label: 'Nome',
        placeholder: 'Digite seu nome completo',
        name: 'nome'
      },
      {
        id: 2,
        label: 'Email',
        placeholder: 'Digite seu E-mail',
        name: 'email'
      },
      {
        id: 3,
        label: 'Crie uma senha',
        placeholder: 'Digite sua senha',
        secureTextEntry: true,
        name: 'senha'
      },
      {
        id: 4,
        label: 'Confirme sua nova senha',
        placeholder: 'Digite sua senha',
        secureTextEntry: true,
        name: 'confirmaSenha'
      },
      {
        id: 5,
        label: 'Insira o CPF',
        placeholder: 'Insira o CPF',
        name: 'cpf'
      },
      {
        id: 6,
        label: 'Foto de Pefil',
        placeholder: 'Link da foto',
        name: 'imagem'
      }
    ],
    checkbox: []
  },
  {
    id: 2,
    title: 'Agora, mais alguns dados sobre você',
    text: [
      {
        id: 1,
        label: 'CEP',
        placeholder: 'Digite seu nome CEP',
        name: 'cep'
      },
      {
        id: 2,
        label: 'Rua',
        placeholder: 'Nome da rua',
        name: 'rua'
      },
      {
        id: 3,
        label: 'Número',
        placeholder: 'Insira o Número',
        name: 'numero'
      },
      {
        id: 4,
        label: 'Complemento',
        placeholder: 'Digite seu complemento',
        name: 'complemento'
      },
      {
        id: 5,
        label: 'Telefone',
        placeholder: '(00) 00000-0000',
        name: 'telefone'
      },
      {
        id: 6,
        label: 'Estado',
        placeholder: 'Informe seu estado',
        name: 'estado'
      }
    ],
    checkbox: []
  },
  {
    id: 3,
    title: 'Para finalizar quais são os seus planos?',
    text: [],
    checkbox: [
      {
        id: 1,
        value: 'Sulamerica'
      },
      {
        id: 2,
        value: 'Unimed'
      },
      {
        id: 3,
        value: 'Bradesco'
      },
      {
        id: 4,
        value: 'Amil'
      },
      {
        id: 5,
        value: 'Biosaúde'
      },
      {
        id: 6,
        value: 'Biovida'
      },
      {
        id: 7,
        value: 'Outros'
      },
      {
        id: 8,
        value: 'Não tenho plano'
      }
    ]
  }
]

export { sections }
