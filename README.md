# Git Essentials

git init

creado de nueva cuenta y/o repo en https://github.com/

git remote add origin https://github.com/arieler/nodejs.git

git add *

git push -u origin master

## ver el estado

git status

## agregar archivos a comitear 

git add nombre-de-archivo

## ver diferencias

git diff

## deshacer cambios

git checkout nombre-de-archivo

## descargar repositorio

git clone ruta-de-repositorio

## crear ramas

git branch nombre-de-rama

## ir a una rama especifica

git checkout nombre-de-rama

## eliminar rama

git branch -d nombre-de-rama

## mezclar ramas

git merge rama1 rama2

## historial de cambios

git log

## historial de cambios de un archivo

git log -- nombre-de-archivo

## volver a un estado anterior

git checkout id-de-revision

## Recomendasiones:

### Commits pequeños
### Buenas descripciones
### No hacer commits de cambios en progreso. En su lugar hacer commits de cambios más pequeños.

# Javascript

## Solid

## POO

### Solid

### Single responsability principle

### Open closed principle

### Liskov substitution principle

### Dependency inversion principle

### Otros principios

# NodeJS

## Introducción

setup
npm
módulos y filesystem
web server


## Event Loop

## Advanced NodeJS

## Performance

## Design Patterns

## TypeScript

## AWS

# Docker - Environment Up & Running

## Host

http://localhost:3000/

## Enter to the mysql container

docker ps

docker exec -it <mysql-container-id> mysql -p

# Run the container with Docker Compose

 docker-compose up -d

 docker-compose down