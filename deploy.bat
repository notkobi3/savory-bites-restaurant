@echo off
echo Deploying website changes...
echo.

git status
echo.
echo Staging all changes...
git add .
echo.
echo Committing changes...
git commit -m "Auto-deploy: %date% %time%"
echo.
echo Pushing to GitHub...
git push
echo.
echo Deployment complete! Your website will update in 1-2 minutes.
pause
