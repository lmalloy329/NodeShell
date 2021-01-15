//output prompt

process.stdout.write('prompt > ')

//the stdin 'data' event fires after user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === 'pwd'){
      process.stdout.write(`${process.cwd()}`) 
    } else{

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    }
})