import { app, BrowserWindow, Menu, Tray } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  const appIcon = new Tray(__static + "\\logo.png")
  Menu.setApplicationMenu(null)

  const toolTipMenu = Menu.buildFromTemplate( [{
    label: 'Exit',
    click: function() {
      app.quit()
    }
  }] )


  mainWindow = new BrowserWindow({
    height: 500,
    useContentSize: false,
    width: 400,
    resizable: false,
    icon: __static + "\\logo.png",
    skipTaskbar: true
  })

  appIcon.setToolTip('Mori TODO')
  appIcon.setContextMenu(toolTipMenu)
  appIcon.on('click', ()=> {
    mainWindow.show()
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
