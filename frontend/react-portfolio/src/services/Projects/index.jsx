// import img001 from '../../static/images/001.jpg';

export default class ProjectsServices {
  _imageBase = 'https://amarkin11.github.io/release/media/images/projects';

  data = [
    {id: 1, type: 'special', link: 'https://rtraveler.ru/', img: `${this._imageBase}/rt.jpg`, imgClass: '', title: 'Russian Traveler', year: '2022', view: 'mpa'},
    {id: 2, type: 'special', link: 'https://awards22.rtraveler.ru/', img: `${this._imageBase}/rtawards.jpg`, imgClass: 'left', title: 'Russian Traveler Awards 2022', year: '2022', view: 'mpa'},
    {id: 3, type: 'special', link: 'https://www.agroinvestor.ru/', img: `${this._imageBase}/agro.jpg`, imgClass: '', title: 'Агроинвестор', year: '2020', view: 'mpa'},
    {id: 4, type: 'special', link: 'https://award.agroinvestor.ru/', img: `${this._imageBase}/agroawards.jpg`, imgClass: '', title: 'Агроинвестор года - 2022', year: '2022', view: 'landing'},
    {id: 5, type: 'special', link: 'https://bees.agroinvestor.ru/', img: `${this._imageBase}/agrobee.jpg`, imgClass: 'left', title: 'Защитим пчёл вместе', year: '2021', view: 'mpa'},
    {id: 6, type: 'special', link: 'https://rosatom.rtraveler.ru/', img: `${this._imageBase}/rtatom.jpg`, imgClass: 'left', title: 'Атомная энергетика - РОСАТОМ', year: '2022', view: 'mpa'},
    {id: 7, type: 'special', link: 'http://experum.ru/tax-safety', img: `${this._imageBase}/experumsafe.jpg`, imgClass: 'left', title: 'Налоговая безопасность – Experum', year: '2019', view: 'landing'},
    {id: 8, type: 'special', link: 'http://democracymuseum.ru', img: `${this._imageBase}/demmuseum.jpg`, imgClass: 'left', title: 'Музей Рождения Демократиии в Современной России', year: '2018', view: 'mpa'},
    {id: 9, type: 'special', link: 'https://kartaistorii.ru/s1', img: `${this._imageBase}/kartaistorii.jpg`, imgClass: '', title: 'Неединая Россия. 1920-е годы. Карта истории', year: '2018', view: 'mpa'},
    {id: 10, type: 'special', link: 'http://course.mkkk.org', img: `${this._imageBase}/mkkk.jpg`, imgClass: '', title: 'Тренинг МККК для журналистов', year: '2018', view: 'mpa'},
    {id: 11, type: 'special', link: 'https://ecoatom.rtraveler.ru/', img: `${this._imageBase}/rtecoatom.jpg`, imgClass: 'left', title: '«Зелёный» атом и его возможности', year: '2022', view: 'landing'},
    {id: 12, type: 'special', link: 'https://oppo.rtraveler.ru/', img: `${this._imageBase}/rtoppo.jpg`, imgClass: 'left', title: 'Специальный проект OPPO и Russian Traveler', year: '2023', view: 'mpa'},
    {id: 13, type: 'special', link: 'https://cordiant.rtraveler.ru/', img: `${this._imageBase}/rtcordiant.jpg`, imgClass: 'left', title: 'Вокруг Лета с Cordiant: Планируем летние автопутешествия', year: '2023', view: 'mpa'},
    {id: 14, type: 'special', link: 'https://tecno.rtraveler.ru/', img: `${this._imageBase}/rttecno.jpg`, imgClass: '', title: 'Пластик на пользу', year: '2023', view: 'mpa'},
    {id: 15, type: 'special', link: 'https://souzmult.rtraveler.ru/', img: `${this._imageBase}/rtsouzmult.jpg`, imgClass: '', title: 'Специальный проект National Geographic Россия и Союзмультфильм', year: '2021', view: 'mpa'},
    {id: 16, type: 'special', link: 'https://sheldr.jbl.rtraveler.ru/', img: `${this._imageBase}/rtjbl.jpg`, imgClass: '', title: 'Фотовыставка «Полуостров текстур – Камчатка»', year: '2021', view: 'landing'},
    {id: 17, type: 'special', link: 'https://kinder.rtraveler.ru/', img: `${this._imageBase}/rtkinder.jpg`, imgClass: 'left', title: 'Специальный проект о сайгаках Kinder, WWF и National Geographic Россия', year: '2021', view: 'mpa'},
    {id: 18, type: 'special', link: 'https://honor.rtraveler.ru/', img: `${this._imageBase}/rthonor.jpg`, imgClass: 'left', title: 'Совместный проект Honor и National Geographic Россия', year: '2020', view: 'mpa'},
    {id: 19, type: 'special', link: 'https://hills.rtraveler.ru/', img: `${this._imageBase}/rthills.jpg`, imgClass: '', title: 'От идеи до дегустации: как создаются правильные корма для животных', year: '2021', view: 'mpa'},
    {id: 20, type: 'special', link: 'https://samsung.rtraveler.ru/', img: `${this._imageBase}/rtsamsung.jpg`, imgClass: '', title: 'Наша #СтранаКосмос', year: '2019', view: 'landing'},
    {id: 21, type: 'special', link: 'https://samsunggalaxycamera.rtraveler.ru/', img: `${this._imageBase}/rtsamsunggcamera.jpg`, imgClass: '', title: '10 мест для лучшего зимнего отдыха – Вместе с Samsung Galaxy S21 Ultra', year: '2021', view: 'landing'},
    {id: 22, type: 'special', link: 'https://ru.siberianhealth.com/ru/new-year2018', img: `${this._imageBase}/sibny2018.jpg`, imgClass: '', title: 'Корпорация Сибирское здоровье', year: '2018', view: 'landing'},
    {id: 23, type: 'special', link: 'https://herbhunters.ru', img: `${this._imageBase}/sibheadh.jpg`, imgClass: '', title: 'Охотники за травами 2', year: '2018', view: 'mpa'},
    {id: 24, type: 'special', link: 'https://www.agroinvestor.ru/test-drive/cnh/', img: `${this._imageBase}/agrotestdrive.jpg`, imgClass: '', title: 'New Holland FR', year: '2020', view: 'landing'},
    {id: 25, type: 'react', link: 'https://amarkin11.github.io/release/projects-react/test/', img: `${this._imageBase}/test.jpg`, imgClass: '', title: 'Тест: угадай породу', year: '2023', view: 'spa'},
    {id: 26, type: 'react', link: 'https://amarkin11.github.io/release/projects-react/todo/', img: `${this._imageBase}/todo.jpg`, imgClass: '', title: 'Todo list', year: '2023', view: 'spa'},
    {id: 27, type: 'react', link: 'https://amarkin11.github.io/release/projects-react/re-store/', img: `${this._imageBase}/restore.jpg`, imgClass: '', title: 'Re-store', year: '2023', view: 'spa'},
    {id: 28, type: 'react', link: 'https://amarkin11.github.io/release/projects-react/star-db/', img: `${this._imageBase}/stardb.jpg`, imgClass: '', title: 'Star-db', year: '2023', view: 'spa'},
  ];

  // getProject() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(this.data);
  //       reject(new Error('Что-то пошло не так, пожалуйста перезагрузите страницу! И попробуйте снова.'))
  //     }, 700);
  //   });
  // };

  getAllProjects() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
        reject(new Error('Что-то пошло не так, пожалуйста перезагрузите страницу! И попробуйте снова.'))
      }, 1000);
    });
  };

  getSpecialProjects() {
    return this._filterProjects('special');
  };

  getReactProjects = async () => {
    return this._filterProjects('react');
  };

  getTotalProjects = async () => {
    // const all = this.getAllProjects(),
    //       special = this.getSpecialProjects(),
    //       react = this.getReactProjects();
    const [all, special, react] = await Promise.all([this.getAllProjects(), this.getSpecialProjects(), this.getReactProjects()])

    return {
      all: all.length,
      special: special.length,
      react: react.length
    };
  };

  _filterProjects = async (name) => {
    const res = await this.getAllProjects();
    return res.filter((item) => item.type === name);
  };
};
