<template>
  <div id="cover">
    <div id="logoWrapper">
      <a-icon id="logo" type="check-square" theme="twoTone" two-tone-color="#7bed9f" />
      <p>Mori TODO</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "cover",
  created() {
    setTimeout(()=>{
        this.$router.push({path: "/index"})
    }, 7000)
  }
};
</script>

<style>
#cover {
  width: 100vw;
  height: 100vh;
  background-color: #70a1ff;
  animation-name: coverDisappear;
  animation-delay: 5s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  z-index: 1;
}

@keyframes coverDisappear {
  0% {
    opacity: 1;
    z-index: 1;
  }
  99% {
    opacity: 0;
    z-index: 1;
  }
  100% {
    opacity: 0;
    z-index: -1;
  }
}

#logoWrapper {
  text-align: center;
  display: inline-block;
}

#cover p {
  font-size: 40px;
  text-align: center;
  font-weight: 900;
  color: white;
  opacity: 0;
  animation-name: letterAppear;
  animation-delay: 1.5s;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

@keyframes letterAppear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
#logo {
  animation-name: bounceInDown;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  display: inline-block;
}

@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>