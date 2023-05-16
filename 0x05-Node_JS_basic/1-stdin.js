// Using Process stdin

process.stdin.setEncoding('utf8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log(`Your name is : ${name}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing');
});
