# arch-website

## KeystoneJS
Pour installer KeystoneJS, il vous faudra :

1. installer MongoDB.
2. vous rendre dans le dossier "/bin" de MongoDB et exécuter la commande "./mongod --dbpath <votre-dossier-de-stockage>". Ce chemin vous permettra en fait de créer un magasin spécial pour ArchTailors par exemple.
3. Une fois MongoDB lancé avec "mongod", rendez vous dans le dossier de KeystoneJS ("arch-website/server") et tapez la commande "node keystone".
4. Si tout va bien, vous venez de lancer Keystone sur le port 3004 de votre localhost.
5. Autre possibilité d'erreur de dependance a régler en lancant un npm install dans le dossier website.


Note
Il faut éditer le fichier 'arch-website\server\node_modules\keystone\lib\inotNav.js'

label:keystone.list(section[0]).label
//label: nav.flat ? keystone.list(section[0]).label : utils.keyToLabel(key)

Pour avoir le menu back office juste