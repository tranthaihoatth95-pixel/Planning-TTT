@echo off
REM Planning TTT - Installation Script for Windows

echo.
echo Planning TTT - Install Script
echo ============================
echo.

REM Check Node.js
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo X Node.js is required but not installed.
    echo. Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo OK Node.js is installed
node --version
npm --version

echo.

REM Clone or update repo
if exist Planning-TTT (
    echo Updating Planning-TTT...
    cd Planning-TTT
    git pull origin main
) else (
    echo Cloning Planning-TTT repository...
    git clone https://github.com/tranthaihoatth95-pixel/Planning-TTT.git
    cd Planning-TTT
)

REM Install dependencies
echo.
echo Installing dependencies...
call npm install

REM Build web app
echo.
echo Building web app...
call npm run build

echo.
echo Completed!
echo.
echo To run:
echo   Development: npm run dev
echo   Desktop:     npm run build:desktop
echo   Android:     npm run build:android
echo.
echo Documentation: See README.md and SETUP.md
echo.
pause
