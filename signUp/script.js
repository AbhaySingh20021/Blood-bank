const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll('form .previous-btn');
const form = document.querySelector('form');

nextBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        changeStep('next');
    })
});
    
prevBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        changeStep('prev');
    })
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs=[];
    form.querySelectorAll('input').forEach(input => {
        const {name, value} = input;
        inputs.push({name, value});
    })
    console.log(inputs);
    form.reset();
    let index=0;
    const currentStep = document.querySelector('form .step.active');
    index=steps.indexOf(currentStep);
    steps[index].classList.remove('active');
    step[0].classList.add('active');
});



function changeStep(btn){
    let index=0;
    const currentStep = document.querySelector('form .step.active');
    index=steps.indexOf(currentStep);
    steps[index].classList.remove('active');
    if(btn=='next'){
        steps[index+1].classList.add('active');
    }
    if (btn=='prev'){
        steps[index-1].classList.add('active');
    }        
}

