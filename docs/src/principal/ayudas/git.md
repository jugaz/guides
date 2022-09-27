# Git

::: tip
*Son ejemplos que he utilizado en muchos casos.  Dejo el link de la documentación [Link](https://git-scm.com/doc)*
:::

## Add
#### Guarda todo los archivos de la carpeta actual
```bash
 git add .
```
#### Guarda el archivo de la carpeta actual
```bash
 git add file.txt
```

## Ammend
#### Los cambios que hicimos nos los agregará al commit anterior
```bash
 git --amend
```

## Blame 
#### Muestra quien hizo cada cosa linea por linea
```bash
 git blame file.txt
```

## Branch 
#### Crear un rama localmente
```bash
 git branch nombre_rama
```
#### Muestra todas las ramas tanto locales como
```bash
 git branch -a
```
#### Elimina la rama del repositorio
```bash
 git branch -D nombre_rama
```

## Clean
#### Saber qué archivos vamos a borrar
```bash
 git clean --dry-run
```
#### Borrar todos los archivos listados (que no son carpetas)
```bash
 git clean -f
```
#### traerte un commit de otra rama sin tener que hacer merge
```bash
 git clean -f
```

## Clone
#### Nos permite descargar el repositorio
```bash
 git clone url_del_servidor_remoto
```

## Config
#### Muestra la configuración
```bash
 git config
```
#### Muestra la configuración
```bash
 git config --list
```
#### Muestra donde esta guardada la configuración
```bash
 git config --list --origin
```

## Commit
#### Envia los cambios a repositorio
```bash
 git commit -m "primer commit"
```

## Diff
#### Muestra las diferencias de los cambios de un archivo
```bash
 git diff hash_commit
```

## Fetch
#### Nos permite traer ramas del servidor al nuestro repostiorio local
```bash
 git fetch
```

## Grep
#### Saldra en color la palabra que estamos buscando
```bash
 git grep -n xxx
```
#### Nos dirá cuántas veces se repite esa palabra y en qué archivo
```bash
 git grep -c xxx
```

## Help 
#### Muestra como funciona el comando
```bash
 git help
```

## Init
#### Crea repositorio en la carpeta actual (.git/)
```bash
 git init
```

# Log
#### Puede ver todas las modificaciones
```bash
 git log
```
#### Puede ver todas las modificaciones del archivo asi como ver quien las hizo
```bash
 git log file.txt
```
#### Muestra el id commit y el título del commit.
```bash
 git log --oneline
```
#### Muesta historia de las ramas(algo visual)
```bash
 git log --all --graph
```
#### Muesta las historio del proyecto reducido
```bash
 git log --all --graph
```
#### Muesta las historio del proyecto reducido
```bash
 git log --all --graph --decorate --oneline
```

## Merge 
#### Nos permite combinar ramas 
```bash
 git merge nombre_rama
```

## Pull
#### Nos permite trae los cambios de un rama(Siempre utilizarlo antes de hacer algun cambio)
```bash
 git pull origin nombre_rama
```

## Push 
#### Nos permite mandar los cambios al servidor remoto
```bash
 git push origin nombre_rama
```

# Rebase
#### Reescribe la historia del repositorio, solo debe ser usado de manera local(Mala Práctica)
```bash
 git rebase nombre_rama
```
#### Despues de hacer tu cambios en una rama "nombre de la rama", regresar a la rama original y haces lo siguiente:
```bash
 git rebase nombre_rama
```

# Remote
```bash
 git remote add origin url_repo
```
# Reset
#### Volver en el tiempo de un archivo
```bash
 git reset hash_del_head
```
#### Te mantiene lo que tengas en staging ahí
```bash
 git reset --soft hash_del_head
```
#### Resetea absolutamente todo incluyendo lo que tengas en staging
```bash
 git reset --hard hash_del_head
```

## Reflog 
#### Solo almacena todas las actividades que modificaron el HEAD de manera local
```bash
 git reflog
```

# Rm
#### Elimina el archivo
```bash
 git rm file.txt
```
#### Elimina los archivos del área de staging y del próximo commit pero los mantiene en nuestro disco duro
```bash
 git rm --cache file.txt
```
#### Elimina los archivos de git y del disco duro
```bash
 git rm --force 
```

## Status
#### Muestra el estado del proyecto
```bash
 git status
```

# Stash
#### Guarda el trabajo actual en un temporal para que pueda ser recuperado en el futuro.
```bash
 git stash
```
#### Para ver la lista de cambios guardados en Stash
```bash
 git stash list
```
#### Recuperar los últimos cambios desde el stash a tu staging area utiliza
```bash
 git stash pop
```
#### Crear una rama y aplicar el stash mas reciente 
```bash
 git stash branch nombre_rama
```
#### Eliminar los cambios más recientes dentro del stash
```bash
 git stash drop
```

# Shortlog
#### Muestra cuantos commit han hecho cada miembros del equipo
```bash
 git shortlog -sn 
```
#### Muestra cuantos commit han hecho cada miembros del equipo hasta los que han sido eliminado
```bash
 git shortlog -sn --all
```
#### Muestra cuantos commit han hecho cada miembros quitando los eliminados sin los merges
```bash
 git shortlog -sn --all --no-merges
```

## Show
#### Muestra los cambios que se han hecho ese archivo
```bash
 git config
```

## Tags
#### Crear un nuevo tag y asignarlo a un commit
```bash
 git tag -a nombre-del-tag id-del-commit
```
#### Borrar un tag en el repositorio local
```bash
 git tag -d nombre-del-tag
```
#### Listar los tags de nuestro repositorio local
```bash
 git tag 
 git show-ref --tags
```
#### Publicar un tag en el repositorio remoto
```bash
 git push origin --tags
```
#### Borrar un tag del repositorio remoto
```bash
 git tag -d nombre-del-tag
 git push origin :refs/tags/nombre-del-tag
```

#### Config
```bash
 git config --global user.name "nombre"
 git config --global user.email "correo electronico"
```
```bash
 git config --global alias.superlog "log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"
 git superlog
```
```bash
 git config --global alias.superfetch "fetch -f -p"
```
```bash
 git config --global alias.superbranch "branch --all -f -p"
```