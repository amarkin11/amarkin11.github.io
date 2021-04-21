const test = () => {

  const testData = [
    {
      image: 'static/image/img_question_1.jpg',
      question: 'Что вы можете сказать о состоянии этой кошки по ее позе?',
      answers: [
        {
          answer: 'Радуется, что наконец смогла удобно улечься'
        },
        {
          answer: 'Залегла в засаду, выслеживает потенциальную добычу'
        },
        {
          answer: 'Готова к игре'
        },
        {
          answer: 'Спокойна и расслаблена'
        }
      ],
      correctAnswer: 4,
      description: '(Верно! Именно в таком положении ваша кошка должна проводить большую часть времени. Когда она лежит, растянувшись, свернувшись в клубок или поджав под себя лапы, наблюдая за миром вокруг. В такие моменты может даже казаться, что ваш пушистый питомец улыбается - настолько у него умиротворенная мордочка!)'
    },
    {
      image: 'static/image/img_question_2.jpg',
      question: 'Поглядите на этого кота: внимательный взгляд, суженные зрачки, навостренные уши, приоткрытая пасть, кончик хвоста может подергиваться, собранная поза. В каком он состоянии?',
      answers: [
        {
          answer: 'Кажется, этот кот очарован чем-то очень красивым – может, любуется закатом? Или поет серенады кошечке, восседающей на подоконнике?'
        },
        {
          answer: 'Кот напряжен и сконцентрирован: он видит что-то, что никак не может заполучить. То ли игрушку, то ли лакомство, то ли птичку за окном. '
        },
        {
          answer: 'Кот чем-то напуган и обеспокоен.'
        },
        {
          answer: 'Кот воодушевлен. Искренняя радость написана на этой усатой мордахе! Посмотрите, как он улыбается!'
        }
      ],
      correctAnswer: 2,
      description: '(Так и есть: таким образом кошки проявляют разочарование от того, что не могут реализовать свое желание или потребности. Если такое состояние продлится долго, это может привести к стрессу и поведенческим проблемам.)'
    },
    {
      image: 'static/image/img_question_3.jpg',
      question: 'Вы увидели своего кота вот в таком положении. Кажется, положительными эмоциями тут и не пахнет. Что это значит и что делать?',
      answers: [
        {
          answer: 'Этот кот очень, очень чем-то разозлён – бегите подальше, если не хотите попасться под горячую лапу'
        },
        {
          answer: 'Пушистый встревожен: что-то в его привычном мирке пошло не по плану. Лучше подойти и успокоить его: взять на руки, приласкать, почесать за ушком.'
        },
        {
          answer: 'Кот явно напуган – лучше ничего не делать, чтобы не спровоцировать его на атаку и не усугубить стресс, а убрать все триггеры и подождать, пока он успокоится сам '
        }
      ],
      correctAnswer: 3,
      description: '(Правильно! Об испуге сигнализирует все: прижатые к голове уши, выгнутая спина, распушенный и опущенный хвост, который может быть спрятан между задними лапами или взволнованно метаться из стороны в сторону.)'
    },
    {
      image: 'static/image/img_question_4.jpg',
      question: 'С какой целью этот кот идет к фотографу?',
      answers: [
        {
          answer: 'Дружелюбно поздороваться '
        },
        {
          answer: 'Прогнать со своей территории'
        },
        {
          answer: 'Он целиком и полностью вовлечен в игровой процесс: то ли гонится за собратом, то ли за точкой от лазерной указки'
        },
        {
          answer: 'Кот охотится – видимо, где-то рядом с фотографом замечена аппетитная мышь или беспечная птичка'
        }
      ],
      correctAnswer: 1,
      description: '(Истинно так! Вертикально поднятый хвост со слегка изогнутым кончиком является своеобразным «приветствием» в кошачьем мире)'
    },
    {
      image: 'static/image/img_question_5.jpg',
      question: 'Что бы сейчас произнес этот эмоциональный кот, если бы он мог говорить?',
      answers: [
        {
          answer: 'Мне очень страшно и то, что меня напугало, находится прямо передо мной!'
        },
        {
          answer: 'Упс! Кажется, хозяин все-таки наткнулся на те самые тапки.'
        },
        {
          answer: 'Я встревожен! Пока пытаюсь понять, чем именно, и как мне реагировать. '
        },
        {
          answer: 'Я невероятно удивлен!'
        }
      ],
      correctAnswer: 3,
      description: '(Правильно! Этот кот встревожен чем-то внезапным: об этом говорят округлившиеся немигающие глаза, круглые же зрачки, подвижные уши, которые могут вертеться в разные стороны в поисках дополнительной информации, и застывшая поза. Но пока это не страх, когда питомца лучше не трогать: сейчас кота можно аккуратно успокоить).'
    },
    {
      image: 'static/image/img_question_6.jpg',
      question: 'А что делает этот кот? Да, большой и полосатый, но кот ведь!',
      answers: [
        {
          answer: 'Ух, грозный зверь! Он рычит, оповещая всю округу, кто тут хозяин джунглей.'
        },
        {
          answer: 'Это инновационный метод охоты: вдруг птичка залетит прямо в открытую пасть?'
        },
        {
          answer: 'Кажется, кто-то недавно проснулся и даже не старается вежливо прикрыть пасть лапой '
        }
      ],
      correctAnswer: 3,
      description: '(Ну конечно: тигр зевает, а вся его поза свидетельствует о спокойствии и комфорте.)'
    },
    {
      image: 'static/image/img_question_7.jpg',
      question: 'А вот еще один дикий кот – это сервал. Но язык тела у него не особо отличается от языка наших домашних питомцев. Какие эмоции он сейчас испытывает?',
      answers: [
        {
          answer: 'Его что-то сильно напугало.'
        },
        {
          answer: 'Кот в гневе и готов наброситься в любой момент! '
        },
        {
          answer: 'Сервал раздражен и хочет, чтобы его оставили в покое.'
        },
        {
          answer: 'Всецело захвачен беседой с фотографом. О своем, о кошачьем.'
        }
      ],
      correctAnswer: 2,
      description: '(Именно, сервал всем своим видом демонстрирует, что злится и может атаковать. Об этом свидетельствуют широко распахнутая пасть (стремясь напугать противника, кот может утробно рычать или шипеть), плотно прижатые к голове уши, встопорщенные вибриссы, находящийся в движении хвост и предостерегающая поза – припадание на все четыре лапы, чтобы оказаться ближе к земле в удобном для атакующего прыжка положении).'
    },
    {
      image: 'static/image/img_question_8.jpg',
      question: 'Поглядите на эту красотку: спинка выгнута, хвост опущен, неспешно шагает вперед. В каком случае кошки так делают?',
      answers: [
        {
          answer: 'Когда они затеяли охоту и бесшумно подкрадываются к добыче, делая вид, что совсем ее не замечают.'
        },
        {
          answer: 'Когда они голодны и применяют свою лучшую тактику, чтобы получить еды: «потрись рядом с двуногим, мурлыкая».'
        },
        {
          answer: 'Когда они видят потенциального партнера и показывают свою готовность к спариванию.'
        },
        {
          answer: 'Так напуганные или разозленные кошки расслабляются после того, как им удается избежать угрозы. '
        }
      ],
      correctAnswer: 4,
      description: '(Верно! После того, как кошка перестает злиться или бояться, она расслабляет все свое тело, включая усы и хвост - иногда даже довольно потягивается, совсем как на фотографии, или принимается умываться. Очень важно научиться замечать такие моменты, чтобы знать, когда можно снова взаимодействовать с кошкой: в моменты страха или ярости ее лучше не трогать).'
    },
    {
      image: 'static/image/img_question_9.jpg',
      question: 'Что ж, а этот кот явно куда-то крадется. Но почему?',
      answers: [
        {
          answer: 'Кот сосредоточен на чем-то интересном; возможно, потенциальной добыче. '
        },
        {
          answer: 'Он пытается незамеченным пробраться мимо врага, который его очень пугает.'
        },
        {
          answer: 'Он делает последние аккуратные шаги к краю карниза (или по чему он там идет?) и готовится к прыжку, уже просчитывая необходимые усилия'
        },
        {
          answer: 'Да зачем искать везде определенные паттерны поведения? Кот просто идет по своим делам. Возможно, спать. Возможно, после сытого обеда.'
        }
      ],
      correctAnswer: 1,
      description: '(Верно! Об этом говорят суженные вертикальные зрачки, уши и вибриссы, направленные вперед, слегка припавшее к земле положение тела. Кончик хвоста может подергиваться – это верный признак начавшейся охоты.)'
    }
  ];

  let counterCorrectAnswer = 0,
      counterQuestion = 0,
      isAnswer = false;

  const contentBlock = '.test__content',
        resultBlock = '.test__result',
        questionNumCurrent = '.question__num-current',
        questionNumTotal = '.question__num-total',
        questionTitle = '.question__title',
        questionImage = '.question__img img',
        answersList = '.answers__list',
        answersItem = '.answers__item',
        correctClass = 'is-correct',
        wrongClass = 'is-wrong',
        btnNext = '.btn-next';
        

  // function onEnterKeydown(e) {
  //   if(e.keyCode === 13) {
  //     nextQuestion();
  //   }
  // };

  function nextQuestion() {
    counterQuestion += 1;
    $(questionNumCurrent).text(counterQuestion + 1);
    if (counterQuestion < testData.length) {
      $(btnNext).attr('disabled', true);
      isAnswer = false;
    
      $(answersList).html('');
      createQuestion(counterQuestion, questionTitle, questionImage, answersList);
      // document.removeEventListener('keydown', onEnterKeydown);
    } else {
      $(contentBlock).hide();
      $(resultBlock).show();
      switch (counterCorrectAnswer) {
        case 1:
        case 2:
        case 3:
          testResult(
            counterCorrectAnswer,
            `.result__bar-item:nth-child(-n+${counterCorrectAnswer})`,
            'Хорошая попытка'
          );
          break;
        case 4:
        case 5:
        case 6:
        case 7:
          testResult(
            counterCorrectAnswer,
            `.result__bar-item:nth-child(-n+${counterCorrectAnswer})`,
            'Очень достойный результат'
          );
          break;
        case 8:
        case 9:
          testResult(
            counterCorrectAnswer,
            `.result__bar-item:nth-child(-n+${counterCorrectAnswer})`,
            'Это просто невероятно'
          );
          break;
        default:
          testResult(
            counterCorrectAnswer,
            `.result__bar-item:nth-child(-n+${counterCorrectAnswer})`,
            'Кажется, вы ничего не знаете о кошках'
          );
          break;
      }
      // document.removeEventListener('keydown', onEnterKeydown);
    }
  }

  function testStart(btnSelector, startContent, contentBlock) {
    $(btnSelector).on('click', function(e) {
      e.preventDefault();
      $(startContent).fadeOut(1);
      $(contentBlock).fadeIn(300);
      createQuestion(counterQuestion, questionTitle, questionImage, answersList);
    });
  };

  function testAgain(btnSelector, contentAnswers) {
    $(btnSelector).on('click', function(e) {
      e.preventDefault();
      counterCorrectAnswer = 0;
      counterQuestion = 0;
      isAnswer = false;

      $(questionNumCurrent).text('1');
      $(contentAnswers).html('');

      createQuestion(counterQuestion, questionTitle, questionImage, answersList);
      $(resultBlock).hide();
      $(contentBlock).show();
    });
  };

  function createQuestion(id, title, image, contentAnswers) {
    const question = testData[id].question;
    const imageSrc = testData[id].image;
    $(image).attr('src', imageSrc);
    $(title).text(question);
    $(questionNumTotal).text(testData.length);
    $(contentAnswers).html('');
    renderAnswers(testData[id].answers, contentAnswers);
  }

  function renderAnswers(answers, wrap) {
    for (let i = 0; i < answers.length; i++) {
      const elem = `
        <p class='answers__item' data-answer='${i + 1}'>
          ${answers[i].answer}
        </p>
      `;
      $(wrap).append(elem);
    }
  }

  function checkAnswer() {
    const dataAnswer = parseInt($(this).data('answer'));
    const currentAnswer = testData[counterQuestion].correctAnswer;

    if (!isAnswer) {
      isAnswer = true;
      // document.addEventListener('keydown', onEnterKeydown);
      $(btnNext).attr('disabled', false);

      if (dataAnswer === currentAnswer) {
        $(this).addClass(correctClass);
        let isCorrect = $(`${answersItem}.${correctClass}`);
        const desc = `
          <span>${testData[counterQuestion].description}</span>
        `;
        isCorrect.append(desc);
        counterCorrectAnswer += 1;
      } else {
        $(answersItem).eq(currentAnswer - 1).addClass(correctClass);
        $(this).addClass(wrongClass);
      }
    } else {
      alert('Вы уже ответили, нажмите на кнопку "Продолжить"');
    }
  }

  function onClickAnswer(contentAnswers, answer) {
    $(contentAnswers).on('click', answer, checkAnswer);
  }

  function onClickNextBtn(btnSelector) {
    $(btnSelector).on('click', function(e) {
      e.preventDefault();
      nextQuestion();
    });
  }

  function testResult(result, barSelector, text) {
    $('.result__num-correct').text(result);
    $('.result__num-total').text(testData.length);
    $(barSelector).addClass('is-yellow');
    $('.result__text').text(text);
  }

  testStart('.btn-start', '.test__intro', contentBlock);
  onClickAnswer(answersList, answersItem);
  onClickNextBtn(btnNext);
  testAgain('.btn-again', answersList);
};

test();
