#!/usr/bin/env node
'use strict';
const args = process.argv.slice(2);
function help(){
  console.log("Skill Tailwind Patterns CLI");
  console.log("Usage: init, list-patterns, apply-pattern");
}
if (!args.length || args[0] === 'help') return help();
const cmd = args[0];
switch(cmd){
  case 'init':
    console.log("Initializing Tailwind Patterns skeleton...");
    break;
  case 'list-patterns':
    console.log("Listing available patterns...");
    break;
  default:
    console.error(`Unknown command: ${cmd}`);
    help();
}
