/**
 * !Siongleton task
 * 
 * Task
 * Implement the Singleton pattern using a database connection as an example. 
 * Ensure that only a single instance is used to connect to the database and later disconnect from it.
 */

import { COLORS } from "../helpers/colors.ts";

class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connected: boolean = false;
  
    // Private constructor to prevent  direct instantiation
    private constructor() {
        this.connected = true
    }
  
    // Static method to get the single instance 
    public static getInstance(): DatabaseConnection {
      if(!DatabaseConnection.instance){
        DatabaseConnection.instance = new DatabaseConnection();
        
      }

      return DatabaseConnection.instance;
    }
  
    // Method to connect to the database
    public connect(): void {
      if(this.connected ){
        console.log('Exists connection active..')
        return;
      }

      this.connected = true;
    console.log('%cNueva conexión a la base de datos', COLORS.green);
    }
  
    // Method to disconnect from the databse 
    public disconnect(): void {
      // Complete: disconnect and show a disconnection message
      if (this.connected) {
        console.log(
          '%cDesconectamos la conexión a la base de datos',
          COLORS.blue
        );
        this.connected = false;
        return;
      }
  
      console.log('%cNo hay una conexión activa', COLORS.red);
    }
  }
  
  // Pruebas
  function main() {
    const db1 = DatabaseConnection.getInstance();
    db1.connect(); // Should connect to the database
  
    const db2 = DatabaseConnection.getInstance();
    db2.connect(); // Should show that there is already an active connection

    console.log('Son iguales:', db1 === db2); // Show display true
  
    db1.disconnect(); // Should close the connection
  
    db2.connect(); // Should connect again since the previous connection was closed
  }
  
  main();