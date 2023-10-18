export default function Validation(val) {
    const errors = {};

    if (val.FullName === "") {

        errors.name = "*არასწორი სახელი"
    }

    // const temp = val.dob.split('-');

    // if (temp.length != 3) {
    //     errors.date = "*ეს ველი სავალდებულოა";
    // }

    if (val.Gender === "") {

        errors.Gender = "*არარის მითითებული"
    }
    if (val.Address === "") {

        errors.Address = "*არარის მითითებული"
    }
    if (val.Phone) {
        const word = val.Phone.substring(0,1)
        console.log(word)   
        if(word !=5 || val.Phone.length != 9)  {
          errors.Phone = "*არასწორი ნომერი"
        }
        
    }
    return errors
}