// /data/questions.js
const questions = [
  {
    question: "O que é Business Intelligence (BI)?",
    options: [
      "Uma técnica de visualização de dados",
      "Um conjunto de processos e tecnologias para coletar e analisar dados",
      "Um tipo de software de contabilidade",
      "Uma metodologia de desenvolvimento de software",
    ],
    answer:
      "Um conjunto de processos e tecnologias para coletar e analisar dados",
  },
  {
    question: "Qual é o objetivo principal do BI?",
    options: [
      "Aumentar as vendas",
      "Otimizar processos internos",
      "Ajudar na tomada de decisões informadas",
      "Reduzir custos operacionais",
    ],
    answer: "Ajudar na tomada de decisões informadas",
  },
  {
    question: "Qual das seguintes ferramentas é uma ferramenta de BI?",
    options: ["Photoshop", "Excel", "Tableau", "Word"],
    answer: "Tableau",
  },
  {
    question: "ETL é uma sigla comum no BI. O que ela significa?",
    options: [
      "Extract, Transform, Load",
      "Evaluate, Test, Launch",
      "Edit, Transfer, Log",
      "Estimate, Track, Learn",
    ],
    answer: "Extract, Transform, Load",
  },
  {
    question: "O que é um Data Warehouse?",
    options: [
      "Um repositório centralizado de dados coletados de diferentes fontes",
      "Um tipo de banco de dados relacional",
      "Uma ferramenta de visualização de dados",
      "Um software de CRM",
    ],
    answer:
      "Um repositório centralizado de dados coletados de diferentes fontes",
  },
  {
    question: "Qual é a diferença entre BI e Analytics?",
    options: [
      "BI é focado no passado e Analytics é focado no futuro",
      "BI é para grandes empresas e Analytics é para pequenas empresas",
      "BI é um software e Analytics é uma metodologia",
      "BI é usado apenas para relatórios financeiros",
    ],
    answer: "BI é focado no passado e Analytics é focado no futuro",
  },
  {
    question: "Qual das seguintes opções é um exemplo de KPI?",
    options: [
      "Número de funcionários",
      "Custo do projeto",
      "Receita mensal",
      "Número de reuniões",
    ],
    answer: "Receita mensal",
  },
  {
    question: "O que é uma ferramenta de visualização de dados?",
    options: [
      "Uma ferramenta para criar planilhas",
      "Uma ferramenta para analisar dados financeiros",
      "Uma ferramenta para representar dados graficamente",
      "Uma ferramenta para escrever relatórios",
    ],
    answer: "Uma ferramenta para representar dados graficamente",
  },
  {
    question: "Qual é o papel de um Data Analyst em um projeto de BI?",
    options: [
      "Desenvolver software",
      "Coletar e analisar dados",
      "Gerenciar a equipe de vendas",
      "Criar campanhas de marketing",
    ],
    answer: "Coletar e analisar dados",
  },
  {
    question: "O que é um Dashboard em BI?",
    options: [
      "Um relatório de despesas",
      "Um painel visual que mostra KPIs e métricas",
      "Uma planilha de orçamento",
      "Um documento de requisitos",
    ],
    answer: "Um painel visual que mostra KPIs e métricas",
  },
  {
    question: "Qual das seguintes opções NÃO é uma ferramenta de BI?",
    options: [
      "Power BI",
      "QlikView",
      "SAP BusinessObjects",
      "Adobe Illustrator",
    ],
    answer: "Adobe Illustrator",
  },
  {
    question: "O que é Data Mining?",
    options: [
      "Extração de dados relevantes de grandes conjuntos de dados",
      "Criação de relatórios financeiros",
      "Armazenamento de dados em servidores locais",
      "Desenvolvimento de aplicativos móveis",
    ],
    answer: "Extração de dados relevantes de grandes conjuntos de dados",
  },
  {
    question: "Qual é a função do OLAP em BI?",
    options: [
      "Realizar análises rápidas de dados multidimensionais",
      "Armazenar grandes volumes de dados",
      "Criar documentos de texto",
      "Desenvolver sites",
    ],
    answer: "Realizar análises rápidas de dados multidimensionais",
  },
  {
    question: "O que é uma métrica em BI?",
    options: [
      "Uma medida quantitativa usada para acompanhar e avaliar o sucesso de um processo",
      "Um tipo de banco de dados",
      "Uma técnica de modelagem de dados",
      "Uma linguagem de programação",
    ],
    answer:
      "Uma medida quantitativa usada para acompanhar e avaliar o sucesso de um processo",
  },
  {
    question: "Qual é o papel de um BI Developer?",
    options: [
      "Criar e manter soluções de BI",
      "Vender produtos de BI",
      "Escrever artigos sobre BI",
      "Gerenciar a equipe de RH",
    ],
    answer: "Criar e manter soluções de BI",
  },
  {
    question: "O que é um relatório ad hoc?",
    options: [
      "Um relatório pré-formatado",
      "Um relatório criado sob demanda para uma necessidade específica",
      "Um relatório anual",
      "Um relatório financeiro",
    ],
    answer: "Um relatório criado sob demanda para uma necessidade específica",
  },
  {
    question: "O que significa 'Drill Down' em BI?",
    options: [
      "Aumentar o nível de detalhe dos dados visualizados",
      "Criar um novo relatório",
      "Reduzir o número de dados armazenados",
      "Adicionar novos usuários ao sistema",
    ],
    answer: "Aumentar o nível de detalhe dos dados visualizados",
  },
  {
    question: "O que é Big Data?",
    options: [
      "Pequenos conjuntos de dados gerenciáveis",
      "Grandes volumes de dados que não podem ser processados com técnicas tradicionais",
      "Uma técnica de compressão de dados",
      "Um tipo de banco de dados relacional",
    ],
    answer:
      "Grandes volumes de dados que não podem ser processados com técnicas tradicionais",
  },
  {
    question: "Qual é a diferença entre dados estruturados e não estruturados?",
    options: [
      "Dados estruturados são organizados em um formato fixo; dados não estruturados não têm um formato específico",
      "Dados estruturados são sempre numéricos; dados não estruturados são sempre textos",
      "Dados estruturados são armazenados em servidores locais; dados não estruturados são armazenados na nuvem",
      "Dados estruturados são dados antigos; dados não estruturados são dados novos",
    ],
    answer:
      "Dados estruturados são organizados em um formato fixo; dados não estruturados não têm um formato específico",
  },
  {
    question: "O que é um Data Lake?",
    options: [
      "Um repositório centralizado que permite armazenar todos os dados estruturados e não estruturados em grande escala",
      "Uma pequena base de dados para armazenamento local",
      "Um software para criar gráficos e dashboards",
      "Uma técnica de compressão de dados",
    ],
    answer:
      "Um repositório centralizado que permite armazenar todos os dados estruturados e não estruturados em grande escala",
  },
];

export default questions;
