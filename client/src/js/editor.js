// Import methods to save and get data from the IndexedDB database in './database.js'
import { getDb, putDb } from "./database";
import { header } from "./header";

export default class Editor {
  constructor() {
    this.init();
  }

  async init() {
    try {
      // Check if CodeMirror is loaded
      if (typeof CodeMirror === "undefined") {
        throw new Error("CodeMirror is not loaded");
      }

      // Initialize CodeMirror
      this.editor = CodeMirror(document.querySelector("#main"), {
        value: header, // Default to header content first
        mode: "javascript",
        theme: "monokai",
        lineNumbers: true,
        lineWrapping: true,
        autofocus: true,
        indentUnit: 2,
        tabSize: 2,
      });

      // Load data from IndexedDB and inject it into the editor
      const data = await getDb();
      if (data.length > 0) {
        console.info("Loaded data from IndexedDB, injecting into editor");
        // Assuming the last entry is the most recent one
        this.editor.setValue(data[data.length - 1].value);
      }

      // Save the content of the editor when the editor is changed
      this.editor.on("change", () => {
        // Debounce this action if necessary to avoid performance issues
        const content = this.editor.getValue();
        putDb(content);
      });
    } catch (error) {
      console.error("Editor initialization error:", error);
    }
  }
}
