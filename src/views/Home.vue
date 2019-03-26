<template>
  <div class="home">
    <div class="loader" v-if="isLoading">
      <i class="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
      <span class="ripple pinkBg"></span>
      <span class="ripple pinkBg"></span>
      <span class="ripple pinkBg"></span>
    </div>

    <div class="dev-u-padding-default--x2">
      <div class="dev-grid-wrapper__article--column--1 dev-u-padding-default">
        <article>
          <div
            v-for="(item, index) in this.petionData"
            :key="index"
            class="dev-card-base dev-u-padding-default"
          >
            <div class="dev-card-base__header dev-u-padding-default">
              <h4>{{item.attributes.action}}</h4>
            </div>
            <div class="dev-card-base__body dev-u-padding-default">{{item.attributes.background}}</div>
            <div class="dev-card-base__footer dev-u-padding-default">
              <div class="dev-grid-wrapper__article--column--2 dev-flex">
                <article>
                  <router-link
                    :to="{ name: 'petition', params: { stream: getStream(item.links.self) } }"
                  >
                    <button class="dev-btn">Petition Real Time Stats</button>
                  </router-link>
                </article>
                <article>
                  <h3 class="counter">{{item.attributes.signature_count.toLocaleString()}}</h3>
                </article>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
}
p {
  text-align: let;
  font-size: 14px;
}
.home {
  padding: 0px 30px 20px;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 1em;

  &--full {
    display: grid;
    grid-template-columns: 1fr;
  }

  &--3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.active {
  color: green !important;
  font-weight: bold;
}

.livecount {
  color: coral;
  font-size: 32px;
  text-align: center;
  .label {
    font-size: 12px;
    color: black;
  }
}
.alert {
  color: red;
  font-weight: bold;
}

.card {
  padding: 8px;
  border-radius: 3px;
  border: 1px solid silver;
  box-shadow: 2px 3px 3px -4px dimgrey;
  margin: 8px 0px;
}

.carditle {
  border-bottom: 1px solid silver;
  padding: 8px;
}

.possible--bot {
  background: lighten(dodgerblue, 20%);
}
.pinkBg {
  background-color: #02adb5 !important;
  background-image: linear-gradient(90deg, #02adb5, rgb(46, 217, 226));
}
.intro-banner-vdo-play-btn {
  height: 60px;
  width: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  margin: -30px 0 0 -30px;
  border-radius: 100px;
  z-index: 1;
}
.loader {
  position: relative;
  z-index: 9999;
}
.loader i {
  line-height: 56px;
  font-size: 30px;
}
.loader .ripple {
  position: absolute;
  width: 160px;
  height: 160px;
  z-index: -1;
  left: 50%;
  top: 50%;
  opacity: 0;
  margin: -80px 0 0 -80px;
  border-radius: 100px;
  -webkit-animation: ripple 1.8s infinite;
  animation: ripple 1.8s infinite;
}

@-webkit-keyframes ripple {
  0% {
    opacity: 1;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes ripple {
  0% {
    opacity: 1;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.loader .ripple:nth-child(2) {
  animation-delay: 0.3s;
  -webkit-animation-delay: 0.3s;
}
.loader .ripple:nth-child(3) {
  animation-delay: 0.6s;
  -webkit-animation-delay: 0.6s;
}
.counter {
  text-align: right;
  margin: 26px;
  font-size: 26px;
}
</style>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import request from "superagent";
import Sparkline from "vue-sparklines";
import { setTimeout } from "timers";
const moment = require("moment");
Vue.use(require("vue-moment"), {
  moment
});

Vue.component("tween-num", require("vue-tween-number"));

@Component({
  components: {
    Sparkline
  }
})
export default class Home extends Vue {
  // private newPetsCount:number = 0
  private isLoading: boolean = false;
  private timeCounter: string = Date();
  private stats: Array<any> = [{ count: 0, time: 0 }];
  private newPetsAdded: number = 0;
  private isActive: boolean = false;
  private petionData: any = [];
  private spIndicatorStyles1: boolean = false;
  private testStat: any = [310, 220, 530, 140, 250, 600, 170, 280, 590];
  private spLineStyles1: any = {
    stroke: "#54a5ff"
  };
  private columnsMP: any = [
    {
      label: "Mp",
      field: "mp"
    },
    {
      label: "Name",
      field: "name"
    },
    {
      label: "Count",
      field: "signature_count",
      type: "number"
    }
  ];
  private columnsSIG: any = [
    {
      label: "Code",
      field: "code"
    },
    {
      label: "Name",
      field: "name"
    },
    {
      label: "Count",
      field: "signature_count",
      type: "number"
    }
  ];

  private rows: any = [];
  private countryCountRows: any = [];

  @Watch("petsUp.signature_count")
  onChildChanged(val: number, oldVal: number) {
    //console.log("Changed");
    this.isActive = true;
    //console.log(val - oldVal);
    this.newPetsAdded = val - oldVal;
    // this.newPetsCount = this.petsUp.signature_count + this.newPetsAdded

    this.stats.push({ count: this.newPetsAdded, time: this.timeCounter });
    this.stats = this.stats.filter(x => x.count > 0);
    this.testStat.push(this.newPetsAdded);
    this.testStat = this.testStat.filter((z: any) => z > 0);

    //console.log(this.testStat);

    if (this.stats.length > 30) {
      //this.stats = [{count:0, time:0}]
      this.stats.shift();
      //this.timeCounter = 5
      this.testStat.shift();
    }
  }

  mounted() {
    this.getEarthQuakesPastHourAboveFourMag();
    // setInterval(() => {
    //   this.getEarthQuakesPastHourAboveFourMag();
    // }, 5000);
  }
  private async getEarthQuakesPastHourAboveFourMag() {
    this.isLoading = true;
    this.timeCounter = Date();
    const petionInfo =
      "https://petition.parliament.uk/petitions.json?state=all";
    const response = await request.get(petionInfo);

    this.petionData = response.body.data;
    // this.rows = response.body.data.attributes.signatures_by_constituency;
    // this.countryCountRows = response.body.data.attributes.signatures_by_country;
    // console.table(this.petionData.signatures_by_constituency, ['mp','name'])
    //return this.rows
    this.isActive = false;
    this.isLoading = false;
    //console.log("DATA", this.petionData);
  }

  private get petsUp() {
    return this.petionData;
  }

  private get timediff() {
    if (this.stats.length > 0) {
      let now = moment(Date(), "dddd, MMMM Do YYYY, h:mm:ss a");
      let then = moment(this.stats[0].time, "dddd, MMMM Do YYYY, h:mm:ss a");
      //const timediffNow = moment.utc(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss")).humanize();
      const timediffNow = moment.duration(now.diff(then)).humanize();
      //console.log("DIFF", timediffNow);
      return timediffNow;
    }

    //console.log (moment.utc(moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss"))

    // outputs: "00:39:30"
  }

  private getStream(url: string) {
    const spliter = url.split("/");
    const removeDot = spliter[4].split(".");
    //console.log(spliter[4]);
    return removeDot[0];
  }
}
</script>
