new JustValidate('#call-back', {
    rules: {
      name: {
        required: true,
        minLength: 5,
        maxLength: 15,
        message: 'лососни тунца', 
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.maxLength === 10
        }
      },

      mail: {
        required: true,
        email: true,
      },
    },

    messages: {
          name: {
              required : 'Пожалуйста, укажите ваше имя',
              minLength: 'Имя не должно быть короче 5х символов',
              maxLength: 'Имя не должно быть длиннее 15х символов',
          },

          tel: {
              required: 'Пожалуйста укажите ваш номер телефона',
          },
    },
  });