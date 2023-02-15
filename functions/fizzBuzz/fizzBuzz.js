// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const num = parseInt(JSON.parse(event.body).number);

    if (isNaN(num)) {
      return {
        statusCode: 400,
        body: 'Invalid input',
      };
    }

    let output = '';
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output += 'FizzBuzz\n';
      } else if (i % 3 === 0) {
        output += 'Fizz\n';
      } else if (i % 5 === 0) {
        output += 'Buzz\n';
      } else {
        output += i + '\n';
      }
    }

    return {
      statusCode: 200,
      body: output.trim(),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
