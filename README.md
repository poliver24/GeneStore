# GeneStore

## Table of content

- [Specification](#specification)
- [Models](#models)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup)
- [Run Instructions](#run)

## Specification
 - Full Stack Web Application
 - Pythom Backend
 - React Frontend
 - SQL Database

### User Story
As a scientist I want to be able to view, and record genes, and their associated proteins. A gene can be associated with 0 or more proteins, it has a DNA sequence. A protein is always associated to a gene, and it has an aminoacid sequence and a name


## Models
- Gene:</br>
  name --> str (the name of the gene)</br>
  sequence -->  str (a sequence of A, T, C or G, those are the 4 nucleotides DNA is made of)</br>

- Protein:</br>
  Gene --> The gene that creates this protein</br>
  name --> str (the name of the protein)</br>
  sequence --> str (a sequence of letters, these should be aminoacids which have their own alphabet, but using any letter will suffice)</br>


## Tech Stack 
- Django REST
- React 
- PostgreSQL
- Bootstrap
- Axios
- Heroku
- Netlify
- Github Actions

## SETUP

### Backend

From the Root Project Directory
- 'cd' into the 'Server' Folder.
- run 'python3 -m venv genestore-env' to create a virtual python environment.
- run 'source genestore-env/bin/activate' to activate the virtual environment.
- run 'pip install -r requirements.txt'
- run 'psql' to access postgres.
- run 'CREATE DATABASE immunocore_db;' to create the required Database.
- Exit postgres by running 'psql'.
- run 'python manage.py migrate' to migrate the models to the database.

### Frontend

From the Root Project Directory
- 'cd' into the 'client' folder. 
- run 'npm install' to install the required node modules. 

## Run

From the Root project Directory 
- 'cd' into the 'Server folder'.
- run 'python manage.py runserver' to start a development server.
- 'cd' back to the root directory.
- 'cd' into the 'client' folder.
- run 'npm start' to start the development server 
- In your browser navigate to 'https://localhost:3000' to interact with the frontend
- In your browser navigate to 'https://localhost:8000/api' for the backend API


