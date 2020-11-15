<template>
  <section class="footer">
    <div class="container footer-form-wrapper">
      <h3 class="footer-title">Подпишитесь на нашу рассылку
        и узнавайте о акция быстрее</h3>
      <form class="footer-form">
        <input type="text" class="footer-form-input" placeholder="Введите ваш e-mail:">
        <button class="btn footer-form-submit" type="submit">Отправить</button>
      </form>
    </div>
    <vsa-list v-if="clientWidth<1170">
      <vsa-item v-for="item in listOfItems" :key="item.id">
        <vsa-heading>
          {{ item.heading }}
        </vsa-heading>

        <vsa-content>
          {{ item.content }}
        </vsa-content>
      </vsa-item>
    </vsa-list>
    <div class="footer__info" v-else>
      <div class="footer__info-tab">
        <h4 class="footer__info-tab-title">Информация</h4>
        <ul class="footer__info-tab-list">
          <li class="footer__info-tab-list-item">О компании</li>
          <li class="footer__info-tab-list-item">Контакты</li>
          <li class="footer__info-tab-list-item">Реквизиты</li>
          <li class="footer__info-tab-list-item">Магазины</li>
        </ul>
      </div>
      <div class="footer__info-tab">
        <h4 class="footer__info-tab-title">Сервисный центр</h4>
        <ul class="footer__info-tab-list">
          <li class="footer__info-tab-list-item">Доставка и самовывоз</li>
          <li class="footer__info-tab-list-item">Оплата</li>
          <li class="footer__info-tab-list-item">Возврат-обмен</li>
          <li class="footer__info-tab-list-item">Новости</li>
        </ul>
      </div>
      <div class="footer__info-tab">
        <h4 class="footer__info-tab-title">Интернет магазин</h4>
        <ul class="footer__info-tab-list">
          <li class="footer__info-tab-list-item">Акции</li>
          <li class="footer__info-tab-list-item">Договор оферты</li>
          <li class="footer__info-tab-list-item">Политика обработки персональных данных</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "footer-comp",
  data: function () {
    return {
      listOfItems: [
        {
          heading: "Информация",
          content: "Много информации"
        },
        {
          heading: "Сервисный центр",
          content: "Много Сервисный центр"
        },
        {
          heading: "Интернет-магазин",
          content: "Много Интернет-магазин"
        }
      ]

    }
  },
  computed: {
    clientWidth() {
      return document.documentElement.clientWidth;
    },
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/utils/vars.scss";

.footer {
  background: #F9F9FC;
  padding-top: 40px;
}

.footer-title {
  text-align: center;
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 26px;
}

.footer-form {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 40px;
}

.footer-form-input {
  width: calc(100% - 109px);
  padding: 8px 12px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #A5A5A5;
  }
}

.footer-form-submit {
  background: $primary-color;
  font-size: 11px;
  color: #ffffff;
  text-transform: uppercase;
  width: 109px;
  padding: 14px 16px;
}

.vsa-list {
  border: none;
  border-top: 1px solid #D6D6D6;
  border-bottom: 1px solid #D6D6D6;
}

@media (min-width: 1170px) {
  .footer {
    display: flex;
    justify-content: flex-start;
  }

  .footer-title {
    text-align: left;
  }

  .footer-form-wrapper {
    max-width: 294px;
    margin-right: 160px;
  }

  .footer__info {
    display: flex;
    width: 100%;
    font-size: 14px;
    justify-content: space-between;
  }

  .footer__info-tab-title {
    font-weight: 700;
    font-size: 14px;
  }

  .footer__info-tab {
    max-width: 156px;
  }
}
</style>
