# Oh my posh

::: tip
*Dejo el link de la documentación [Link](https://ohmyposh.dev/)*
:::

## Windows
#### Instalación
```bash
 Set-ExecutionPolicy Bypass -Scope Process -Force; Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://ohmyposh.dev/install.ps1'))
```
#### Customize
```bash
 oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/jandedobbeleer.omp.json' | Invoke-Expression
```

## Mac
#### Instalación
```bash
    brew install jandedobbeleer/oh-my-posh/oh-my-posh
```

#### Customize
```bash
 eval "$(oh-my-posh init zsh --config $(brew --prefix oh-my-posh)/themes/jandedobbeleer.omp.json)"
```