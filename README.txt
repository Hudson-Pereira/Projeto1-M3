Este projeto consiste num CRUD básico, com as 4 principais rotas: CREATE, READ, UPDATE e DELETE.
Para utilziação, deve-se utilizar a extensão Thunder Client, do VSCode.
Será um sistema de gestão de usuários, podendo pesquisar, iserir, atualizar e deletar itens.
As rotas usuarios e times inciaram com um cadastro pré-inserido, porém, a rota dinos, inciará vazia.
A rota GET /usuarios (já com um user) - /users/id - /usuarios/nome, vai apenas mostrar as informações de todos os dados (usuarios) e também de um dado específico (usuarios/nome  e users/id) quando solicitado pela url. Caso não sejam encontrados dados, retornará status 204.
A rota PUT /usuarios/editar/id irá realizar alterações nas informações, retornando sucesso quando alterado, status 200 e a lista atualizada. Caso algum dado já cadastrado seja apagado e feita tentativa de salvar, retornará status 400 e não finalizará a alteração. Caso não exista o cadastro, retornará status 204.
A rota POST /usuarios/inserir irá inserir dados, também retornando sucesso, status 200 e a lista atualizada. Caso sejam deixados de preencher algum dado, ou todos, retornará status 400 e não concluirá o cadastro.
A rota DELETE /usuarios/delete/id irá apagar o dado, mas não a posição do item, retornando status 200 e a lista atualizada. Caso não sejam encontrados dados, retornará status 204.
A rota DELETE /usuarios/deletar/id irá apagar a posição com suas informações, retornando status 200 e a lista atualizada. Caso não sejam encontrados dados, retornará status 204.

Esse padrão de funcionamento foi exemplificado com a rota /usuários, mas funciona também para a rota /times e /dinos.