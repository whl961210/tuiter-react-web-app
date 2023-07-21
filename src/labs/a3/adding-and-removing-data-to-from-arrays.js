function AddingAndRemovingDataToFromArrays() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
  
    // Adding new items
    numberArray1.push(6);
    stringArray1.push('string3');
  
    // Remove 1 item starting from the 3rd spot (index 2)
    numberArray1.splice(2, 1);
    stringArray1.splice(1, 1);
  
    return (
      <div>
        <h2>Adding and Removing Data To/From Arrays</h2>
        numberArray1 = { numberArray1 }<br/>
        stringArray1 = { stringArray1 }<br/>
      </div>
    );
  }
  
  export default AddingAndRemovingDataToFromArrays;
  