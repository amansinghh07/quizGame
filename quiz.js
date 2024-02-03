const quesJSON = [
    {
      correctAnswer: 'Three ',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'L. Frank Baum',
      options: [
        'Suzanne Collins',
        'James Fenimore Cooper',
        'L. Frank Baum',
        'Donna Leon',
      ],
      question:
        "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
      correctAnswer: 'Atlanta United',
      options: [
        'Atlanta United',
        'Atlanta Impact',
        'Atlanta Bulls',
        'Atlanta Stars',
      ],
      question:
        'Which of these is a soccer team based in Atlanta?',
    },
    {
      correctAnswer: 'A Nanny',
      options: [
        'A Sow',
        'A Lioness',
        'A Hen',
        'A Nanny',
      ],
      question: 'A female goat is known as what?',
    },
    {
      correctAnswer: 'P. L. Travers',
      options: [
        'J. R. R. Tolkien',
        'P. L. Travers',
        'Lewis Carroll',
        'Enid Blyton',
      ],
      question:
        "Which author wrote 'Mary Poppins'?",
    },
  ];
  
      let score=0;
      let currentQuestion=0;
      let totalScore= quesJSON.length;
      const questionEl=document.getElementById("question");
      const optionsEl=document.getElementById("options");
      const scoreEl=document.getElementById("score");
      const nextEl=document.getElementById("next");
      nextEl.addEventListener("click",()=>{
      scoreEl.textContent=`Score:${score}/${totalScore}`;
        nextquestion();
      });
  
      function showQuestion(){
  
        const{
          correctAnswer,options,question
        }=quesJSON[currentQuestion];
  
      questionEl.textContent=question;
      questionEl.style.color='black';
      // for (let i of questionObj.options){
      //   let opt=document.createElement("button");
      //   optionsEl.appendChild(opt);
      //   opt.textContent=i;
      // }
      const shuffled=shuffleOptions(options);
      shuffled.forEach((opt)=>{
      const btn=document.createElement("button");
      btn.textContent=opt;
      optionsEl.appendChild(btn);
      btn.addEventListener("click", ()=> {
      if(opt  === correctAnswer){
        score++;
      }else{
        score=score-0.25;
      }
      })
      // scoreEl.appendChild(score);
    });
  }
  const submit=document.getElementById("submit");
  submit.addEventListener("click",()=>{
  console.log(score);
  scoreEl.textContent=`Score:${score} / ${totalScore}`;
  nextquestion();});
  function nextquestion(){
    currentQuestion++;
    optionsEl.textContent="";
    if(currentQuestion>=quesJSON.length){
      questionEl.textContent="quiz completed";
      nextEl.remove();
      submit.remove();
    }
    else{
       showQuestion();
    }
  }
      //When i will back i will access all the divs from html;
      // shuffling the options...
  
      // function shuffleOptions(options){
      //   [options[3],options[0]]=[options[0],options[3]];
      //   console.log(options);
      // }
    showQuestion();
      shuffleOptions([1,2,3,4,5]);
      function shuffleOptions(options){
      for(let i=options.length-1;i>=0;i--){
        const j=Math.floor(Math.random()*i+1);
           [options[i],options[j]]=[options[j],options[i]];
      }
      return options;
    }