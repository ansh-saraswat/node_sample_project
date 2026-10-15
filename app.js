const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>My First Node App</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #1e3c72,#2a5298);
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .card {
                text-align: center;
                background:rgba(255,255,255,0.1);
                padding: 40px;
                border-radius: 15px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            }

            h1 {
                margin-bottom: 10px;
            }

            p {
                font-size: 18px;
                color: #ddd;
            }

            .badge {
                background: #28a745;
                padding: 8px 15px;
                border-radius: 20px;
                font-size: 14px;
                display: inline-block;
                margin-top: 15px;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🚀 Node.js App Deployed</h1>
            <p>Hello from EC2 via GitHub Actions! v2.0</p>
            <div class="badge">Version 2.0</div>
        </div>
    </body>
    </html>
    `);
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Up on ${PORT}`);
});