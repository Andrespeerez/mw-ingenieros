#!/usr/bin/env node
'use strict';
const args = process.argv.slice(2);
function help(){
  console.log("Skill Clean Code CLI");
  console.log("Usage:");
  console.log("  skill-clean-code init");
  console.log("  skill-clean-code validate <path>");
  console.log("  skill-clean-code review-sample");
}
if (!args.length || args[0] === 'help') return help();
const cmd = args[0];
switch(cmd){
  case 'init':
    console.log("Initializing Clean Code skeleton...");
    break;
  case 'validate':
    console.log("Validating Clean Code structure...");
    break;
  default:
    console.error(`Unknown command: ${cmd}`);
    help();
}
