# Datafortune Demo App

This repository contains an Angular frontend with a simple .NET 8 Web API backend. The application now includes an experimental **AI Builder** feature that allows you to generate basic UI forms without writing code.

## Prerequisites
- Node.js and npm
- .NET SDK 8

## Running the Angular Frontend
```bash
npm install
npm start
```
Navigate to `http://localhost:4200` to access the app.

## Running the .NET Backend
```bash
dotnet run --project backend
```
The API will listen on `http://localhost:5000` by default.

## AI Builder
Open `http://localhost:4200/builder` to create dynamic screens. Provide a screen name and comma separated list of fields. Saved definitions are stored in a SQLite database (`screens.db`).
