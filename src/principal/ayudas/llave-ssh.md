# LLave SSH

#### Generar tus llaves SSH. Recuerda que es muy buena idea proteger tu llave privada con una contraseña
```bash
 ssh-keygen -t rsa -b 4096 -C "email"
```
#### Terminar de configurar nuestro sistema Linux/Windows:
```bash
 eval $(ssh-agent -s)
 ssh-add ruta-donde-guardaste-tu-llave-privada
```
#### Terminar de configurar nuestro sistema Mac:
```bash
 eval $(ssh-agent -s)
 vim config
 Host *
       AddKeysToAgent yes
       UseKeychain yes
       IdentityFile ruta-donde-guardaste-tu-llave-privada 
 ssh-add ruta-donde-guardaste-tu-llave-privada
```
#### Conexión a GitHub con SSH
```bash
 git remote set-url origin url-ssh-del-repositorio-en-github
```