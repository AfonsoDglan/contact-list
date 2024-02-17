# Lista de Contatos
![Built with](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)
![Built with](https://img.shields.io/pypi/pyversions/Django) 
![Built with](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)

Este projeto é uma aplicação web para gerenciar uma lista de contatos, desenvolvida utilizando Django para o backend, Next.js para o frontend, e Docker com Docker Compose para orquestração de containers. O banco de dados utilizado é o PostgreSQL.
![](https://cdn.dribbble.com/users/563824/screenshots/3028329/media/f2d113c07c4054a1f04a878ae8094b88.gif)

# Pré-requisitos

- [Docker e docker-compose](https://docs.docker.com/engine/install/)

# Execução com docker-compose

```sh
git clone git@github.com:AfonsoDglan/contact-list.git
```

```sh
cd contact-list
```

```sh
docker-compose up -d --build
```

- Acesse o front-end em [http://localhost:8080/](http://localhost:8080/)
- Acesse o back-end em [http://localhost:8000/](http://localhost:8000/)

# Desenvolvimento

- O código fonte do frontend está localizado no diretório frontend/.
- O código fonte do backend está localizado no diretório backend/.

Para executar o servidor de desenvolvimento do frontend ou do backend separadamente, você pode navegar até os respectivos diretórios e executar os seguintes comandos:

Para o frontend (Next.js):

```sh
cd frontend/
npm install # (apenas na primeira execução)
npm run dev
```

Para o backend (Django):

```sh
cd backend/
pip install -r requirements.txt # (apenas na primeira execução ou se houverem novas dependências)
python manage.py runserver 0.0.0.0:8000
```

# Contribuindo

Contribuições são bem-vindas! Se você encontrou algum problema, tem uma ideia para uma nova funcionalidade ou simplesmente quer melhorar o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

# Licença

Este projeto está licenciado sob a Licença MIT.
