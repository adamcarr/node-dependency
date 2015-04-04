/// <reference path="../typings/tsd.d.ts" />
var ts = require("typescript");
function compile(fileNames, options) {
    var program = ts.createProgram(fileNames, options);
    var emitResult = program.emit();
    var allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
    allDiagnostics.forEach(function (diagnostic) {
        var _a = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start), line = _a.line, character = _a.character;
        var message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
        console.log(diagnostic.file.fileName + " (" + (line + 1) + "," + (character + 1) + "): " + message);
    });
    var exitCode = emitResult.emitSkipped ? 1 : 0;
    console.log("Process exiting with code '" + exitCode + "'.");
    process.exit(exitCode);
}
exports.compile = compile;
compile([__dirname + '/test.ts'], {
    noEmitOnError: true, noImplicitAny: true,
    target: 1 /* ES5 */, module: 1 /* CommonJS */
});
