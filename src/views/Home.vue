<template>
  <div class="home">
    <div class="loader" v-if="isLoading">
      <i class="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
      <span class="ripple pinkBg"></span>
      <span class="ripple pinkBg"></span>
      <span class="ripple pinkBg"></span>
    </div>
    <ul style="justify-content: center;align-items: center;width:100%">
      <li v-for="(item, index) in this.petionData" :key="index">
        <div class="card">
          <h4>{{item.attributes.action}}</h4>
          <p>{{item.attributes.background}}</p>
          <p style="color:green;font-weight:bold;">{{item.attributes.signature_count}}</p>
          <p>{{item.links.self}}</p>
          <router-link
            :to="{ name: 'petition', params: { stream: getStream(item.links.self) } }"
          >Petition Real Time Stats</router-link>
        </div>
      </li>
    </ul>
    <!-- <div class="container--full">
      <div class="card">
 <h4>{{this.petsUp.action}} Petition Real-time stats</h4>
      </div>
      </div>
    <div class="container">
      <div class="card">
          <div class="container" style=" padding-bottom:16px;">
       <span>Scheduled Debate Date:{{this.petsUp.scheduled_debate_date}}</span>
       <span class="active" style="text-align:right">Status:{{this.petsUp.state}}</span>
          </div>
       
        <h1 :class="{active:isActive}" class="livecount">
          <tween-num
            :value="this.petsUp.signature_count"
            :initial="0"
            :duration="500"
            easing="easeOutQuart"
            :formatter="val => val.toLocaleString('en', {minimumFractionDigits: 0, maximumFractionDigits: 0})"
          ></tween-num>
          <span class="label"> signatures</span>
        </h1>
        <p style="color:deeppink" v-if="this.newPetsAdded < 0">Awaiting</p>

        <p style="color:deeppink;text-align:center;font-size:16px;"  v-else-if="this.newPetsAdded > 0">
          {{this.newPetsAdded}}
          <span>Just added!</span>
        </p>
        <p style=" padding:16px 0px;">Title: {{this.petsUp.background}}</p>
         <div class="container--full" style=" padding-bottom:16px;">
           <div>
        <h4>Created on: </h4>
        <p>{{this.petsUp.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</p>
        </div>
          <div>
        <h4>Debate threshold reached: </h4>
        <p>{{this.petsUp.debate_threshold_reached_at | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</p>
          </div>
            <div>
        <h4>Response threshold reached </h4>
        <p>{{this.petsUp.response_threshold_reached_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
            </div>
        </div>
        <h4>Creator: {{this.petsUp.creator_name }}</h4>
      </div>

      <div class="card" style="text-align:center;">
        <h4>Signature Trends in the Last {{timediff}}</h4>
        <sparkline :indicatorStyles="spIndicatorStyles1">
          <sparklineLine :data="testStat" :limit="30" :styles="spLineStyles1"/>
        </sparkline>
        <div style="height:300px; border:1px solid silver;overflow:auto;display:flex;align-items: center;">
          <div v-if="this.stats.length === 0"
           style="display:flex;font-size:22px;justify-content: center;align-items: center;width:100%"
           > Awaiting Trend Analysis</div>
        <ul
        v-else-if="this.stats.length > 0"
        style="justify-content: center;align-items: center;width:100%">
          <li :class="{'possible--bot': item.count > 1000}" v-for="(item, index) in this.stats" :key="index">
            Another
            <span class="active">{{item.count}}</span> added @
            <span class="alert">{{ item.time | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span>
          </li>
        </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <vue-good-table
        :columns="columnsMP"
        :rows="rows"
        :sort-options="{
    enabled: true,
    initialSortBy: {field: 'signature_count', type: 'desc'}
  }"
        :search-options="{
    enabled: true
    }"
        :pagination-options="{
    enabled: true,
    mode: 'records',
    perPage: 5,
    position: 'top',
    perPageDropdown: [5, 10, 20],
    dropdownAllowAll: false,
    setCurrentPage: 1,
    nextLabel: 'next',
    prevLabel: 'prev',
    rowsPerPageLabel: 'Rows per page',
    ofLabel: 'of',
    pageLabel: 'page', // for 'pages' mode
    allLabel: 'All',
  }"
      ></vue-good-table>
      <vue-good-table
        :columns="columnsSIG"
        :rows="countryCountRows"
        :sort-options="{
    enabled: true,
    initialSortBy: {field: 'signature_count', type: 'desc'}
  }"
        :search-options="{
    enabled: true
    }"
        :pagination-options="{
    enabled: true,
    mode: 'records',
    perPage: 5,
    position: 'top',
    perPageDropdown: [5, 10, 20],
    dropdownAllowAll: false,
    setCurrentPage: 1,
    nextLabel: 'next',
    prevLabel: 'prev',
    rowsPerPageLabel: 'Rows per page',
    ofLabel: 'of',
    pageLabel: 'page', // for 'pages' mode
    allLabel: 'All',
  }"
      ></vue-good-table>
    </div>-->
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
      "https://petition.parliament.uk/petitions.json?state=open";
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
