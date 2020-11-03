<template>
  <section class="shares">
    <div class="container">
      <article class="share shares-item">
        <div class="share__window">
          <div class="share__window-price">
            <p class="share__window-price-new">200 &#8381</p>
            <p class="share__window-price-old">500 &#8381</p>
          </div>
          <img src="/../assets/img/bulb.png" alt="Лампочка" class="share__window-image">
          <h3 class="title title--h3 share__window-title">Лампочка mini...</h3>
        </div>
        <div class="share__timer">
          <p class="share__times-slogan">До конца акции осталось:</p>
          <div class="share__timer-remaining">
            <svg width="28" height="28">
              <use xlink:href="/assets/img/sprite.svg#icon-timer"></use>
            </svg>
            <p class="share__timer-remaining-time">00 : 20 : 00</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "shares"
}
</script>

<style scoped>

</style>
