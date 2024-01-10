import { app, BrowserWindow } from "electron"

// The variable to hold our window
let window = null

// Creates our window
const createWindow = () => {

    // Set's our window properties
    window = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // Set's the index file location
    window.loadFile("../../public/dist/index.html")

    // Adds an event handler for closing the window
    window.on("closed", closeWindow)
}

// When the window is closed, set it to null
const closeWindow = () => {
    window = null
}

// When all the windows are closed, call the app.quit method
const quit = () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
}
app.on("window-all-closed", quit)

// When we activate, create a new window if not already created
const activate = () => {
    if (window === null) {
        createWindow()
    }
}
app.on("activate", activate)

// Creates a new window when ready
app.whenReady().then(createWindow)