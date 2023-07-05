const sessions = [
  {
    id: 1,
    title: "Insira alguns dados básicos",
    text: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Digite seu nome completo",
      },
      {
        id: 2,
        label: "Email",
        placeholder: "Digite seu E-mail",
      },
      {
        id: 3,
        label: "Crie uma senha",
        placeholder: "Digite sua senha",
      },
      {
        id: 4,
        label: "Confirme sua nova senha",
        placeholder: "Digite sua senha",
      },
    ],
    checkbox: [],
  },
  {
    id: 2,
    title: "Agora, mais alguns dados sobre você",
    text: [
      {
        id: 1,
        label: "CEP",
        placeholder: "Digite seu nome CEP",
      },
      {
        id: 2,
        label: "Endereço",
        placeholder: "Digite seu endereço",
      },
      {
        id: 3,
        label: "Número",
        placeholder: "Insira o Número",
      },
      {
        id: 4,
        label: "Complemento",
        placeholder: "Digite seu complemento",
      },
    ],
    checkbox: [],
  },
  {
    id: 3,
    title: "Para finalizar quais são os seus planos?",
    text: [],
    checkbox: [
      {
        id: 1,
        value: "Sulamerica",
      },
      {
        id: 2,
        value: "Unimed",
      },
      {
        id: 3,
        value: "Bradesco",
      },
      {
        id: 4,
        value: "Amil",
      },
      {
        id: 5,
        value: "Biosaúde",
      },
      {
        id: 6,
        value: "Biovida",
      },
      {
        id: 7,
        value: "Outros",
      },
      {
        id: 8,
        value: "Não tenho plano",
      },
    ],
  },
];

export { sessions };
