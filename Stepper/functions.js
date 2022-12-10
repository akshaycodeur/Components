let steps = document.querySelectorAll('.step');
    let nextButton = document.querySelector('.next');
    let previousButton = document.querySelector('.previous');
    let stepsSections = document.querySelectorAll('.step-section')
    let stepsNumber = steps.length;

    console.log(steps);
    console.log(`stepsSections:` + stepsSections.length)
    console.log(stepsNumber);

    let count = 1;

    let clickFunction = function(){
      console.log('You clicked')
    }

    let nextFunction = () => {
      if(count < stepsNumber){
        steps[count].classList.add('active');
        stepsSections[count].classList.add('step-active');
        stepsSections[count-1].classList.remove('step-active');
        count++;
        console.log(count);
      };

    };

    let previousFunction = function(){
      if(count > 1){
        steps[count-1].classList.remove('active');
        stepsSections[count-1].classList.remove('step-active');
        stepsSections[count-2].classList.add('step-active');
        console.log('removed step'+ count);
        count--;
        console.log(count);
      };
    }

    const stepX = document.querySelectorAll('.stepX .step')

    const btnNext = document.querySelector('.next');


    nextButton.addEventListener('click', () => {
        stepX.forEach((step, index) => {
					console.log(step,index);
            step[index +1 ].classList.add('xyz');
        })
    })

    console.log(stepX)
    //nextButton.addEventListener('click',nextFunction);
    previousButton.addEventListener('click',previousFunction);