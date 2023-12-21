const outputTextArea = document.getElementById('output');
const inputTextBox = document.getElementById('input');

function sendCommand()
{
    const command = inputTextBox.ariaValueMax;
    outputTextArea.value += '>> ${command}\n';
    inputTextBox.value = '';
}