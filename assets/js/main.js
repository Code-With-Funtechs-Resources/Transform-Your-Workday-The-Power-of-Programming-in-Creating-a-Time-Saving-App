
let calculate = (a, b ) => {
    let section_a , section_b , total , added_marks
    section_a  = parseInt(a)
    section_b = parseInt(b)
    total = ((section_a + section_b) / 140) * 100

    // add each student 15 marks 
    added_marks = parseInt(total + 15 )

    document.querySelector("#display_mark").innerHTML = `${added_marks}%`

}


let btn_click = document.querySelector('#submit')
btn_click.addEventListener('click', () => {
    let a , b 
    a = document.querySelector('#section_a').value
    b = document.querySelector('#section_b').value

    calculate(a, b)


} )