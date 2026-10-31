# Enhanzer-FullStack-Assignment

Minimal full-stack implementation using Angular, ASP.NET Core Web API, and SQL Server.

## Backend (ASP.NET Core Web API)

```bash
cd /home/runner/work/Enhanzer-FullStack-Assignment/Enhanzer-FullStack-Assignment/backend/Enhanzer.Api
dotnet restore
dotnet run --urls http://localhost:5000
```

The API exposes:
- `GET /api/TodoItems`
- `POST /api/TodoItems`

### Database setup

- SQL Server connection string is configured as `ConnectionStrings:DefaultConnection` in `appsettings.json`.
- For local development, `appsettings.Development.json` enables an in-memory database (`UseInMemoryDatabase: true`) so the API runs without SQL Server.
- Set `UseInMemoryDatabase` to `false` to use SQL Server.

## Frontend (Angular)

```bash
cd /home/runner/work/Enhanzer-FullStack-Assignment/Enhanzer-FullStack-Assignment/frontend
npm install
npm start
```

The Angular app runs on `http://localhost:4200` and calls the API at `http://localhost:5000`.

## Build & Test

Backend:
```bash
cd /home/runner/work/Enhanzer-FullStack-Assignment/Enhanzer-FullStack-Assignment/backend/Enhanzer.Api
dotnet build
```

Frontend:
```bash
cd /home/runner/work/Enhanzer-FullStack-Assignment/Enhanzer-FullStack-Assignment/frontend
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```
