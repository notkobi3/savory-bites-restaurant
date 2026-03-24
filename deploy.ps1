# Auto-deploy script for Savory Bites website
Write-Host "🚀 Deploying website changes..." -ForegroundColor Green

# Check for changes
$status = git status --porcelain
if ($status) {
    Write-Host "📝 Changes detected:" -ForegroundColor Yellow
    git status --short
    
    Write-Host "⏳ Staging changes..." -ForegroundColor Blue
    git add .
    
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
    git commit -m "Auto-deploy: $timestamp"
    
    Write-Host "📤 Pushing to GitHub..." -ForegroundColor Blue
    git push
    
    Write-Host "✅ Deployment complete! Website will update in 1-2 minutes." -ForegroundColor Green
    Write-Host "🌐 Live at: https://notkobi3.github.io/savory-bites-restaurant/" -ForegroundColor Cyan
} else {
    Write-Host "ℹ️ No changes to deploy." -ForegroundColor Gray
}

Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
