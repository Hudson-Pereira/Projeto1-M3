Este projeto consiste num CRUD básico, com as 4 principais rotas: CREATE, READ, UPDATE e DELETE.
Para utilziação, deve-se utilizar a extensão Thunder Client, do VSCode.
Será um sistema de gestão de usuários, podendo pesquisar, iserir, atualizar e deletar itens.
A rota GET user/usuarios (já com um user) - user/id - /usuario/nome, vai apenas mostrar as informações de todos os dados (usuarios) e também de um dado específico (usuario/nome  e user/id) quando solicitado pela url. Caso não sejam encontrados dados, retornará status 204.
A rota PUT user/editar/id irá realizar alterações nas informações, retornando sucesso quando alterado, status 200 e a lista atualizada. Caso algum dado já cadastrado seja apagado e feita tentativa de salvar, retornará status 400 e não finalizará a alteração.
A rota POST user/inserir irá inserir dados, também retornando sucesso, status 200 e a lista atualizada. Caso sejam deixados de preencher algum dado, ou todos, retornará status 400 e não concluirá o cadastro.
A rota DELETE user/delete/id irá apagar o dado, mas não a posição do item, retornando status 200 e a lista atualizada.
A rota DELETE user/deletar/id irá apagar a posição com suas informações, retornando status 200 e a lista atualizada.

Assim será com as rotas times e dinos, porém a dino, iniciará vazia...