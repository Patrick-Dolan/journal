import { Entry } from "./entry.js";
import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

let entry = new Entry("The Title", "");
console.log(entry);
console.log(entry.wordCount());
console.log(entry.vowelCounter());
console.log(entry.consonantCounter());