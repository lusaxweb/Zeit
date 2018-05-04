<template lang="html">
  <div class="clock">
    <div class="inner">
      <div class="hour hand"></div>
      <div class="minute hand"></div>
      <div class="second hand"></div>
      <div class="graduations">
        <div class="graduation">
          <span>12</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>1</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>2</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>3</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>4</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>5</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>6</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>7</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>8</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>9</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>10</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation">
          <span>11</span>
        </div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
        <div class="graduation"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted () {
    /** Our wonderfull little clock **/
    class Clock {
      /**
      * Clock initialization
      */
      constructor () {
        this.sound = new Audio('data:audio/wav;base64,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')
        this.hourHand = document.querySelector('.hour.hand')
        this.minuteHand = document.querySelector('.minute.hand')
        this.secondHand = document.querySelector('.second.hand')
        this.timer()
        setInterval(() => this.timer(), 1000)
      }
      /**
      * Timer of the clock
      */
      timer () {
        this.sethandRotation('hour')
        this.sethandRotation('minute')
        this.sethandRotation('second')
      }

      /**
      * Changes the rotation of the hands of the clock
      * @param  {HTMLElement} hand   One of the hand of the clock
      * @param  {number}      degree degree of rotation of the hand
      */
      sethandRotation (hand) {
        let date = new Date()
        let seconds = date.getSeconds()
        let minutes = date.getMinutes()
        let hours = date.getHours()
        let percentage
        let degree
        switch (hand) {
          case 'hour':
            hours = date.getHours()
            hand = this.hourHand
            percentage = (hours + minutes / 60 + seconds / 60 / 60) * 360 / 12
            break
          case 'minute':
            minutes = date.getMinutes()
            hand = this.minuteHand
            percentage = (minutes + seconds / 60) * 360 / 60
            break
          case 'second':
            seconds = date.getSeconds()
            hand = this.secondHand
            percentage = seconds * 360 / 60
            // this.sound.play()
            break
        }

        degree = this.percentageToDegree(percentage)
        hand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`
      }

      /**
      * Converting a number to a percentage
      * @param  {number} number Number
      * @param  {number} max    Maximum value of the number
      * @return {number}        Return a percentage
      */
      numberToPercentage (number = 0, max = 60) {
        return (number / max) * 100
      }

      /**
      * Converting a percentage to a degree
      * @param  {number} percentage Percentage
      * @return {number}            Return a degree
      */
      percentageToDegree (percentage = 0) {
        // return (percentage * 360) / 100
        return percentage
      }
    }
    var clock = new Clock()
    if (clock) {}
  }
}
</script>

<style lang="css">
html, body {
    height: 100%;
}

body {
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-align-items: center;
       -moz-box-align: center;
            align-items: center;
    -webkit-justify-content: center;
       -moz-box-pack: center;
            justify-content: center;
    background: -webkit-linear-gradient(340deg, #D2D2D2, #F5F5F5);
    background: -moz-linear-gradient(340deg, #D2D2D2, #F5F5F5);
    background: -o-linear-gradient(340deg, #D2D2D2, #F5F5F5);
    background: linear-gradient(110deg, #D2D2D2, #F5F5F5);
}

* {
    -moz-box-sizing: border-box !important;
         box-sizing: border-box !important;
}

.clock {
    width: 360px;
    height: 360px;
    padding: 25px;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    box-shadow: 0 10px 80px rgba(0, 0, 0, 0.07);
}

.clock .inner {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    border: 8px solid #ffffff;
    border-radius: 100%;
    box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.08) inset;
}

.clock .inner::after {
  position: absolute;
  content: '';
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 67%;
  height: 67%;
  background: rgb(230, 23, 155);
  border-radius: 50%;
  background: rgb(255, 255, 255);
  z-index: 10;
}

.clock .inner .hand {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    background-color: #767898;
    z-index: 100;
}

.clock .inner .hand.hour {
  width: 7.5px;
    height: 60px;
    margin-top: -27.27273px;
    -webkit-transform: rotate(0deg) translate(-50%, -50%);
       -moz-transform: rotate(0deg) translate(-50%, -50%);
         -o-transform: rotate(0deg) translate(-50%, -50%);
            transform: rotate(0deg) translate(-50%, -50%);
    -webkit-transform-origin: 0 27.27273px;
       -moz-transform-origin: 0 27.27273px;
         -o-transform-origin: 0 27.27273px;
            transform-origin: 0 27.27273px;
}

.clock .inner .hand.minute {
    width: 3px;
    height: 90px;
    margin-top: -27.27273px;
    -webkit-transform: rotate(0deg) translate(-50%, -50%);
       -moz-transform: rotate(0deg) translate(-50%, -50%);
         -o-transform: rotate(0deg) translate(-50%, -50%);
            transform: rotate(0deg) translate(-50%, -50%);
    -webkit-transform-origin: 0 27.27273px;
       -moz-transform-origin: 0 27.27273px;
         -o-transform-origin: 0 27.27273px;
            transform-origin: 0 27.27273px;
}

.clock .inner .hand.second {
    width: 1.94595px;
    height: 120px;
    background-color: #ff2b7a;
    margin-top: -36px;
    box-shadow: -4px -6px 0 0 rgba(0, 0, 0, 0.15);
    -webkit-transform: rotate(0deg) translate(-50%, -50%);
       -moz-transform: rotate(0deg) translate(-50%, -50%);
         -o-transform: rotate(0deg) translate(-50%, -50%);
            transform: rotate(0deg) translate(-50%, -50%);
    -webkit-transform-origin: 0 36px;
       -moz-transform-origin: 0 36px;
         -o-transform-origin: 0 36px;
            transform-origin: 0 36px;
}

.clock .inner .hand.second:before, .clock .inner .hand.second:after {
    content: '';
    display: inherit;
    position: inherit;
    left: inherit;
    background-color: rgb(255, 255, 255);
    border-radius: 100%;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
         -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
}

.clock .inner .hand.second:before {
    top: 94.73684px;
    width: 18px;
    height: 18px;
    box-shadow: 0px 0px 30px 0 rgba(0, 0, 0, 0.2);
}

/* .clock .inner .hand.second:after {
    top: 20px;
    width: 10px;
    height: 10px;
    box-shadow: -4px -6px 2px 0 rgba(0, 0, 0, 0.15);
} */

.clock .inner .graduations .graduation {
    display: block;
    position: absolute;
    top: 7.5px;
    left: 50%;
    width: 1.94595px;
    height: 9px;
    background-color: rgba(118, 120, 152,.3);
    -webkit-transform: rotate(0deg) translateX(-50%);
       -moz-transform: rotate(0deg) translateX(-50%);
         -o-transform: rotate(0deg) translateX(-50%);
            transform: rotate(0deg) translateX(-50%);
    -webkit-transform-origin: 0 140px;
       -moz-transform-origin: 0 140px;
         -o-transform-origin: 0 140px;
            transform-origin: 0 140px;
}
.clock .inner .graduations .graduation span {
  position: absolute;
  left: 50%;
  top: -35px;
  transform: translate(-50%);
  color: rgba(118, 120, 152,0);
}

.clock .inner .graduations .graduation:nth-child(6) span {
  transform: rotate(-30deg) translate(-50%);
}
.clock .inner .graduations .graduation:nth-child(11) span {
  transform: rotate(-60deg) translate(-50%);
}
.clock .inner .graduations .graduation:nth-child(16) span {
  transform: rotate(-90deg) translate(-50%,-5px);
}
.clock .inner .graduations .graduation:nth-child(21) span {
  transform: rotate(-120deg) translate(-20%,-5px);
}
.clock .inner .graduations .graduation:nth-child(26) span {
  transform: rotate(-150deg) translate(40%,-3px);
}
.clock .inner .graduations .graduation:nth-child(31) span {
  transform: rotate(-180deg) translate(70%,0px);
}
.clock .inner .graduations .graduation:nth-child(36) span {
  transform: rotate(-220deg) translate(50%,3px);
}
.clock .inner .graduations .graduation:nth-child(41) span {
  transform: rotate(-246deg) translate(50%,4px);
}
.clock .inner .graduations .graduation:nth-child(46) span {
  transform: rotate(-270deg) translate(40%,4px);
}
.clock .inner .graduations .graduation:nth-child(51) span {
  transform: rotate(-300deg) translate(-20%,7px);
}
.clock .inner .graduations .graduation:nth-child(56) span {
  transform: rotate(-330deg) translate(-50%,4px);
}

.clock .inner .graduations .graduation:nth-child(5n-4) {
    width: 3px;
    height: 20px;
    background-color: rgba(118, 120, 152,.5);
}

.clock .inner .graduations .graduation:nth-child(1) {
    -webkit-transform: rotate(1deg) translateX(-50%);
       -moz-transform: rotate(1deg) translateX(-50%);
         -o-transform: rotate(1deg) translateX(-50%);
            transform: rotate(1deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(2) {
    -webkit-transform: rotate(7deg) translateX(-50%);
       -moz-transform: rotate(7deg) translateX(-50%);
         -o-transform: rotate(7deg) translateX(-50%);
            transform: rotate(7deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(3) {
    -webkit-transform: rotate(13deg) translateX(-50%);
       -moz-transform: rotate(13deg) translateX(-50%);
         -o-transform: rotate(13deg) translateX(-50%);
            transform: rotate(13deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(4) {
    -webkit-transform: rotate(19deg) translateX(-50%);
       -moz-transform: rotate(19deg) translateX(-50%);
         -o-transform: rotate(19deg) translateX(-50%);
            transform: rotate(19deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(5) {
    -webkit-transform: rotate(25deg) translateX(-50%);
       -moz-transform: rotate(25deg) translateX(-50%);
         -o-transform: rotate(25deg) translateX(-50%);
            transform: rotate(25deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(6) {
    -webkit-transform: rotate(31deg) translateX(-50%);
       -moz-transform: rotate(31deg) translateX(-50%);
         -o-transform: rotate(31deg) translateX(-50%);
            transform: rotate(31deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(7) {
    -webkit-transform: rotate(37deg) translateX(-50%);
       -moz-transform: rotate(37deg) translateX(-50%);
         -o-transform: rotate(37deg) translateX(-50%);
            transform: rotate(37deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(8) {
    -webkit-transform: rotate(43deg) translateX(-50%);
       -moz-transform: rotate(43deg) translateX(-50%);
         -o-transform: rotate(43deg) translateX(-50%);
            transform: rotate(43deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(9) {
    -webkit-transform: rotate(49deg) translateX(-50%);
       -moz-transform: rotate(49deg) translateX(-50%);
         -o-transform: rotate(49deg) translateX(-50%);
            transform: rotate(49deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(10) {
    -webkit-transform: rotate(55deg) translateX(-50%);
       -moz-transform: rotate(55deg) translateX(-50%);
         -o-transform: rotate(55deg) translateX(-50%);
            transform: rotate(55deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(11) {
    -webkit-transform: rotate(61deg) translateX(-50%);
       -moz-transform: rotate(61deg) translateX(-50%);
         -o-transform: rotate(61deg) translateX(-50%);
            transform: rotate(61deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(12) {
    -webkit-transform: rotate(67deg) translateX(-50%);
       -moz-transform: rotate(67deg) translateX(-50%);
         -o-transform: rotate(67deg) translateX(-50%);
            transform: rotate(67deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(13) {
    -webkit-transform: rotate(73deg) translateX(-50%);
       -moz-transform: rotate(73deg) translateX(-50%);
         -o-transform: rotate(73deg) translateX(-50%);
            transform: rotate(73deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(14) {
    -webkit-transform: rotate(79deg) translateX(-50%);
       -moz-transform: rotate(79deg) translateX(-50%);
         -o-transform: rotate(79deg) translateX(-50%);
            transform: rotate(79deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(15) {
    -webkit-transform: rotate(85deg) translateX(-50%);
       -moz-transform: rotate(85deg) translateX(-50%);
         -o-transform: rotate(85deg) translateX(-50%);
            transform: rotate(85deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(16) {
    -webkit-transform: rotate(91deg) translateX(-50%);
       -moz-transform: rotate(91deg) translateX(-50%);
         -o-transform: rotate(91deg) translateX(-50%);
            transform: rotate(91deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(17) {
    -webkit-transform: rotate(97deg) translateX(-50%);
       -moz-transform: rotate(97deg) translateX(-50%);
         -o-transform: rotate(97deg) translateX(-50%);
            transform: rotate(97deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(18) {
    -webkit-transform: rotate(103deg) translateX(-50%);
       -moz-transform: rotate(103deg) translateX(-50%);
         -o-transform: rotate(103deg) translateX(-50%);
            transform: rotate(103deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(19) {
    -webkit-transform: rotate(109deg) translateX(-50%);
       -moz-transform: rotate(109deg) translateX(-50%);
         -o-transform: rotate(109deg) translateX(-50%);
            transform: rotate(109deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(20) {
    -webkit-transform: rotate(115deg) translateX(-50%);
       -moz-transform: rotate(115deg) translateX(-50%);
         -o-transform: rotate(115deg) translateX(-50%);
            transform: rotate(115deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(21) {
    -webkit-transform: rotate(121deg) translateX(-50%);
       -moz-transform: rotate(121deg) translateX(-50%);
         -o-transform: rotate(121deg) translateX(-50%);
            transform: rotate(121deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(22) {
    -webkit-transform: rotate(127deg) translateX(-50%);
       -moz-transform: rotate(127deg) translateX(-50%);
         -o-transform: rotate(127deg) translateX(-50%);
            transform: rotate(127deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(23) {
    -webkit-transform: rotate(133deg) translateX(-50%);
       -moz-transform: rotate(133deg) translateX(-50%);
         -o-transform: rotate(133deg) translateX(-50%);
            transform: rotate(133deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(24) {
    -webkit-transform: rotate(139deg) translateX(-50%);
       -moz-transform: rotate(139deg) translateX(-50%);
         -o-transform: rotate(139deg) translateX(-50%);
            transform: rotate(139deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(25) {
    -webkit-transform: rotate(145deg) translateX(-50%);
       -moz-transform: rotate(145deg) translateX(-50%);
         -o-transform: rotate(145deg) translateX(-50%);
            transform: rotate(145deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(26) {
    -webkit-transform: rotate(151deg) translateX(-50%);
       -moz-transform: rotate(151deg) translateX(-50%);
         -o-transform: rotate(151deg) translateX(-50%);
            transform: rotate(151deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(27) {
    -webkit-transform: rotate(157deg) translateX(-50%);
       -moz-transform: rotate(157deg) translateX(-50%);
         -o-transform: rotate(157deg) translateX(-50%);
            transform: rotate(157deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(28) {
    -webkit-transform: rotate(163deg) translateX(-50%);
       -moz-transform: rotate(163deg) translateX(-50%);
         -o-transform: rotate(163deg) translateX(-50%);
            transform: rotate(163deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(29) {
    -webkit-transform: rotate(169deg) translateX(-50%);
       -moz-transform: rotate(169deg) translateX(-50%);
         -o-transform: rotate(169deg) translateX(-50%);
            transform: rotate(169deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(30) {
    -webkit-transform: rotate(175deg) translateX(-50%);
       -moz-transform: rotate(175deg) translateX(-50%);
         -o-transform: rotate(175deg) translateX(-50%);
            transform: rotate(175deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(31) {
    -webkit-transform: rotate(181deg) translateX(-50%);
       -moz-transform: rotate(181deg) translateX(-50%);
         -o-transform: rotate(181deg) translateX(-50%);
            transform: rotate(181deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(32) {
    -webkit-transform: rotate(187deg) translateX(-50%);
       -moz-transform: rotate(187deg) translateX(-50%);
         -o-transform: rotate(187deg) translateX(-50%);
            transform: rotate(187deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(33) {
    -webkit-transform: rotate(193deg) translateX(-50%);
       -moz-transform: rotate(193deg) translateX(-50%);
         -o-transform: rotate(193deg) translateX(-50%);
            transform: rotate(193deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(34) {
    -webkit-transform: rotate(199deg) translateX(-50%);
       -moz-transform: rotate(199deg) translateX(-50%);
         -o-transform: rotate(199deg) translateX(-50%);
            transform: rotate(199deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(35) {
    -webkit-transform: rotate(205deg) translateX(-50%);
       -moz-transform: rotate(205deg) translateX(-50%);
         -o-transform: rotate(205deg) translateX(-50%);
            transform: rotate(205deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(36) {
    -webkit-transform: rotate(211deg) translateX(-50%);
       -moz-transform: rotate(211deg) translateX(-50%);
         -o-transform: rotate(211deg) translateX(-50%);
            transform: rotate(211deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(37) {
    -webkit-transform: rotate(217deg) translateX(-50%);
       -moz-transform: rotate(217deg) translateX(-50%);
         -o-transform: rotate(217deg) translateX(-50%);
            transform: rotate(217deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(38) {
    -webkit-transform: rotate(223deg) translateX(-50%);
       -moz-transform: rotate(223deg) translateX(-50%);
         -o-transform: rotate(223deg) translateX(-50%);
            transform: rotate(223deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(39) {
    -webkit-transform: rotate(229deg) translateX(-50%);
       -moz-transform: rotate(229deg) translateX(-50%);
         -o-transform: rotate(229deg) translateX(-50%);
            transform: rotate(229deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(40) {
    -webkit-transform: rotate(235deg) translateX(-50%);
       -moz-transform: rotate(235deg) translateX(-50%);
         -o-transform: rotate(235deg) translateX(-50%);
            transform: rotate(235deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(41) {
    -webkit-transform: rotate(241deg) translateX(-50%);
       -moz-transform: rotate(241deg) translateX(-50%);
         -o-transform: rotate(241deg) translateX(-50%);
            transform: rotate(241deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(42) {
    -webkit-transform: rotate(247deg) translateX(-50%);
       -moz-transform: rotate(247deg) translateX(-50%);
         -o-transform: rotate(247deg) translateX(-50%);
            transform: rotate(247deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(43) {
    -webkit-transform: rotate(253deg) translateX(-50%);
       -moz-transform: rotate(253deg) translateX(-50%);
         -o-transform: rotate(253deg) translateX(-50%);
            transform: rotate(253deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(44) {
    -webkit-transform: rotate(259deg) translateX(-50%);
       -moz-transform: rotate(259deg) translateX(-50%);
         -o-transform: rotate(259deg) translateX(-50%);
            transform: rotate(259deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(45) {
    -webkit-transform: rotate(265deg) translateX(-50%);
       -moz-transform: rotate(265deg) translateX(-50%);
         -o-transform: rotate(265deg) translateX(-50%);
            transform: rotate(265deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(46) {
    -webkit-transform: rotate(271deg) translateX(-50%);
       -moz-transform: rotate(271deg) translateX(-50%);
         -o-transform: rotate(271deg) translateX(-50%);
            transform: rotate(271deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(47) {
    -webkit-transform: rotate(277deg) translateX(-50%);
       -moz-transform: rotate(277deg) translateX(-50%);
         -o-transform: rotate(277deg) translateX(-50%);
            transform: rotate(277deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(48) {
    -webkit-transform: rotate(283deg) translateX(-50%);
       -moz-transform: rotate(283deg) translateX(-50%);
         -o-transform: rotate(283deg) translateX(-50%);
            transform: rotate(283deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(49) {
    -webkit-transform: rotate(289deg) translateX(-50%);
       -moz-transform: rotate(289deg) translateX(-50%);
         -o-transform: rotate(289deg) translateX(-50%);
            transform: rotate(289deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(50) {
    -webkit-transform: rotate(295deg) translateX(-50%);
       -moz-transform: rotate(295deg) translateX(-50%);
         -o-transform: rotate(295deg) translateX(-50%);
            transform: rotate(295deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(51) {
    -webkit-transform: rotate(301deg) translateX(-50%);
       -moz-transform: rotate(301deg) translateX(-50%);
         -o-transform: rotate(301deg) translateX(-50%);
            transform: rotate(301deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(52) {
    -webkit-transform: rotate(307deg) translateX(-50%);
       -moz-transform: rotate(307deg) translateX(-50%);
         -o-transform: rotate(307deg) translateX(-50%);
            transform: rotate(307deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(53) {
    -webkit-transform: rotate(313deg) translateX(-50%);
       -moz-transform: rotate(313deg) translateX(-50%);
         -o-transform: rotate(313deg) translateX(-50%);
            transform: rotate(313deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(54) {
    -webkit-transform: rotate(319deg) translateX(-50%);
       -moz-transform: rotate(319deg) translateX(-50%);
         -o-transform: rotate(319deg) translateX(-50%);
            transform: rotate(319deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(55) {
    -webkit-transform: rotate(325deg) translateX(-50%);
       -moz-transform: rotate(325deg) translateX(-50%);
         -o-transform: rotate(325deg) translateX(-50%);
            transform: rotate(325deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(56) {
    -webkit-transform: rotate(331deg) translateX(-50%);
       -moz-transform: rotate(331deg) translateX(-50%);
         -o-transform: rotate(331deg) translateX(-50%);
            transform: rotate(331deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(57) {
    -webkit-transform: rotate(337deg) translateX(-50%);
       -moz-transform: rotate(337deg) translateX(-50%);
         -o-transform: rotate(337deg) translateX(-50%);
            transform: rotate(337deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(58) {
    -webkit-transform: rotate(343deg) translateX(-50%);
       -moz-transform: rotate(343deg) translateX(-50%);
         -o-transform: rotate(343deg) translateX(-50%);
            transform: rotate(343deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(59) {
    -webkit-transform: rotate(349deg) translateX(-50%);
       -moz-transform: rotate(349deg) translateX(-50%);
         -o-transform: rotate(349deg) translateX(-50%);
            transform: rotate(349deg) translateX(-50%);
}

.clock .inner .graduations .graduation:nth-child(60) {
    -webkit-transform: rotate(355deg) translateX(-50%);
       -moz-transform: rotate(355deg) translateX(-50%);
         -o-transform: rotate(355deg) translateX(-50%);
            transform: rotate(355deg) translateX(-50%);
}

</style>
