@echo off
REM ============================================================================
REM SCRIPT DE LIMPEZA DIRETA by Caduu
REM ============================================================================

setlocal enabledelayedexpansion
cd /d "C:\Users\caduz\curseforge\minecraft\Instances\Arcana"

REM Define cores para output (Windows 10+)
set "GREEN= [92m"
set "RED= [91m"
set "YELLOW= [93m"
set "RESET= [0m"

echo ============================================================================
echo  LIMPEZA DE MODS REMOVIDOS E ARQUIVOS
echo ============================================================================
echo.
echo Este script apagara SEM BACKUP:
echo  1. Todos os arquivos de configuracao residuais dos mods listados.
echo  2. TODOS os arquivos ".bak" perdidos em qualquer subpasta do modpack.
echo.
set /p choice="Tem certeza que deseja DELETAR TUDO isso? (s/n): "

if /i not "%choice%"=="s" (
    echo.
    echo Limpeza cancelada pelo usuario.
    goto end
)

REM Verifica se o jogo esta aberto para evitar corrompimento
tasklist /FI "IMAGENAME eq javaw.exe" /FO CSV | find /I "javaw.exe" > nul
if not errorlevel 1 (
    echo.
    echo ERRO: O Minecraft esta aberto! Feche o jogo antes de continuar.
    echo.
    pause
    goto end
)

echo.
echo [1/3] Iniciando a varredura e exclusao de configs...
echo.

REM --- MODNAME ---
del /S /F /Q "config\MODNAME*.toml" 2>nul
del /S /F /Q "config\MODNAME*.json" 2>nul

REM --- MODNAME ---
del /S /F /Q "config\MODNAME*.toml" 2>nul
del /S /F /Q "config\MODNAME*.json" 2>nul

echo.
echo [2/3] Varrendo e destruindo arquivos .bak em TODAS as pastas...
echo.
del /S /F /Q "*.bak" 2>nul

echo.
echo [3/3] Varrendo e destruindo cache...
echo.
REM Removendo pastas cache...
rd /S /Q "config\jei" 2>nul
rd /S /Q "saves" 2>nul
rd /S /Q "schematics" 2>nul
rd /S /Q "simplebackups" 2>nul
rd /S /Q "patchouli_books" 2>nul
rd /S /Q "moonlight-global-datapacks" 2>nul
rd /S /Q "moddata" 2>nul
rd /S /Q "logs" 2>nul
rd /S /Q "local" 2>nul
rd /S /Q "ESM" 2>nul
rd /S /Q "dynamic-resource-pack-cache" 2>nul
rd /S /Q "dynamic-data-pack-cache" 2>nul
rd /S /Q "dragon-survival" 2>nul
rd /S /Q "downloads" 2>nul
rd /S /Q "defaultconfigs" 2>nul
rd /S /Q "data" 2>nul
rd /S /Q "datapacks" 2>nul
rd /S /Q "crash-reports" 2>nul
rd /S /Q "blueprints" 2>nul
rd /S /Q ".mixin.out" 2>nul
rd /S /Q "journeymap/data" 2>nul
REM Removendo arquivos cache...
del /S /F /Q "minecraftinstance.json" 2>nul
del /S /F /Q "usernamecache.json" 2>nul
del /S /F /Q "usercache.json" 2>nul
del /S /F /Q "user-prefs.json" 2>nul
del /S /F /Q "patchouli_data.json" 2>nul
del /S /F /Q "journeymap\journeymap.log" 2>nul

echo.
echo ============================================================================
echo  ✓ Todos os arquivos residuais, .bak e cache foram aniquilados com sucesso!
echo ============================================================================
echo.
pause

:end
endlocal