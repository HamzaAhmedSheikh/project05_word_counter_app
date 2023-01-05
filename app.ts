import inquirer from 'inquirer';
import chalk from "chalk";

let word_counter = async () => {
    let word: { inputString: string } = await inquirer.prompt([
        {
            type: 'input',
            name: 'inputString',
            message: 'please enter a paragraph or sentence to count the words and characters:',
            validate(value: string) {
                return value?.length ? true : "Please add your text";
            },
        }
    ])

    const inputString = word.inputString;

    // Replace all whitespace characters with an empty string
    const noWhitespaceString = inputString.replace(/\s/g, '');

    // Count the number of characters
    const characterCount = noWhitespaceString.length;

    // Split the string into an array of words and count the number of elements        
    const wordCount = inputString.split(/\s+/).length;

    console.log(`\n${chalk.hex("#6495ED").bold("The number of characters in the string is:")} ${chalk.hex("#9FE2BF").bold(characterCount)}`);
    console.log(`${chalk.hex("#A7C7E7").bold("The number of words in the string is:")} ${chalk.hex("#9FE2BF").bold(wordCount)} \n`);

}


async function askAgain() {
    do {
        await word_counter()
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? press y or n: "
        })
    } while (again.restart === "y" || again.restart === "Y" || again.restart === "yes" || again.restart === "YES");
}

await askAgain()