/**
 * ! Inmutability with Copy
 * 
 * While imutability is a good practice, it is not always possible
 * In such cases, a copy of the object can be made and the copy can be modified.
 * 
 * This is useful for maintaining of history of states in interactive applications.
 */

import { COLORS } from "../helpers/colors.ts";

class CodeEditorState {
    readonly content: string;
    readonly cursorPosition: number;
    readonly unsavedChanges: boolean;

    constructor(
        content: string,
        cursorPosition: number,
        unsavedChanges: boolean
    ){
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unsavedChanges = unsavedChanges;
    }


    copyWith({
        content,
        cursorPosition,
        unsavedChanges
    }:Partial<CodeEditorState>): CodeEditorState {
        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsavedChanges ?? this.unsavedChanges
        )   
    }

    displayState() {
        console.log('\n%cEstado del editor:', COLORS.green);
    console.log(`
        Contenido: ${this.content}
        Cursor Pos: ${this.cursorPosition}
        Unsaved changes: ${this.unsavedChanges}
    `);
    }
}

class CodeEditorHistory {
    private history: CodeEditorState[] = [];
    private currentIndex: number = -1;

    save(state: CodeEditorState): void {
        if (this.currentIndex < this.history.length - 1) {
          this.history = this.history.splice(0, this.currentIndex + 1);
        }
    
        this.history.push(state);
        this.currentIndex++;
    }
    
    undo(): CodeEditorState | null {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          return this.history[this.currentIndex];
        }
    
        return null;
    }
    
    redo(): CodeEditorState | null {
        if (this.currentIndex < this.history.length - 1) {
          this.currentIndex++;
          return this.history[this.currentIndex];
        }
    
        return null; 
    }
}

function main() {
    const history = new CodeEditorHistory();
    let editorState = new CodeEditorState("console.log('Hola Mundo');", 2, false);
  
    history.save(editorState);
  
    console.log('%cEstado inicial', COLORS.blue);
    editorState.displayState();
  
    editorState = editorState.copyWith({
      content: "console.log('Hola Mundo'); \nconsole.log('Nueva línea');",
      cursorPosition: 3,
      unsavedChanges: true,
    });
    history.save(editorState);
  
    console.log('\n%cDespués del primer cambio', COLORS.blue);
    editorState.displayState();
  
    console.log('\n%cDespués de mover el cursor', COLORS.blue);
    editorState = editorState.copyWith({ cursorPosition: 5 });
    history.save(editorState);
    editorState.displayState();
  
    console.log('\n%cDespués del Undo', COLORS.blue);
    editorState = history.undo()!;
    editorState.displayState();
  
    console.log('\n%cDespués del Redo', COLORS.blue);
    editorState = history.redo()!;
    editorState.displayState();
  }
  
  main();