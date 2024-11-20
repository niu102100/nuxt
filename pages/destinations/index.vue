<template>

  <div class="sct-main" >
			<div class="sct-index-banner">
				<div class="sct-top-banner-container">
					<div class="uk-position-relative uk-light" tabindex="-1" uk-slideshow="ratio: 4:3;autoplay: true;autoplay-interval: 3000;max-height: 600;">
						<ul class="uk-slideshow-items">
							<li>
								<a href="#" title="" target="_blank"><img src="~public/static/img/temp/banner1.jpg" alt="" uk-cover/></a>
							</li>
							<li>
								<a href="#" title="" target="_blank"><img src="~public/static/img/temp/banner2.jpg" alt="" uk-cover/></a>
							</li>
							<li>
								<a href="#" title="" target="_blank"><img src="~public/static/img/temp/banner3.jpg" alt="" uk-cover/></a>
							</li>
						</ul>
						<div class="uk-position-bottom-center uk-position-small">
							<ul class="uk-slideshow-nav uk-dotnav uk-flex-center"></ul>
						</div>
					</div>
				</div>
			</div>
			<!-- map wrap -->
			<div class="uk-section">
				<div class="uk-container sct-map-wrap-container">
					<h2 class="sct-main-heading" >The Most Popular Destinations in China</h2>
					<div class="sct-map-wrap" style="" >
						<!-- map area -->
						<div class="sct-map-inner">
							<img src="~public/static/img/map-example.png" alt="" srcset="" />
						</div>
					</div>
				</div>
			</div>
			<div class="uk-section uk-padding-remove-top">
				<div class="uk-container sct-container">
					<div class="sct-main-content">
						<ul class="sct-width-change uk-child-width-1-3@s" uk-grid>
							<li class="sct-proList-item" v-for="item in destList" :key="item.id">
								<NuxtLink class="uk-card sct-card-2 uk-transition-toggle"
								:to="`/city/${item.name}`" >
									<img class="uk-transition-scale-up uk-transition-opaque" src="~public/static/img/temp/1.jpg" alt="">
									<div class="sct-card-2-overly">
										<span class="sct-cityname" >{{item.name}}</span>
										<p class="sct-spotlist">{{item.desc}}</p>
									</div>
								</NuxtLink>
							</li>

						</ul>
						<div class="sct-btn-border-box uk-margin-top sct-margin-top-large">
							<a class="uk-button sct-btn-default btn-border is-rounded" href="javascript:;">Show More</a>
						</div>
					</div>
				</div>
			</div>

			<div class="uk-section sct-footer-links-section">
				<div class="uk-container sct-footer-links-container">
					<h2 class="sct-main-heading" >China Tour Cities</h2>
					<hr />
					<div class="sct-footer-links-content">
						<ul class="uk-link-text sct-footer-links-list">
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Beijing</a></li>
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Chengdu</a></li>
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Chongqing</a></li>
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Dali</a></li>
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Datong</a></li>
						</ul>
						<ul class="uk-link-text sct-footer-links-list">
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Guilin</a></li>
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Guizhou</a></li>
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Guangzhou</a></li>
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Hangzhou</a></li>
						</ul>
						<ul class="uk-link-text sct-footer-links-list">
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Kunming</a></li>
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Sanya</a></li>
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Shanghai</a></li>
							<li class="sct-footer-links-item"><a class="sct-footer-links-cyties" href="http://" target="_blank">Xi'an</a></li>
						</ul>
					</div>
				</div>
			</div>

		</div>
</template>

<script setup>
import {httpGet} from "@/cusConfig/api.js";


 const destBannerList = ref([])
 const destList = ref([])
 const allTravelCity = ref([]);

//   //声明周期函数去获取数据
  const { data, error } = await httpGet("/getAllDest")
  console.log("目的地数据",data.value.data.list,error)
  destList.value = data.value.data.list;


</script>

<style>

</style>