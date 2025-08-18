<template>
    <div>
        <div class="main-project">
            <h1>עמוד ריק: חידת היום 13.8.2025</h1>
            <p class="">
                1 + 3 + 8 + 2 + 2 + 5 = 23
                <br> 2 + 3 = 5
                <br> 5 חמישה אנשים היו חלק ממשפחת גריימס
                <br> מישון, קארל, ג'ודית', לורי וריק
                <br> ריק = עמוד ריק
            </p>
        </div>
        <p class="problem">אנא הפוך את הטלפון</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.problem {
  display: none;
  font-size: 2.2rem;
}

@media (max-width: 850px) and (orientation: landscape) {
  .problem {
    display: block;
  }
  .main-project {
    display: none;
  }
  .subtitle {
  color: white;
  }
}
</style>