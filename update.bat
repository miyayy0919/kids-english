@echo off
cd /d %~dp0
echo ============================================
echo   XiaoXingXing English - Update to GitHub
echo ============================================
echo.
echo [1/3] Staging files ...
git add -A
echo [2/3] Committing ...
git commit -m "site update %date%" >nul 2>&1
echo [3/3] Pushing to GitHub ...
git push -u origin main
echo.
if %errorlevel%==0 (
  echo PUSH OK! GitHub Pages will refresh in 1-3 minutes.
) else (
  echo PUSH FAILED - please copy the error message above to ZCode.
)
echo.
pause
