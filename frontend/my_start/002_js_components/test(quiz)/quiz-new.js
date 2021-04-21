const quiz = () => {
  let isBtn = true;
  
  const data = [
    {
      question: 'Начнем с самого легкого. Этот вальяжный котяра – какой породы?',
      image: '/static/img/content/quiz/img_001.jpg',
      answers: [
          'британский мраморный',
          'мейн-кун',
          'норвежский лесной',
          'персидская шиншилла'
      ],
      correctAnswer: 2,
      desc: 'Густая шерсть, суровый взгляд, кисточки на ушах...<br> Конечно, это мейн-кун! Мейн-куны – великаны кошачьего мира. Вес взрослого кота может достигать от 7 до 12 кг, кошки – от 4 до 7,5 кг. Считается, что эти обаятельные и добродушные гиганты умело считывают эмоции людей и знают собственного хозяина как собственные четыре лапы.',
    },
    {
      question: 'Куда бежишь ты, косматое чудо-юдо? И какой ты породы?',
      image: '/static/img/content/quiz/img_002.jpg',
      answers: [
          'пули',
          'африканский риджбек',
          'мальтезе',
          'комондор'
      ],
      correctAnswer: 4,
      desc: 'Нет, это не ожившая летающая швабра, как вы сперва могли подумать. И не пропущенная через шредер бумага. Это комондор, или венгерская овчарка. Эта величественная собака считается национальным достоянием Венгрии. Она свирепо защищает свою территорию, абсолютно бесстрашна против любых противников, а также имеет шерсть, которой необходим особый уход (еще бы, только поглядите на эти дреды!).',
    },
    {
      question: 'Какой породы эта аристократка?',
      image: '/static/img/content/quiz/img_003.jpg',
      answers: [
          'британская короткошерстная',
          'шартрез',
          'русская голубая',
          'немецкая голубая'
      ],
      correctAnswer: 3,
      desc: ' Более изящная, чем «британцы» и шартрезе того же окраса, и имеющая более утонченный нрав – это русская голубая кошка. Она и впрямь является настоящей аристократкой, обязанная своей популярностью уникальному серебристо-голубому окрасу, изумрудным глазам и врожденным манерам.',
    },
    {
      question: 'А этот хороший мальчик каких кровей?',
      image: '/static/img/content/quiz/img_004.jpg',
      answers: [
          'американский стаффордширский терьер',
          'американский питбультерьер',
          'стаффордширский бультерьер',
          'американский бульдог'
      ],
      correctAnswer: 1,
      desc: 'Понимаем, в этих питбулях и бультерьерах легко запутаться! Однако на фото – именно американский стаффордширский терьер (АСТ). Как и многие другие породы, изначально использовавшиеся для травли и собачьих боев, современный АСТ сегодня славится своим спокойным, ласковым характером.',
    },
    {
      question: 'Какая это порода кошек?',
      image: '/static/img/content/quiz/img_005.jpg',
      answers: [
          'корниш-рекс',
          'донской сфинкс',
          'турецкая ангорская',
          'манчкин'
      ],
      correctAnswer: 1,
      desc: 'Этот короткошерстный «инопланетянин» с выразительными глазами – корниш-рекс! Кошек этой породы часто называют эльфами или инопланетянами из-за их нестандартной внешности. Необычно большие уши посажены низко по краям широкой плоской головы, глаза большие, носы слегка загнуты вверх. В отличие от других кошек, имеют очень короткие и сильно завитые усики, из-за чего может показаться, что усы у них отсутствуют вовсе.',
    },
    {
      question: 'Что это за порода собак?',
      image: '/static/img/content/quiz/img_006.jpg',
      answers: [
          'русская псовая борзая',
          'салюки',
          'левретка',
          'польский харт'
      ],
      correctAnswer: 2,
      desc: 'Запомните, такие очаровательные уши с длинной шерстью – отличительная черта борзых салюки! Салюки считаются одной из древнейших пород в мире. Их история переплетена с историей древней Месопотамии – тогда салюки использовались для охоты на газелей, зайцев и другую мелкую добычу. Несмотря на хрупкую внешность, это очень сильные и выносливые собаки.',
    },
    {
      question: 'А к какой породе принадлежит этот лопоухий кот?',
      image: '/static/img/content/quiz/img_007.jpg',
      answers: [
          'египетская мау',
          'сиамская',
          'священная бирманская',
          'ориентальная'
      ],
      correctAnswer: 4,
      desc: 'Такие уши-опахала и вся эта экзотическая внешность свойственны ориентальным кошкам. А еще им свойственна необыкновенная преданность хозяину и невероятная энергичность. Ориенталы очень разговорчивы и любят привлекать к себе внимание настойчивым мяуканьем. Кошек ориентальной породы часто называют «радужными питомцами», так как среди представителей встречаются сотни вариантов окрасов.',
    },
    {
      question: 'Очаровашка мраморного окраса! А породы какой?',
      image: '/static/img/content/quiz/img_008.jpg',
      answers: [
          'австралийская овчарка (аусси)',
          'австралийский хилер',
          'бордер-колли',
          'бородатый колли'
      ],
      correctAnswer: 3,
      desc: 'На фото бордер-колли – главная пастушья порода собак, которую часто называют умнейшей породой. Она невероятно чувствительна к голосовым командам и жестам хозяина, демонстрирует уникальные способности при обучении и с успехом участвует в различных спортивных соревнованиях.',
    },
    {
      question: 'Немногие породы кошек отличаются такими выразительными, будто сурьмой подведенными, глазами. А здесь изображена...',
      image: '/static/img/content/quiz/img_009.jpg',
      answers: [
          'абиссинская',
          'анатолийская ',
          'персидская',
          'бенгальская'
      ],
      correctAnswer: 1,
      desc: 'Конечно, эта гибкая кошка с выразительным взглядом принадлежит к абиссинской породе! Хозяева абиссинцев склонны считать, что их питомцы – потомки египетских кошек. Действительно, в поведении животных нельзя не заметить царственное достоинство и уравновешенность.',
    },
    {
      question: 'Собака именно этой породы изображена в мультфильме «Леди и Бродяга». Что это за порода?',
      image: '/static/img/content/quiz/img_010.jpg',
      answers: [
          'английский кокер-спаниель',
          'американский кокер-спаниель',
          'кавалер-кинг-чарльз-спаниель',
          'русский спаниель '
      ],
      correctAnswer: 2,
      desc: 'На фото – американский кокер-спаниель. Это ближайший родственник английского кокер-спаниеля, отличающийся от своего европейского «кузена» более миниатюрной комплекцией и элегантной длинной шерстью. Изначально спаниели были охотничьими подружейными собаками, но из-за своих размеров американские кокер-спаниели быстро стали популярными декоративными любимцами.',
    },
  ];

  const flow = [
    init,
    renderNextQuestion,
    renderNextQuestion,
    renderNextQuestion,
    renderNextQuestion,
    renderNextQuestion,
    renderNextQuestion,
    renderNextQuestion,
    renderNextQuestion,
    renderNextQuestion,
    renderNextQuestion,
    renderResult,
    reset
  ];

  let currentStep = -1,
      currentQuestion,
      correctAnswers;

  const quiz = $('.quiz'),
        quizIntro = quiz.find('.quiz__intro'),
        quizContent = quiz.find('.quiz__content'),
        quizResult = quiz.find('.quiz__result'),
        questionTitle = quiz.find('.question__title'),
        questionImg = quiz.find('.question__img img'),
        questionAnswers = quiz.find('.answers'),
        questionDesc = quiz.find('.question__desc'),
        resultText = quiz.find('.result__text'),
        numCorrect = quiz.find('.result__num-correct'),
        numTotal = quiz.find('.result__num-total'),
        shareBlock = quiz.find('.quiz__share'),
        shareQuiz = shareBlock.find(shareSelector),
        shareTg = shareBlock.find('.telegram'),
        btnStartSelector = '.btn-start',
        btnNextSelector = '.btn-next',
        btnAgainSelector = '.btn-again',
        btnNext = $(btnNextSelector);

  function flowCallNext(){
    flow[++currentStep]();
  };

  function init(){
    currentQuestion = -1;
    correctAnswers = 0;

    quizIntro.hide();
    quizResult.hide();
    quizContent.show();

    flowCallNext();
  };

  function renderNextQuestion(){
    isBtn = false;
    questionAnswers.show();
    btnNext.hide();
    currentQuestion++;
    
    questionTitle.text(`${currentQuestion + 1}. ${data[currentQuestion].question}`);
    questionAnswers.html('');
    questionDesc.text('').hide();
    questionImg.attr('src', `${data[currentQuestion].image}`);

    let template = '';

    for (let i = 0; i < data[currentQuestion].answers.length; i++) {
      template += `
        <p class='answers__item' position='${i + 1}'>
          ${data[currentQuestion].answers[i]}
        </p>
      `;
    }

    questionAnswers.append(template);
    quizContent.hide().fadeIn();
  };

  function showAnswer(elem) {
    const position = +elem.attr("position"),
          correctAnswer = data[currentQuestion].correctAnswer,
          desc = data[currentQuestion].desc,
          btnText = (currentStep + 1 == flow.length - 2) ? 'Продолжить' : 'Следующий вопрос';

    if (position === correctAnswer) {
      correctAnswers += 1;
      questionDesc.html(`Правильно!<br> ${desc}`).fadeIn();
    } else {
      questionDesc.html(`Неправильно!<br> ${desc}`).fadeIn();
    }

    questionAnswers.hide();
    btnNext.text(btnText).show();
  };

  function renderResult(){
    quizContent.hide();
    numCorrect.text(correctAnswers);
    numTotal.text(data.length);

    let url = `https://hills.nat-geo.ru/quiz/results/result-${correctAnswers}`;

    switch (correctAnswers) {
      case 0:
      case 1:
        resultText.html('Все мимо!<br> В породах вы разбираетесь из лап вон плохо. Да и зачем, если беспородные питомцы – такие же отличные друзья?');
        break;
      case 2:
      case 3:
      case 4:
        resultText.html('Могло быть и лучше.<br> Кажется, вам предстоит узнать еще много интересного о многообразии пород кошек и собак.');
        break;
      case 5:
      case 6:
        resultText.html('Неплохо!<br> В таком тесте половина правильных ответов – уже успех! А подтянуть свои знания вы можете, спрашивая у первых встречных с собаками (или в гостях, завидев кошку), что у них за порода такая любопытная.');
        break;
      case 7:
      case 8:
      case 9:
        resultText.html('Очень хороший результат!<br> Кое-где вы промахнулись, но в целом узнали почти всех хвостатых!');
        break;
      case 10:
        resultText.html('Превосходно!<br> И кошек, и собак вы знаете как свои пять пальцев! Точнее, как все четыре лапы. Признавайтесь, штудируете энциклопедии на досуге или штурмуете породные выставки?');
        break;
      default:
        alert('Что-то пошло не тай! Перезагрузите страницу и попробуйте снова пройти тест!');
        break;
    }

    shareTg.attr('href', `tg://msg_url?url=${url}&amp;text=Угадай породу по фотографии (тест) – От идеи до дегустации: как создаются правильные корма для животных`);
    shareQuiz.socialLikes({
        url: url,
        counters: false,
    });
    
    quizResult.fadeIn();
    ga("send", "event", "Click", "Test", `End_Test_${correctAnswers}`);
  };

  function reset(){
    currentStep = -1;
    flowCallNext();
  };

  quiz.on(
    'click',
    [
      btnStartSelector,
      btnNextSelector,
      btnAgainSelector
    ].join(','),
    function() {
      flowCallNext();

      if(window.matchMedia('(max-width: 1199px)').matches) {
        const headerQuiz = $('.quiz__header');

        if($(this).hasClass('btn-next') || $(this).hasClass('btn-again')) {
          $('html,body').animate({
            scrollTop: headerQuiz.offset().top - 40,
          }, 300);
        }
      }
      
      if($(this).hasClass('btn-start')) {
        ga("send", "event", "Click", "Test", "Start_Test");
      }

      if($(this).hasClass('btn-again')) {
        ga("send", "event", "Click", "Test", "Retry_Test");
      }
    }
  );

  quiz.on('click', '.answers__item', function() {
    const _this = $(this);
    isBtn = true;

    showAnswer(_this);
  });

  $(document).on('keydown', function(e) {
    if (e.keyCode === 13 && isBtn) {
      flowCallNext();
    }
  });
};
