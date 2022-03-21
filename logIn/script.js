const form =document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs=[];
    form.querySelectorAll('input').forEach(input => {
        const {name, value} = input;
        inputs.push({name, value});
    })
    console.log(inputs);
    form.reset();
});
