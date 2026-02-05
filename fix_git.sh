#!/bin/bash
echo "🔧 Fixing Terrasque Dice Repository..."

# 1. Initialize Git if missing
if [ ! -d ".git" ]; then
    echo "Initializing git..."
    git init
    git branch -M main
else
    echo "Git already initialized."
fi

# 2. Configure Remote
# Remove existing origin to avoid errors if it matches/mismatches
git remote remove origin 2>/dev/null
echo "Setting remote to: https://github.com/JoanDidac/Terrasque-Dice.git"
git remote add origin https://github.com/JoanDidac/Terrasque-Dice.git

# 3. Stage and Commit
echo "Staging files..."
git add .
echo "Committing..."
git commit -m "feat(recovery): restore project state and design"

# 4. Status
echo "✅ Repository fixed!"
echo "You can now run: git push -u origin main"
