import { validateForms } from '../functions/validate-forms';

const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Недопустимый формат'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Недопустимый формат'
      }
    ]
  },
  {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Недопустимый формат'
      }
    ]
  },
  // {
  //   ruleSelector: '.input-tel',
  //   tel: true,
  //   telError: 'Введите корректный телефон',
  //   rules: [
  //     {
  //       rule: 'required',
  //       value: true,
  //       errorMessage: 'Заполните телефон!'
  //     }
  //   ]
  // },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.contacts__right-form', rules1, afterForm);

const rules2 = [
  {
    ruleSelector: '.input-mail',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Недопустимый формат'
      }
    ]
  },
];

const afterForm2 = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};


validateForms('.about__right-form', rules2, afterForm2);
