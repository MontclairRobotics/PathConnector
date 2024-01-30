const { app, BrowserWindow, screen } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1667,
      height: 1616
    });
  
    win.loadFile('ui/editor.html');
    
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});



