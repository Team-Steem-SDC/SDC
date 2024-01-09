// Imports our server object
import server from "./server/server.js"

// Imports the chalk module for colored output
import chalk from "chalk"

// The process module allows us to interact with the OS process running this application
import { env } from "process"

// This is where program execution begins
const start = () => {

    // Listens for incoming connections
    server.listen(env.server_port, () => {
        console.log(chalk.bold.green(`Server running on port ${env.server_port}`))
    })

}

// Starts our program
start()