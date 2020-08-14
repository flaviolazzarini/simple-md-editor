const { app, BrowserWindow, Menu } = require('electron');
const { ipcMain } = require('electron');
const menu = require('./menu');

let window;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.loadFile('index.html');
});

ipcMain.on('editor-reply', (event, arg) => {
    console.log(`Received reply from web page: ${arg}`);
});

Menu.setApplicationMenu(menu);