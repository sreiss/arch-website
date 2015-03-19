# arch-website

## KeystoneJS
Pour installer KeystoneJS, il vous faudra :

1. installer MongoDB.
2. vous rendre dans le dossier "/bin" de MongoDB et exécuter la commande "./mongod --dbpath <votre-dossier-de-stockage>". Ce chemin vous permettra en fait de créer un magasin spécial pour ArchTailors par exemple.
3. Une fois MongoDB lancé avec "mongod", rendez vous dans le dossier de KeystoneJS ("src/website") et tapez la commande "node keystone".
4. Si tout va bien, vous venez de lancer Keystone sur le port 3000 de votre localhost.
5. Sinon, l'erreur de configuration de cloudinary est a regle soit avec la creation d'un compte(https://cloudinary.com/users/register/free). Soit rajouter cette ligne dans keystone.js:
keystone.set('cloudinary config', { cloud_name: 'dfcalfikm', api_key: '178696354252521', api_secret: 'SnJ_GLS9jtAjxUJbfZC4n1lnTEw' });
6. Autre possibilité d'erreur de dependance a régler en lancant un npm install dans le dossier website.
