#!/bin/bash

echo "🚀 Démarrage du backend Symfony..."
cd backend
php -S 127.0.0.1:8000 -t public > /tmp/ecommerce-backend.log 2>&1 &
BACKEND_PID=$!

echo "🚀 Démarrage du frontend React..."
cd ../frontend
npm run dev -- --open

kill $BACKEND_PID