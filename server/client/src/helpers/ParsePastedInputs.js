export default function ParsePastedInputs(strInput) {
  if (strInput.includes(',')) {
    // split by comma and trim any spaces before or after the comma or tab that was split by
    return strInput.split(',').map(Function.prototype.call, String.prototype.trim);
  } else if (strInput.includes('\t')) {
    return strInput.split('\t').map(Function.prototype.call, String.prototype.trim);
  } else {
    // if it is just a single column, do this
    alert('Warning: The columns listed should be split by comma or copied in from Excel.  Otherwise, everything entered will be treated as just a single column (which is fine but you probably do not need to be using this tool');
    return strInput;
  }
}