/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
var exec = require("child_process").exec;
var os = require("os");

function logOutput(error, stdout, stderr) {
  console.log(stdout);
  if (stderr != undefined) {
    console.log(stderr);
  }
  if (error != null) {
    console.log("error:", error);
  }
}

if (os.type() === "Darwin") {
  logOutput(
    null,
    "✨ This step will install all the pods for ios and can take a while depending upon your internet speed ✨",
  );
  exec("cd ios && pod install", logOutput);
}
