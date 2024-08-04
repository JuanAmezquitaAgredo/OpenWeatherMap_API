Instalations:

- Create Poryect With Vite:
        1. npm create vite@latest
        2. npm i (In proyect)
        3. Active localhost

- JSON SERVER: 
        1. npm install json-server
        2. Create db.json 
        {
            "users":[
                {
                    "id": 1,
                    "name": "juan"
                }
            ]
        }
        3. npx json-server db.json (Esto corre json-server solo).

- CONCURRENTLY:
        1. npm install concurrently --save-dev
        2. "scripts": {
                "dev": "concurrently \"vite\" \"json-server --watch db.json\"",(Aqui se pone lo que se correra al tiempo).
                "build": "tsc && vite build",
                "preview": "vite preview"
            },
        3. npm run dev: esto activara tanto vite, como json-server.